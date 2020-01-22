function colors(context) {
  const colors = context.project.colors.reduce((acc, color) => {
    if (!color.name.match(/(\d{2,3})$/)) {
      // color name without digits at the end (e.g. black)
      acc[color.name] = `#${color.hexBase()}`;
    } else {
      // color name with 2-3 digits at the end (e.g. gray30 or gray300 or gray-300)
      const [, name, variant] = /([a-zA-Z]*)-{0,1}(\d{1,3})$/.exec(color.name);
      if (!acc[name]) {
        acc[name] = {};
      } else if (typeof acc[name] === "string") {
        // there is already a default color with the same name
        acc[name] = { "500": acc[name] };
      }
      acc[name][variant.toString()] = `#${color.hexBase()}`;
    }
    return acc;
  }, {});

  return {
    code: `colors: ${JSON.stringify(colors, null, 2)}`,
    language: "javascript"
  };
}

function exportColors(context) {
  return {
    code: `module.exports = {
      theme: {
        ${colors(context).code}
        extend: {},
      },
      variants: {},
      plugins: [],
    }`,
    filename: "tailwind.config.js",
    language: "javascript"
  };
}

export default {
  colors,
  exportColors
};
