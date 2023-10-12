import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {ImageWithGlow} from '../../components/ImageWithGlow/ImageWithGlow';

type DashboardViewProps = {
  onCreateList: () => void;
  image: number;
};

export const DashboardView = ({onCreateList, image}: DashboardViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.shoppingTitle}>Your shopping Lists</Text>
      <View>
        <View style={styles.imageContainer}>
          <ImageWithGlow image={image} />
        </View>
        <Text style={styles.emptyText}>
          You have not added any shopping lists
        </Text>
        <Text style={styles.emptyText}>
          Tap the button below to create one now
        </Text>
        <View style={styles.buttonContainer}>
          <Button text={'+ Create'} onPress={onCreateList} type="primary" />
        </View>
      </View>
    </View>
  );
};
