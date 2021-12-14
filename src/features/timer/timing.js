import React from "react";
import { View, StyleSheet } from "react-native";
import RoundedButton from "../../Components/RoundedButton";

const Timing = (props) => {
  const { onChangeTime } = props;
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={50}
          title={10}
          onPress={() => {
            onChangeTime(10);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={50}
          title={10}
          onPress={() => {
            onChangeTime(10);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={50}
          title={10}
          onPress={() => {
            onChangeTime(10);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});

export default Timing;
