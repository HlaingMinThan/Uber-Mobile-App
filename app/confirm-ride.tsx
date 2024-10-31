import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
import { useDriverStore } from "@/store";
import { router } from "expo-router";
import { useEffect } from "react";
import { FlatList, View } from "react-native";

const FindRide = (props: any) => {
  let { selectedDriver, drivers, setSelectedDriver } = useDriverStore();

  useEffect(() => {
    if (!selectedDriver) setSelectedDriver(drivers[0].id);
  }, [selectedDriver, setSelectedDriver, drivers]);

  return (
    <RideLayout snapPoints={["65%", "85%"]} goBackText="Find Ride">
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            item={item}
            selected={selectedDriver}
            setSelected={() => setSelectedDriver(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => router.replace("/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default FindRide;
