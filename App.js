import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo'; // import the hook

const App = () => {
  const netInfo = useNetInfo(); // declare the constant

  return (
    <View style={styles.container}>
      <Text>Connection Status</Text>
      <View
        style={{
          marginTop: 20,
          width: 50,
          height: 50,
          backgroundColor: netInfo.isConnected ? 'green' : 'red', // change the boolean here to our constant
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
