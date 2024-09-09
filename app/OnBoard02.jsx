import { Text, View ,StyleSheet,ImageBackground,Image, Pressable,SafeAreaView} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function OnBoard02() {

  const router = useRouter();

  return (
      
    <SafeAreaView style={styles.safeareaview}>
        
        <ImageBackground style={styles.container} resizeMode="cover" source={require("../assets/images/on board 02.png")}>
        <View style={styles.container02}>
        
        <View style={styles.child01}>
          <Text style={styles.title}>Customize your</Text>
          <Text style={styles.title}>High-end travel</Text>
        </View>

        <View style={styles.child02}>
          <Text style={styles.subtitle}>countless high-end</Text>
          <Text style={styles.subtitle}>entertainment facilities</Text>
        </View>

      
        <Pressable style={styles.button} onPress={()=>router.push('/OnBoard03')}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      

        </View>
        </ImageBackground>       
      </SafeAreaView>    
  ) 
}
const styles = StyleSheet.create({
  safeareaview:{
    flex: 1,
  },
  container:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center",
    alignItems:"center"
  },
  child01:{
    justifyContent:"center",
    alignItems:"center"
  },
  child02:{
    justifyContent:"center",
    alignItems:"center",
  },
  child03:{
    justifyContent:"center",
    alignItems:"center",
    width:"80%",
    height:"60%",
    backgroundColor:""
  },
  container02:{
    backgroundColor:"#fff",
    borderRadius:50,
    width: "95%",
    bottom:30,
    flexDirection:"column",
    height: 283,
    position: "absolute",
    flex:1,
    justifyContent:"center",
    gap:12,
    alignItems:"center"
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 24,
    letterSpacing: -0.4,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    letterSpacing: -0.2,
    fontWeight: '500',
    // fontFamily: 'Poppins-Medium', // Uncomment if you have the font available
    color: '#b4b4b4',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5A189A',
    borderRadius: 500,
    width: '80%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  })
