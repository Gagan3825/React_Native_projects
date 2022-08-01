import { View, Text,StyleSheet, Image, TouchableOpacity,Linking } from 'react-native'
import React from 'react'

const Aboutme = () => {
  return (
    <View style={{backgroundColor:"#ffffff",width:'100%',height:'100%'}}>
      <View style={{alignItems: 'center',
        justifyContent:"center",marginTop:100}}>
        <Image
        style={styles.imagecontainer}
        source={require("../../assets/ggn.jpeg")} 
        
         />

      </View>
      <View>
        <TouchableOpacity
       onPress={()=>{
        Linking.openURL("https://www.linkedin.com/in/gagandeep-singh-060187209/")
      }}
        >
       <Text style={styles.linkedinpoint}>Linkedin Profile</Text>
        </TouchableOpacity>

        
        
      </View>
      <View>
        <TouchableOpacity
       onPress={()=>{
        Linking.openURL("https://www.instagram.com/gagandeep3825/")
      }}
        >
            
       <Text style={styles.insta}>Instagram Profile</Text>
        </TouchableOpacity>

        
      </View>
      <View style={{marginTop:20,justifyContent:"center",marginLeft:150}}>
        <Image
        
        source={require("../../assets/insta.png")} 
        
         />
         <Image
        style={{marginTop:5,left:40,bottom:40,marginLeft:10}}
        source={require("../../assets/linkdin.png")} 
        
         />
         

      </View>
     <Text style={{color:"black",marginLeft:10,letterSpacing:2,marginTop:5,textAlign:"center",fontStyle:"italic",textDecorationLine:"underline",}}>Thanku For Visiting:-</Text>
      
     
    </View>
  )
}

const styles = StyleSheet.create({
    imagecontainer:{
        width:250,
        height:250,
        marginTop:5,
        alignItems: 'center',
        justifyContent:"center",
        borderRadius:300,
        
    },
    linkedinpoint:{
        marginVertical:30,
        alignItems:"center",
        textAlign:"center",
        fontSize:25,
        backgroundColor:"#1666C5",
        padding:5,
        borderRadius:15,
        color:"black",
        fontWeight:"bold"
    },
    insta:{
      
        alignItems:"center",
        textAlign:"center",
        fontSize:25,
        backgroundColor:"#E1306C",
        padding:5,
        borderRadius:15,
        color:"black",
        fontWeight:"bold"
    }
})
export default Aboutme