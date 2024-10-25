import { Text, View, TextInput, Image } from "react-native";
import React from "react";
import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  labelStyle,
  placeholder,
  containerStyle,
  inputStyle,
  icon,
  iconStyle,
  secureTextEntry = false,
}: InputFieldProps) => {
  return (
    <View className={`my-2 ${containerStyle}`}>
      <Text className={`text-lg font-JakartaSemiBold mb-3  ${labelStyle}`}>
        {label}
      </Text>
      <View className="bg-neutral-100   border border-neutral-100 focus:border-primary-500 rounded-full flex flex-row items-center justify-start ">
        {icon && (
          <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
        )}
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={"#A0AEC0"}
          className={` w-[90%] p-4 font-JakartaSemiBold text-[15px] ${inputStyle}`}
        />
      </View>
    </View>
  );
};

export default InputField;
