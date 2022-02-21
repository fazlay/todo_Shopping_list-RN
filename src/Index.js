import React, { useCallback, useState } from 'react';
import {
  Button,
  FlatList,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SingleItem from './SingleItem';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  const [shoppingList, setShoppingList] = useState([
    { name: 'Milk' },
    { name: 'Poweder' },
    { name: 'Ditergent' },
  ]);
  const [singleItem, setSingleItem] = useState([]);

  const handleChange = (e) => {
    console.log(e);
    setSingleItem({ name: e });
  };
  const handlePress = () => {
    // setShoppingList(...shoppingList, setSingleItem);
    // console.log(singleItem);
    setShoppingList([...shoppingList, singleItem]);
  };

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View>
        <Text>This is react Index fiel </Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            ref={(input) => {
              textInput = input;
            }}
            style={{
              margin: 12,
              borderWidth: 1,
              padding: 10,
              width: '80%',
            }}
            onChangeText={(e) => handleChange(e)}
            onBlur={(e) => {}}
            // onChangeText={(e) => {
            //   handleChange(e);
            // }}
            placeholder='useless placeholder'
            keyboardType='default'
          />

          <View>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                handlePress();
                textInput.clear();
              }}
            >
              <Ionicons
                name='add'
                size={24}
                color='black'
                style={{
                  marginTop: 12,
                  marginBottom: 12,
                  padding: 6,
                  paddingLeft: 8,
                  borderWidth: 1,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={shoppingList}
          renderItem={(shoppingList) => {
            return <SingleItem shoppingList={shoppingList} />;
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default Index;
