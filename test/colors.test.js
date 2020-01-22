import extension from "../src/index";
import { Color } from "@zeplin/extension-model";

// Load testing data
import colorsBasic from "./data/basic";
import colorsVariants from "./data/variants";

function makeContext(colors) {
  const context = { project: { colors: colors.map(color => new Color(color)) } };
  return context;
}

test("it returns correct config with simple color names", () => {
  const result = extension.colors(makeContext(colorsBasic));
  expect(result.code).toBe(`colors: {
  "red": "#ff0000",
  "green": "#00ff00",
  "blue": "#0000ff"
}`);
});

test("it returns correct config with color names with variants", () => {
  const result = extension.colors(makeContext(colorsVariants));
  expect(result.code).toBe(`colors: {
  "red": {
    "200": "#c80000",
    "500": "#ff0000"
  },
  "green": "#00ff00",
  "blue": "#0000ff",
  "gray": {
    "400": "#7d7d7d"
  }
}`);
});
