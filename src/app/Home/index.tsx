import { View, Image } from "react-native";
import styles from "./styles";
import { Button } from "@/components/Button";
export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <Button title="Entrar" />
      <Button title="Criar Conta" />
      <Button title="Salvar" />
      <Button title="Voltar" />
    </View>
  );
}
