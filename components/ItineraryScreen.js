{/*
  Here, you can have the code for the Itinerary screen. This is just a placeholder screen.
  */}

import React from 'react';
import { View, Text, Button } from 'react-native';

function ItineraryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Itinerary Screen</Text>
      <Button title="Go to HomeScreen" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default ItineraryScreen;