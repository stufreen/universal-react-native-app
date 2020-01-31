import React from 'react'
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'

export default function App () {
  const [count, setCount] = React.useState(0)

  const onPressIncrement = () => {
    setCount(count + 1)
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <SafeAreaView>
        <Text style={styles.text}>Hello Compass!</Text>
        <Text style={styles.text}>The count is {count}</Text>
        <TouchableOpacity onPress={onPressIncrement}>
          <View style={styles.button}>
            <Text style={styles.text}>Increment</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    height: 2000,
    backgroundColor: '#112233',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 24
  },
  button: {
    backgroundColor: '#445588',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'flex-start'
  }
})