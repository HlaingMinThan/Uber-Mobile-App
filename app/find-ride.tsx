import CustomButton from "@/components/CustomButton";
import GoogleSearchInput from "@/components/GoogleSearchInput";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { router } from "expo-router";
import { Text, View } from "react-native";

const FindRide = (props: any) => {
  return (
    <RideLayout snapPoints={["85%"]} goBackText="Home">
      <View className=" mb-8">
        <Text className="text-xl font-Jakarta mb-3">From</Text>
        <GoogleSearchInput
          icon={icons.target}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#F5F5F5"
        />
        <Text className="text-xl font-Jakarta mb-3">To</Text>
        <GoogleSearchInput
          icon={icons.target}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#F5F5F5"
        />
      </View>
      <CustomButton
        title="Find Now"
        onPress={() => {
          router.push("/confirm-ride");
        }}
      />
    </RideLayout>
  );
};

export default FindRide;
