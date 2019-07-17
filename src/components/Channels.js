import React from "react";
import { View, StyleSheet } from "react-native";

import Thumbnails from "./Thumbnails";
import CircularSelection from "./CircularSelection";

export default ({ channels }) => {
  return (
    <View style={styles.container}>
      <Thumbnails {...{ channels }} />
      <CircularSelection {...{ channels }} />
    </View>
  );
};
