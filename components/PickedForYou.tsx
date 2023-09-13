import React from "react"
import { TextBold as Text } from "@components/TextWithFormatted"
import tw from "../utils/libs/twrnc";
import { View, Image } from "react-native";

export default function PickedForYou(): React.JSX.Element {
    return (
        <React.Fragment>
            <Text style={tw`text-white text-[1.7rem] mt-6`}>Picked for you</Text>
            <View style={tw`mt-6 h-48 overflow-hidden items-center flex flex-row w-full bg-spotify_gray rounded-lg`}>
                <Image source={require('@assets/images/overtired.jpeg')}
                    style={tw`w-full aspect-square h-full max-w-[50%] `}
                />
                <View style={tw`flex flex-col justify-center items-start px-3 w-full max-w-[50%]`}>
                    <Text style={tw`text-white text-[1.5rem]`}>Overtired</Text>
                </View>
            </View>
        </React.Fragment>
    )
}