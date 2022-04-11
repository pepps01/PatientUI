import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

// Components
import {AppStatusBar, CustomButton} from '../../../../../components/shared';

// Styles && Colors
import {COLORS, STYLES, FONTS} from '../../../../../constants';
import Styles from './styles';

const ScanPreview = (): JSX.Element => {
  const [hasPermission, setHasPermission] = useState<boolean | any>(false);
  const devices = useCameraDevices();
  const device: any = devices.back;

  const requestCameraPermission = async (): Promise<any> => {
    const status = await Camera.requestCameraPermission();
    setHasPermission(status === 'authorized');
  };

  // Get User Camera Permission
  useEffect(() => {
    requestCameraPermission();
  }, []);

  if (device == null)
    return (
      <ActivityIndicator
        color={COLORS.primary}
        size="large"
        style={[Styles.requestPermission]}
      />
    );

  if (!hasPermission) {
    return (
      <SafeAreaView
        style={[STYLES.container, {backgroundColor: COLORS.fullbackground}]}>
        <AppStatusBar backgroundColor={COLORS.fullbackground} />
        <View style={[Styles.requestPermission]}>
          <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
            No access to camera
          </Text>
          <CustomButton
            variant="primary"
            label="ALLOW CAMERA"
            onPress={requestCameraPermission}
            loading={hasPermission}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    device != null &&
    hasPermission && (
      <SafeAreaView style={[Styles.container]}>
        <AppStatusBar hidden />
        <Camera
          style={Styles.camera}
          device={device}
          isActive={true}
          frameProcessorFps={5}
        />
      </SafeAreaView>
    )
  );
};

export default ScanPreview;
