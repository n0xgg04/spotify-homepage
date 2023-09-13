import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { useDeviceContext } from "twrnc";
import tw from "./utils/libs/twrnc";
import { ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import TopBar from "@components/TopBar";
import PlaySuggestion from "@components/PlaySuggestion";
import PickedForYou from "@components/PickedForYou";
import BottomNavigation from "@components/BottomNavigation";

export default function App() {
  //async load font
  useDeviceContext(tw);
  const [loaded] = useFonts({
    CircularBold: require("./assets/fonts/Circular/CircularStd-Bold.otf"),
    CircularRegular: require("./assets/fonts/Circular/CircularStd-Book.otf"),
  });

  if (!loaded) {
    return null;
  }

  const { width, height } = Dimensions.get("window");

  return (
    <React.Fragment>
      <StatusBar style="light" translucent />
      <ScrollView style={tw`relative bg-primary h-[${height}px] w-full px-1`}>
        <TopBar />
        <PlaySuggestion />
        <PickedForYou />
      </ScrollView>
      <BottomNavigation />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
