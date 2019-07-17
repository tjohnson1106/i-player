import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ChannelIcon from "./ChannelIcon";

const width = Dimensions.get("window");
const height = width / 1.4;
const D = width * 1.2;
const innerR = D / 2;

export default ({ channels }) => {
  const { length } = channels;
  const a = Math.sin(Math.PI / length);
  const r = (innerR * a) / (1 - a);
  const R = innerR + 2 * r;
  const cx = width / 2;
  const cy = R - r;
  return (
    <View style={styles.root}>
      <LinearGradient
        style={{
          ...StyleSheet.absoluteFillObject,
          borderRadius: R,
          width: R * 2,
          height: R * 2,
          left: -(R - width / 2)
        }}
        colors={["#353637", "#161819", "#161819"]}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject
        }}
      >
        {channels.map((_, key) => {
          return (
            <View>
              {...{ key }}
              style=
              {{
                position: "absolute",
                top: 0,
                left: 0,
                transform: [
                  {
                    translateX: cx
                  },
                  { translateY: cy },
                  { rotateZ: `${key * ((2 * Math.PI) / length)}rad` },
                  { translateY: -cy }
                ]
              }}
              <ChannelIcon name={`${key + 1}`} radius={r} currentIndex={key} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width,
    height
  }
});
