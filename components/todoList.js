import { View, StyleSheet, Text, FlatList } from "react-native";
import { TEXT_COLOR } from "../constants/colors";
import { TodoItem } from "./todoItem";

function TodoList({ todoList, onCompleted, onEdit, onDelete }) {
  return (
    <FlatList
      data={todoList}
      scrollEnabled
      style={styles.todoListContainer}
      keyExtractor={({ id }) => id}
      ListEmptyComponent={() => {
        return <Text style={styles.todoText}>No items added yet</Text>;
      }}
      renderItem={({ item }) => (
        <TodoItem
          item={item}
          onCompleted={onCompleted}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  todoListContainer: {
    width: "100%",
    margin: 32,
    paddingHorizontal: "10%",
  },
  todoText: {
    color: TEXT_COLOR,
  },
});

export default TodoList;
