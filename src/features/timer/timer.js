import React, { useState } from "react";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import CountDown from "../../Components/CountDown/CountDown";
import RoundedButton from "../../Components/RoundedButton";
import { View, StyleSheet, Text, Platform, Vibration } from "react-native";
import Timing from "./timing";

const Timer = (props) => {
  useKeepAwake();
  const { focusSubject, onTimerEnd, clearSubject } = props;
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const onEnd = () => {
    vibrate();
    setMinutes(1);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => {}, 1000);

      setTimeout(() => clearInterval(interval), 5000);
    } else {
      Vibration.vibrate(1000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
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

      <View style={styles.clearSubject}>
        <RoundedButton
          title="-"
          size={50}
          onPress={() => {
            clearSubject();
          }}
        />
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
    flex: 0.1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  clearSubject: {
    paddingTop: 25,
    paddingLeft: 25,
  },
});

export default Timer;
