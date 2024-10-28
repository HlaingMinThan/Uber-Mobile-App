import { Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import InputField from "@/components/InputField";
import RideCard from "@/components/RideCard";

const Home = () => {
  return (
    <SafeAreaView className="bg-general-500 h-full p-4">
      {/* Header */}
      <View>
        <View className="flex flex-row justify-between items-center ">
          <Text className="text-black font-JakartaSemiBold text-2xl ">
            Welcome Back
          </Text>
          <View className=" bg-white  rounded-full p-2">
            <Image source={icons.out} className="w-6 h-6" />
          </View>
        </View>
        <View className="mt-5">
          <InputField
            placeholder="Email"
            className="bg-whtie"
            icon={icons.search}
            inputStyle="text-[18px]"
          />
        </View>
      </View>
      {/* Recent Rides */}
      <View className="mt-5">
        <Text className="text-black font-JakartaSemiBold text-xl my-4">
          Recent Rides
        </Text>
        {/* RideCard */}
        <RideCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;
