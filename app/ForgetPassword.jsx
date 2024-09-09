import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import React from "react";
import { Text, View ,StyleSheet,ImageBackground,Image, Pressable,SafeAreaView, TextInput, Modal} from "react-native";

// const Modalpopup = ({showmodal})=>{

//   const router = useRouter();

  // const[showmodal,setShowModal] = useState(false);
  // const toggleModal= ()=>{
  //   if(visible){
  //     setShowModal(true)
  //   }else{
  //     setShowModal(false)
  //   }
  // }

  // useEffect(()=>{
  //   toggleModal();
  // },[visible])
  
  // return(
  //   <Modal animationType="fade" transparent visible={showmodal}>
  //     <View style={styles.modalbackground}>
  //         <View style={styles.modalcontainer}>
  //           <View style={styles.modalchild01}>
  //             <Image source={require("../assets/images/e mail.png")}/>
  //           </View>
  //           <View style={styles.modalchild02}>
  //             <Text style={styles.modaltitle}>Check your e-mail</Text>
  //           </View>
  //           <View style={styles.modalchild03}>
  //             <Text style={styles.modalsubtitle}>Password recovery instructions have been sent to your email.
  //                Please check your inbox and log in once your password is reset</Text>
  //           </View>
  //           <Pressable style={styles.modalbutton} onPress={()=>setShowModal(false)}>
  //             <Text style={styles.buttonText}>Log In</Text>
  //           </Pressable>
  //       </View>
  //     </View>
 //   </Modal>
//   )
// }


export default function ForgetPassword() {
    
  const router = useRouter();
  const[showmodal,setShowModal] = useState(false);
  const[visible,setVisible] = useState(false);

  return (
    
      <SafeAreaView style={styles.safeareaview}>
        
        <ImageBackground style={styles.BackgroundImage} resizeMode="cover" source={require("../assets/images/SignInBackground.png")}>
        
        
        {/*This is the pop-up panel after pressing the reset pw button*/}
        <Modal animationType="fade" transparent visible={showmodal}> 
          <View style={styles.modalbackground}>
              <View style={styles.modalcontainer}>
                <View style={styles.modalchild01}>
                  <Image source={require("../assets/images/e mail.png")}/>
                </View>
                <View style={styles.modalchild02}>
                  <Text style={styles.modaltitle}>Check your e-mail</Text>
                </View>
                <View style={styles.modalchild03}>
                  <Text style={styles.modalsubtitle}>Password recovery instructions have been sent to your email.
                    Please check your inbox and log in once your password is reset</Text>
                </View>
                <Pressable style={styles.modalbutton} onPress={()=>{router.replace('/SignIn');setShowModal(false)}}>
                  <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.container}>
        <View style={styles.rectanglebar} />
        
        <View style={styles.child01}>
          <Text style={styles.title}>Forget Password</Text>
        </View>
 
        <View style={styles.child02}>
          <Image source={require("../assets/images/ForgetPassword.png")}/>
        </View>

        <View style={styles.child03}>
          <Text style={styles.subtitle01}>Please enter your registered email address to receive a password reset link</Text>
        </View>

        <View style={styles.child04}>
          <Text style={styles.subtitle02}>E-mail</Text>
          <View style={styles.textinputfield}>
          <TextInput style={styles.textinput} placeholder="user123@email.com"></TextInput>
          </View>
        </View>


        
        <Pressable style={styles.button} onPress={()=>setShowModal(true)} >
        <Text style={styles.buttonText}>Reset Password</Text>
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

  modalbackground:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.6)",
    justifyContent:"center",
    alignItems:"center"
  },

  modalcontainer:{
    width:"80%",
    borderRadius:50,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-evenly"
  },

  modalchild01:{

  },

  modalchild02:{

  },

  modalchild03:{

  },

  modaltitle:{
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "500"

  },
  modalsubtitle:{
    textAlign:"center",
    fontSize: 14,
    lineHeight: 19,
    color:"black",
    fontWeight: "300",
  },
  modalbutton:{
    backgroundColor: '#5A189A',
    borderRadius: 500,
    width: '80%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 450,
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
    justifyContent:"center",
    alignContent:"center",
    flexDirection:"column",
    width:"80%"
  },
  child04:{
    justifyContent:"left",
    alignItems:"left",
    flexDirection:"column",
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
  subtitle01: {
    fontSize: 16,
    letterSpacing: -0.2,
    fontWeight: '500',
    // fontFamily: 'Poppins-Medium', // Uncomment if you have the font available
    color: 'black',
    textAlign:"center"
    
  },
  subtitle02: {
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
