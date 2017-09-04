import * as colors from '../colors';

export function getColor({ color, error, warning, success, info, white, darkGray, lightGray, labelGray, borderGray, label, disabled }, keep) {
  let finalColor = color || keep || colors.textGray;
  if (!color && label) finalColor = colors.labelGray;
  if (!color && error) finalColor = colors.red;
  if (!color && warning) finalColor = colors.orange;
  if (!color && success) finalColor = colors.green;
  if (!color && info) finalColor = colors.blue;
  if (!color && white) finalColor = colors.white;
  if (!color && darkGray) finalColor = colors.darkGray;
  if (!color && lightGray) finalColor = colors.lightGray;
  if (!color && labelGray) finalColor = colors.labelGray;
  if (!color && borderGray) finalColor = colors.borderGray;
  if (disabled) finalColor = colors.borderGray;
  return finalColor || keep;
}


export function lightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}
