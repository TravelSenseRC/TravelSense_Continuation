import { useRouter } from "expo-router";
import { useState } from "react";
import React from "react";
import { Text, View ,StyleSheet,ImageBackground,Image, Pressable,SafeAreaView, TextInput} from "react-native";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8089/users/', {
        username,
        email,
        password,
      });
      if (response.data.success) {
        Alert.alert('Success', 'User registered successfully');
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  
  return (
    
    <SafeAreaView style={styles.safeareaview}>
        
        <ImageBackground style={styles.BackgroundImage} resizeMode="cover" source={require("../assets/images/SignInBackground.png")}>
    
        <View style={styles.container}>
        <View style={styles.rectanglebar} />
        
        <View style={styles.child01}>
          <Text style={styles.title}>Sign up now</Text>
        </View>

        <View style={styles.child02}>
          <Text style={styles.subtitle}>Name</Text>
          <View style={styles.textinputfield}>
          <TextInput style={styles.textinput}  value={username}
            onChangeText={setUsername} placeholder="John Doe"></TextInput>
          </View>
        </View>

        <View style={styles.child03}>
          <Text style={styles.subtitle}>E-mail</Text>
          <View style={styles.textinputfield}>
          <TextInput style={styles.textinput}  value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none" placeholder="johndoe@gmail.com"></TextInput>
          </View>
        </View>

        <View style={styles.child04}>
          <Text style={styles.subtitle}>Password</Text>
          <View style={styles.textinputfield}>
          <TextInput style={styles.textinput}  value={password}
            onChangeText={setPassword}
            secureTextEntry placeholder="**********"></TextInput>
          </View>
        </View>

        <View style={styles.child05}>
          <Text style={styles.subtitle}>Confirm Password</Text>
          <View style={styles.textinputfield}>
          <TextInput style={styles.textinput} secureTextEntry placeholder="**********"></TextInput>
          </View>
        </View>

       
        <Pressable style={styles.button} onPress={()=>router.push('/Personalize01')}>
        <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
        

        <View style={styles.child06}>
          <Text style={styles.subtitle}>Already have an account?</Text>
          <Text style={styles.linkedtext} onPress={()=>{router.push('/MyTabs');handleSignUp}}>Sign-in</Text>
        </View>

        </View>
        </ImageBackground>       
      </SafeAreaView>    
  ) 
}
const styles = StyleSheet.create({
    safeareaview:{
        flex: 1,
    },
    BackgroundImage:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    container:{
        backgroundColor:"#fff",
        borderRadius:50,
        width: "95%",
        bottom:30,
        flexDirection:"column",
        height: 600,
        position: "absolute",
        flex:1,
        justifyContent:"center",
        gap:12,
        alignItems:"center"
    },
    rectanglebar: {
        borderRadius: 9,
        backgroundColor: "#5a189a",
        width: "20%",
        height: 5
        },
    child01:{
        justifyContent:"center",
        alignItems:"center"
    },
    child02:{
        justifyContent:"left",
        alignItems:"left",
        flexDirection:"column",
    },
    textinputfield:{
        width:"100%",
        backgroundColor:"#f7f7f9",
        flexDirection:"row",
        height:56,
        borderRadius:20
    },
    textinput:{
        width:"75%",
        left:10
    },
    child03:{
        justifyContent:"left",
        alignItems:"left",
        flexDirection:"column",
    },
    child04:{
        justifyContent:"left",
        alignItems:"left",
        flexDirection:"column",
    },
    child05:{
        justifyContent:"center",
        alignItems:"left",
        flexDirection:"column"
    },
    child06:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:"80%"
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
    linkedtext:{
        textDecorationLine:"underline"
    },
    rememberme:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    subtitle: {
        fontSize: 16,
        letterSpacing: -0.2,
        fontWeight: '500',
        // fontFamily: 'Poppins-Medium', // Uncomment if you have the font available
        color: 'black',
        
    },
    button: {
        backgroundColor: '#5A189A',
        borderRadius: 500,
        width: '80%',
        height: '11.2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    })
