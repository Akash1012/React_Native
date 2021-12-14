import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RoundedButton = (props) => {
  const { style = {}, textStyle = {}, size = 125, title ,onPress} = props;
  return (
    <TouchableOpacity onPress = {onPress} style={[styles(size).radius, style]}>
      <Text  style={[styles(size).text, textStyle]}>{title} </Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      borderColor: "red",
      borderWidth: 2,
    },
    text: {
      color: "#ffff",
      fontWeight:'bold',
      fontSize: size / 3,
      paddingTop: 11,
      paddingLeft: 3,
    },
  });

export default RoundedButton;
