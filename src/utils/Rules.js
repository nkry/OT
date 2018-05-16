export const breakpoints = {
  a: "480px",
  b: "768px",
  c: "1260px",
  e: "1600px"
};

export const device = {
  mobilePortrait: `(max-width: ${breakpoints.a}) and (orientation: portrait)`,
  mobileLandscape: `(max-width: ${breakpoints.b}) and (orientation: landscape)`,
  tabletPortrait: `(max-width: ${breakpoints.b}) and (min-width: calc(${breakpoints.a} + 1px)) and (orientation: portrait)`
};