import React, {ReactElement} from 'react';
import {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {BABYLON_ACTION_SHEET} from './const';
import {EngineScreen} from './components/EngineScreen';

export const BabylonDrawer = (): ReactElement => {
  return (
    <ActionSheet
      gestureEnabled={true}
      id={BABYLON_ACTION_SHEET}
    >
      <View style={{height: '90%'}}>
        {/*<Text style={{fontSize: 70}}>KUKUKUKU</Text>*/}
        <EngineScreen style={{flex: 1}} />
      </View>
    </ActionSheet>
  );
};
