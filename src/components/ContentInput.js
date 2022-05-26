import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,Dimensions} from 'react-native'
import Modal from "react-native-modal"

import Button from './Button'

function ContentInput({visible,onClose,onSend}) {

    const [text, setText] = React.useState(null);

    function handleSend(){
        if(!text){
            return;
        }
        onSend(text);
        setText(null);
    }

    return (
      <Modal
      isVisible={visible}
      style={styles.modal}
      onSwipeComplete={onClose} 
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down"
      >
      <View style={styles.container}>
         <View style={styles.input_container}>
          <TextInput
            style={{color:'white'}}
            selectionColor='orange'
            underlineColorAndroid={'white'}
            placeholderTextColor={'gray'}
            placeholder='Anlat Kuzum Derdini..'
            onChangeText={setText}
            multiline
          />
         </View>
         <Button title="Gönder" onPress={handleSend} />
      </View>
         
         
      </Modal>
    );
  }
 export default ContentInput;

  const styles=StyleSheet.create({
   container:{
   
    height: Dimensions.get('window').height/3,
    padding:10,
    margin:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
   },
   modal:{
    justifyContent:'flex-end',
    margin:0,
    
  },
  input_container:{
      flex:1,
  }
  })