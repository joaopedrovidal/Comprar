import { TextInput, TextInputProps } from "react-native";
import { style } from "./styles";

export function Input({...rest}: TextInputProps){
    return(
        <TextInput 
            {...rest}
            style={style.container}
            placeholderTextColor="#74798B"
        />
    )
}