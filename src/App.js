import React from 'react'
import {View, ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function App () {
  const [count, setCount] = React.useState(0)

  const onPressIncrement = () => {
    setCount(count + 1)
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.text}>Hello world!</Text>
      <Text style={styles.text}>The count is {count}</Text>
      <TouchableOpacity onPress={onPressIncrement}>
        <View style={styles.button}>
          <Text style={styles.text}>Increment</Text>
        </View>
      </TouchableOpacity>
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
    alignItems: 'flex-start'
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
  }
})