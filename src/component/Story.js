import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Story = ({story}) => {
  return (
    <TouchableOpacity style={{width:65, height:65, borderRadius:60, borderWidth:3, borderColor:"#F8CE58", marginRight:8}}>
      <Image source={story.image} style={styles.storyImage} resizeMode='contain'/>
    </TouchableOpacity>
  )
}

export default Story

const styles = StyleSheet.create({
    storyImage:{
        width:60,
        height:60,
        borderRadius:50
    }
})