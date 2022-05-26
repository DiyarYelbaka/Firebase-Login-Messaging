import React from 'react'
import {
View,Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Messages from './pages/Messages';
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createStackNavigator();

const Router=()=>{

    const [userSession,setUserSession] = React.useState();

    React.useEffect(()=>{
      auth().onAuthStateChanged((user)=>{
        setUserSession(!!user);
      });
    },[])
    
    const AuthStack = () =>{
        return (
         <Stack.Navigator screenOptions={{headerShown:false}}>
           <Stack.Screen name="LoginPage" component={Login}/>
           <Stack.Screen name='SignPage' component={SignIn}/>
         </Stack.Navigator>
        )
      }
      
    return(
        <NavigationContainer>
           
          {
            !userSession ?(
              <AuthStack />
            ):(
              <Stack.Navigator 
              screenOptions={{
                headerStyle:{
                  backgroundColor: '#800000',
                },
              }}
              >
              <Stack.Screen 
              name='MessageScren' 
              component={Messages}
              options={{
                title:'Anlat Derdini Yiğen',
                headerTintColor:'#fff8dc',
                headerTitleAlign:'center',
                headerRight:()=> <Icon name='logout'  size={30} color='#00ffff' onPress={()=>auth().signOut()}/>
              }}
              />
              </Stack.Navigator>
            )}
            
          <FlashMessage position="top" />
        </NavigationContainer>
    )
}

export default Router;