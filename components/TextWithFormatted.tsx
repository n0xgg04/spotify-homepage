
import styled from 'styled-components/native';
import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';

interface Texts {
    children: string;
    style: StyleProp<TextStyle>;
}

export default function TextWithFormatted({ children, style }: Texts): React.JSX.Element {
    return (
        <React.Fragment>
            <Text style={
                {
                    fontFamily: "CircularRegular",
                    ...(style as object)
                }
            }>
                {children}
            </Text>
        </React.Fragment>
    )
}

export function TextBold({ children, style }: Texts): React.JSX.Element {
    return (
        <React.Fragment>
            <Text style={
                {
                    fontFamily: "CircularBold",
                    ...(style as object)
                }
            }>
                {children}
            </Text>
        </React.Fragment>
    )
}
