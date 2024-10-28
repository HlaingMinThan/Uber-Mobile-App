import { Text, View, TextInput, Image } from "react-native";
import React from "react";
import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  keyboardType,
  labelStyle,
  placeholder,
  containerStyle,
  inputStyle,
  icon,
  onChangeText,
  value,
  iconStyle,
  error,
  secureTextEntry = false,
}: InputFieldProps) => {
  return (
    <View className={`my-2 ${containerStyle}`}>
      {label && (
        <Text className={`text-lg font-JakartaSemiBold mb-3  ${labelStyle}`}>
          {label}
        </Text>
      )}
      <View className="bg-neutral-100   border border-neutral-100 focus:border-primary-500 rounded-full flex flex-row items-center justify-start ">
        {icon && (
          <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
        )}
        <TextInput
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={"#A0AEC0"}
          className={` w-[90%] p-4 font-JakartaSemiBold text-[15px] ${inputStyle}`}
        />
      </View>
      {error && <Text className="text-red-500 mt-2 ml-3">{error}</Text>}
    </View>
  );
};

export default InputField;
