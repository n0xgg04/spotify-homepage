import { View, Text } from "react-native"
import React from "react"
import tw from "../utils/libs/twrnc"
import Icon from "react-native-vector-icons/Octicons"
import TextWithFormatted from "@components/TextWithFormatted"

interface iIcons {
    title: string;
    icon: React.JSX.Element
}

const icons: iIcons[] = [
    {
        title: "Home",
        icon: <Icon name="home" size={30} color="#fff" />
    },
    {
        title: "Search",
        icon: <Icon name="search" size={30} color="#fff" />
    },
    {
        title: "Your Library",
        icon: <Icon name="book" size={30} color="#fff" />
    },
]
export default function BottomNavigation() {
    return (
        <View style={tw`absolute bottom-0 right-0 w-full flex flex-row justify-evenly bg-primary px-5 mb-3`}>
            {icons.map((icon, index) => (
                <View key={index} style={tw`flex flex-col gap-y-1 justify-center items-center`}>
                    {icon.icon}
                    <TextWithFormatted style={tw`text-white text-center`}>Home</TextWithFormatted>
                </View>
            ))}
        </View>
    )
}