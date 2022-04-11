import React, {ReactNode, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as CustomTextInput,
  Pressable,
  Modal,
  Dimensions,
} from 'react-native';
import {useFormikContext} from 'formik';

// Components
import ErrorMessage from './errorMessage';
import GenderPickerItem from '../genderPickerItem';

// Constant && SVGs
import {COLORS, FONTS, SIZES, DATA} from '../../constants';
import GenderIcon from '../../assets/SVGs/gender-select.svg';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

type Props = {
  name: string;
  children?: ReactNode;
};

const GenderPicker = ({name, children, ...props}: Props): JSX.Element => {
  const {errors, setFieldTouched, setFieldValue, touched, values} =
    useFormikContext<any>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const isError = errors[name];
  const isTouched = touched[name];
  const borderColor = isTouched && isError ? COLORS.error : COLORS.inputBg;

  const openPicker = (): any => {
    setModalVisible(true);
  };

  return (
    <Pressable
      onPress={openPicker}
      style={[
        styles.container,
        {backgroundColor: COLORS.inputBg, borderColor},
      ]}>
      <View style={[styles.innerField]}>
        <View style={[styles.input]}>
          <CustomTextInput
            underlineColorAndroid="transparent"
            editable={false}
            textAlign="left"
            placeholderTextColor={COLORS.placeholder}
            placeholder="Gender"
            value={values[name]}
            onBlur={(): void => setFieldTouched(name)}
            onChangeText={(text): any => setFieldValue(name, text)}
            style={[
              {
                fontFamily: FONTS.MEDIUM,
                fontSize: SIZES.h4,
                padding: SIZES.small,
                color: COLORS.secondary,
              },
            ]}
            {...props}
          />
        </View>
        <View style={[styles.icon]}>
          {children ? children : <GenderIcon />}
        </View>
        {isTouched && !isError && (
          <View
            style={[
              styles.confirmInput,
              {borderColor: COLORS.success, backgroundColor: COLORS.success},
            ]}
          />
        )}
      </View>
      <View style={[styles.error]}>
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={(): any => {
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.modalContainer]}>
          <View style={[styles.textContainer]}>
            <Text style={[FONTS.h2, {color: COLORS.secondary}]}>
              Choose Gender
            </Text>
          </View>
          <View style={[styles.genderContainer]}>
            {DATA?.Gender &&
              DATA?.Gender.map((item: any, idx) => {
                return (
                  <GenderPickerItem
                    key={idx}
                    id={item.id}
                    label={item.value}
                    onPress={(): void => {
                      setModalVisible(!modalVisible);
                      setFieldValue(name, item.value);
                    }}
                  />
                );
              })}
          </View>
        </View>
      </Modal>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: 56,
    borderWidth: 1,
    marginVertical: 15,
  },
  innerField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    padding: 6,
  },
  confirmInput: {
    height: '100%',
    borderWidth: 1,
    width: 5,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  icon: {
    padding: 10,
  },
  error: {
    marginTop: 5,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    height: HEIGHT / 2,
    width: WIDTH,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.fullbackground,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  textContainer: {
    justifyContent: 'flex-end',
    marginBottom: 45,
    height: '30%',
    paddingHorizontal: SIZES.margin,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '70%',
    marginHorizontal: 20,
  },
});

export default GenderPicker;
