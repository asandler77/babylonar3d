import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, ViewProps} from 'react-native';
import {EngineView, useEngine} from '@babylonjs/react-native';
import {SceneLoader} from '@babylonjs/core/Loading/sceneLoader';
import {Camera} from '@babylonjs/core/Cameras/camera';
import '@babylonjs/loaders/glTF';

export const EngineScreen: FunctionComponent<ViewProps> = (
  props: ViewProps,
) => {
  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();
  useEffect(() => {
    console.log('engine........', engine);
    if (engine) {
      const url =
        'https://www.att.com/idpassets/images/sales/ar-vr/galaxy-z-flip4/B4_Graphite.gltf';
      SceneLoader.LoadAsync(url, undefined, engine).then(scene => {
        scene.createDefaultCameraOrLight(true, undefined, true);
        setCamera(scene.activeCamera!);
      });
    }
  }, [engine]);
  return (
    <>
      <View style={props.style}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <EngineView
            camera={camera}
            displayFrameRate={true}
            style={{backgroundColor: 'white'}}
          />
        </View>
      </View>
    </>
  );
};
