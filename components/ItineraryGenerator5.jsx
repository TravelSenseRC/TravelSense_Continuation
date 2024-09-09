import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { carRental, taxiCab, pubBus, train, scooter, bicycle  } from '../assets/images/images_index';

const ItineraryGenerator5 = ({ navigation }) => {
  const [selectedTravel, setSelectedTravel] = useState([]);
  const [selectedGuideType, setSelectedGuideType] = useState(null); // Changed from array to single value
  const [otherInterests, setOtherInterests] = useState([]);

  const handleTravelSelection = (mode) => {
    if (selectedTravel.includes(mode)) {
      setSelectedTravel(selectedTravel.filter((m) => m !== mode));
    } else {
      setSelectedTravel([...selectedTravel, mode]);
    }
  };

  const handleGuideSelection = (type) => {
    setSelectedGuideType(type === selectedGuideType ? null : type); // Allows only one selection at a time
  };

  const handleAddOtherInterest = () => {
    setOtherInterests([...otherInterests, '']);
  };

  const handleOtherInterestChange = (index, value) => {
    const updatedOtherInterests = [...otherInterests];
    updatedOtherInterests[index] = value;
    setOtherInterests(updatedOtherInterests);
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <View style={styles.section}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ItineraryGenerator4')}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Itinerary Generator</Text>

          <View>
            <TouchableOpacity onPress={() => alert('Notifications clicked!')}>
              <Ionicons name='notifications-outline' size={24} color={Colors.black} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>What are the modes of travelling you prefer for your trip?</Text>
        <Text style={{ color: 'gray', marginTop: 5, paddingBottom: 20 }}>Pick one or more categories</Text>
        <View style={styles.imgContainer}>
          <TouchableOpacity
            onPress={() => handleTravelSelection('carRental')}
            style={[styles.imgButtons, selectedTravel.includes('carRental') && styles.selectedButton]}
          >
            <Image source={carRental} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTravelSelection('taxiCab')}
            style={[styles.imgButtons, selectedTravel.includes('taxiCab') && styles.selectedButton]}
          >
            <Image source={taxiCab} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTravelSelection('pubBus')}
            style={[styles.imgButtons, selectedTravel.includes('pubBus') && styles.selectedButton]}
          >
            <Image source={pubBus} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View style={styles.imgContainer}>
          <TouchableOpacity
            onPress={() => handleTravelSelection('train')}
            style={[styles.imgButtons, selectedTravel.includes('train') && styles.selectedButton]}
          >
            <Image source={train} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTravelSelection('scooter')}
            style={[styles.imgButtons, selectedTravel.includes('scooter') && styles.selectedButton]}
          >
            <Image source={scooter} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTravelSelection('bicycle')}
            style={[styles.imgButtons, selectedTravel.includes('bicycle') && styles.selectedButton]}
          >
            <Image source={bicycle} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How do you prefer to travel?</Text>
        <Text style={{ color: 'gray', marginTop: 5 }}>Pick only one category</Text>
        <View style={styles.guideCont}>
          <TouchableOpacity
            onPress={() => handleGuideSelection('With guide')}
            style={[styles.button, selectedGuideType === 'With guide' && styles.selectedButton]}
          >
            <Text>With guide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleGuideSelection('Without guide')}
            style={[styles.button, selectedGuideType === 'Without guide' && styles.selectedButton]}
          >
            <Text>Without guide</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Add Other Interests &nbsp;&nbsp; <TouchableOpacity style={styles.roundButton} onPress={handleAddOtherInterest}><Ionicons name="add" size={20} color="black" /></TouchableOpacity></Text>
        {otherInterests.map((interest, index) => (
          <TextInput
            key={index}
            value={interest}
            placeholder='Add other interests'
            placeholderTextColor= 'gray'
            onChangeText={(value) => handleOtherInterestChange(index, value)}
            style={styles.textInput}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ItineraryGenerator4')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  imgButtons: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    borderWidth: 2,
  },
  button: {
    fontSize: 16,
    color: '#fff',
    padding: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 20,
    backgroundColor: 'lightgray',
  },
  selectedButton: {
    backgroundColor: 'purple',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  nextButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  roundButton: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    align: 'flex-start',
    paddingBottom: 20,
  },
  img: {
    borderRadius: 20,
    resizeMode: 'contain',
    width: 80,
  },
  guideCont: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default ItineraryGenerator5;
