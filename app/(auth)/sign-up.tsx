import { Image, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <View className="relative">
      <Image source={images.signUpCar} className="w-full h-[250px] z-0" />
      <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-0 left-5">
        Create Your Account
      </Text>
    </View>
  );
};

export default SignUp;
