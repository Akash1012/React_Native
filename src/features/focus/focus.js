import React, { useState } from "react";
import { fontSizes, paddingSizes } from "../../utils/sizes";

import { StyleSheet, Text, View, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../Components/RoundedButton";

const Focus = (props) => {
  const { addSubject } = props;
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 10 }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            title="+"
            style={styles.text}
            size={50}
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  text: {
    borderColor: "green",
    borderRadius: 50 / 4,
  },

  titleContainer: {
    flex: 1,
    padding: Platform.OS === "android" ? 16 : 50,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Focus;
