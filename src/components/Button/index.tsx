import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
"react-native"

import {styles} from "./styles";

// type ButtonProps = {
//     title: string;
//     onPress?: () => void;
// }

// ButtonProps e igual a TouchableOpacityProps  e {}
type ButtonProps = TouchableOpacityProps & {
    title: string;
}

// ...rest: pega o resto das propriedades
export function Button({title, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={.8} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}