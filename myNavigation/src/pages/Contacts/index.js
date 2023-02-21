import React from "react";
import {View, Text} from "react-native";

export default function Contacts({navigation}){
    return(
        <View style={{marginTop: 60}}>
            <View >
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (84) 9 8765-4321</Text>
                <Text onPress={() => navigation.navigate('Information',
                {
                    nome: 'João Silva',
                    telefone: '(84) 9 8765-4321',
                    endereco: 'Rua das Flores',
                    numero: '765',
                    profissao: 'Carpinteiro',
                    email: 'joaosilva@carpintaria.com.br'
                })}>Information...</Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (84) 9 6565-4321</Text>
                <Text onPress={() => navigation.navigate('Information')}>Information...</Text>
            </View>
        </View>
    )
}