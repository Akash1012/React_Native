import React from "react";
import RoundedButton from "../../Components/RoundedButton";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";

const FocusHistory = (props) => {
  const { focusHistory, onClear } = props;

  const HistoryItem = ({ item, index }) => {
    return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
  };

  const ClearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {focusHistory.length ? (
          <>
            <Text style={styles.title}>Things we've focuse on</Text>

            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory} // Array
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={50}
                title="Clear"
                onPress={() => {
                  ClearHistory();
                }}
              />
            </View>
          </>
        ) : null}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: 20,
  }),
  title: {
    color: "white",
    fontSize: 30,
  },
  clearContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default FocusHistory;
