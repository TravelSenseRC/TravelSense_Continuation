import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { OnBoard } from "./OnBoard"; // Ensure you have this component created and exported correctly

export default function App() {
  const [AppStarted, setAppStarted] = useState(false); // Move state hook inside the component

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppStarted(true); // Set state to true after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  // Conditional rendering based on AppStarted state
  if (AppStarted) {
    return <OnBoard />;
  } else {
    return <SplashScreen />;
  }
}

// Define the SplashScreen component
export function SplashScreen() {
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.titleText}>Travel Sense</Text>

      <Text style={styles.fromText}>from</Text>
      <Text style={styles.companyText}>Zybertron</Text>
    </View>
  );
}

// Styles for the SplashScreen component
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5A189A",
  },
  titleText: {
    color: "white",
    fontSize: 36,
    fontWeight: "800",
  },
  fromText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    position: "absolute",
    bottom: 25,
  },
  companyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    position: "absolute",
    bottom: 5,
  },
});
