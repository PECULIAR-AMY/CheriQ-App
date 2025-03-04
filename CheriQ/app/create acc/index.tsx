import React, { FC } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"; // ✅ Added Text
import { useRouter } from "expo-router";
import Eclip from '@/assets/images/Group 9.png'; 
import Undraw from "@/assets/images/undraw_deliveries_2r4y 1.jpg";
import Group from "@/assets/images/Group 8 (1).png"
import { Colors } from "react-native/Libraries/NewAppScreen";


const onboarding: FC = () => {
  const router = useRouter(); // ✅ Initialize router

  return (
    <View style={styles.container}>
      <Image source={Eclip} style={styles.image} />
      <Image source={Undraw} style={styles.image1} />

      <Text style={styles.text}>Free Delivery</Text>

      <Text style= {styles.textS}>We offer Free delivery to any of this Locations</Text>
      

      <TouchableOpacity style={styles.button} onPress={() => router.push("/onboarding2")}>
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
    justifyContent: "center",
    alignItems: "center", // Center elements
  },
  image: {
    height: 149,
    top: 5,
    left: 145,
    
  },
  image1: {
width: 297,
height: 203,
left: 10,


  },
  text: {
    color: "#000000",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 38.73,
    letterSpacing: -0.28,
    textAlign: "center",
    marginTop: 20,
  }, 

  textS:  {
    color: "#000000", 
    fontFamily: "Inter", 
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: -0.28,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
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
    height: 149,
    position: "absolute",
    top: 631,
    right: 305,
  }
});
