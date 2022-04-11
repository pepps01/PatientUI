import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// Interface for Props
import {ProductTypes, ScreenDefaultProps} from '../../../@types/interface';

// Redux store && hooks

import {medication} from '../../../redux/features/purchaseMedication';
import Actions from '../../../redux/actions/medication';
import {useAppSelector, useAppDispatch} from '../../../hooks';

// Constants
import {SIZES} from '../../../constants';

// Components
import {FetchingErrorBox} from '../../shared';
import ProductItem from '../productItem';

// styles
import Styles from './styles';

const AllProductsCategory = ({navigation}: ScreenDefaultProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {error, loading, products} = useAppSelector(medication);
  return (
    <>
      <ScrollView horizontal={false}>
        {error && (
          <FetchingErrorBox
            btnTitle="Try Again"
            onPress={(): any => {
              dispatch(Actions.fetchProducts());
            }}
          />
        )}
        <View style={[Styles.productsContainer]}>
          {loading && (
            <>
              {Array.from({length: 10}, (_, idx) => {
                return (
                  <ProductItem
                    key={idx}
                    index={idx}
                    item={[]}
                    navigation={navigation}
                    loading={loading}
                  />
                );
              })}
            </>
          )}
          {products &&
            products.map((item: ProductTypes, index: number): any => {
              return (
                <ProductItem
                  key={index}
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              );
            })}
        </View>
        <View style={{height: SIZES.large}} />
      </ScrollView>
    </>
  );
};

export default AllProductsCategory;
