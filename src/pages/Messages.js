import React,{useState,useEffect} from 'react'
import {
View,Text,StyleSheet,FlatList
} from 'react-native'
import ContentInput from '../components/ContentInput'
import FloatingButton from '../components/FloatingButton'

import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import parsContenData from '../utils/parsContenData'
import MessageCard from '../components/MessageCard'



const Messages=()=>{
  const[inputModalVisible,setInputModalVisible]=useState('false')
  const[contentList,setContentList]=useState([])

  useEffect(()=>{
    database().ref('messages/')
    .on('value', snapshot => {
      const contentData = snapshot.val()

      

      const parsedData = parsContenData(contentData || {})
      setContentList(parsedData);
    });
    
  },[])

  function handleInputToggle(){
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content){
    handleInputToggle();
    SendContent(content)
  }

  function SendContent(content){
    const userMail = auth().currentUser.email;

    const contentObject = {
      text:content,
      username: userMail.split('@')[0],
      date:(new Date()).toISOString(),
      dislike:0,
    }
     database().ref('messages/').push(contentObject);
   
  }
  function handleBanane(item){
    database()
    .ref(`messages/${item.id}/`)
    .update({dislike: item.dislike +1});
  }

  const renderContent= ({item}) => <MessageCard  message={item} onBanane={() =>handleBanane(item)} />

    return(
        <View style={styles.container}>

          <FlatList  
            data={contentList}
            renderItem={renderContent}
          />

           <ContentInput 
           visible={!inputModalVisible} 
           onClose={handleInputToggle}
           onSend={handleSendContent}
           />

           <FloatingButton onPress={handleInputToggle}/>
        </View>
    )
}

export default Messages;

const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:'#550aa0'
  },
  
})
