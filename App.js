import React, {Fragment, useState} from 'react';
import { SafeAreaView, StatusBar, Image, View, TouchableOpacity } from 'react-native';
import foxface from './foxface.png'

const App = () => {
  const [imgkey, setkey] = useState(1);
  const refresh = () => setkey(imgkey + 1);
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1,backgroundColor: '#111111'}}>
        <Image source={{ uri: "https://dagg.xyz/randomfox/images/" + (Math.floor(Math.random() * 123) + 1) + ".jpg" }} style={{flex: 1, height: undefined, width: undefined}} resizeMode="contain"/>
      </SafeAreaView>
      <View style={{flex: 0.1, justifyContent: 'center', alignItems: "center", marginBottom: 0, backgroundColor: "#222222"}}>
        <TouchableOpacity onPress={refresh} style={{maxWidth: 50, alignItems: "center"}}>
          <Image source={foxface} style={{flex: 1, maxHeight: 50}} resizeMode="contain" key={imgkey}/>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default App;
