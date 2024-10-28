import { Image, Text, View } from "react-native";
import React from "react";
import { icons } from "@/constants";

type Props = {};

const RideCard = (props: Props) => {
  return (
    <View className="bg-white p-4 rounded-2xl mt-3">
      <View className="flex flex-row space-x-5 items-center">
        <View className="w-20 h-20 bg-red-100  rounded-lg flex justify-center items-center">
          {/* <Image source={icons.map} className="w-8 h-8" /> */}
        </View>
        <View className="space-y-2">
          <View className="flex items-center flex-row space-x-2">
            <Image source={icons.to} className="w-6 h-6" resizeMode="contain" />
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
          <Text className="text-[16px] font-JakartaSemiBold">Jane Cooper</Text>
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
  );
};

export default RideCard;
