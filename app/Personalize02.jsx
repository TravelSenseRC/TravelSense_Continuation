import { useRouter } from "expo-router";
import { useState } from "react";
import React from "react";
import { Text, View ,StyleSheet,ImageBackground,Image, Pressable,SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import CheckBox from 'expo-checkbox';

export default function Personalize02() {

  const router = useRouter();
//   const [selected, setSelected] = useState(null);
//   const items = ['Hot and Sunny', 'Cold and Mild', 'Rainy and Lush','Im Flexible'];
  
//   const [isPrimaryColor, setIsPrimaryColor] = useState(true); // State to toggle between colors

//   const toggleColor = () => {
//     setIsPrimaryColor(!isPrimaryColor); // Toggle the color state

  

  return (
    
    <SafeAreaView style={styles.safeareaview}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headericon}>
                    <TouchableOpacity onPress={()=>router.push('/Personalize01')}>
                        <Image source={require("../assets/images/backword.png")} />
                    </TouchableOpacity>                  
                </View>
                <View style={styles.headertitle}>
                    <Text style={styles.headertitletexts}></Text>
                </View>
                
                
            </View>
            <View style={styles.queston01}> 
                <Text style={styles.title01}>2.Who do you usually travel with?</Text>
                <Text style={styles.subtitle01}>Pick one or more categories</Text>
            </View>
            <View style={styles.gridpanel}>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={styles.text}>Solo</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>With Partner</Text>
                    </View>
                   
                </View>
      
      
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={styles.text}>With Family</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>With Friends</Text>
                    </View>
                   
                </View>
                
            
            </View>
            <View style={styles.child01}>
                <View style={styles.addotherfieldheader}>
                    <Text style={styles.textinputfieldtitle}>Add  other ways</Text>
                    <Image source={require("../assets/images/add.png")} />
                </View>
                <View style={styles.textinputfield}>
                <TextInput style={styles.textinput} placeholder="Other"></TextInput>
                </View>
                
            </View>
            <View style={styles.queston01}> 
                <Text style={styles.title01}>3.What type of weather do you prefer?</Text>
                <Text style={styles.subtitle01}>Pick one or more categories</Text>
            </View>
            <View style={styles.child01}>
                {/* {items.map((item, index) => (
                <Pressable
                key={index}
                onPress={() => setSelected(index)}
                style={[
                    styles.weatheroptiontab01,
                    selected === index && styles.selectedPressable, // Apply selected style if this item is selected
                ]}
                >
                <Text style={styles.text}>{item}</Text>
                </Pressable>
                ))} */}
                
                {/* <Pressable style={[styles.weatheroptiontab01,, {backgroundColor: isPrimaryColor ? 'white' : 'violet' }]} onPressIn={toggleColor}>
      
                <Text style={styles.optiontext}>Hot and Sunny</Text>
                </Pressable>
                <Pressable style={[styles.weatheroptiontab02,, {backgroundColor: isPrimaryColor ? 'white' : 'violet' }]} onPressIn={toggleColor}>
      
                <Text style={styles.optiontext}>Cold and Mild</Text>
                </Pressable>
                <Pressable style={[styles.weatheroptiontab03,, {backgroundColor: isPrimaryColor ? 'white' : 'violet' }]} onPressIn={toggleColor}>
      
                <Text style={styles.optiontext}>Rainy and Lush</Text>
                </Pressable>
                <Pressable style={[styles.weatheroptiontab04,, {backgroundColor: isPrimaryColor ? 'white' : 'violet' }]} onPressIn={toggleColor}>
      
                <Text style={styles.optiontext}>I'm Flexible</Text>
                </Pressable> */}
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>Cold and Mild</Text>
                </View>
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>Hot and Sunny</Text>
                </View>
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>Rainy and Lush</Text>
                </View>
                <View style={styles.optiontab}>
                <Text style={styles.optiontext}>I'm Flexible</Text>
                </View>
                
            </View>
            <View style={styles.child02}>
                <Pressable style={styles.button} onPress={()=>router.push('/Personalize03')}>
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
        backgroundColor:"#f7f7f9",
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
        backgroundColor:"#f7f7f7"
        

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
        justifyContent:"space-evenly",
        gap:10,
        height:"20%"
        
    },
    row: {
        flexDirection: 'row', /* Make children in a row */
        justifyContent: 'space-between', /* Distribute space evenly */
        height:"30%"
    },
    box: {
        flex: 1, /* Each box takes equal space */
         /* Keep the boxes square */
        backgroundColor: 'white',
        borderRadius:9,
        
        justifyContent: 'center', /* Center content vertically */
        alignItems: 'center', /* Center content horizontally */
        marginHorizontal: 5, /* Adds some space between the boxes */
    },
    hiddenbox:{
        flex: 1, /* Each box takes equal space */
        /* Keep the boxes square */
        backgroundColor: 'white',
        justifyContent: 'center', /* Center content vertically */
        alignItems: 'center', /* Center content horizontally */
        marginHorizontal: 5, /* Adds some space between the boxes */

    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    child01:{
        
    },
    textinputfieldtitle:{
        fontSize: 16,
        fontWeight: "700",
    },
    addotherfieldheader:{
        flexDirection:"row"
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
    textinput:{
        width:"75%",
        textAlign:"center"
    },
    optiontab:{
        width:"60%",
        backgroundColor:'white',
        flexDirection:"row",
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    selectedPressable: {
        backgroundColor: 'violet', // Change background color when selected
        borderColor: '#007bff', // Change border color when selected
      },
    weatheroptiontab02:{
        width:"60%",
        backgroundColor:'color',
        flexDirection:"row",
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    weatheroptiontab03:{
        width:"60%",
        backgroundColor:'color',
        flexDirection:"row",
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    weatheroptiontab04:{
        width:"60%",
        backgroundColor:'color',
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
