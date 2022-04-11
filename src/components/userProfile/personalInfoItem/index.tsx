import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Hooks and store
import {authentication, loginUserSuccess} from '../../../redux/features/auth';
import {
  setPersonalInfoEditing,
  personalInfoEditing,
} from '../../../redux/features/screenSlice';
import {
  useAppSelector,
  useAppDispatch,
  useLocationPermission,
} from '../../../hooks';

// AuthAPI, Schemas && Storage
import AuthApi from '../../../services/auth';
import {ProfileUpdateSchema} from '../../../schemas';
import AuthStorage from '../../../utils/storage';

// components
import {
  DobPicker,
  Form,
  FormField,
  GenderDropdown,
  SubmitButton,
} from '../../forms';
import {CardView, TextBox} from '../../shared';

// Constants
import {COLORS, Icons, FONTS, SIZES, KEYS} from '../../../constants';

// Styles
import Styles from './styles';

const PersonalInfoItem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isEditing = useAppSelector(personalInfoEditing);
  const {location} = useLocationPermission();
  const {user} = useAppSelector(authentication);
  const {address, gender, phone} = user?.profile;
  const {latitude, longitude} = location;

  const startEdit = (): void => {
    dispatch(setPersonalInfoEditing(true));
  };

  const handleSubmit = async (values: any, actions: any): Promise<any> => {
    actions.setSubmitting(false);

    // Get User Token from AsyncStorage
    const token = await AuthStorage.getToken(KEYS?.AUTH_TOKEN_KEY);
    const result = await AuthApi.updateProfile(
      {...values, latitude, longitude},
      JSON.parse(token),
    );
    actions.resetForm();
    dispatch(loginUserSuccess(result?.data?.data));
    // Store user details in the storage
    AuthStorage.storeUserData(KEYS?.USER_INFO_KEY, result?.data?.data);
    dispatch(setPersonalInfoEditing(false));
  };

  return isEditing ? (
    <>
      <CardView customStyle={[Styles.formOverlay]}>
        <Form
          onSubmit={handleSubmit}
          validationSchema={ProfileUpdateSchema}
          initialValues={{
            firstName: user?.firstName,
            lastName: user?.lastName,
            phone,
            dob: user?.dateOfBirth,
            address,
            gender,
          }}>
          <View style={[Styles.formContainer, Styles.editing]}>
            <View style={[Styles.formRow]}>
              <View style={[Styles.formGroup, Styles.formSplit]}>
                <Text
                  style={[
                    FONTS.h3,
                    {color: COLORS.textSecondary, fontSize: SIZES.h4},
                  ]}>
                  First Name
                </Text>
                <FormField name="firstName" placeholder={user?.firstName} />
              </View>
              <View style={[Styles.formGroup, Styles.formSplit]}>
                <Text
                  style={[
                    FONTS.h3,
                    {color: COLORS.textSecondary, fontSize: SIZES.h4},
                  ]}>
                  Last Name
                </Text>
                <FormField name="lastName" placeholder={user?.lastName} />
              </View>
            </View>
            <View style={[Styles.formGroup]}>
              <Text
                style={[
                  FONTS.h3,
                  {
                    color: COLORS.textSecondary,
                    fontSize: SIZES.h4,
                  },
                ]}>
                Phone Number
              </Text>
              <FormField
                name="phone"
                placeholder={phone}
                maxLength={11}
                keyboardType="number-pad"
              />
            </View>
            <View style={[Styles.formGroup]}>
              <Text
                style={[
                  FONTS.h3,
                  {color: COLORS.textSecondary, fontSize: SIZES.h4},
                ]}>
                Physical Address
              </Text>
              <FormField name="address" />
            </View>
            <View style={[Styles.formRow]}>
              <View style={[Styles.formGroup, , Styles.formSplit]}>
                <Text
                  style={[
                    FONTS.h3,
                    {color: COLORS.textSecondary, fontSize: SIZES.h4},
                  ]}>
                  Date of Birth
                </Text>
                <DobPicker name="dob" placeholder={user?.dateOfBirth} />
              </View>
              <View style={[Styles.formGroup, Styles.formSplit]}>
                <Text
                  style={[
                    FONTS.h3,
                    {color: COLORS.textSecondary, fontSize: SIZES.h4},
                  ]}>
                  Gender
                </Text>
                <GenderDropdown name="gender" />
              </View>
            </View>
          </View>

          <View style={[Styles.buttonContainer]}>
            <SubmitButton label="Update" variant="primary" loading={false} />
          </View>
        </Form>
      </CardView>
    </>
  ) : (
    <CardView customStyle={[Styles.formOverlay]}>
      <TouchableOpacity
        onPress={startEdit}
        style={[Styles.editContainer, {backgroundColor: COLORS.primary}]}>
        <Icons.MaterialCommunityIcons
          name="account-edit"
          size={15}
          color={COLORS.white}
        />
      </TouchableOpacity>
      <View style={[Styles.formContainer]}>
        <View style={[Styles.formRow]}>
          <View style={[Styles.formGroup, Styles.formSplit]}>
            <Text
              style={[
                FONTS.h3,
                {color: COLORS.textSecondary, fontSize: SIZES.h4},
              ]}>
              First Name
            </Text>
            <TextBox label={user?.firstName} />
          </View>
          <View style={[Styles.formGroup, Styles.formSplit]}>
            <Text
              style={[
                FONTS.h3,
                {color: COLORS.textSecondary, fontSize: SIZES.h4},
              ]}>
              Last Name
            </Text>
            <TextBox label={user?.lastName} />
          </View>
        </View>
        <View style={[Styles.formGroup]}>
          <Text
            style={[
              FONTS.h3,
              {
                color: COLORS.textSecondary,
                fontSize: SIZES.h4,
              },
            ]}>
            Phone Number
          </Text>
          <TextBox label={phone} />
        </View>
        <View style={[Styles.formGroup]}>
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.textSecondary, fontSize: SIZES.h4},
            ]}>
            Physical Address
          </Text>
          <TextBox label={address} />
        </View>
        <View style={[Styles.formRow]}>
          <View style={[Styles.formGroup, , Styles.formSplit]}>
            <Text
              style={[
                FONTS.h3,
                {color: COLORS.textSecondary, fontSize: SIZES.h4},
              ]}>
              Date of Birth
            </Text>
            <TextBox label={user?.dateOfBirth} />
          </View>
          <View style={[Styles.formGroup, Styles.formSplit]}>
            <Text
              style={[
                FONTS.h3,
                {color: COLORS.textSecondary, fontSize: SIZES.h4},
              ]}>
              Gender
            </Text>
            <TextBox label={gender} />
          </View>
        </View>
      </View>
    </CardView>
  );
};

export default PersonalInfoItem;
