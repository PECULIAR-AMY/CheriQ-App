import React, { FC } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"; // ✅ Added Text
import { useRouter } from "expo-router";
import cheriqImage from "../assets/images/Cheri_Q_Logo-04-removebg-preview 1.png"; 
import cheriqImage1 from "../assets/images/Cheri Q Logo-06 1.png";

const Splash: FC = () => {
  const router = useRouter(); // ✅ Initialize router

  return (
    <View style={styles.container}>
      <Image source={cheriqImage} style={styles.image} />
      <Image source={cheriqImage1} style={styles.image1} />

      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

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
});
