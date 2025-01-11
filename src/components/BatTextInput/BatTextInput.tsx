import { View, TextInput } from 'react-native'
import React from 'react'

export default function BatTextInput() {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          margin: 10,
          padding: 10,
        }}
        placeholder="Type here to translate!"
        />
    </View>
  )
}