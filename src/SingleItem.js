import React from "react";
import { Text } from "react-native";

const SingleItem = (props) => {
  //   console.log(props.shoppingList.item.name);
  return <Text>{props?.shoppingList?.item?.name}</Text>;
};

export default SingleItem;
