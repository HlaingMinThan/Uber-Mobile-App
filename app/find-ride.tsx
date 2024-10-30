import Map from "@/components/Map";
import { icons } from "@/constants";
import { Image, Text, View } from "react-native";

const FindRide = () => {
  return (
    <View className="flex-1 h-screen bg-general-300">
      <View>
        <View className="flex flex-row items-center z-10 absolute top-16">
          <View className="bg-white w-10 h-10 rounded-full p-2 ml-3">
            <Image source={icons.backArrow} className="w-full h-full" />
          </View>
          <View className="ml-3">
            <Text className="text-lg font-JakartaBold">Go Back</Text>
          </View>
        </View>
        <Map />
      </View>
      {/* Bottom Sheet */}
    </View>
  );
};

export default FindRide;
