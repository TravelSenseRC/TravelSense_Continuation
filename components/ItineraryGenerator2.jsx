import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ItineraryGenerator2 = ({navigation}) => {
  const [selectedHotelRatings, setSelectedHotelRatings] = useState([]);
  const [selectedHotelTypes, setSelectedHotelTypes] = useState([]);
  const[selectedSpecialInterests, setSelectedSpecialInterests] = useState([]);
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

  const handleSpecialInterestSelection = (interest) => {
    if (selectedSpecialInterests.includes(interest)) {
        setSelectedSpecialInterests(selectedSpecialInterests.filter((i) => i!== interest));
    } else {
        setSelectedSpecialInterests([...selectedSpecialInterests, interest]);
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
                <TouchableOpacity onPress={() => navigation.navigate('ItineraryGenerator1')} >
                     <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.headerText}>Itinerary Generator</Text>

                <View>
                    <TouchableOpacity onPress={() => alert('Notifications clicked!')}>
                        <Ionicons name='notifications-outline' size={24} color={Colors.black} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

        <Text style={styles.sectionTitle}>What type of food do you enjoy?</Text>
        <Text style={{marginTop: 20}}>Diet preferences:</Text>
        <Text style={{color: 'gray', marginTop: 5}}>Pick one or more categories</Text>
        
        <TouchableOpacity
          onPress={() => handleHotelRatingSelection('3 Star')}
          style={[styles.button, selectedHotelRatings.includes('3 Star') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Vegetarian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelRatingSelection('5 Star')}
          style={[styles.button, selectedHotelRatings.includes('5 Star') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Non-vegetarian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelRatingSelection('7 Star')}
          style={[styles.button, selectedHotelRatings.includes('7 Star') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Vegan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelRatingSelection('Other')}
          style={[styles.button, selectedHotelRatings.includes('Other') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Seafood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text>Cuisine Types:</Text>
        <Text style={{color: 'gray', marginTop: 5}}>Pick one or more categories</Text>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Luxury')}
          style={[styles.button, selectedHotelTypes.includes('Luxury') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Local / Sri Lankan Traditional</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Boutique')}
          style={[styles.button, selectedHotelTypes.includes('Boutique') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Italian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Cabana')}
          style={[styles.button, selectedHotelTypes.includes('Cabana') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Indian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Resort')}
          style={[styles.button, selectedHotelTypes.includes('Resort') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Chinese</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleHotelTypeSelection('Korean')}
          style={[styles.button, selectedHotelTypes.includes('Korean') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Korean</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text>Special Interests:</Text>
        <Text style={{color: 'gray', marginTop: 5}}>Pick one or more categories</Text>
        <TouchableOpacity
          onPress={() => handleSpecialInterestSelection('Healthy / Organic')}
          style={[styles.button, selectedSpecialInterests.includes('Healthy / Organic') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Healthy / Organic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSpecialInterestSelection('Desserts')}
          style={[styles.button, selectedSpecialInterests.includes('Desserts') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Desserts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSpecialInterestSelection('Street Food')}
          style={[styles.button, selectedSpecialInterests.includes('Street Food') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Street Food</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSpecialInterestSelection('Spicy')}
          style={[styles.button, selectedSpecialInterests.includes('Spicy') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Spicy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSpecialInterestSelection('BBQ / Grilled')}
          style={[styles.button, selectedSpecialInterests.includes('BBQ / Grilled') && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>BBQ / Grilled</Text>
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
      <TouchableOpacity style={styles.nextButton} onPress= {() => navigation.navigate('ItineraryGenerator3')} >
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

export default ItineraryGenerator2;