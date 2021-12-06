import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RoundedButton = (props) => {
  const { style = {}, textStyle = {}, size = 125, title } = props;
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{title} </Text>
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
      borderColor: "#ffff",
      borderWidth: 2,
    },
    text: {
      color: "#ffff",
      fontSize: size / 3,
      paddingTop: 11,
      paddingLeft: 3,
    },
  });

export default RoundedButton;
