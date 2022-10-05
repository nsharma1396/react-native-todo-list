import { useRef, useState } from "react";
import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import {
  APP_SECONDARY,
  TEXT_COLOR,
  BORDER_COLOR_PRIMARY,
} from "../constants/colors";

function TodoInput({ onAddItem }) {
  const textInput = useRef();
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
        ref={textInput}
        value={todoItem}
        selectTextOnFocus
        style={styles.textInput}
        onSubmitEditing={handleAddItem}
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
    borderColor: BORDER_COLOR_PRIMARY,
    color: TEXT_COLOR,
  },
  button: {
    backgroundColor: APP_SECONDARY,
    padding: 8,
  },
  buttonText: {
    color: TEXT_COLOR,
  },
});

export default TodoInput;
