import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../styles";

const Card: React.FC<{
  title: string;
  image: string;
}> = ({ title, image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.cardThumb} />
      <Text
        style={styles.cardTitle}>
        {title}
      </Text>
    </View>
  );
};

export default Card;
