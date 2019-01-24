/**
 *
 * FlexSection.js
 *
 * Renders a Flexbox Content Section with styles and props
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

const getHeight = props => {
  let height;

  if (props.height === 'md') {
    height = '30rem';
  } else if (props.height === 'lg') {
    height = '50rem';
  } else {
    height = props.height;
  }
  return height;
};

const FlexSection = styled.section`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  height: ${props => getHeight(props)};
  min-height: 30rem;

  @media screen and (min-width: ${props => props.gridStart}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
  }
`;

FlexSection.defaultProps = {
  gridStart: '991px',
  align: 'stretch',
  justify: 'center',
};

export default FlexSection;
