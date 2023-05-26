// Importação das dependências necessárias para o componente
import React from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native"
import styles from "./style";


export default function Form(){
    return(

        <View style={styles.corpo}>
            <Text style={styles.titulo}> NOME</Text>
            <TextInput style={styles.caixa} placeholder="EX: Julha Souza" keyboardType="numeric"/>

            <Text style={styles.titulo}> TELEFONE</Text>
            <TextInput style={styles.caixa} placeholder="EX: 6530-5561" keyboardType="numeric"/>

            <Text style={styles.titulo}> EMAIL</Text>
            <TextInput style={styles.caixa} placeholder="EX: jujubinha@gmail.com" keyboardType="numeric"/>

            

            <TouchableOpacity style={styles.caixaBotao}>
                <Text style={styles.textoBotao}>ENVIAR</Text>
            </TouchableOpacity>

        </View>
    
    )
    }