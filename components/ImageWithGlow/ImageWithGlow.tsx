import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

type ImageWithGlowProps = {
  image: number;
};

export const ImageWithGlow = ({image}: ImageWithGlowProps) => {
  const glowImage = require('../../assets/images/green_glow.png');
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Image source={glowImage} style={styles.glowStyles} />
    </View>
  );
};
