import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import ImagesHome from '../components/imagesHome';
import Toolbar from '../components/toolbar';

export default function Home() {
  return (
    <View style={styles.container} >
      <StatusBar style="auto" />

			<Toolbar />
			{/* componente dos cards */}
      <ImagesHome />
    </View>
  );
}