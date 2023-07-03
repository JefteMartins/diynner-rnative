import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { styles } from './styles';

export default function TextInputExample () {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder='Pesquisa por uma receita aí...'
        value={text}
      />
    </SafeAreaView>
  );
};
