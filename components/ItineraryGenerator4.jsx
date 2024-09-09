import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ItineraryGenerator4 = ({ navigation }) => {
  const [selectedTourBudget, setSelectedTourBudget] = useState('');
  const [selectedShopBudget, setSelectedShopBudget] = useState('');
  const [otherInterests, setOtherInterests] = useState([]);

  const handleTourBudgetSelection = (budget) => {
    setSelectedTourBudget(budget === selectedTourBudget ? '' : budget);
  };

  const handleShopBudgetSelection = (budget) => {
    setSelectedShopBudget(budget === selectedShopBudget ? '' : budget);
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
          <TouchableOpacity onPress={() => navigation.navigate('ItineraryGenerator3')}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Itinerary Generator</Text>

          <View>
            <TouchableOpacity onPress={() => alert('Notifications clicked!')}>
              <Ionicons name='notifications-outline' size={24} color={Colors.black} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Your budget for the tour?</Text>
        <Text style={{ color: 'gray', marginTop: 5 }}>Pick only one category</Text>
        <TouchableOpacity
          onPress={() => handleTourBudgetSelection('1000 - 3000')}
          style={[styles.button, selectedTourBudget === '1000 - 3000' && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>1000$ - 3000$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTourBudgetSelection('3000 - 6000')}
          style={[styles.button, selectedTourBudget === '3000 - 6000' && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>3000$ - 6000$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTourBudgetSelection('6000 - 9000')}
          style={[styles.button, selectedTourBudget === '6000 - 9000' && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>6000$ - 9000$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTourBudgetSelection('Above 9000')}
          style={[styles.button, selectedTourBudget === 'Above 9000' && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Above 9000$</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>If you are willing to shop, your budget?</Text>
        <Text style={{ color: 'gray', marginTop: 5 }}>Pick only one category</Text>
        <TouchableOpacity
          onPress={() => handleShopBudgetSelection('0 - 200$')}
          style={[styles.button, selectedShopBudget === '0 - 200$' && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>0 - 200$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleShopBudgetSelection('200$ - 400$')}
          style={[styles.button, selectedShopBudget === '200$ - 400$' && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>200$ - 400$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleShopBudgetSelection('400$ - 600$')}
          style={[styles.button, selectedShopBudget === '400$ - 600$' && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>400$ - 600$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleShopBudgetSelection('Above 600$')}
          style={[styles.button, selectedShopBudget === 'Above 600$' && styles.selectedButton]}
        >
          <Text style={styles.buttonText}>Above 600$</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Add Other Interests &nbsp;&nbsp; 
          <TouchableOpacity style={styles.roundButton} onPress={handleAddOtherInterest}>
            <Ionicons name="add" size={20} color="black" />
          </TouchableOpacity>
        </Text>
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

      <TouchableOpacity style={styles.nextButton} onPress= {() => navigation.navigate('ItineraryGenerator5')}>
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

export default ItineraryGenerator4;
