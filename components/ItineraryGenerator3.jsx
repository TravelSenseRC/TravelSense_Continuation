import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ItineraryGenerator3 = ({navigation}) => {
  const [selectedHotelRatings, setSelectedHotelRatings] = useState([]);
  const [selectedHotelTypes, setSelectedHotelTypes] = useState([]);
  const [otherInterests, setOtherInterests] = useState([]);

  const handleHotelRatingSelection = (rating) => {
    if (selectedHotelRatings.includes(rating)) {
      setSelectedHotelRatings(selectedHotelRatings.filter((r) => r !== rating));
    } else {
      setSelectedHotelRatings([...selectedHotelRatings, rating]);
    }
  };

  const handleHotelTypeSelection = (type) => {
    if (selectedHotelTypes.includes(type)) {
      setSelectedHotelTypes(selectedHotelTypes.filter((t) => t !== type));
    } else {
      setSelectedHotelTypes([...selectedHotelTypes, type]);
    }
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
          <TouchableOpacity onPress={() => navigation.navigate('ItineraryGenerator2')} >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Itinerary Generator</Text>

          <View>
            <TouchableOpacity onPress={() => alert('Notifications clicked!')}>
              <Ionicons name='notifications-outline' size={24} color={Colors.black} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>What are the ratings of the hotels you expect?</Text>
        <Text style={{color: 'gray', marginTop: 5}}>Pick one or more categories</Text>
        <TouchableOpacity
          onPress={() => handleHotelRatingSelection('3 Star')}
          style={[styles.button, selectedHotelRatings.includes('3 Star') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>3 Star</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelRatingSelection('5 Star')}
          style={[styles.button, selectedHotelRatings.includes('5 Star') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>5 Star</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelRatingSelection('7 Star')}
          style={[styles.button, selectedHotelRatings.includes('7 Star') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>7 Star</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelRatingSelection('Other')}
          style={[styles.button, selectedHotelRatings.includes('Other') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Other</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferred Hotel Type</Text>
        <Text style={{color: 'gray', marginTop: 5}}>Pick one or more categories</Text>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Luxury')}
          style={[styles.button, selectedHotelTypes.includes('Luxury') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Luxury</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Boutique')}
          style={[styles.button, selectedHotelTypes.includes('Boutique') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Boutique</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Cabana')}
          style={[styles.button, selectedHotelTypes.includes('Cabana') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Cabana</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Resort')}
          style={[styles.button, selectedHotelTypes.includes('Resort') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Resort</Text>
        </TouchableOpacity>
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
      <TouchableOpacity style={styles.nextButton} onPress= {() => navigation.navigate('ItineraryGenerator4')}>
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
  button: {
    fontSize: 16,
    color: '#fff', 
    padding: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
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
  }
});

export default ItineraryGenerator3;