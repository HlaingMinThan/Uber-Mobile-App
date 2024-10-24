import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-swiper";
import { data } from "@/constants/index";
import CustomButton from "@/components/CustomButton";

const Index = () => {
  const swiperRef = useRef<Swiper>(null);

  return (
    <SafeAreaView className="flex h-full justify-between items-center">
      <TouchableOpacity className="w-full items-end p-5">
        <Text className="text-black font-JakartaBold text-md">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1  rounded-full bg-[#E2E8F0]"></View>
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1  rounded-full bg-[#02E8FF]"></View>
        }
      >
        {data.onboarding.map((item: any) => (
          <View key={item.id}>
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            ></Image>
            <View className="w-full mt-10 flex items-center justify-center">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title} with{" "}
                <Text className="text-primary-500 ">Ryde</Text>
              </Text>
              <Text className="mt-3 text-lg text-[#858585] font-JakartaSemiBold font-bold mx-10 text-center">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <View className="w-full p-5">
        <CustomButton title="Next"></CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default Index;
