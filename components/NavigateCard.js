import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "@rneui/base";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Jordan</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={250}
            styles={toInputBoxStyles}
            nearbyPlacesAPI="GooglePlacesSearch"
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            enablePoweredByContainer={false}
            minLength={2}
            returnKeyType={"search"}
            fetchDetails={true}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
        <NavFavourites />
        <View
          style={tw`flex flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCard")}
            style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text style={tw`text-center text-white`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
          >
            <Icon
              name="fast-food-outline"
              type="ionicon"
              color="white"
              size={16}
            />
            <Text style={tw`text-center text-white`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
