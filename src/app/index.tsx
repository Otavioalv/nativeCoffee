import {View, Text, StyleSheet, Alert} from 'react-native';
import {Button} from '../components/Button';
import { Input } from '../components/Input';


export default function Index() {
    
    function handleMessage() {
        const name = "Otavio";        
        Alert.alert(`Ola, ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World!</Text>

            <Input/>

            <Button title="Salvar" onPress={handleMessage}/>
            <Button title="Titulo diferente" onPress={handleMessage}/>
            <Button title="Continuar"/>
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