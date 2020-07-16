import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './styles/styles'
import Button from './components/Button'
import ChoiceCard from './components/ChoiceCard'
import rock from './assets/rock.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'

const CHOICES = [
  {
    name: 'rock',
    uri: rock
  },
  {
    name: 'paper',
    uri: paper
  },
  {
    name: 'scissors',
    uri:
      scissors
  }
];


export default function App() {
  const [gamePrompt, setGamePrompt] = useState('Choose your weapon!')
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [count, setCount] = useState(0)
  const [countWon, setCountWon] = useState(0)
  const [countLose, setCountLose] = useState(0)
  const [countTied, setCountTied] = useState(0)

  const onPress = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  const getRoundOutcome = userChoice => {
    setCount(count + 1)
    const computerChoice = randomComputerChoice().name;
    let result;

    if (userChoice === 'rock') {
      result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
      result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
      result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }

    if (userChoice === computerChoice) result = 'Tie game!';
    result === 'Victory!' ? setCountWon(countWon + 1) : result === 'Defeat!' ? setCountLose(countLose + 1) : setCountTied(countTied + 1)
    return [result, computerChoice];
  };

  const randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];

  const getResultColor = () => {
    if (gamePrompt === 'Victory!') return 'green';
    if (gamePrompt === 'Defeat!') return 'red';
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: getResultColor() }}>{gamePrompt}</Text>
      <View style={styles.choicesContainer}>
        <ChoiceCard
          player="Player"
          choice={userChoice}
        />
        <Text style={{ color: '#250902' }}>vs</Text>
        <ChoiceCard
          player="Computer"
          choice={computerChoice}
        />
      </View>

      {
        CHOICES.map(choice => {
          return <Button key={choice.name} name={choice.name} onPress={onPress} />;
        })
      }
      <Text style={{color: 'blue', fontWeight: 'bold'}}>Total game played: {count}</Text>
      <Text style={{color: 'green', fontWeight: 'bold'}}>Won game played: {countWon}, percentages: {count === 0 ? 0 : Math.floor(countWon / count * 100)}%</Text>
      <Text style={{color: 'red', fontWeight: 'bold'}}>Lose game played: {countLose}, percentages: {count === 0 ? 0 : Math.floor(countLose / count * 100)}%</Text>
      <Text style={{color: 'grey', fontWeight: 'bold'}}>Tied game played: {countTied}, percentages: {count === 0 ? 0 : Math.floor(countTied / count * 100)}%</Text>
    </View>
  );
}


