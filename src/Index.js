import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SingleItem from "./SingleItem";
import { Ionicons } from "@expo/vector-icons";

const Index = () => {
  const [shoppingList, setShoppingList] = useState([
    { name: "Milk" },
    { name: "Poweder" },
    { name: "Ditergent" },
  ]);
  const [singleItem, setSingleItem] = useState([]);

  const handleChange = (e) => {
    setSingleItem({ name: e });
  };
  const handlePress = (e) => {
    // setShoppingList(...shoppingList, setSingleItem);
    console.log(singleItem);
  };
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View>
        <Text>This is react Index fiel </Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              width: "80%",
            }}
            onBlur={(e) => console.log(e.target.value)}
            // onChangeText={(e) => {
            //   handleChange(e);
            // }}
            placeholder="useless placeholder"
            keyboardType="default"
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                handlePress();
              }}
            >
              <Ionicons
                name="add"
                size={24}
                color="black"
                style={{
                  marginTop: 12,
                  marginBottom: 12,
                  padding: 6,
                  paddingLeft: 8,
                  borderWidth: 1,
                }}
              />
            </TouchableOpacity>
            {/* <Ionicons
                name="add"
                size={24}
                color="black"
                style={{
                  marginTop: 12,
                  marginBottom: 12,
                  padding: 6,
                  paddingLeft: 8,
                  borderWidth: 1,
                }}
              /> */}
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
