import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Aboutme from './src/screens/Aboutme';
import Front from './src/screens/Front';
import News from './src/screens/News';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const imagea = { uri: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"}
export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    // <ImageBackground source={imagea} resizeMode="cover" style={{flex:1,justifyContent:'center'}}>
    //  <View>
    //       {/* <Front/> */}
          
    //  </View>
    //  </ImageBackground>
    //  <View>
    //  <Home/>
    //  </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Front}/>
        <Stack.Screen name='About' component={Aboutme}/>
        <Stack.Screen name='news' component={Home}/>


      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
   
    // backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
