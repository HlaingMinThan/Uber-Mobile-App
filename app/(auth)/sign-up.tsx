import {
  Image,
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import Oauth from "@/components/Oauth";
import { Link, router } from "expo-router";
import axios from "@/helpers/axios";
import Modal from "react-native-modal";
import { images } from "@/constants";
import { AuthContext } from "@/contexts/AuthContext";

const SignUp = () => {
  let [errors, setErrors] = useState<any>(null);
  let [isOpen, setIsOpen] = useState(false);
  let [isVerified, setIsVerified] = useState(false);
  let { getUser } = useContext(AuthContext);

  let [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [otp, setOtp] = useState("");

  let verifyEmail = async () => {
    try {
      //create user if otp for that user is true
      let res = await axios.post("/api/users", { ...form, otp });
      let token = res.data.token; //may b store in secure store
      if (token) {
        setIsVerified(true);
        getUser(token);
      }
    } catch (e: any) {
      setErrors(e.response.data?.errors);
    }
  };

  let signUpNow = async () => {
    try {
      setErrors(null);
      setOtp("");
      setIsVerified(false);
      //send otp to user
      let res = await axios.post("/api/send-otp", form);
      if (res.status === 200) {
        setIsOpen(true);
      }
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
          <Modal isVisible={isOpen} onBackdropPress={() => setIsOpen(false)}>
            {isVerified ? (
              <View className="bg-white flex justify-center items-center px-5 py-10 space-y-5 rounded-2xl">
                <Image source={images.check} className="w-28 h-28" />
                <Text className="text-3xl font-JakartaBold">Verified!</Text>
                <Text className="text-lg text-gray-400 text-center">
                  You have successfully verified your account
                </Text>
                <View className="w-full">
                  <CustomButton
                    title="Brownse Home"
                    onPress={() => {
                      setIsOpen(false);
                      //navigate to home
                      setTimeout(() => {
                        router.push("/(tab)/home");
                      }, 500);
                    }}
                  />
                </View>
              </View>
            ) : (
              <View className="bg-white flex justify-center items-start px-6 py-10 space-y-4 rounded-2xl">
                <Text className="text-2xl font-JakartaBold">Verifications</Text>
                <Text className="text-lg text-gray-500 text-center mb-4">
                  we've sent a verification code to {form.email}
                </Text>
                <View className="w-full">
                  <InputField
                    value={otp}
                    onChangeText={setOtp}
                    label="Code"
                    placeholder="12345"
                    keyboardType="numeric"
                    error={errors?.otp}
                  />
                </View>
                <View className="w-full">
                  <CustomButton
                    title="Verify Email"
                    bgVariant="success"
                    onPress={verifyEmail}
                  />
                </View>
              </View>
            )}
          </Modal>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
