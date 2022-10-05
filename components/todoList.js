import { View, StyleSheet, Text, FlatList } from "react-native";
import { TEXT_COLOR } from "../constants/colors";
import { TodoItem } from "./todoItem";

function TodoList({ todoList, onCompleted, onEdit, onDelete }) {
  return (
    <View style={styles.todoListContainer}>
      <FlatList
        data={todoList}
        keyExtractor={({ id }) => id}
        ListEmptyComponent={(props) => {
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
    </View>
  );
}

const styles = StyleSheet.create({
  todoListContainer: {
    width: "80%",
    margin: 32,
  },
  todoText: {
    color: TEXT_COLOR,
  },
});

export default TodoList;
