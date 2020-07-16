import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    choicesContainer: {
      margin: 10,
      borderWidth: 2,
      paddingTop: 100,
      shadowRadius: 5,
      paddingBottom: 100,
      borderColor: 'grey',
      shadowOpacity: 0.90,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOffset: { height: 5, width: 5 },
    },
    choiceContainer: {
      flex: 1,
      alignItems: 'center',
    },
    choiceDescription: {
      fontSize: 25,
      color: '#250902',
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    choiceCardTitle: {
      fontSize: 30,
      color: '#250902'
    },
    choiceImage: {
      width: 150,
      height: 150,
      padding: 10,
    },
    button: {
        marginTop: 10,
        width: 200,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
      },
      buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight:'bold'
      }
  });

  export default styles;