import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

import {  formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'


const MessageCard = ({message,onBanane})=>{
      const formatedDate = formatDistance(parseISO(message.date), new Date(),{
           locale: tr ,
           addSuffix: true
         });

    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
               <Text style={styles.username}>{message.username}</Text>
               <Text style={styles.username}>{formatedDate}</Text>
            </View>
               <Text style={styles.title}>{message.text}</Text>
            <View style={styles.footer}>
            <TouchableOpacity style={styles.dislike_container} onPress={onBanane}>
             <Text style={styles.dislike_text}>  +  </Text>
              {!!message.dislike && (
                   <View style={styles.dislike_count_container}>
                  <Text style={styles.dislike_count_text}>{message.dislike}</Text>
                </View>
              )}
              
               </TouchableOpacity>
            </View>
        </View>
    )
}

export default MessageCard;

const styles = StyleSheet.create({
    container:{
      flex:1,
     backgroundColor:'#ff7f50',
      margin:8,
      padding:8,
      borderRadius:10,
    },
    inner_container:{
      flexDirection:'row',
      justifyContent:'space-between',
      
      
    },
    username:{
      color:'white',
      fontSize:12,
    },
    title:{
        color:'black',
        fontSize:15,
        
        
    },
    footer:{
      flex:1,
      
   },
   dislike_container:{
     flexDirection:'row',
     justifyContent:'flex-end',
     borderRadius:10,
   },
   dislike_count_container:{
   },
   dislike_count_text:{
    
    fontSize:15,
    color :'#adff2f',
    fontWeight:'bold',
   },
   dislike_text:{
    color:'#228b22',
    fontSize:15,
    fontWeight:'bold',
    borderRadius:15,
    backgroundColor:'white',
   },
   
    
})