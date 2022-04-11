import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Hooks and store
import {authentication} from '../../../redux/features/auth';
import {
  setIdentityInfoEditing,
  identityInfoEditing,
} from '../../../redux/features/screenSlice';
import {useAppSelector, useAppDispatch} from '../../../hooks';

// Form Schemas
import {ProfileKYCSchema} from '../../../schemas';

// components
import {CardView, Dropdown, TextBox} from '../../shared';

// Constants
import {COLORS, Icons, FONTS, SIZES, DATA} from '../../../constants';

// Styles
import Styles from './styles';
import {Form, FormField, SubmitButton} from '../../forms';

const IdentityInfoItem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isEditing = useAppSelector(identityInfoEditing);
  const {user} = useAppSelector(authentication);
  const {address, gender, phone} = user?.profile;

  const startEdit = (): void => {
    dispatch(setIdentityInfoEditing(true));
  };
  const [pickerItem, setPickerItem] = useState('');

  // Submit Form
  const handleSubmit = async (values: any, actions: any): Promise<any> => {
    actions.setSubmitting(false);
    console.log('Values', values);
    actions.resetForm();
    dispatch(setIdentityInfoEditing(false));
  };
  return isEditing ? (
    <CardView customStyle={[Styles.formOverlay]}>
      <Form
        onSubmit={handleSubmit}
        validationSchema={ProfileKYCSchema}
        initialValues={{
          documentType: '',
          documentNumber: '',
          BVN: '',
        }}>
        <View style={[Styles.formContainer, Styles.editing]}>
          <View style={[Styles.formGroup]}>
            <View style={[Styles.formLabel]}>
              <Text
                style={[
                  FONTS.h3,
                  {
                    color: COLORS.textSecondary,
                    fontSize: SIZES.h4,
                  },
                ]}>
                Document Type
              </Text>
              <Text
                style={[
                  Styles.required,
                  {
                    color: COLORS.error,
                    marginTop: -SIZES.base,
                  },
                ]}>
                *
              </Text>
            </View>
            <Dropdown
              items={DATA?.IdentityInfo}
              placeholder="Select Document Type"
              selectedItem={pickerItem}
              onSelectedItem={(item: any) => setPickerItem(item)}
            />
          </View>
          <View style={[Styles.formGroup]}>
            <View style={[Styles.formLabel]}>
              <Text
                style={[
                  FONTS.h3,
                  {
                    color: COLORS.textSecondary,
                    fontSize: SIZES.h4,
                  },
                ]}>
                Upload Document
              </Text>
              <Text
                style={[
                  Styles.required,
                  {
                    color: COLORS.error,
                    marginTop: -SIZES.base,
                  },
                ]}>
                *
              </Text>
            </View>
            <FormField name="documentType" />
          </View>
          <View style={[Styles.formGroup]}>
            <View style={[Styles.formLabel]}>
              <Text
                style={[
                  FONTS.h3,
                  {
                    color: COLORS.textSecondary,
                    fontSize: SIZES.h4,
                  },
                ]}>
                {`${pickerItem} Number`}
              </Text>
              <Text
                style={[
                  Styles.required,
                  {
                    color: COLORS.error,
                    marginTop: -SIZES.base,
                  },
                ]}>
                *
              </Text>
            </View>
            <FormField
              name="documentNumber"
              placeholder="- - - - - - - - - - -"
            />
          </View>
          <View style={[Styles.formGroup]}>
            <View style={[Styles.formLabel]}>
              <Text
                style={[
                  FONTS.h3,
                  {
                    color: COLORS.textSecondary,
                    fontSize: SIZES.h4,
                  },
                ]}>
                BVN
              </Text>
              <Text
                style={[
                  Styles.required,
                  {
                    color: COLORS.error,
                    marginTop: -SIZES.base,
                  },
                ]}>
                *
              </Text>
            </View>
            <FormField name="BVN" placeholder="- - - - - - - - - - -" />
          </View>
        </View>

        <View style={[Styles.buttonContainer]}>
          <SubmitButton label="Update" variant="primary" loading={false} />
        </View>
      </Form>
    </CardView>
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
        <View style={[Styles.formGroup]}>
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondaryLight, fontSize: SIZES.h4},
            ]}>
            First Name
          </Text>
        </View>
        <View style={[Styles.formGroup]}>
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondaryLight, fontSize: SIZES.h4},
            ]}>
            Last Name
          </Text>
        </View>

        <View style={[Styles.formGroup]}>
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondaryLight, fontSize: SIZES.h4},
            ]}>
            Phone Number
          </Text>
        </View>
        <View style={[Styles.formGroup]}>
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondaryLight, fontSize: SIZES.h4},
            ]}>
            Physical Address
          </Text>
        </View>

        <View style={[Styles.formGroup]}>
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondaryLight, fontSize: SIZES.h4},
            ]}>
            Date of Birth
          </Text>
        </View>
        <View style={[Styles.formGroup]}>
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondaryLight, fontSize: SIZES.h4},
            ]}>
            Gender
          </Text>
        </View>
      </View>
    </CardView>
  );
};

export default IdentityInfoItem;
