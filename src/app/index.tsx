import {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Button} from '@/components/Button';
import { Input } from '@/components/Input';
import { router } from 'expo-router';

export default function Index() {
    // const [name, setName] = useState<string>("");
    const [name, setName] = useState<string>("Seu nome");

    function handleNext() {
        router.navigate("/dashboard");
    }


    // function handleMessage() {
    //     const name = "Otavio";        
    //     Alert.alert(`Ola, ${name}`);
    // }

    function onChangeText(text: string) {
        console.log(text)
        setName(text);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá {name}</Text>

            {/* <Input onChangeText={(text) => setName(text)}/> */}
            
            <Input onChangeText={setName}/>

            {/* <Button title="Salvar" onPress={handleMessage}/>
            <Button title="Titulo diferente" onPress={handleMessage}/> */}

            <Button title="Continuar" onPress={handleNext}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 32, 
        justifyContent: "center",
        alignItems: "center", 
        gap: 16,
    }, 
    title: {
        color: "#333",
        fontSize: 24,
        fontWeight: "bold",
    },
});