import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const minutesToMills = (min) => min * 1000 * 60;

const formatTime = (time) => (time < 10 ? `0${time}` : time);

let count = 0;
const CountDown = (props) => {
  const { minutes = 20, isPaused, onProgress, onEnd } = props;
  const [millis, setMillis] = useState(null);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  const interval = React.useRef(null);

  useEffect(() => {
    setMillis(minutesToMills(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // do more stuff
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000; // 1 second
      // report the progress
      return timeLeft;
    });
  };

  useEffect(() => {
    const pg = millis / minutesToMills(minutes);
    onProgress(pg);

    if (millis === 0) {
      onEnd();
    }
  }, [millis]);

  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    fontWeight: "bold",
    padding: 20,
    color: "#fff",
    backgroundColor: "red",
  },
});
