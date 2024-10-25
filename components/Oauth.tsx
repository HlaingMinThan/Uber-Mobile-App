import { Image, Text, View } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const Oauth = () => {
  let handleGoogleSignIn = () => {};
  return (
    <View>
      <View className="mt-4 flex flex-row items-center gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100"></View>
        <View>
          <Text className="text-lg">Or</Text>
        </View>
        <View className="flex-1 h-[1px] bg-general-100"></View>
      </View>
      <View>
        <CustomButton
          onPress={handleGoogleSignIn}
          title="Sign Up With Google"
          classNames="mt-5 shadow-none"
          bgVariant="outline"
          textVariant="primary"
          IconLeft={() => (
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
          )}
        />
      </View>
    </View>
  );
};

export default Oauth;
