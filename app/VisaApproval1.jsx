import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { visaImage1 } from '../assets/images/images_index';

function VisaApproval1({ navigation }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />

      <ScrollView style={styles.scrollview}>
        <ImageBackground source={visaImage1} style={styles.header}>
          <TouchableOpacity style={styles.roundButton} onPress={()=>router.push('/MyTabs')}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <View>
            <TouchableOpacity style={styles.roundButton} onPress={() => alert('Notifications clicked!')}>
              <Ionicons name='notifications-outline' size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Text style = {styles.headerText}>Get approval for your Visa</Text>

        <View style={styles.textCont}>
          <Text style={{color: 'purple', fontWeight: 'bold', fontSize: 20, paddingBottom: 10}}>Ready to explore Sri Lanka? </Text>
          <Text style={styles.normText}>Ensure you have your tourist visa sorted. Here's all the essential info to guide you through the process for a smooth start to your journey.</Text>

          <View style={{paddingTop: 15}}> 
            <Text style={{color: 'purple', fontSize: 20, paddingBottom: 10}}>Purpose</Text>
            <Text style={styles.normText}>Issued to bona fide tourists for:</Text>
            <View style={{paddingLeft: 80, paddingTop: 10}}>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Sightseeing</Text>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Holoidaying</Text>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Visiting friends / relatives</Text>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Medical treatments</Text>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Sports and cultural activities</Text>
            </View>            
          </View>
          <View style={{paddingTop: 15, flexDirection: 'row'}}>
            <Ionicons name="checkbox" size={30} color="purple" style={styles.checkbox} />
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>Avaiilable to potential tourists residing outside Sri Lanka</Text>
          </View>
          <Text style={{paddingTop: 15, color: 'purple', fontSize: 20, paddingBottom: 10}}>Duration</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 17}}>Initial Duration: </Text>
            <Text style={styles.normText}>30 days, single entry</Text>            
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 17}}>Extension: </Text>
            <Text style={styles.normText}>Possible 30-day extension for a fee</Text>
          </View>

          <View style={styles.allowedContent}>
            <Text style={{fontWeight: 'bold', fontSize: 17, padding: 20 }}>Allowed</Text>
            <Text style={{color: 'gray', fontSize: 15, paddingLeft: 20}}><Ionicons name="checkmark-circle" size={17} color="green" style={styles.checkbox} />&nbsp;&nbsp;Sight seeing, Holidaying</Text>
            <Text style={{color: 'gray', fontSize: 15, paddingLeft: 20}}><Ionicons name="checkmark-circle" size={17} color="green" style={styles.checkbox} />&nbsp;&nbsp;Medical treatments</Text>
            <Text style={{color: 'gray', fontSize: 15, paddingLeft: 20}}><Ionicons name="checkmark-circle" size={17} color="green" style={styles.checkbox} />&nbsp;&nbsp;Cultural activities</Text>
          </View>

          <View style={styles.notAllowedContent}>
            <Text style={{fontWeight: 'bold', fontSize: 17, padding: 20 }}>Not allowed</Text>
            <Text style={{color: 'gray', fontSize: 15, paddingLeft: 20}}><Ionicons name="close-circle" size={17} color="red" style={styles.checkbox} />&nbsp;&nbsp;Business / Trade activities</Text>
            <Text style={{color: 'gray', fontSize: 15, paddingLeft: 20}}><Ionicons name="close-circle" size={17} color="red" style={styles.checkbox} />&nbsp;&nbsp;Meeting, conferences, short-term training</Text>
            <Text style={{color: 'gray', fontSize: 15, paddingLeft: 20}}><Ionicons name="close-circle" size={17} color="red" style={styles.checkbox} />&nbsp;&nbsp;Employement (Paid / Non-paid)</Text>
            <Text style={{color: 'gray', fontSize: 15, paddingLeft: 20}}><Ionicons name="close-circle" size={17} color="red" style={styles.checkbox} />&nbsp;&nbsp;Long term stay through frequent visits</Text>
          </View>

          <View>
            <Text style={{color: 'purple', fontSize: 20, paddingBottom: 10}}>Visa Fee</Text>
            <Text style={styles.normText}>Free for citizens of:</Text>
            <View style={{paddingLeft: 80, paddingTop: 10}}>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Singapore</Text>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Maldives</Text>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Seychelles</Text>
              <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Czech Republic</Text>
            </View>
            <Text style={{color: 'gray', fontSize: 17, paddingTop: 10, paddingBottom: 30}}>US$ 50 for citizens of other countries.</Text>

            <Text style={{color: 'purple', fontSize: 20, paddingBottom: 10}}>Application methods</Text>
            <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Online: Via the Sri Lanka eVisa website</Text>
            <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;On Arrival: Visa can be obtained upon arrival in Sri Lanka</Text>
            <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Sri Lankan Overseas Missions: Apply through any Sri Lankan embassy or consulate</Text>

            <Text style={{color: 'purple', fontSize: 20, paddingTop: 30, paddingBottom: 10}}>Required documents</Text>
            <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Photograph: A recent colour photograph</Text>
            <Text style={styles.normText}><Ionicons name='ellipse' size="10" color="gray"/>&nbsp;&nbsp;Passport Data Page: A scanned copy of the data page of your valid passport</Text>
         </View>
        </View>

        <View>
          <TouchableOpacity style={styles.approveBtn} onPress={()=>router.push('/VisaApproval2')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>Get Approval</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textCont: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollview: {
    backgroundColor: '#fff',
  },
  header: {
    height: 350,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    marginLeft: 10,
  },
  roundButton: {
    width: 40,                
    height: 40,               
    borderRadius: 20,         
    backgroundColor: '#fff',  
    justifyContent: 'center', 
    alignItems: 'center',     
    shadowColor: '#000',      
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,            
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    backgroundColor: 'trasparent',
    top: 300,
    left: 35,
    fontSize: 28,
  },
  normText: {
    color: 'gray',
    fontSize: 17,
  },
  allowedContent: {
    marginTop: 20,
    paddingLeft: 10,
    backgroundColor: '#E0F7FA',
    paddingBottom: 20,
    marginBottom: 10,
  },
  notAllowedContent: {
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: '#FFEBEE',
    paddingBottom: 20,
    marginBottom: 20,
  },
  approveBtn: {
    backgroundColor: 'purple',
    alignSelf: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  }
});

export default VisaApproval1;
