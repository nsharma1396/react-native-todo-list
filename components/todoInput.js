import { useState } from "react";
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import {
  BUTTON_BACKGROUND,
  TEXT_COLOR,
  TEXT_INPUT_BORDER,
} from "../constants/colors";

function TodoInput({ onAddItem }) {
  const [todoItem, updateTodoItem] = useState("");
  const handleInputChange = (text) => {
    updateTodoItem(text);
  };
  const handleAddItem = () => {
    if (todoItem) {
      onAddItem(todoItem);
      updateTodoItem("");
    }
  };
  return (
    <View style={styles.todoInputContainer}>
      <TextInput
        value={todoItem}
        selectTextOnFocus
        style={styles.textInput}
        onChangeText={handleInputChange}
        placeholder="Add a to do item"
        placeholderTextColor={TEXT_COLOR}
      />
      <Pressable
        android_ripple={{
          color: "B1B2AA",
        }}
        onPress={handleAddItem}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add item</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    marginRight: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderColor: TEXT_INPUT_BORDER,
  },
  button: {
    backgroundColor: BUTTON_BACKGROUND,
    padding: 8,
  },
  buttonText: {
    color: TEXT_COLOR,
  },
});

export default TodoInput;
