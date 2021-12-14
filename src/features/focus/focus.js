import React, { useState } from "react";
import {fontSizes,paddingSizes} from '../../utils/sizes'

import { StyleSheet, Text, View, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../Components/RoundedButton";

const Focus = (props) => {
  const {addSubject} = props
  const [tempItem,setTempItem] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What woulssssd you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: 10 }} 

          onSubmitEditing={({nativeEvent}) => {
            setTempItem(nativeEvent.text)
            }
          }
          />
          <RoundedButton title="+" size={50} onPress={() => {
           addSubject(tempItem)
          }}/>
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
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems:'center'
  },
});

export default Focus;
