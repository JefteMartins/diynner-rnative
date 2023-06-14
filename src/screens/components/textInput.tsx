import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { styles } from '../home/styles';

export default function TextInputExample () {
  const [text, onChangeText] = React.useState('Pesquisa por uma receita aí...');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};
