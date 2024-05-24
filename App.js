import {
  StyleSheet,
  View,
  Image,
  Text, Pressable, Platform,
  KeyboardAvoidingView,
} from "react-native";

import Input from "./components/Input";
import Button from "./components/Button";

const PlaceholderImage = require("./assets/easyrent(1).png");

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>E-Mail</Text>
        <Input style={styles.input} Placeholder="Digite seu email" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Senha</Text>
        <Input style={styles.input} Placeholder="Digite sua senha" />
      </View>
      
      <View style={styles.buttonContainer}>
      <Button theme="primary" label="Entrar" onPress={Pressable} />
      </View>

      <View style={styles.footer}>
        <Image
          style={styles.backgroundImage}
          source={require("./assets/back1.png")}
          resizeMode="cover"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "orange",
    borderWidth: 20,
  },
  imageContainer: {
    width: 350,
    height: 300,
    resizeMode: "contain",
    marginLeft: 50,
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 300,
  },
  inputContainer: {
    width: "80%",
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 7,
      },
    }),
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 17,
    borderColor: 'orange',
    borderWidth: 2,
  },
  inputLabel: {
    marginBottom: 5,
    color: "#bb3e03",
    fontWeight: "bold",
    textAlign: "left",
  },
  footer: {
    width: "100%",
    height: "23%",
    resizeMode: "cover",
  },
  backgroundImage: {
    width: "130%",
    height: "110%",
    resizeMode: "cover",
    position: "static",
  },
});
