import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {horizontalScale, verticalScale} from '../../styles/scaling';

type ImageWithGlowProps = {
  image: number;
  size?: 'sm' | 'md' | 'lg';
};

export const ImageWithGlow = ({image, size}: ImageWithGlowProps) => {
  const glowImage = require('../../assets/images/green_glow.png');

  const getSize = () => {
    switch (size) {
      case 'sm':
        return {
          height: verticalScale(110),
          width: horizontalScale(120),
        };
      case 'md':
        return {
          height: verticalScale(150),
          width: horizontalScale(150),
        };
      case 'lg':
        return {
          height: verticalScale(190),
          width: horizontalScale(190),
        };
      default:
        return {
          height: verticalScale(150),
          width: horizontalScale(150),
        };
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={[styles.image, getSize()]} />
      <Image source={glowImage} style={styles.glowStyles} />
    </View>
  );
};
