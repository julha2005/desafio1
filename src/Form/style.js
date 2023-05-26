import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  corpo: {
    
    padding: 10,
    backgroundColor: "#F8F8FF", // Cor de fundo do componente
    borderRadius: 30, // Raio de borda para o componente
    marginBottom: 10, // Margem inferior do componente
  },
  titulo: {
    color: "#483D8B	", // Cor do texto do título
    alignItems: "center", // Alinhamento do texto do título
  },
caixa:{
backgroundColor:"#E6E6FA",
},

caixaBotao:{
backgroundColor:"#4B0082",
},

  textoBotao: {
    color: "#fff", // Cor do texto do botão de compartilhamento
    fontWeight: "bold", // Peso da fonte do texto do botão de compartilhamento
    paddingHorizontal: 30, // Preenchimento horizontal do texto do botão de compartilhamento
    alignItems: "center", // Alinhamento do texto do botão de compartilhamento
  },
});

export default styles
