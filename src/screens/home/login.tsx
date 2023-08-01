import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const auth = FIREBASE_AUTH

  const navigation = useNavigation();

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
      alert('Logado com sucesso!')
      navigation.navigate('Home', response.user)
    } catch (e: any) {
      console.log(e)
      console.log("failed to login", e.message)
    } finally {
      setLoading(false)
    }
  }
    const signUp = async () => {
      setLoading(true)
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)
        alert('Cadastrado com sucesso!')
      } catch (e: any) {
        console.log(e)
        console.log("failed to create", e.message)
      } finally {
        setLoading(false)
      }
    }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
      <TextInput style={styles.input}
      value={email}
      placeholder="Email"
      onChangeText={setEmail}
      autoCapitalize='none'  
      />
      <TextInput style={styles.input}
      value={password}
      placeholder="Senha"
      onChangeText={setPassword}
      autoCapitalize='none'
      secureTextEntry
      />
      {
        loading ? (<ActivityIndicator size="large" color="#0000ff" />) :
         (
          <>
          <Button title="Entrar" onPress={signIn} />
          <Button title="Cadastrar" onPress={signUp} />
          </>
         )
      }
      </KeyboardAvoidingView>
    </View>
  )
}
export default Login

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      marginHorizontal: 20,
      justifyContent: 'center',
    },
    input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#fff',
    },
  }
);