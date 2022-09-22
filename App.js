import React, { useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './components/header';
import GameScreen from './screens/game';
import StartGameScreen from './screens/start-game';
import GameOverScreen from './screens/game-over';
import { colors } from './constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});


export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });
  const  title = !userNumber ? 'Adivina un numero' : 'Comienza el juego';
  
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const onGameOver = (roundsNumber) => {
    setRounds(roundsNumber);
  }

  const onRestartGame = () => {
    setUserNumber(0);
    setRounds(0);
  }

  if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }

  let content = <StartGameScreen onStartGame={onStartGame} />
  
  if(userNumber && rounds <= 0) {
    content = <GameScreen selectedNumber={userNumber} onGameOver={onGameOver} />
  } else if(rounds > 0) {
    content = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onRestart={onRestartGame} />
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title={rounds > 0 ? 'Game Over' : title} />
      {content}
    </SafeAreaView>
  );
}