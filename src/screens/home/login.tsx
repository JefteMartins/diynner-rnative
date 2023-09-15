import { Button, HStack, VStack, useToast } from 'native-base'
import { View, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../../FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { Heading } from 'native-base';
import { styles } from '../stylesScreen';
import ModalLogin from '../../components/modalLogin';
const Login = () => {
  const toast = useToast()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const auth = FIREBASE_AUTH

  const navigation = useNavigation();

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      toast.show({
        description: `Logado com sucesso!`,
      })
      navigation.navigate('Home', response.user)
    } catch (e: any) {
      console.log(e)
      console.log("failed to login", e.message)
      alert(`${e.message}`)
    } finally {
      setLoading(false)
    }
  }
  return (
    <View style={styles.containerLogin}>
      <VStack space="1" marginBottom={5} justifyContent="center" alignItems="center">
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
      </VStack>
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
                <HStack marginTop={5} space="4" justifyContent="center" alignItems="center">
                  <Button
                    onPressOut={signIn}
                  >
                    Entrar
                  </Button>
                  <ModalLogin />
                </HStack>
              </>
            )
        }
      </KeyboardAvoidingView>
    </View>
  )
}
export default Login
