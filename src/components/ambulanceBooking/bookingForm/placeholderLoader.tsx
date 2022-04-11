import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PlaceholderLoader = (): JSX.Element => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item width="100%" height={45} borderRadius={10} />
    </SkeletonPlaceholder>
  );
};

export default PlaceholderLoader;
