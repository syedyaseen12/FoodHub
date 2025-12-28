
import React from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet,} from 'react-native'

type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
  filters: string[];
  selectedFilter: string;
  onFilterSelect: (filter: string) => void;
};

const SearchBar = ({value,onChange,filters,onFilterSelect,}:SearchBarProps) => {
  return (
    <View style={styles.parentContainer}>

      <View style={styles.searchcontainer}>
        <TextInput placeholder="Search your Delicious Food." value={value} onChangeText={onChange} style={styles.input} />
      </View>
      <View style={styles.filterContainer}>
       {filters.map((filter)=>
       <TouchableOpacity key={filter}
       style={styles.filterButton}
        onPress={() => onFilterSelect(filter)}>
        <Text>{filter}</Text>
      </TouchableOpacity>)}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'column',
    marginTop: 2,
  },
  searchcontainer: {
    flexDirection: 'row',    
    padding: 8,
    marginTop: 4,
  },
  icon:{
    marginRight: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 12,
    padding: 8,
    backgroundColor:"white",
    marginRight: 8,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 12,
    padding: 8,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#FFE3C7',
    borderRadius: 12,
    marginRight: 8,
  },
  filterButtonText: {
    color: 'black',
  }
});


export default SearchBar;