import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

const CustomButton = ({
  IconLeft,
  IconRight,
  title,
  bgVariant,
  textVariant,
  className,
  onPress,
}: ButtonProps) => {
  let getBgVariant = () => {
    switch (bgVariant) {
      case "primary":
        return "bg-primary-500";
      case "secondary":
        return "bg-secondary-500";
      case "danger":
        return "bg-red-500";
      case "success":
        return "bg-green-500";
      case "outline":
        return "bg-transparent border border-primary-500";
      default:
        return "bg-[#0286FF]";
    }
  };

  let getTextVariant = () => {
    switch (textVariant) {
      case "primary":
        return "text-black";
      case "secondary":
        return "text-gray-100";
      case "danger":
        return "text-red-100";
      case "success":
        return "text-green-100";
      default:
        return "text-white";
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${getBgVariant()}  p-3 rounded-full shadow-md shadow-neutral-400 ${className}`}
    >
      {IconLeft && <IconLeft />}
      <Text className={`${getTextVariant()} text-center text-lg font-bold`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
