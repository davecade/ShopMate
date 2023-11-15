import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

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
          height: 110,
          width: 120,
        };
      case 'md':
        return {
          height: 150,
          width: 150,
        };
      case 'lg':
        return {
          height: 190,
          width: 190,
        };
      default:
        return {
          height: 150,
          width: 150,
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
