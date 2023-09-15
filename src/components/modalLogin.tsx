import React from "react";
import { useToast, Modal, Button, Input, FormControl, HStack, Center, NativeBaseProvider, Box, Heading, VStack } from "native-base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

export default function ModalLogin() {
  const toast = useToast()
  const auth = FIREBASE_AUTH
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const signInInvalid = async () => {
    toast.show({
      description: "As senhas não conferem!",
    })
  }

  const signUp = async () => {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      alert('Cadastrado com sucesso!')
    } catch (e: any) {
      console.log(e)
      console.log("failed to create", e.message)
      toast.show({
        description: `${e.message}`,
      })
    } finally {
      setLoading(false)
    }
  }
  return <>
    <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Cadastre-se</Modal.Header>
        <Modal.Body>
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input value={email} onChangeText={setEmail} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input value={password} onChangeText={setPassword} type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input value={confirmPassword} onChangeText={setConfirmPassword} type="password" />
            </FormControl>
            {
              loading ? (<ActivityIndicator size="large" color="#0000ff" />) : (
                <Button
                  mt="2"
                  colorScheme="indigo"
                  onPressOut={
                    password === confirmPassword ? signUp : signInInvalid
                  }
                  >
                  Sign up
                </Button>
              )
            }
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
    <HStack space="4" justifyContent="center" alignItems="center">
      <Button onPress={() => {
        setModalVisible(!modalVisible);
      }}>
        Cadastre-se
      </Button>
    </HStack>
  </>;
}

