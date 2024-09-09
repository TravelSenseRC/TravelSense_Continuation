import { useRouter } from "expo-router";
import { useState } from "react";
import React from "react";
import { Text, View ,StyleSheet,ImageBackground,Image, Pressable,SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import CheckBox from 'expo-checkbox';

export default function Personalize03() {

  const router = useRouter();

  return (
    
    <SafeAreaView style={styles.safeareaview}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headericon}>
                    <TouchableOpacity onPress={()=>router.push('/Personalize02')}>
                        <Image source={require("../assets/images/backword.png")} />
                    </TouchableOpacity>                  
                </View>
                <View style={styles.headertitle}>
                    <Text style={styles.headertitletexts}></Text>
                </View>
                
                
            </View>
            <View style={styles.queston01}> 
                <Text style={styles.title01}>4.What is your budget for a tour?</Text>
                <Text style={styles.subtitle01}>Pick one or more categories</Text>
            </View>
            
            <View style={styles.child01}>
                
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>1.1000$ - 3000$</Text>
                </View>
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>2.3000$ - 6000$</Text>
                </View>
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>3.6000$ - 9000$</Text>
                </View>
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>4 Above 9000$</Text>
                </View>
                
            
               
            </View>
          
            <View style={styles.queston01}> 
                <Text style={styles.title01}>5.What hotel rating are you except?</Text>
                <Text style={styles.subtitle01}>Pick one or more categories</Text>
            </View>
            <View style={styles.child01}>
                
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>3 Star</Text>
                </View>
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>5 Star</Text>
                </View>
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>7 Star</Text>
                </View>
                <View style={styles.addotherfieldheader}>
                <Text style={styles.textinputfieldtitle}>Add  other rates</Text>
                <Image source={require("../assets/images/add.png")} />
                </View>
                <View style={styles.textinputfield}>
                <TextInput style={styles.textinput} placeholder="Other"></TextInput>
                </View>
                
            </View>
            <View style={styles.child02}>
                <Pressable style={styles.button} onPress={()=>router.push('/Personalize01')}>
                    <Text style={styles.buttonText}>Next</Text>
                </Pressable>       
            </View>

        </View>    
         
    </SafeAreaView>    
  ) 
}
const styles = StyleSheet.create({
    safeareaview:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#f6f6f6"
        
    },
    container:{
        position:"absolute",
        flex:1,
        backgroundColor:"#f6f6f6",
        flexDirection:"column",
        top:"4%",
        width:"80%",
        bottom:50,
        justifyContent:"space-between",
        gap:12,
        
        
    },
    header:{
        
        flexDirection:"row",
        justifyContent:"flex-start",
        

    },
    headericon:{
        

    },
    headertitletexts:{
        color:"#5a189a",
        fontSize: 24,
        fontWeight: "600",
        left:"12%"
       
    },
    title01:{
        textAlign:"center",
        fontSize: 20,
        fontWeight: "700",
    },
    subtitle01:{
        textAlign:"center",
        fontSize: 12,
        fontWeight: "300",
    },
    gridpanel:{
        backgroundColor:"yellow",
        flexDirection:"column",
        justifyContent:"space-evenly",
        gap:10,
        height:"20%"
        
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height:"30%"
    },
    box: {
        flex: 1,
        backgroundColor: 'red',
        borderRadius:9,
        
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 5,
    },
    hiddenbox:{
        flex: 1, 
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 5, 

    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    child01:{
        
    },
    addotherfieldheader:{
        flexDirection:"row"
    },
    textinputfieldtitle:{
        fontSize: 16,
        fontWeight: "700",
    },
    textinput:{
        width:"75%",
        textAlign:"center"
    },
    textinputfield:{
        width:"60%",
        backgroundColor:"#d9d9d9",
        flexDirection:"row",
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    optiontab:{
        width:"60%",
        backgroundColor:"white",
        flexDirection:"row",
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    optiontext:{
        width:"75%",
        textAlign:"center"
    },
    child01:{
        alignItems:"center",
        justifyContent:"space-between",
        gap:12,
    },
    child02:{
        alignItems:"center"  
    },
    button: {
        backgroundColor: '#5A189A',
        borderRadius: 16,
        width: '80%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
  })
