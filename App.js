import React, {Fragment} from 'react';
import { SafeAreaView, StatusBar, Image, View } from 'react-native';
import foxface from './foxface.png'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{flex: 1,backgroundColor: '#111111'}}>
        <Image source={{uri: 'https://dagg.xyz/randomfox/images/' + (Math.floor(Math.random() * 123) + 1) + '.jpg'}} style={{flex: 1, height: undefined, width: undefined}} resizeMode="contain"/>
      </SafeAreaView>
      <View style={{flex: 0.1, justifyContent: 'center', alignItems: "center", marginBottom: 0, backgroundColor: "#222222"}}>
        <Image source={foxface} style={{flex: 1, maxHeight: 50}} resizeMode="contain"  />
      </View>
    </Fragment>
  );
};


export default App;
