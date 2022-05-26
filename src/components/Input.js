import React from 'react'
import {
View,Text,StyleSheet,TextInput
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input=({placeholder,onChangeText,value,iconName})=>{
    return(
      <View style={styles.container}>
         <TextInput
        underlineColorAndroid={'#fff8dc'}
        placeholderTextColor={'#fff8dc'}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
          />
          <Icon style={styles.icon} name={iconName} size={30} color='gray' />
      </View>
       
    )
}

export default Input;

const styles = StyleSheet.create({
    container:{
     flexDirection:'row',
     
    
    },
     input:{
       flex:1,
      color:'white',
      justifyContent:'center'
     }
})