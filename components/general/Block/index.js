/**
 *
 * Block.js
 *
 * Renders a Content Section with styles and props
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexBlock from './Flex';
import GridBlock from './Grid';

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

export class Block extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    flexBasis: PropTypes.string,
    gridSize: PropTypes.string,
    type: PropTypes.string,
    bgImgLink: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const {
      children,
      bgColor,
      bgImgLink,
      flexBasis,
      gridSize,
      type,
      className,
      align,
      justify,
    } = this.props;

    // RENDER CHILDREN

    switch (type) {
      case 'grid':
        return (
          <GridBlock
            bgColor={bgColor}
            bgImgLink={bgImgLink}
            size={gridSize}
            className={className}
          >
            {children}
          </GridBlock>
        );
      case 'flex':
        return (
          <FlexBlock
            bgColor={bgColor}
            bgImgLink={bgImgLink}
            basis={flexBasis}
            className={className}
            align={align}
            justify={justify}
          >
            {children}
          </FlexBlock>
        );
      default:
        return <div />;
    }
  }
}

Block.defaultProps = {
  bgColor: 'neutral',
  bgImgLink: null,
  type: 'flex',
  flexBasis: '100',
  gridSize: 'md',
};

export default Block;
