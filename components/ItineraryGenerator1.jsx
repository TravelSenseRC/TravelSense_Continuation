import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';   


function ItineraryGenerator1({ navigation }){
  const [fromText, fromSetText] = useState('');
  const [toText, toSetText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);   
  const [isStartPicker, setIsStartPicker] = useState(true);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleIncrement = (type) => {
    switch (type) {
      case 'adults':
        setAdults(adults + 1);
        break;
      case 'children':
        setChildren(children + 1);
        break;
      case 'infants':
        setInfants(infants + 1);
        break;
      default:
        break;   

    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case 'adults':
        if (adults > 0) {
          setAdults(adults - 1);
        }
        break;
      case 'children':
        if (children > 0) {
          setChildren(children - 1);
        }
        break;
      case 'infants':
        if (infants > 0) {
          setInfants(infants - 1);
        }
        break;
      default:
        break;   

    }
  };

  const showDatePicker = (isStart) => {
    setIsStartPicker(isStart);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; 
    if (isStartPicker) {
      setStartDate(formattedDate);
    } else {
      setEndDate(formattedDate);
    }
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />

      <ScrollView style={styles.scrollview}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Itinerary Generator</Text>

          <View>
            <TouchableOpacity onPress={() => alert('Notifications clicked!')}>
              <Ionicons name='notifications-outline' size={24} color={Colors.black} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.title}>What is your next travel adventure?</Text>
        </View>

        <View style={styles.travelAdvCont}>
          <TextInput
            style={styles.textFieldTravelAdv}
            value={fromText}
            onChangeText={(input) => fromSetText(input)}
          />
          <Text style={styles.fromToText}>from</Text>
        </View>

        <View style={styles.travelAdvCont}>
          <TextInput
            style={styles.textFieldTravelAdv}
            value={toText}
            onChangeText={(input) => toSetText(input)}
          />
          <Text style={styles.fromToText}>to</Text>
        </View>

        <View>
          <Text style={styles.title}>When are you planning to travel?</Text>

          <View style={styles.datesText}>
            <View style={styles.datePickerContainer}>
              <Text style={styles.dateLabel}>&nbsp;&nbsp;&nbsp;Start Date</Text>
              <TextInput
                style={styles.dateInput}
                value={startDate}
                placeholder="YYYY-MM-DD"
                placeholderTextColor='gray'
                editable={false} 
                onPressIn={() => showDatePicker(true)} 
              />
            </View>

            <View style={styles.datePickerContainer}>
              <Text style={styles.dateLabel}>&nbsp;&nbsp;&nbsp;&nbsp;End Date</Text>
              <TextInput
                style={styles.dateInput}
                value={endDate}
                placeholder="YYYY-MM-DD"
                placeholderTextColor='gray'
                editable={false} 
                onPressIn={() => showDatePicker(false)} 
              />
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontWeight: 'bold', lineHeight: 40}}>Number of People</Text>

          <View style={styles.peopleContainer}>
            <TouchableOpacity onPress={() => handleIncrement('adults')} style={styles.incrementButton}>
                <Ionicons name="add" size={20} color="black" backgroundColor="lavender" />
            </TouchableOpacity>
            <Text style={styles.countText}>{adults} Adults</Text>
            <TouchableOpacity onPress={() => handleDecrement('adults')} style={styles.decrementButton}>
                <Ionicons name="remove" size={20} color="black" backgroundColor="lavender" />
            </TouchableOpacity>
          </View>

          <View style={styles.peopleContainer}>
            <TouchableOpacity onPress={() => handleIncrement('children')} style={styles.incrementButton}>
                <Ionicons name="add" size={20} color="black" backgroundColor="lavender"/>
            </TouchableOpacity>
            <Text style={styles.countText}>{children} Children</Text>
            <TouchableOpacity onPress={() => handleDecrement('children')} style={styles.decrementButton}>
                <Ionicons name="remove" size={20} color="black" backgroundColor="lavender"/>
            </TouchableOpacity>
          </View>

          <View style={styles.peopleContainer}>
            <TouchableOpacity onPress={() => handleIncrement('infants')} style={styles.incrementButton}>
                <Ionicons name="add" size={20} color="black" backgroundColor="lavender" />
            </TouchableOpacity>
            <Text style={styles.countText}>{infants} Infants</Text>
            <TouchableOpacity onPress={() => handleDecrement('infants')} style={styles.decrementButton}>
                <Ionicons name="remove" size={20} color="black" backgroundColor="lavender" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ItineraryGenerator2')}>
            <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}   

        />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    scrollview: {
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    icon: {
        marginLeft: 10,
    },
    title: {
        fontWeight: 'bold',
        lineHeight: 30,
        paddingTop: 10,
    },
    travelAdvCont: {
        position: 'relative',
        width: '90%',
        marginVertical: 10,
    },
    textFieldTravelAdv: {
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: 'purple'
    },
    fromToText: {
        position: 'absolute',
        right: 15,
        top: 10,
        color: 'purple',
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    datesText: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    datePickerContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    dateLabel: {
        marginVertical: 5,
    },
    dateInput: {
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        borderColor: 'purple',
        borderWidth: 1,
    },

      incrementButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc', 
        borderRadius: 5,
        backgroundColor: '#fff',
      },
      decrementButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc', 
        borderRadius: 5,
        backgroundColor: '#fff',
      },
      countText: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },

      peopleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent:'space-between',
        backgroundColor: '#f0f0f0',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'purple',
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

});

export default ItineraryGenerator1;
