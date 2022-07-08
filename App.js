import React from 'react';
import { Text, StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';

export default App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.textTitle}>this is shit</Text>
        <TextInput selectionColor={'black'} style={styles.textInput}></TextInput>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    fontFamily:"Poppins Regular 400"
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 300,
    padding: 0,
    alignItems: "center",
    textAlign: "center",
    left: 50,
    fontSize: 20,
    fontFamily:"Poppins Regular 400",
    cursorColor: "black",
  }
})
