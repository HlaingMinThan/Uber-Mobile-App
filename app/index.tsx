import { Text, SafeAreaView, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-swiper";
import { data } from "@/constants/index";

const Index = () => {
  const swiperRef = useRef<Swiper>(null);

  return (
    <SafeAreaView className="flex h-full justify-between items-center">
      <TouchableOpacity className="w-full items-end p-5">
        <Text className="text-black font-JakartaBold text-md">Skip</Text>
      </TouchableOpacity>

      <Swiper ref={swiperRef}>
        {data.onboarding.map((item: any) => (
          <View
            key={item.id}
            className="w-full h-full flex items-center justify-center"
          >
            <Text className="text-black font-JakartaBold text-2xl">
              {item.title}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Index;
