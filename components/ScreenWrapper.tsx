import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type PropsType = {
  children: ReactNode;
  bg: string;
};

const ScreenWrapper = ({ children, bg }: PropsType) => {
  const { top } = useSafeAreaInsets();
  const pt: number = top > 0 ? top + 5 : 30;
  return (
    <View style={{ flex: 1, paddingTop: pt, backgroundColor: bg }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
