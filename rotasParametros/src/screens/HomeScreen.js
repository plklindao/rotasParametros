import { View, Text, Button, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
    const aluno = [
        { id: 1, nome: "João", idade: 20, curso: "DES", cidade: "Florianópolis" },
        { id: 2, nome: "Maria", idade: 22, curso: "FormDocente", cidade: "Curitiba" },
        { id: 3, nome: "Pedro", idade: 21, curso: "Robotica", cidade: "Criciúma" },
    ];
    return (
        <>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    Lista de Alunos:
                </Text>

                {aluno.map((aluno) => (
                    <View style={{ marginBottom: 10 }} key={aluno.id}>
                        <Button
                            title={aluno.nome}
                            onPress={() => navigation.navigate("Detalhes", { aluno })}
                        ></Button>
                    </View>
                ))}
            </ScrollView>
        </>
    );
}