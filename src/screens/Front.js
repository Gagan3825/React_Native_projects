import { View, Text,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
const imageaa = { uri: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"}

const Front = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={imageaa} style={styles.image}>
    <View>
     <TouchableOpacity
     style={styles.button}
     onPress={()=>navigation.navigate("news")}
     
     >
     <Text style={styles.home}>News</Text>
     

     
     </TouchableOpacity>
     <View>
     <TouchableOpacity
     style={styles.button}
     onPress={()=>navigation.navigate("About")}
     
     >
     <Text style={styles.about}>About</Text>
     {/* navigation.navigator("About"); */}
     
     </TouchableOpacity>
     </View>
        
     
     <Text style={{color:"white",marginLeft:10,letterSpacing:2,marginTop:5,textAlign:"center",fontStyle:"italic"}}>contact for any query singhgagandeep2025@gmail.com</Text>
     
     
    </View>
      
      </ImageBackground>
   </View>
   
  
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',

},
image: {
    height:'100%',
    width:'100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
    home:{
     fontSize:25,
     backgroundColor:"lightblue",
     color:"white",
     borderRadius:25,
     padding:5,
     textAlign:"center",
     justifyContent:"center",
     alignItems:"center",
     marginTop:550
   

     
    },
    about:{
      padding:5,
      textAlign:"center",
      marginTop:10,
      fontSize:25,
      backgroundColor:"#bd4a42",
      color:"white",
      borderRadius:25,
      

    }
    
   
})

export default Front