import React,{useState} from 'react'
import {
View,Text,StyleSheet,Image,Dimensions,ScrollView
} from 'react-native'

import Button from '../components/Button'
import Input from '../components/Input'

import { Formik } from 'formik';

import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessage from '../utils/authErrorMessage'
import { max } from 'date-fns';



const Login=({navigation})=>{
  const [loading ,setLoading]=useState(false);

  const initalFormValues={
    usermail:'',
    password:'',
  }

 const HandleFormSubmit=async(initalFormValues)=>{

      try {
      setLoading(true)
      if(!initalFormValues.usermail||!initalFormValues.password){
        setLoading(false)
        showMessage({
          message: 'Boş Geçme Kral !',
          type: "danger",
        });
        return;
      }
     await auth().signInWithEmailAndPassword(
       initalFormValues.usermail,
       initalFormValues.password,
      );
     console.log('oldu')
     setLoading(false)

    } catch (error) {
     console.log(error)
     showMessage({
       message: authErrorMessage(error.code),
       type: "danger",
     });
     setLoading(false)
    } }


    
    function handleSignInSubmit(){
      navigation.navigate('SignPage')
    }

    return(
        <View style={styles.container}>
          <View style={styles.body_container}>
          <Image
            style={styles.image}
            source={require('../assets/Welcome3.png')}
            />
          </View>
          <View style={styles.component}>
            <Formik
             initialValues={initalFormValues}
             onSubmit={HandleFormSubmit}
            >
            {({ handleChange, handleSubmit, values }) =>(
             <>
               <Input 
               placeholder={'   e-postanızı giriniz..'}
               onChangeText={handleChange('usermail')}
               value={values.usermail}
               />
               <Input 
               placeholder={'   şifrenizi giriniz..'}
               onChangeText={handleChange('password')}
               value={values.password}
               />
               <Button onPress={handleSubmit} title={'Giriş Yap'} loading={loading}/>
             </>
               )}
            </Formik>
          <Button onPress={handleSignInSubmit} title={'Kayıt Ol'} theme='secondary'/>
         </View>
        </View>
        
    )
}

export default Login;

const styles = StyleSheet.create({
     container:{
       flex:1,
       backgroundColor:'#550aa0',
       
       
     },
     body_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',  
     },
     text:{
       color:'white',
       fontSize:25,
     },
     component:{
        flex:1,  
     },
     image:{
      width:Dimensions.get('window').width,
      
      resizeMode: 'contain'

     }
    
})