import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, Button, TextInput, PanResponder, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./Components/Header"
import TodoItem from './Components/TodoItem';
import AddToDo from './Components/addTodo';
import Sandbox from './Components/sandbox';
import { MaterialIcons } from "@expo/vector-icons";
export default function App() {

  // Alert.alert('oops!', "Ok", [{ text: "Understood" }])
  const [todos, setTodos] = useState([{ todo: "Buy Coffee", key: "1" }, { todo: "Create An APP", key: "2" }, { todo: "Play on the Switch", key: "3" }, { todo: "Ok1", key: "4" }, { todo: "Ok1", key: "5" }])
  const pressHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter(todo => todo.key !== id);
    })
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevState) => {
        return ([
          { todo: text, key: Math.random().toString() },
          ...prevState,

        ])
      })
    }
    else {
      Alert.alert("OOPS...", "Should Be greater than length 3", [
        { text: "Understood" }
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>

      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Header />
          <View style={styles.content}>
            <View style={styles.list}>
              <AddToDo submitHandler={submitHandler} />

              <FlatList data={todos} renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )
              } />

            </View>
          </View>
        </ScrollView>
      </View >

    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",

  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 40,
  },
  text: {
    color: "red",
    padding: "10 %",
    margin: 20,
    backgroundColor: "pink"

  }
});
