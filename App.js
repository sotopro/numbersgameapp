import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/start-game';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Adivina el numero' />
      <StartGameScreen />
    </View>
  );
}