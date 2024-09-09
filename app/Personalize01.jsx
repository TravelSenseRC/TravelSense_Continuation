import { useRouter } from "expo-router";
import { useState } from "react";
import React from "react";
import { Text, View ,StyleSheet,ImageBackground,Image, Pressable,SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import CheckBox from 'expo-checkbox';

export default function Personalize01() {

  const router = useRouter();

  return (
    
    <SafeAreaView style={styles.safeareaview}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headericon}>
                    <TouchableOpacity onPress={()=>router.push('/SignIn')}>
                        <Image source={require("../assets/images/backword.png")} />
                    </TouchableOpacity>                  
                </View>
                <View style={styles.headertitle}>
                    <Text style={styles.headertitletexts}>Let's get started</Text>
                </View>
                
                
            </View>
            <View style={styles.queston01}> 
                <Text style={styles.title01}>1.What are your top interests?</Text>
                <Text style={styles.subtitle01}>Pick one or more categories</Text>
            </View>
            <View style={styles.gridpanel}>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Image source={require("../assets/images/Site Seeing.png")} />
                        <Text style={styles.boxtext}>Site Seeing</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require("../assets/images/Beach.png")} />
                        <Text style={styles.boxtext}>Beach</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require("../assets/images/Wild Life.png")} />
                        <Text style={styles.boxtext}>WIld Life</Text>
                    </View>
                </View>
      
      
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Image source={require("../assets/images/Shopping.png")} />
                        <Text style={styles.boxtext}>Shopping</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require("../assets/images/Hiking.png")} />
                        <Text style={styles.boxtext}>Hiking</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require("../assets/images/Religious.png")} />
                        <Text style={styles.boxtext}>Religious Places</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Image source={require("../assets/images/Ancient Ruins.png")} />
                        <Text style={styles.boxtext}>Ancient Ruins</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require("../assets/images/National Parks.png")} />
                        <Text style={styles.boxtext}>National Parks</Text>
                    </View>
                    <View style={styles.hiddenbox}>
                        
                    </View>  
                </View>
            
            </View>
            <View style={styles.child01}>
                <View style={styles.addotherfieldheader}>
                    <Text style={styles.textinputfieldtitle}>Add  other Interests</Text>
                    <Image source={require("../assets/images/add.png")} />
                </View>
                <View style={styles.textinputfield}>
                <TextInput style={styles.textinput} placeholder="Other"></TextInput>
                </View>
                <View style={styles.textinputfield}>
                <TextInput style={styles.textinput} placeholder="Other"></TextInput>
                </View>
            </View>
            <View style={styles.child02}>
                <Pressable style={styles.button} onPress={()=>router.push('/Personalize02')}>
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
        backgroundColor:'#fafafa'
        
    },
    container:{
        position:"absolute",
        flex:1,
        backgroundColor:"#fafafa",
        flexDirection:"column",
        top:"4%",
        width:"80%",
        bottom:50,
        justifyContent:"space-between",
        gap:12,
        
    },
    header:{
        backgroundColor:"#fafafa",
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
        
        flexDirection:"column",
        gap:10
        
    },
    row: {
        flexDirection: 'row', /* Make children in a row */
        justifyContent: 'space-between', /* Distribute space evenly */
        height:110
    },
    box: {
        flex: 1, /* Each box takes equal space */
         /* Keep the boxes square */
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {
        width: 4,
        height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        borderRadius: 12,
        justifyContent: 'flex-end', /* Center content vertically */
        alignItems: 'center', /* Center content horizontally */
        marginHorizontal: 5, /* Adds some space between the boxes */
    },
    hiddenbox:{
        flex: 1, /* Each box takes equal space */
        /* Keep the boxes square */
        backgroundColor: '#fafafa',
        justifyContent: 'center', /* Center content vertically */
        alignItems: 'center', /* Center content horizontally */
        marginHorizontal: 5, /* Adds some space between the boxes */

    },
    boxtext: {
        fontSize: 12,
        fontWeight:"700"
        
    },
    child01:{
        
    },
    title02:{
        textAlign:"center",
        fontSize: 18,
        fontWeight: "600",
    },
    addotherfieldheader:{
        flexDirection:"row"
    },
    textinputfieldtitle:{
        fontSize: 16,
        fontWeight: "700",
    },
    textinputfield:{
        width:"100%",
        backgroundColor:"#d9d9d9",
        flexDirection:"row",
        height:56,
        borderRadius:20
    },
    textinput:{
        width:"75%",
        left:10
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
        borderRadius: 500,
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
