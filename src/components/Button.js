import React from 'react'
import {
View,
Text,
StyleSheet,
TouchableOpacity,
ActivityIndicator,
} from 'react-native'

const Button=({onPress,title,theme="primary",loading})=>{
    return(
        <TouchableOpacity
          style={styles[theme].button}
          onPress={onPress}
          >
        {loading ? (<ActivityIndicator color='white' />):
        (<Text style={styles[theme].text}>{title}</Text>)}      
        
      </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    primary:{
        button:{
            backgroundColor:'#ff7f50',
            alignItems:'center',
            margin:6,
            borderRadius:20,
           
            
        },
        text:{
            color:'white',
            fontSize:25,
            fontWeight:'bold',
        }
    },

   secondary:{
    button:{
        backgroundColor:'white',
        alignItems:'center',
        margin:6,
        borderRadius:20,
        
    },
    text:{
        color:'#ff7f50',
        fontSize:25,
        fontWeight:'bold',
    }
   }
    
})