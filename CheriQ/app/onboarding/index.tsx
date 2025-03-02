import React, { FC } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"; // ✅ Added Text
import { useRouter } from "expo-router";
import Eclip from '@/assets/images/Group 9.png'; 
import Undraw from "@/assets/images/undraw_deliveries_2r4y 1.jpg";
import Group from "@/assets/images/Group 8 (1).png"

const onboarding: FC = () => {
  const router = useRouter(); // ✅ Initialize router

  return (
    <View style={styles.container}>
      <Image source={Eclip} style={styles.image} />
      <Image source={Undraw} style={styles.image1} />

      <Text>Free Delivery</Text>

      <Text>We offer Free delivery to any of this Locations</Text>

      <Text>we offer free delivery within Lagos </Text>
      

      <TouchableOpacity style={styles.button} onPress={() => router.push("/onboarding")}>
        <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>

      <Image  source={Group} style= {styles.image2}/>
    </View>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center", // Center elements
  },
  image: {
    width: 237,
    height: 196,
    marginBottom: -50, // Move closer to the second image
  },
  image1: {
    width: 200,
    height: 200,
  },
  button: {
    marginTop: 30,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  image2 : {

  }
});
