import { View, Pressable, Text, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  APP_SECONDARY,
  BORDER_COLOR_PRIMARY,
  RIPPLE_DEFAULT,
  TEXT_COLOR,
  TEXT_COLOR_BLACK,
} from "../constants/colors";
import { useState } from "react";

export function TodoItem({ item, onCompleted, onEdit, onDelete }) {
  const [isEditing, toggleEditMode] = useState(false);
  const [todoItemText, updateTodoitemText] = useState(item.value);

  const handleEditMode = () => {
    if (isEditing) {
      updateTodoitemText(item.value);
    }
    toggleEditMode(!isEditing);
  };

  const onEditChange = (text) => {
    updateTodoitemText(text);
  };

  const onEditComplete = () => {
    if (todoItemText) {
      onEdit(item.id, todoItemText);
    }
    toggleEditMode(false);
    updateTodoitemText(item.value);
  };

  return (
    <Pressable
      android_ripple={{
        color: RIPPLE_DEFAULT,
      }}
      style={styles.todoItemContainer}
      onPress={() => onCompleted(item.id)}
    >
      <View style={styles.todoItem}>
        <View
          style={{
            ...styles.todoCheck,
            ...(item.isCompleted ? styles.todoCheckCompleted : {}),
          }}
        />
        {isEditing ? (
          <TextInput
            value={todoItemText}
            selectTextOnFocus
            autoFocus
            style={styles.textInput}
            onSubmitEditing={onEditComplete}
            onChangeText={onEditChange}
            placeholder={item.value}
            placeholderTextColor={TEXT_COLOR}
          />
        ) : (
          <Text
            style={{
              ...styles.todoText,
              ...(item.isCompleted ? styles.todoCompleted : {}),
            }}
          >
            {item.value}
          </Text>
        )}
      </View>
      <View style={styles.todoControls}>
        {!item.isCompleted && (
          <Pressable
            android_ripple={{
              color: RIPPLE_DEFAULT,
            }}
            style={styles.edit}
            onPress={(e) => {
              e.stopPropagation();
              handleEditMode();
            }}
          >
            <MaterialIcons name="edit" size={24} color={TEXT_COLOR} />
          </Pressable>
        )}
        <Pressable
          android_ripple={{
            color: RIPPLE_DEFAULT,
          }}
          onPress={(e) => {
            e.stopPropagation();
            onDelete(item.id);
          }}
        >
          <MaterialIcons name="delete" size={24} color={TEXT_COLOR} />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  todoItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    maxWidth: "80%",
    borderColor: BORDER_COLOR_PRIMARY,
    color: TEXT_COLOR,
  },
  todoItem: {
    padding: 8,
    textAlign: "left",
    flexDirection: "row",
    alignItems: "center",
  },
  todoText: {
    color: TEXT_COLOR,
  },
  todoCompleted: {
    textDecorationLine: "line-through",
    textDecorationStyle: "double",
    textDecorationColor: TEXT_COLOR_BLACK,
  },
  todoCheck: {
    width: 20,
    height: 20,
    borderColor: BORDER_COLOR_PRIMARY,
    borderWidth: 1,
    marginRight: 16,
  },
  todoCheckCompleted: {
    backgroundColor: APP_SECONDARY,
  },

  todoControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  edit: {
    marginRight: 8,
  },
});
