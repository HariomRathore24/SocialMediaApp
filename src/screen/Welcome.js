import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBtn from '../component/CustomBtn'

import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();
    const LoginBtn =()=>{
        navigation.navigate("Login")
    }
    const RegisterBtn =()=>{
        navigation.navigate("Register")
    }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.WelcomeImg}
      source={require('../assets/bgImage.png')}>
          
        <CustomBtn 
          stylebtn={{marginBottom:10}}
            title={"log in with Email"}
            onPress={LoginBtn}
        />
        <CustomBtn
             title={"REGISTER"}
             onPress={RegisterBtn}
             stylebtn={{marginBottom:10, backgroundColor:'#011D45'}}
             styleText={{color:'white'}}
        />
      </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    WelcomeImg:{
     flex:1,
     justifyContent:'flex-end',
     paddingHorizontal:20,
     paddingVertical:20
    }
})