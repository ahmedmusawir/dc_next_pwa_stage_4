/**
 *
 * FlexBlock.js
 *
 * Renders a Content Section with flexbox item, styles and props
 */

import styled from 'styled-components';

const getBackground = props => {
  let bgColor;
  const themeBgColor = props.theme.palette.background;

  if (props.bgImgLink) {
    bgColor = `url(${props.bgImgLink})`;
  } else if (props.bgColor === 'dark') {
    bgColor = themeBgColor.dark;
  } else if (props.bgColor === 'light') {
    bgColor = themeBgColor.light;
  } else if (props.bgColor === 'grey') {
    bgColor = themeBgColor.grey;
  } else if (props.bgColor === 'dimgray') {
    bgColor = themeBgColor.dimgray;
  } else if (props.bgColor === 'gradient') {
    bgColor = themeBgColor.gradient;
  } else {
    bgColor = themeBgColor.neutral;
  }
  return bgColor;
};

const FlexBlock = styled.div`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  flex-basis: ${props => props.basis + '%'};

  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
`;

FlexBlock.defaultProps = {
  align: 'center',
  justify: 'center',
};

export default FlexBlock;
