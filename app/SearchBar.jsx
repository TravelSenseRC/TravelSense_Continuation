import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ searchText, setSearchText, handleSearch, debounceTime = 500 }) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchText);
    }, debounceTime);

    return () => clearTimeout(timeoutId);
  }, [searchText, handleSearch, debounceTime]);

  return (
    <View style={[styles.searchBarContainer, isFocused && styles.searchBarContainerFocused]}>
      <TextInput
        style={[styles.searchBar, isFocused && styles.searchBarFocused]}
        placeholder="Search here"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <View style={styles.searchIconContainer}>
          <Ionicons name="search" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  searchBarContainerFocused: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    paddingRight: 40,
    fontSize: 16,
  },
  searchBarFocused: {
    width: '100%',
  },
  searchIconContainer: {
    backgroundColor: 'purple',
    borderRadius: 20, 
    padding: 5,
  },
});

export default SearchBar;