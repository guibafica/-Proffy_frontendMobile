import React from 'react';
import { View, Image } from 'react-native';

import landingImage from '../../assets/images/landing.png';

import styles from './styles';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />
    </View>
  );
}

export default Landing;
