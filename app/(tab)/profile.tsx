import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const Profile = (props) => {
  const { logout } = useContext(AuthContext);
  let { user } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text>{user?.name}</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
