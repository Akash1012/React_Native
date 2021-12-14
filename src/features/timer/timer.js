import React, { useState } from "react";
import { ProgressBar } from "react-native-paper";
import CountDown from "../../Components/CountDown/CountDown";
import RoundedButton from "../../Components/RoundedButton";
import { View, StyleSheet, Text, Platform } from "react-native";
import Timing from './timing'

const Timer = (props) => {
  const { focusSubject } = props;
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    console.log('min',min)
    setMinutes(min);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
        />
      </View>
      <View style={styles.focus}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>Timer Goes Here : {focusSubject}</Text>
      </View>
      <View>
        <ProgressBar
          progress={progress}
          color="purple"
          style={{ height: 10 }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
          title="Stop"
          size={50}
          onPress={() => {
            setIsStarted(false);
          }}
        />
        ) : (
          <RoundedButton
            title="Start"
            size={50}
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  focus: {
    padding: Platform.OS === "android" ? 60 : 50,
  },
  title: {
    color: "#ffff",
    textAlign: "center",
  },
  task: {
    color: "#ffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  countdown: {
    flex: 0.5, // height
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
      flex:0.1,
      padding:15,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
  }
});

export default Timer;
