import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import tw from "../utils/libs/twrnc";
import TextWithFormatted from "@components/TextWithFormatted"

interface SuggestionCardProps {
    title: string;
    image: ImageSourcePropType;
}

export function SuggestionCard({ title, image }: SuggestionCardProps): React.JSX.Element {
    return (
        <View style={tw`flex gap-x-3 items-center flex-row h-20 overflow-hidden rounded-md w-[47%] bg-spotify_gray`}>
            <Image source={image}
                style={tw`w-20 h-20 rounded-md`}
            />
            <TextWithFormatted style={tw`text-[1rem] text-white`}>
                {title}
            </TextWithFormatted>
        </View>
    )
}

const options = [
    {
        title: "DJ",
        image: require('@assets/images/dj.png')
    },
    {
        title: "ái",
        image: require('@assets/images/tlinh.jpeg')
    },
    {
        title: "Liked Songs",
        image: require('@assets/images/liked.png')
    },
    {
        title: "99%",
        image: require('@assets/images/mck.jpeg')
    },
    {
        title: "ltinh",
        image: require('@assets/images/tlinh2.jpeg')
    },
    {
        title: "OXO",
        image: require('@assets/images/oxo.jpeg')
    },
]

export default function PlaySuggestion(): React.JSX.Element {
    return (
        <View style={tw`mt-6 flex justify-center flex-row flex-wrap gap-3`}>
            {options.map((option, index) => (
                <SuggestionCard key={index} title={option.title} image={option.image} />
            ))}
        </View>
    )
}
