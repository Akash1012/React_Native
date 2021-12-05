import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/focus/focus";

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where Im going to build a time</Text>
      ) : (
        <Focus />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});

export default App;
