import { View, Text } from 'react-native'
import React from 'react'
import BatTextInput from '../../components/BatTextInput/BatTextInput'
interface FormProps {
    label: string;
    placeholder: string;
    type: string;
}

const textForm:FormProps[] = [
    {
        label: 'Name',
        placeholder: 'Enter your name',
        type: 'text'
    },
    {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email'
    },
    {
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'password'
    }
]

export default function Forms() {
  return (
    <View>
        <Text>Forms</Text>
        {textForm.map((item, index) => {
            return (
                <BatTextInput
                    key={index}
                    label={item.label}
                    placeholder={item.placeholder}
                    type={item.type}
                />
            )
        })}
    </View>
  )
}