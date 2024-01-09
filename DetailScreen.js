import React from 'react';
import {View, Text} from 'react-native';
import {detailScreenTestIds} from './e2e/testIds';

const DetailScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View>
      <Text testID={detailScreenTestIds.title}>Title: {item.title}</Text>
      <Text testID={detailScreenTestIds.description}>
        Description: {item.description}
      </Text>
    </View>
  );
};

export default DetailScreen;
