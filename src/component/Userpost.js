import { StyleSheet, Text, View, Image,TextInput } from 'react-native'
import React from 'react'


const Userpost = ({post}) => {
  return (
    <View style={styles.postContainer}>
    <Image source={post.image} style={styles.postImage} />
    {/* <Text style={styles.descriptionText}>{post.description}</Text> */}
    <View style={{width:'100%', height:40,flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20, alignItems:'center' }}>
        <View style={{width:'25%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Image style={{width:14.4, height:12, tintColor:'black'}}
        source={require('../assets/like.png')} />
        <Image style={{width:15, height:13, tintColor:'black'}}
        source={require('../assets/comment.png')} />
        <Image style={{width:17, height:13, tintColor:'black'}}
        source={require('../assets/share.png')} />
        </View>
        <Image style={{width:14, height:16, tintColor:'black'}}
        source={require('../assets/save.png')} />
    </View>
     <View style={{width:'100%',flexDirection:'row', paddingHorizontal:20, marginBottom:20, alignItems:'center',}}>
    <Image source={post.image} style={styles.imageComment} />
     <TextInput placeholder='Add a comment...' 
        style={{fontSize:12, fontWeight:"500", lineHeight:12, textAlign:'center', marginLeft:10}}
     />
     </View>
  </View>
  )
}

export default Userpost

const styles = StyleSheet.create({
    postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 437,
    marginBottom: 5,
  },
  descriptionText: {
    color: '#333',
  },
  imageComment:{
    width:30,
    height:30,
    borderRadius:30
  }

})