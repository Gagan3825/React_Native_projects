import { View, Text,StyleSheet, FlatList, Image,Linking, Button, TouchableOpacity, ScrollView, ActivityIndicator,RefreshControl,ToastAndroid } from 'react-native'
import React,{useEffect,useState} from 'react'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const getNews= React.useCallback(async()=>{
      setRefreshing(true)
      if (data.length<30) {
        
      
      try {
        const response = await fetch('https://saurav.tech/NewsAPI/everything/cnn.json')
        const jso = await response.json();
        console.log(jso);
         setLoading(false)
         setRefreshing(false)
         setData(jso.articles)
      } catch (error) {
        console.log(error);
      }
    }
    else{
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false)
    }
    
    },[refreshing]);
    useEffect(() => {
     getNews()
    }, [])
    
  return (
  
    <View style={styles.container}>
    {isLoading ? 
    (<View style={{justifyContent:"center",alignItems:"center",marginTop:10}}><ActivityIndicator size="large" color="purple" style={{justifyContent:"center",alignItems:"center"}}/></View>)
    : (
      <View>

   
      <Text style={{ alignItems:"center",
      marginTop:20,
      fontSize:50,
      textAlign:"center",
      textDecorationLine:"underline",
      textDecorationColor:"red",
      color:"blue",justifyContent:"center"}}>News</Text>
     <FlatList
       data={data}
       keyExtractor={(item, index) => index.toString()}
       refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getNews}/>
       }
       
       renderItem = {({item,index})=>(
        <View>
        
        <Text style={styles.authorcontainer}>Author:-{item.author}</Text>
        <Text style={styles.titlecontainer}>Description:- {item.title}</Text>
        

        <Image
        resizeMode='cover'
        style={{width:320,height:330,justifyContent:'center',marginLeft:30,padding:20,marginTop:10}}
          source={{uri:item.urlToImage }} 
           />

        
        {/* <Button 
        title='read more'
        color="skyblue" */}
        <TouchableOpacity
        onPress={()=>{
          Linking.openURL(item.url)
        }}
        >
         <Text style={styles.about}>Read more..</Text>
        </TouchableOpacity>
        
        
       
         

        </View>

       )}
       />
          </View>
    )
       } 
    </View>
  
  )
}

const styles = StyleSheet.create({
    container:{
       
     backgroundColor:"white",
     justifyContent:'center',
     alignItems: 'center',
   

     
     
    },
    authorcontainer:{
      alignItems:"center",
      marginTop:20,
      textAlign:"center",
      color:"black",
      letterSpacing:3,
      marginLeft:5,
      fontWeight:"bold",
      fontSize:20,
      
      
    },
    titlecontainer:{
      alignItems:"center",
      letterSpacing:3,
      color:"purple",
      marginTop:5,
      marginLeft:5,
      justifyContent:"center",
      textAlign:"center",
      fontStyle:"italic"
    },
    about:{
      padding:5,
      textAlign:"center",
      marginTop:10,
      fontSize:25,
      // backgroundColor:"#f194ff",
      backgroundColor:"lightgreen",
      color:"white",
      borderRadius:25,
      

    }

})

export default Home