import { StyleSheet, Text, TouchableOpacity, View ,} from 'react-native'
import React from 'react'


const CustomBtn = ({stylebtn, styleText, title, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, stylebtn]} onPress={onPress}>
       <Text style={[styles.BtnText , styleText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:62,
        borderRadius:6,
        backgroundColor:'#F8CE58',
        alignItems:'center',
        justifyContent:'center'
    },
    BtnText:{
      fontSize:11,
     fontWeight:"900",
     lineHeight:12.89,
     textAlign:'center',
     color: '#011D45'
    }
})