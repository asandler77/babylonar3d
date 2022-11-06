import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {BabylonDrawer} from './BabylonDrawer';
import {BABYLON_ACTION_SHEET} from './const';
import {SheetManager} from 'react-native-actions-sheet';

const App = () => {
  const onPress = () => {
    SheetManager.show(BABYLON_ACTION_SHEET);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ActionSheetProvider>
        <Button title={'Open 3D'} onPress={onPress} />
      </ActionSheetProvider>
      <BabylonDrawer />
    </SafeAreaView>
  );
};

export default App;
