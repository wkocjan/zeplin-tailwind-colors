# Zeplin Extension for Tailwind CSS - Colors

Simple [Zeplin](https://zeplin.io) extension to generate colors section in [Tailwind CSS](https://tailwindcss.com/) config file format.

It's compatible with Tailwind CSS 1.x.x version. The plugin is inspired by much more complex [Tailwind Zeplin Extension](https://github.com/morrislaptop/tailwind-zeplin-extension) which unfortunately is no longer maintained and still uses the old 0.x syntax.

## Usage

Install the extension in Zeplin and then add some colors to the palette.

You can use single names like `red` and `green` or add multiple variants, e.g. `red-100` or `red900`

### Sample output

```
colors: {
  "red": {
    "200": "#c80000",
    "500": "#ff0000"
  },
  "green": "#00ff00",
  "blue": "#0000ff",
  "gray": {
    "400": "#7d7d7d"
  }
}`
```

## Development

This extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create, test and publish extensions.

### Testing

Use `npm run test` to run tests.

You can also use `npm run exec -- colors` to execute colors function with sample data.
