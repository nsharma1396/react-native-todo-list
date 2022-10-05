import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import TodoInput from "./components/todoInput";

export default function App() {
  const [todoList, updateTodoList] = useState([]);
  const onAddItem = (newItem) => {
    updateTodoList([
      ...todoList,
      {
        id: Date.now(),
        value: newItem,
        isCompleted: false,
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TodoInput onAddItem={onAddItem} />
      <StatusBar style="light" networkActivityIndicatorVisible />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
