import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

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
    alignItems: "center",
    justifyContent: "center",
  },
});
