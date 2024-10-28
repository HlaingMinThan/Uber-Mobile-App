import { SafeAreaView, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const Profile = (props) => {
  let { user } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text>{user.name}</Text>
    </SafeAreaView>
  );
};

export default Profile;
