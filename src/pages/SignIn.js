import React,{useState} from 'react'
import {
View,Text,StyleSheet,Image,Dimensions
} from 'react-native'

import Button from '../components/Button'
import Input from '../components/Input'
import authErrorMessage from '../utils/authErrorMessage'
import { showMessage } from "react-native-flash-message";




import { Formik } from 'formik';

import auth from '@react-native-firebase/auth';

const SignIn=({navigation})=>{

  const [loading ,setLoading]=useState(false);

  const initalFormValues={
    usermail:'',
    password:'',
    repassword:'',
  }

  const HandleFormSubmit=async(initalFormValues)=>{
    
    if (initalFormValues.password!==initalFormValues.repassword) {
      showMessage({
        message: 'şifreler uuyuşmuyor !',
        type: "danger",
      });
    } else {
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
        await auth().createUserWithEmailAndPassword(
         initalFormValues.usermail,
         initalFormValues.password,
         );
        console.log('oldu')
        showMessage({
         message:'Kullanıcı Oluşturuldu !',
         type: "success",
       });
       setLoading(false)
       } catch (error) {
         console.log(error)
         showMessage({
           message: authErrorMessage(error.code),
           type: 'warning',
         });
         setLoading(false)
       }
    }
    }
    
    function handleSignInSubmit(){
      navigation.navigate('LoginPage')
    }

    return(
        <View style={styles.container}>
          <View style={styles.body_container}>
          <Image
            style={styles.image}
            source={require('../assets/Welcome2.png')}
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
              value={values.email}
             />
             <Input 
             placeholder={'   şifrenizi giriniz..'}
             onChangeText={handleChange('password')}
             value={values.password}
             />
             <Input 
             placeholder={'   şifrenizi yeniden giriniz..'}
             onChangeText={handleChange('repassword')}
             value={values.repassword}
             />
             <Button onPress={handleSubmit} title={'Kayıt Ol'} loading={loading} />
            </>
             )}
            </Formik>
           <Button onPress={handleSignInSubmit} title={'Geri Dön'} theme='secondary'/>
         </View>
        </View>
        
    )
}

export default SignIn;

const styles = StyleSheet.create({
     container:{
       flex:1,
       backgroundColor:'#550aa0',
       padding:1,
     },
     body_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
     },
     text:{
       color:'white',
       fontSize:25,
     },
     component:{
        flex:1,
     },
     image:{
      width:Dimensions.get('window').width/2,
      resizeMode: 'contain'

     }
})