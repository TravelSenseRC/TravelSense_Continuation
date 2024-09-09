import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { profilePic, visaBanner, itiPlan } from '../assets/images/images_index';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchBar from './SearchBar';

function Home() {
  const router = useRouter();
  const [searchText, setSearchText] = useState(''); 
  const handleSearch = async () => {
    if (!searchText) return; // No need to search if the query is empty
  
    try {
      const response = await fetch(`http://localhost:5000/itineraries?search=${searchText}`);
      const data = await response.json();
      console.log('Search results:', data);
      // Handle search results by storing them in state or navigating to a different screen
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />

      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Your location ▼</Text>
            <View style={styles.locationInfo}>
              <Text style={styles.countryText}>Sri Lanka</Text>
            </View>
          </View>

          <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => alert('Notifications clicked!')}>
              <Ionicons name='notifications-outline' size={24} color={Colors.black} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Profile picture clicked!')}>
              <Image source={profilePic} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.SearchBar}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={() => handleSearch()} />
        </View>

        <View>
          <TouchableOpacity onPress={()=>router.push('/VisaApproval1')}>
            <Image source={visaBanner} style={styles.visaBanner}/>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Image source={itiPlan} />
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 60 }}>
              &nbsp;Ditch Generic Gateways
            </Text>

            <Text style={{ textAlign: 'center', lineHeight: 25, color: "gray" }}>Plan your tour effortlessly with our new</Text>

            <View>
              <Text style={{textAlign: 'center', color: "gray", lineHeight: 20}}>AI planner</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              <TouchableOpacity onPress={()=>router.push('/ItineraryGenerator1')} style={{backgroundColor: "purple", borderRadius: 15, padding: 10}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Start Planning</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF7',
  },

  scrollView: {
    flex: 1,
  },

  header: {
    backgroundColor: '#FFFFF7',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },

  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },

  locationContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  locationText: {
    fontSize: 16,
    color: 'gray',
  },

  locationInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 4,
  },

  caretMark: {
    fontSize: 16,
    color: 'gray'
  },

  countryText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },

  visaBanner: {
    width: 'max-width',
    resizeMode: 'contain',
    height: 250,
    borderRadius: 10,
    margin: 10,
  },

  SearchBar: {
    width: '100%',
    marginTop: 20, 
  }
});

export default Home;
