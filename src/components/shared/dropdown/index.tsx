import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// Interface for props
import {DropdownProps} from '../../../@types/interface';

// Constant && Data
import {COLORS, Icons, FONTS, SIZES} from '../../../constants';
import Styles from './styles';

const Dropdown = ({
  children,
  items,
  placeholder,
  selectedItem,
  onSelectedItem,
}: DropdownProps): JSX.Element => {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <Pressable style={[Styles.container]}>
      <TouchableOpacity
        onPress={(): void => {
          setShowPicker(true);
        }}
        style={[
          Styles.dropdown,
          {
            backgroundColor: COLORS.textInputBg,
            borderColor: COLORS.primary,
          },
        ]}>
        {selectedItem ? (
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondaryLight, fontSize: SIZES.h4},
            ]}>
            {selectedItem}
          </Text>
        ) : (
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondaryLight, fontSize: SIZES.h4},
            ]}>
            {placeholder}
          </Text>
        )}
        <View>
          {children ? (
            children
          ) : showPicker ? (
            <Icons.Entypo
              name="chevron-thin-up"
              size={12}
              color={COLORS.secondaryLight}
            />
          ) : (
            <Icons.Entypo
              name="chevron-thin-down"
              size={12}
              color={COLORS.secondaryLight}
            />
          )}
        </View>
      </TouchableOpacity>

      {showPicker && (
        <View
          style={[
            Styles.dropdownItem,
            {
              backgroundColor: COLORS.textInputBg,
              borderColor: COLORS.primary,
            },
          ]}>
          {items.map((item, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                style={[
                  Styles.dropdownContents,
                  {
                    backgroundColor: COLORS.textInputBg,
                  },
                ]}
                onPress={() => {
                  onSelectedItem(item.label);
                  setShowPicker(false);
                }}>
                <Text
                  style={[
                    FONTS.h3,
                    {color: COLORS.secondaryLight, fontSize: SIZES.h4},
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </Pressable>
  );
};

export default Dropdown;
