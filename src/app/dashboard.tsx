import {View, Text, StyleSheet} from 'react-native';
import { Button } from '@/components/Button';
import { router } from 'expo-router';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text> 
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    title: {
        color: '#333',
        fontSize: 24,
        fontWeight: 'bold',
    },
})