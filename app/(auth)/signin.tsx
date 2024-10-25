import {
  Image,
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import { images } from "@/constants";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import Oauth from "@/components/Oauth";
import { Link } from "expo-router";

const SignIn = () => {
  let SignInNow = () => {
    Alert.alert("sign up");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView>
        <View className="relative">
          <Image source={images.signUpCar} className="w-full h-[250px] z-0" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-3 left-5">
            Welcome
          </Text>
        </View>
        <View className="h-full bg-white">
          <View className="mx-5 mt-6">
            <InputField
              label="Email"
              placeholder="Enter your email"
              icon={icons.email}
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              icon={icons.lock}
              secureTextEntry
            />
            <CustomButton
              title="Sign In"
              classNames="mt-6"
              onPress={SignInNow}
            />
            <Oauth />
            <Link
              href={"/(auth)/sign-up"}
              className="text-center text-lg text-general-200 mt-10"
            >
              Don't have an account ?{" "}
              <Text className="text-primary-500">Sign up</Text>
            </Link>
          </View>

          {/* verification modal */}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
