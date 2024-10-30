import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { router } from "expo-router";

const RideCard = ({
  ride: {
    destination_latitude,
    destination_longitude,
    origin_latitude,
    origin_longitude,
  },
}: {
  ride: any;
}) => {
  return (
    <TouchableOpacity onPress={() => router.push("/find-ride")}>
      <View className="bg-white p-4 rounded-2xl mt-3">
        <View className="flex flex-row space-x-5 items-center">
          <View className="w-20 h-20 rounded-lg flex justify-center items-center">
            <Image
              source={{
                uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
              }}
              className="w-full h-full rounded-lg"
            />
          </View>
          <View className="space-y-2">
            <View className="flex items-center flex-row space-x-2">
              <Image
                source={icons.to}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="font-Jakarta text-[16px]">
                1901 Thornridge Cir. Shiloh
              </Text>
            </View>
            <View className="flex items-center flex-row space-x-2">
              <Image
                source={icons.point}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="font-Jakarta text-[16px]">
                1901 Thornridge Cir. Shiloh
              </Text>
            </View>
          </View>
        </View>
        <View className="bg-general-500 mt-5 rounded-2xl p-1">
          <View className="flex flex-row justify-between items-center p-4">
            <Text className="text-[16px] font-Jakarta">Date & Time </Text>
            <Text className="text-[16px] font-JakartaSemiBold">
              16 July 2023, 10:30 PM
            </Text>
          </View>
          <View className="h-[3px] w-[92%] mx-auto bg-white"></View>
          <View className="flex flex-row justify-between items-center p-4">
            <Text className="text-[16px] font-Jakarta">Driver</Text>
            <Text className="text-[16px] font-JakartaSemiBold">
              Jane Cooper
            </Text>
          </View>
          <View className="h-[3px] w-[92%] mx-auto bg-white"></View>
          <View className="flex flex-row justify-between items-center p-4">
            <Text className="text-[16px] font-Jakarta">Car Seats</Text>
            <Text className="text-[16px] font-JakartaSemiBold">4</Text>
          </View>
          <View className="h-[3px] w-[92%] mx-auto bg-white"></View>
          <View className="flex flex-row justify-between items-center p-4">
            <Text className="text-[16px] font-Jakarta">Payment Status</Text>
            <Text className="text-[16px] font-JakartaSemiBold text-green-500">
              paid
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RideCard;
