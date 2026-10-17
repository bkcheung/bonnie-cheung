// Shared sizing for the footer's home and help icons
const FOOTER_ICON_PX = 24;

// Both icons are drawn in a 24-unit viewBox with their strokes reaching to
// 1.125 units from each edge, so a little empty space sits inside each SVG
const ICON_INSET_UNITS = 1.125;

// Pixels of that empty space on the two facing sides of adjacent icons; taken
// off the flex gap so the *visible* gap equals the footer gutter
const FOOTER_ICON_INSET_PX = (2 * ICON_INSET_UNITS * FOOTER_ICON_PX) / 24;

export { FOOTER_ICON_INSET_PX, FOOTER_ICON_PX };
