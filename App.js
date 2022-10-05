import { useState } from "react";
import { StyleSheet, View, StatusBar as RNStatusBar, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import { TEXT_COLOR } from "./constants/colors";

export default function App() {
  const [todoList, updateTodoList] = useState([]);
  const onAddItem = (newItem) => {
    const newTodoItem = {
      id: Date.now(),
      value: newItem,
      isCompleted: false,
    };
    updateTodoList([...todoList, newTodoItem]);
  };

  const onCompleted = (itemId) => {
    const updatedTodoList = todoList.map(({ isCompleted, ...todoItem }) => ({
      ...todoItem,
      isCompleted: itemId === todoItem.id ? !isCompleted : isCompleted,
    }));
    updateTodoList(updatedTodoList);
  };

  const onEdit = (itemId, value) => {
    const updatedTodoList = todoList.map((todoItem) => ({
      ...todoItem,
      value: itemId === todoItem.id ? value : todoItem.value,
    }));
    updateTodoList(updatedTodoList);
  };

  const onDelete = (itemId) => {
    const updatedTodoList = todoList.filter(({ id }) => itemId !== id);
    updateTodoList(updatedTodoList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appHeader}>To-Do Tracker</Text>
      <TodoInput onAddItem={onAddItem} />
      <TodoList
        todoList={todoList}
        onCompleted={onCompleted}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <StatusBar style="light" networkActivityIndicatorVisible />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: RNStatusBar.currentHeight + 32,
    alignItems: "center",
    // justifyContent: "center",
  },
  appHeader: {
    textAlign: "left",
    fontSize: 24,
    color: TEXT_COLOR,
    marginBottom: 32,
  },
});
