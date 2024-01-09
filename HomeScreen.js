import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {homeScreenTestIds} from './e2e/testIds';

const newsData = [
  {id: 1, title: 'News 1', description: 'Description for News 1'},
  {id: 1, title: 'News 2', description: 'Description for News 2'},
  {id: 1, title: 'News 3', description: 'Description for News 3'},
  {id: 1, title: 'News 4', description: 'Description for News 4'},
  {id: 1, title: 'News 5', description: 'Description for News 5'},
  {id: 1, title: 'News 6', description: 'Description for News 6'},
  {id: 1, title: 'News 7', description: 'Description for News 7'},
  {id: 1, title: 'News 8', description: 'Description for News 8'},
  {id: 1, title: 'News 9', description: 'Description for News 9'},
  {id: 1, title: 'News 10', description: 'Description for News 10'},
  {id: 1, title: 'News 11', description: 'Description for News 11'},
  {id: 1, title: 'News 12', description: 'Description for News 12'},
  // ... Add more news items
];

const HomeScreen = ({navigation}) => {
  const handlePress = item => {
    navigation.navigate('Detail', {item});
  };

  return (
    <View testID={homeScreenTestIds.container} style={{flex: 1}}>
      <ScrollView
        testID={homeScreenTestIds.scrollView}
        style={{paddingVertical: 15, paddingHorizontal: 10}}>
        {newsData.map((item, index) => {
          const itemTestID = `${homeScreenTestIds.scrollView}_${index}`;
          return (
            <View style={{marginBottom: 10}}>
              <NewsItem onPress={handlePress} testID={itemTestID} data={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const NewsItem = ({onPress, testID, data}) => {
  const {title} = data;
  const _onPress = () => {
    onPress(data);
  };
  return (
    <TouchableOpacity testID={testID} onPress={_onPress}>
      <View
        style={{
          height: 80,
          borderColor: 'gray',
          borderWidth: 1,
          backgroundColor: 'white',
          borderRadius: 8,
        }}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreen;
