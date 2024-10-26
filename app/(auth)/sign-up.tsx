import {
  Image,
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import Oauth from "@/components/Oauth";
import { Link } from "expo-router";
import axios from "@/helpers/axios";

const SignUp = () => {
  let [errors, setErrors] = useState<any>(null);
  let [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  let signUpNow = async () => {
    try {
      let res = await axios.post("/api/users", form);
      let token = res.data.token; //may b store in secure store
      console.log(token);
    } catch (e: any) {
      if (e.response.status === 422) {
        setErrors(e.response.data?.errors);
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView>
        <View className="relative">
          <Image source={images.signUpCar} className="w-full h-[250px] z-0" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-3 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="h-full bg-white">
          <View className="mx-5 mt-6">
            <InputField
              value={form.name}
              onChangeText={(name) => setForm({ ...form, name })}
              label="Name"
              placeholder="Enter your name"
              icon={icons.person}
              error={errors?.name}
            />
            <InputField
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
              label="Email"
              placeholder="Enter your email"
              icon={icons.email}
              error={errors?.email}
            />
            <InputField
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
              label="Password"
              placeholder="Enter your password"
              icon={icons.lock}
              secureTextEntry
              error={errors?.password}
            />
            <CustomButton
              title="Sign Up"
              classNames="mt-6"
              onPress={signUpNow}
            />
            <Oauth />
            <Link
              href={"/(auth)/signin"}
              className="text-center text-lg text-general-200 mt-10"
            >
              Already have an account ?{" "}
              <Text className="text-primary-500">Log in</Text>
            </Link>
          </View>

          {/* verification modal */}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
