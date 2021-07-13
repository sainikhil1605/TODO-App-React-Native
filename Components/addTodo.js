import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, Button, TextInput, PanResponder, ScrollView, TouchableOpacity } from 'react-native';
export default function AddToDo({ submitHandler }) {
    const [text, setText] = useState("");
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput style={styles.input} placeholder="New Todo ..." onChangeText={changeHandler} />
            <Button color="coral" title="Add To Do" onPress={() => submitHandler(text)} />
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    }
})