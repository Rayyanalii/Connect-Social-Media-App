import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { hp, wp } from "@/helper/common";

const Welcome = () => {
  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    marginHorizontal: wp(10),
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
  },
});
