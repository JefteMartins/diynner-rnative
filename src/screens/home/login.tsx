import { View, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { Heading } from 'native-base';
import { styles } from '../stylesScreen';
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
      alert('Cadastrado com sucesso!')
    } catch (e: any) {
      console.log(e)
      console.log("failed to create", e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
      <View style={styles.containerLogin}>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
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
