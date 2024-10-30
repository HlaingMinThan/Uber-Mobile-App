import Map from "@/components/Map";
import { icons } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { router } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RideLayout = ({ children }: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView className="flex-1 h-screen bg-general-300">
      <View>
        <View className="flex flex-row items-center z-10 absolute top-16">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-white w-10 h-10 rounded-full p-2 ml-3"
          >
            <Image source={icons.backArrow} className="w-full h-full" />
          </TouchableOpacity>
          <View className="ml-3">
            <Text className="text-lg font-JakartaBold">Go Back</Text>
          </View>
        </View>
        <Map />
      </View>
      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        style={{ flex: 1, backgroundColor: "grey" }}
        snapPoints={["40%", "85%"]}
      >
        <BottomSheetView style={{ flex: 1, padding: 20 }}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
