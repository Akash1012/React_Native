import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/focus/focus";
import Timer from "./src/features/timer/timer";

const STATUES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  console.log("History", focusHistory);

  const clearSubject = () => {
    addFocusHistorySubjectWithState(focusSubject, STATUES.CANCELLED);

    setFocusSubject(null);
  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUES.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={clearSubject}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    paddingTop: 30,
  },
});

export default App;
