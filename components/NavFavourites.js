import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/base";

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Address 1",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Address 2",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]}></View>
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity
          onPress={() => console.log("PRESSED")}
          style={tw`flex-row items-center p-5`}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
