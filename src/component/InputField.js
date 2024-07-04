import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'


const InputField = ({placeholder, styleInput, textColor}) => {
  return (
    <View >
       <TextInput 
        placeholder={placeholder}
        placeholderTextColor={textColor}
        style={[styles.inputBox ,styleInput]}
       />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputBox:{
        width:263,
        height:45,
        marginTop:20,
        borderRadius:4,
        paddingHorizontal:10,

    }
})