import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Icon, Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

const data = [
  {
    id: "uber-x",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "uber-xl",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "uber-lux",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-3 p-3 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="font-awesome" size={12} />
        </TouchableOpacity>
        <Text style={tw`text-center py-3 text-xl`}>Select a ride</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, multiplier, title, image }, item }) => (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={tw`flex-row items-center justify-between px-10 ${
                id === selected?.id && "bg-gray-200"
              }`}
            >
              <Image
                style={{ width: 90, height: 90, resizeMode: "contain" }}
                source={{ uri: image }}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>Travel time...</Text>
              </View>
              <Text style={tw`text-xl`}>$99</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-200"}`}
        >
          <Text style={tw`text-white text-center text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
