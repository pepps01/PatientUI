import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AgoraUIKit, {PropsInterface} from 'agora-rn-uikit';
import SafeAreaView from 'react-native-safe-area-view';
import {AGORA_APP_ID} from '@env';

// Components
import {AppStatusBar, CustomButton} from '../shared';

// Constants
import {COLORS, SIZES} from '../../constants';

const VideoRTC = (): JSX.Element => {
  const [videoCall, setVideoCall] = useState(false);
  const props: PropsInterface = {
    rtcProps: {
      appId: AGORA_APP_ID,
      channel: 'test',
    },
    callbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppStatusBar
        backgroundColor={
          videoCall === true ? COLORS.transparent : COLORS.fullbackground
        }
        barStyle={videoCall ? 'light-content' : 'dark-content'}
      />
      {videoCall ? (
        <View style={{...StyleSheet.absoluteFillObject}}>
          <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: SIZES.margin,
          }}>
          <CustomButton
            variant="primary"
            loading={videoCall}
            onPress={(): void => setVideoCall(true)}
            label="Start Call"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default VideoRTC;
