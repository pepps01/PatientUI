import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
} from 'react-native';

// Interface for props
import {ProductItemProps} from '../../../@types/interface';

// Redux and State management
import {addToCart} from '../../../redux/features/cart';
import {useAppDispatch} from '../../../hooks';

// Components && Routes constants
import {CardView, Placeholder} from '../../shared';
import {SINGLE_PRODUCT} from '../../../navigation/routes';

// Constants
import {COLORS, FONTS, Icons, SIZES} from '../../../constants';

// Styles
import Styles from './styles';

const ProductItem = ({item, navigation, index, loading}: ProductItemProps) => {
  const dispatch = useAppDispatch();

  // Make it look zizag
  const marginTop = index % 2 === 0 ? 0 : 40;

  return (
    <CardView
      customStyle={[
        Styles.cardContainer,
        {marginTop, borderRadius: SIZES.padding},
      ]}>
      <TouchableOpacity
        style={[Styles.cardGrid]}
        onPress={(): any => {
          navigation.navigate(SINGLE_PRODUCT, {item});
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={[Styles.imageGrid]}>
            {loading ? (
              <Placeholder width={80} height={69} borderRadius={SIZES.radius} />
            ) : (
              <Image
                style={[Styles.image, {borderRadius: SIZES.radius}]}
                source={{uri: 'https://picsum.photos/200/300'}}
                resizeMode="cover"
              />
            )}
          </View>
        </View>

        <View style={[Styles.drugsDescription]}>
          <View style={[Styles.namePriceTitle]}>
            {loading ? (
              <Placeholder width={70} height={15} borderRadius={5} />
            ) : (
              <Text style={[FONTS.h4, {color: COLORS.secondary}]}>
                {(item?.name).slice(0, 16)}
              </Text>
            )}
            {loading ? (
              <Placeholder
                width={40}
                height={15}
                borderRadius={5}
                marginVertical={15}
              />
            ) : (
              <Text style={[FONTS.h4, {color: COLORS.error}]}>
                ₦ {item?.price}
              </Text>
            )}
          </View>
          <Pressable onPress={(): void => dispatch(addToCart(item as any))}>
            {loading ? (
              <Placeholder width={20} height={20} borderRadius={50} />
            ) : (
              <View style={[Styles.button, {borderColor: COLORS.primary}]}>
                <Icons.Feather name="plus" size={15} color={COLORS.primary} />
              </View>
            )}
          </Pressable>
        </View>
      </TouchableOpacity>
    </CardView>
  );
};

export default ProductItem;
