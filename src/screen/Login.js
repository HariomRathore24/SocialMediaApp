import { StyleSheet, Text, View , ImageBackground, TouchableOpacity, } from 'react-native'
import React,{useState} from 'react'
import InputField from '../component/InputField'
import CustomBtn from '../component/CustomBtn'
import { useNavigation } from '@react-navigation/native';
const Login = () => {
   const navigation = useNavigation();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   
   const handleLogin =()=>{
      navigation.navigate("Home")
   }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.WelcomeImg}
      source={require('../assets/bgImage.png')}>
          
          <View style={styles.loginBox}>
             <Text style={styles.text}>Sign in to your account</Text>
            <View style={{marginTop:50}}/>
             <InputField placeholder={"Email"} 
                styleInput={{ borderWidth:2, borderColor:'#F8CE58',}}
                onChangeText={setEmail}
             />
             <InputField placeholder={"Password"}
                styleInput={{ borderWidth:2, borderColor:'#F8CE58',}}
                onChangeText={setPassword}
             />
            <CustomBtn
             title={"LOG IN"}
             onPress={handleLogin}
             stylebtn={styles.loginbtn}
             styleText={{color:'#F8CE58'}}
           />
           <TouchableOpacity>
            <Text style={styles.forget}>Forget password</Text>
           </TouchableOpacity>
           
          </View>
        
      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    WelcomeImg:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     paddingHorizontal:20,
     },
     loginBox:{
        width:"100%",
        height:441,
        borderRadius:9,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        paddingVertical:30,
        paddingHorizontal:20
     },
     text:{
        fontSize:13,
        fontWeight:"500",
        lineHeight:15.23,
        textAlign:"center", 
        color:'#011D45'
     },
     loginbtn:{
        width:256,
        height:40,
        borderRadius:4,
        backgroundColor:'#011D45',
        marginTop:30
     },
     forget:{
        fontSize:13,
        fontWeight:"500",
        lineHeight:15.23,
        textAlign:"center", 
        color:'#011D45',
        marginTop:30
     },
})