import React from 'react';

import DokaIcon from '../DokaIcon';
import { getColor } from '../utils/colors';

export default function Icon({ name, size, small, large, xlarge, style, ...props }) {
  let finalSize = size || 26;
  if (!size && small) finalSize = 18;
  if (!size && large) finalSize = 44;
  if (!size && xlarge) finalSize = 66;

  const finalColor = getColor(props);

  return <DokaIcon name={name} size={finalSize} color={finalColor} style={style} />;
}
