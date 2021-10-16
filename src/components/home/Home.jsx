import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Hello World!</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
   },
   button: {
      marginTop: 20
   },
   text: {
      color: "#282828",
      fontSize: 18,
      fontWeight: "bold"
   }
});

export default Home;