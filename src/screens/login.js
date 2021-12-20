import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {TextInput} from 'react-native-paper';

const login = props => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  function onSubmit() {
    console.log(name);
    console.log(pass);
    if (name != null && name != '' && pass != null && pass != '')
      props.navigation.navigate('Home');
    else alert('enter Name and Pass');
  }

  return (
    <View>
      <View style={styles.InputView}>
        <TextInput
          style={styles.TextInpColr}
          mode="outlined"
          label="Enter name"
          outlineColor="blue"
          activeOutlineColor="blue"
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          style={styles.TextInpColr}
          mode="outlined"
          label="Enter password"
          outlineColor="blue"
          activeOutlineColor="blue"
          secureTextEntry
          value={pass}
          onChangeText={pass => setPass(pass)}
          right={<TextInput.Icon name="eye" />}
        />
        <TouchableOpacity style={styles.TouchButton} onPress={onSubmit}>
          <Text style={styles.TextColr}>Submit</Text>
        </TouchableOpacity>
      </View>
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
  TextInpColr: {
    margin: 3,
  },
  TouchButton: {
    height: 40,
    width: 100,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  InputView: {
    margin: 10,
  },
});
