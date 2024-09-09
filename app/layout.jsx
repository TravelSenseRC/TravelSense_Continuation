import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Layout = ({children}) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff', 
    },
  });

export default Layout;