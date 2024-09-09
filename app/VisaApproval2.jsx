import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, Platform, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CheckBox from 'expo-checkbox';
import CountryPicker from 'react-native-country-picker-modal';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import pdfIcon from '../assets/images/images_index';

// Helper function to extract file name from URI
const extractFileName = (uri) => {
  return uri.split('/').pop();
};

function VisaApproval2() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState(null);
  const [country, setCountry] = useState('US');
  const [passportNumber, setPassportNumber] = useState('');
  const [passportExpiry, setPassportExpiry] = useState('');
  const [purposeOfVisit, setPurposeOfVisit] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [durationOfStay, setDurationOfStay] = useState('');
  const [previousVisitDate, setPreviousVisitDate] = useState('');
  const [isPreviousVisit, setIsPreviousVisit] = useState(null);
  const [currentDateField, setCurrentDateField] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [recentPhotograph, setRecentPhotograph] = useState(null);
  const [passportDataPage, setPassportDataPage] = useState(null);

  const showDatePicker = (field) => {
    setCurrentDateField(field);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    switch (currentDateField) {
      case 'dateOfBirth':
        setDateOfBirth(formattedDate);
        break;
      case 'passportExpiry':
        setPassportExpiry(formattedDate);
        break;
      case 'arrivalDate':
        setArrivalDate(formattedDate);
        break;
      case 'previousVisitDate':
        setPreviousVisitDate(formattedDate);
        break;
      default:
        break;
    }
    hideDatePicker();
  };

  const handleGenderSelection = (selectedGender) => {
    setGender(gender === selectedGender ? null : selectedGender);
  };

  const handlePreviousVisitSelection = (selectedValue) => {
    setIsPreviousVisit(isPreviousVisit === selectedValue ? null : selectedValue);
  };

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'We need permission to access your gallery.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        console.log('Selected image URI:', selectedImage.uri);  // Debugging
        setRecentPhotograph(selectedImage);
      } else {
        Alert.alert('Error', 'No image selected.');
      }
    } else {
      console.warn('Image selection canceled.');
    }
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'image/*'],
    });

    if (result.type === 'success') {
      console.log('Selected document URI:', result.uri);  // Debugging
      setPassportDataPage(result);
    }
  };

  const cancelImageUpload = () => {
    setRecentPhotograph(null);
  };

  const cancelDocumentUpload = () => {
    setPassportDataPage(null);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />

      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.scrollviewContent}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/VisaApproval1')}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => alert('Notifications clicked!')}>
              <Ionicons name="notifications-outline" size={24} color={Colors.black} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.pDetails}>
          <Text style={styles.mainHeaders}>Personal Details</Text>
          <Text style={{fontSize: 16}}>Full name</Text>
        </View>

        <View>
          <TextInput
            style={styles.textInput}
            value={fullName}
            onChangeText={(input) => setFullName(input)}
            placeholder="John Doe"
            placeholderTextColor= 'gray'
          />
        </View>

        <View style={styles.dateGenderContainer}>
          <View style={styles.dateGenderHeader}>
            <Text style={styles.datePickerLabel}>Date of birth</Text>
            <Text style={{marginRight: 80, fontSize: 16}}>Gender</Text>
          </View>

          <View style={styles.datePickerContent}>
            <TouchableOpacity onPress={() => showDatePicker('dateOfBirth')} style={{width: 130, borderRadius: 10, borderWidth: 1, borderColor: 'purple', padding: 10, marginTop: 10}}>
              <Text style={styles.dateText}>{dateOfBirth || 'YYYY-MM-DD'}</Text>
            </TouchableOpacity>

            <View style={styles.genderContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={gender === 'Male'}
                  onValueChange={() => handleGenderSelection('Male')}
                  color={gender === 'Male' ? 'purple' : undefined}
                />
                <View>
                    <Text style={styles.checkboxLabel}>Male</Text>
                </View>
                
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={gender === 'Female'}
                  onValueChange={() => handleGenderSelection('Female')}
                  color={gender === 'Female' ? 'purple' : undefined}
                />
                <Text style={styles.checkboxLabel}>Female</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Nationality</Text>
          <View style={styles.countryCont}>
            <CountryPicker
                withFilter
                withFlag
                withCountryNameButton
                countryCode={country}
                onSelect={(selectedCountry) => {
                if (selectedCountry && selectedCountry.name) {
                    setCountry(selectedCountry.cca2);
                } else {
                    console.warn('Country selection is undefined or invalid');
                }
                }}
                placeholder="Select a country"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Passport Number</Text>
          <TextInput
            style={styles.textInput}
            value={passportNumber}
            onChangeText={(text) => setPassportNumber(text)}
            placeholder="A12345678"
            placeholderTextColor= 'gray'
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Passport Expiry Date</Text>
          <TouchableOpacity onPress={() => showDatePicker('passportExpiry')} style={styles.dateButton}>
            <Text style={styles.dateText}>{passportExpiry || 'YYYY-MM-DD'}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.mainHeaders}>Travel Information</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Purpose of visit</Text>
          <TextInput
            style={styles.textInput}
            value={purposeOfVisit}
            onChangeText={(text) => setPurposeOfVisit(text)}
            placeholder="Holidaying"
            placeholderTextColor= 'gray'
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Arrival Date</Text>
          <TouchableOpacity onPress={() => showDatePicker('arrivalDate')} style={styles.dateButton}>
            <Text style={styles.dateText}>{arrivalDate || 'YYYY-MM-DD'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Duration of stay</Text>
          <TextInput
            style={styles.textInput}
            value={durationOfStay}
            onChangeText={(text) => setDurationOfStay(text)}
            placeholder="e.g. 14 days"
            placeholderTextColor= 'gray'
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Previous visit to the country</Text>
          <View style={styles.prevVisit}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                value={isPreviousVisit === 'Yes'}
                onValueChange={() => handlePreviousVisitSelection('Yes')}
                color={isPreviousVisit === 'Yes' ? 'purple' : undefined}
                />
                <Text style={styles.checkboxLabel}>Yes</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                value={isPreviousVisit === 'No'}
                onValueChange={() => handlePreviousVisitSelection('No')}
                color={isPreviousVisit === 'No' ? 'purple' : undefined}
                />
                <Text style={styles.checkboxLabel}>No</Text>
            </View>
          </View>
          
        </View>

        {isPreviousVisit === 'Yes' && (
          <View style={styles.inputContainer}>
            <Text style={styles.subHeader}>Previous visit date</Text>
            <TouchableOpacity onPress={() => showDatePicker('previousVisitDate')} style={styles.dateButton}>
              <Text style={styles.dateText}>{previousVisitDate || 'YYYY-MM-DD'}</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.mainHeaders}>Supporting documents</Text>

        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Recent Photograph</Text>

        <TouchableOpacity onPress={pickImageFromGallery} style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload Recent Photograph</Text>
        <   Text style={styles.selectFile}>Select File</Text>
        </TouchableOpacity>

        <View>
            <Text style={{paddingBottom: 5}}>◉The image should be in JPEG format and between 10KB and 1MB in size</Text>
            <Text style={{paddingBottom: 5}}>◉The photograph must have been taken within the last six months</Text>
        </View>
        {recentPhotograph && (
        <View style={styles.fileContainer}>
            <Image source={{ uri: recentPhotograph.uri }} style={styles.imagePreview} />
            <Text style={styles.fileName}>{extractFileName(recentPhotograph.uri)}</Text>
            <TouchableOpacity onPress={cancelImageUpload} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
        )}

        {/* Upload Passport Data Page Section */}
        <Text style={{fontSize: 16, fontWeight: 'bold', paddingTop: 10}}>Passport Data Page Upload</Text>
        <TouchableOpacity onPress={pickDocument} style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload Passport Data Page</Text>
            <Text style={styles.selectFile}>Select File</Text>
        </TouchableOpacity>
        <Text style={{paddingBottom: 30}}>◉Upload a scanned copy of the main page</Text>

        {/* Show uploaded document details if any */}
        {passportDataPage && (
            <View style={styles.fileContainer}>
                <Text style={styles.fileName}>{extractFileName(passportDataPage.uri)}</Text>
                <TouchableOpacity onPress={cancelDocumentUpload} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        )}


        <Text style={styles.mainHeaders}>Emergency Contact Info</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Emergency contact name</Text>
          <TextInput
            style={styles.textInput}
            value={emergencyContactName}
            onChangeText={(text) => setEmergencyContactName(text)}
            placeholder="Erick Nick"
            placeholderTextColor= 'gray'
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Emergency contact number</Text>
          <TextInput
            style={styles.textInput}
            value={emergencyContactNumber}
            onChangeText={(text) => setEmergencyContactNumber(text)}
            placeholder="+1234567890"
            placeholderTextColor= 'gray'
          />
        </View>

        <TouchableOpacity onPress={() => router.push('/VisaApproval3')} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
    flex: 1,
    paddingRight: 10,
  },
  scrollviewContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  pDetails: {
    marginVertical: 20,
  },
  mainHeaders: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 5
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0'
  },
  dateGenderContainer: {
    marginVertical: 20,
  },
  dateGenderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePickerLabel: {
    fontSize: 16,
  },
  datePickerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'purple',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    paddingRight: 20,
    marginTop: 4,
  },
  inputContainer: {
    marginVertical: 10,
  },
  uploadButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'purple',
    height: 150,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    paddingTop: 55, 
  },
  selectFile: {
    fontSize: 16,
    color: 'purple',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  imagePreview: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  fileName: {
    flex: 1,
  },
  cancelButton: {
    backgroundColor: '#ff0000',
    padding: 5,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  prevVisit: {
    flexDirection: 'row',
    marginBottom: 15,
  }, 
  countryCont: {
    backgroundColor: '#f0f0f0',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'purple',
  }
});

export default VisaApproval2;
