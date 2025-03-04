import React, { FC } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import Exportundraw from "@/assets/images/undraw_time_management_re_tk5w 1.jpg";
import Export13 from "@/assets/images/Group 10.jpg";
import Export10 from "@/assets/images/Group 10.jpg"
import onboarding from "../onboarding";


const Onboarding2: FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={Exportundraw} style={styles.image} />

      <Text style={styles.text}>24-48 hour Delivery</Text>

      <Text style={styles.textS}>We believe in quick delivery to your desired location</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push({"/onboarding3"})}>
     <Text>Click</Text>
    </TouchableOpacity>

      <Image source = {Export13} style= {styles.image2}/>
      <Image  source={Export10} style= {styles.image3}/>
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Centers everything
  },
  image: {
    width: 285,
    height: 262,
    alignSelf: "center", // Ensures centering
    resizeMode: "contain",
  },
image2 : {
    width: 149,
    height: 149,
    top: 571,
    left: -87,
    
},

image3: {
     width: 149,
     height: 149,
     top: 613,
     left: 304,
    
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
  textS: {
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
});
