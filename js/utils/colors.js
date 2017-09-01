import * as colors from '../colors';

export function getColor({ color, error, warning, success, info, white, darkGray, lightGray, labelGray, borderGray, label, disabled }, keep) {
  let finalColor = color || keep || colors.textGray;
  if (!color && error) finalColor = colors.red;
  if (!color && warning) finalColor = colors.orange;
  if (!color && success) finalColor = colors.green;
  if (!color && info) finalColor = colors.blue;
  if (!color && white) finalColor = colors.white;
  if (!color && darkGray) finalColor = colors.darkGray;
  if (!color && lightGray) finalColor = colors.lightGray;
  if (!color && labelGray) finalColor = colors.labelGray;
  if (!color && borderGray) finalColor = colors.borderGray;
  if (!color && label) finalColor = colors.labelGray;
  if (disabled) finalColor = colors.borderGray;
  return finalColor || keep;
}
