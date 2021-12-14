import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/focus/focus";
import Timer from "./src/features/timer/timer";

const App = () => {
  const [focusSubject, setFocusSubject] = useState('true');
  console.log("focusSubject--", focusSubject);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
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
    paddingTop: 30
  },
});

export default App;
