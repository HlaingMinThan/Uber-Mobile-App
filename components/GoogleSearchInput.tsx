import { Image, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import "react-native-get-random-values";

const GoogleSearchInput = ({ icon }: any) => {
  return (
    <View className="mt-5 p-2">
      <GooglePlacesAutocomplete
        onPress={(data, details = null) => console.log(data, details)}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 20,
            paddingHorizontal: 20,
          },
        }}
        placeholder="Where do you want to go ?"
        fetchDetails={true}
        renderLeftButton={() => (
          <Image source={icon} className="w-5 h-5 mb-1" resizeMode="contain" />
        )}
      />
    </View>
  );
};

export default GoogleSearchInput;
