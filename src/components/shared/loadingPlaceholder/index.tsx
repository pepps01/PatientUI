import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type Props = {
  width: number;
  height: number;
  borderRadius?: number;
  marginTop?: number;
  marginLeft?: number;
  marginHorizontal?: number;
  marginVertical?: number;
};

const Placeholder = ({
  width,
  height,
  borderRadius,
  marginTop,
  marginLeft,
  marginHorizontal,
  marginVertical,
}: Props): JSX.Element => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width={width}
        height={height}
        borderRadius={borderRadius}
        marginTop={marginTop}
        marginLeft={marginLeft}
        marginHorizontal={marginHorizontal}
        marginVertical={marginVertical}
      />
    </SkeletonPlaceholder>
  );
};

Placeholder.defaultProps = {
  width: 0,
  height: 0,
  borderRadius: 0,
  marginTop: 0,
  marginLeft: 0,
  marginHorizontal: 0,
  marginVertical: 0,
};

export default Placeholder;
