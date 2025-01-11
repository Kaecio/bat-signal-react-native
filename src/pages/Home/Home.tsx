import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'
import { styles } from './styles'
import BatButton from '../../components/BatButton/BatButton';
import Forms from '../Forms/Forms';

export default function Home() {
const [showForm, setShowForm] = useState(false)

  function handleShowForm() {
    console.log('show form')
    setShowForm(true)
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View>
      </View>
      {showForm ? <Forms /> : <BatButton text='Ativate Bat Signal' onPress={handleShowForm} />
    }
      <StatusBar style="auto" />
    </View>
  )
}