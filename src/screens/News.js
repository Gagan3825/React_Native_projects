import { View, Text,StyleSheet, FlatList, Image,Linking, Button, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'

import React from 'react'

const News = () => {
    const DATA = [
        {
          id: "1",
          "author": "Issy Ronald, CNN",
          "title": "'God needs to come and explain it': How the football world reacted to Real Madrid's extraordinary Champions League semifinal victory",
          "description": "\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions League final on May 28.",
          "url": "https://www.cnn.com/2022/05/05/football/real-madrid-champions-league-reaction-liverpool-spt-intl/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504173124-11-champions-league-semifinal-real-madrid-manchester-city-super-tease.jpg",
          "publishedAt": "2022-05-05T10:06:14Z",
          "content": "(CNN)\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions Leag… [+2830 chars]"
        },
        {
            id: "2",
            "author": "Esha Mitra, Rhea Mogul",
            "title": "A 13-year-old girl told the police she had been gang-raped. Then a police officer allegedly raped her",
            "description": "A 13-year-old girl who was allegedly gang-raped by four men in India, was allegedly raped again by a police officer after she tried to seek his help in reporting the initial attack.",
            "url": "https://www.cnn.com/2022/05/05/india/india-rape-teenager-police-arrested-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220505013803-lalitapur-india-map.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-05-05T09:58:01Z",
            "content": "A 13-year-old girl who was allegedly gang-raped by four men in India, was allegedly raped again by a police officer after she tried to seek his help in reporting the initial attack.\r\nAuthorities in U… [+4395 chars]"
        },
        {
            id: "3",
            "author": "Reuters",
"title": "Turkey's inflation hits two-decade high of 70%",
"description": "Turkey's annual inflation jumped to 69.97% in April, above forecast and at a two-decade high, according to data on Thursday, fueled by the Russia-Ukraine conflict and rising energy and commodity prices after last year's lira crash.",
"url": "https://www.cnn.com/2022/05/05/economy/turkey-inflation-soars/index.html",
"urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220505053006-istanbul-shooppers-0406-super-tease.jpg",
"publishedAt": "2022-05-05T09:37:48Z",
"content": "IstanbulTurkey's annual inflation jumped to 69.97% in April, above forecast and at a two-decade high, according to data on Thursday, fueled by the Russia-Ukraine conflict and rising energy and commod… [+1030 chars]"
        },
        {
            id: "4",
            "author": "Ben Church",
"title": "Chris Paul masterclass inspires Phoenix Suns to 2-0 lead in NBA playoffs",
"description": "NBA veteran Chris Paul led the Phoenix Suns to victory against the Dallas Mavericks in the NBA playoffs on Wednesday in his quest for his first NBA championship.",
"url": "https://www.cnn.com/2022/05/05/sport/chris-paul-phoenix-suns-nba-playoff-spt-intl/index.html",
"urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220505044755-02-chris-paul-0504.jpg?c=16x9&q=w_800,c_fill",
"publishedAt": "2022-05-05T09:33:40Z",
"content": "NBA veteran Chris Paul led the Phoenix Suns to victory against the Dallas Mavericks in the NBA playoffs on Wednesday in his quest for his first NBA championship.\r\nPaul, who turns 37 on Friday, racked… [+2470 chars]"
        },
        {
            id: "5",
            "author": "Issy Ronald, CNN",
            "title": "'God needs to come and explain it': How the football world reacted to Real Madrid's extraordinary Champions League semifinal victory",
            "description": "\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions League final on May 28.",
            "url": "https://www.cnn.com/2022/05/05/football/real-madrid-champions-league-reaction-liverpool-spt-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504173124-11-champions-league-semifinal-real-madrid-manchester-city-super-tease.jpg",
            "publishedAt": "2022-05-05T10:06:14Z",
            "content": "(CNN)\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions Leag… [+2830 chars]"
        },
      ];
      return (
        <ScrollView>
         <View style={styles.container}>
         {/* {isLoading ? 
         (<View style={{justifyContent:"center",alignItems:"center"}}><ActivityIndicator size="large" color="black" style={{justifyContent:"center",alignItems:"center"}}/></View>)
         : (
           <View> */}
     
        
           <Text style={{ alignItems:"center",
           marginTop:20,
           marginLeft:140,
           fontSize:50,
           textAlign:"center",
           textDecorationLine:"underline",
           textDecorationColor:"red",
           color:"blue",justifyContent:"center"}}>News</Text>
          <FlatList
            data={DATA}
            keyExtractor={(item, index) => index.toString()}
            
            renderItem = {({item,index})=>(
             <View>
             
             <Text style={styles.authorcontainer}>Author:-{item.author}</Text>
             <Text style={styles.titlecontainer}>Description:-{item.description}</Text>
             <Text style={styles.titlecontainer}>{item.url}</Text>
     
             <Image
             resizeMode='cover'
             style={{width:50,height:50,justifyContent:'center',marginLeft:30,padding:20,marginTop:10}}
               source={{uri:item.urlToImage  }} 
                >l
     
             </Image>
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
               {/* </View>
         )
            }  */}
         </View>
         </ScrollView>
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
      textAlign:"center"
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

export default News