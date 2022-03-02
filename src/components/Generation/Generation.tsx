import { Image, Text, View } from "react-native";
import React, { FC } from "react";
import LinearGradient from "react-native-linear-gradient";
import styles, { gradients } from "./styles";
import images from "../../assets/images";

import { LinearTextGradient } from "react-native-text-gradient";

interface Props {
  number: number;
}

const Generation: FC<Props> = ({ number }) => {
  return (
    <View style={styles.generation}>
      <LinearGradient
        style={styles.generation__backgroundGradient}
        colors={gradients.backgrounds[number - 1]}
      />

      <Image
        style={styles.generation__pokemon}
        source={images.generations[number - 1]}
      />

      <View style={styles.generation__info}>
        <LinearTextGradient
          locations={[0, 1]}
          colors={gradients.text[number - 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.generation__text}>GEN</Text>

          <Text style={styles.generation__number}>{number}</Text>
        </LinearTextGradient>
      </View>
    </View>
  );
};

export default Generation;
