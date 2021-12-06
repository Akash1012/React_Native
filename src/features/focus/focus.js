import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../Components/RoundedButton";

const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What woulssssd you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: 10 }} />
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: Platform.OS === "android" ? 16 : 50,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    paddingTop: 15,
    flexDirection: "row",
  },
});

export default Focus;
