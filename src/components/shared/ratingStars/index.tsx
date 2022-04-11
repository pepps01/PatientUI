import React, {Fragment} from 'react';
import {View} from 'react-native';

// Styles, Icons, Colors
import Styles from './styles';
import {COLORS, Icons} from '../../../constants';

type RatingStarProps = {
  rating: number;
};

const RatingStars = (rating: RatingStarProps): JSX.Element => {
  return (
    <Fragment>
      {Array.from({length: 5}, (v, i) => {
        const number: any = i + 0.5;
        const fill: any = i + 1;
        const fillStar = rating?.rating;

        return (
          <View key={i}>
            {fillStar >= fill ? (
              <Icons.FontAwesome
                name="star"
                size={14}
                color={COLORS.star}
                style={[Styles.icon]}
              />
            ) : fillStar >= number ? (
              <Icons.FontAwesome
                name="star-half-o"
                size={14}
                color={COLORS.star}
                style={[Styles.icon]}
              />
            ) : (
              <Icons.FontAwesome
                name="star-o"
                size={14}
                color={COLORS.star}
                style={[Styles.icon]}
              />
            )}
          </View>
        );
      })}
    </Fragment>
  );
};

export default RatingStars;
