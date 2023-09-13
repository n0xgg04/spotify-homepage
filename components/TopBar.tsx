import { View } from "react-native";
import tw from "../utils/libs/twrnc";
import Icon from "react-native-vector-icons/Octicons";
import { Text as OriginText } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

export default function TopBar() {

    const Text = React.useMemo(
        () => styled(OriginText)`
      font-family: CircularBold;
    `,
        [])

    const TextRegular = React.useMemo(
        () => styled(OriginText)`
      font-family: CircularRegular;
    `,
        []
    );

    const optionsTop = ["Today", "Postcasts & Shows", "Audiobooks"];

    return (
        <View style={tw`mt-15 flex flex-col`}>
            <View style={tw`flex flex-row items-center justify-between w-full px-3`}>
                <Text style={tw`text-white text-[2rem]`}>Good morning</Text>
                <View style={tw`flex flex-row items-center gap-x-5`}>
                    <Icon name="bell" size={25} color="#fff" />
                    <Icon name="clock" size={25} color="#fff" />
                    <Icon name="gear" size={25} color="#fff" />
                </View>
            </View>
            <ScrollView style={tw`flex flex-row mt-10 px-2 gap-2`} horizontal={true}>
                {optionsTop.map((option, index) => (
                    <TextRegular
                        key={index}
                        style={tw`px-5 ml-2 py-3 rounded-full text-white text-[1rem] bg-spotify_gray`}
                    >
                        {option}
                    </TextRegular>
                ))}
            </ScrollView>
        </View>
    );
}
