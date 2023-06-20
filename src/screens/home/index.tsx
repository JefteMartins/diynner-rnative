import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button } from 'react-native';
import { styles } from '../../components/styles';
import ImagesHome from '../../components/imagesHome';
import Toolbar from '../../components/toolbar';

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container} >
      <StatusBar style="auto" />

      <Toolbar />
      {/* componente dos cards */}
      <ImagesHome />
      <Button title="Go to Details" onPress={() => navigation.navigate('ImagesHome')} />
    </View>
  );
}