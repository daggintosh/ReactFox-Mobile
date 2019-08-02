import React, {Fragment} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image } from 'react-native';
import foxface from './foxface.png'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{flex: 1,backgroundColor: '#111111'}}>
        <Image source={foxface}  />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
