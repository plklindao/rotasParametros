import react from "react-native";
import { Text, View, Button } from "react-native";
import { useState } from 'react';

export default function AlunoCard({aluno}) {
    const [dados, setDados] = useState(aluno);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Nome : {dados.nome}</Text>
            <Text>Idade: {dados.idade}</Text>
            <Text>Curso: {dados.curso}</Text>
            <Text>Cidade: {dados.cidade}</Text>
            <Text>{dados.idade >= 18 ? 'Maior de idade' : 'Menor de idade'} </Text>
            <Button title="Curso" onPress={() => setDados({ ...dados, curso: "DES" })} />
        </View>
    );
}