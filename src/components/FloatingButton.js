import React from 'react'
import {TouchableOpacity,StyleSheet,Text} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({onPress})=>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress} >
          <Icon style={styles.icon} name={'plus'} size={30} color='gray' />
        </TouchableOpacity>
    )
}
export default FloatingButton;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#00898b',
        height:60,
        width:60,
        position:'absolute',
        right:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        bottom:20,
        
    },
    icon:{
        fontSize:40,
        color:'white',
        
    }
})

{
    /* 
     container:{
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:50,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1e90ff'
    }
     <Icon style={styles.icon} name={iconName} size={30} color='gray' />
    */
}