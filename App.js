import React, { useState, useEffect } from "react";
import firebase from "./src/firebaseConnection";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [user, setUser] = useState();

  async function login() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((value) => {
        alert(`Bem vindo: ${value.user.email}`);
        setUser(value.user.email);
      })
      .catch((error) => {
        alert("Algo deu errado");
        return;
      });
    setEmail("");
    setSenha("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />
      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setSenha(texto)}
        value={senha}
      />

      <Button title="Novo Cadastro" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212",
    height: 45,
    fontSize: 17,
    borderRadius: 10,
  },
});
