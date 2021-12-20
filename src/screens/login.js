import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const login = props => {
  return (
    <View style={styles.Container}>
      <View>
        <TextInput style={styles.TextColr} placeholder="Enter Name" />
      </View>
      <TouchableOpacity
        style={styles.TouchButton}
        onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.TextColr}>Click Here</Text>
      </TouchableOpacity>
      <Text style={styles.TextColr}>Login</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextColr: {
    color: 'black',
  },
  TouchButton: {
    height: 40,
    width: 100,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
