import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles";

import { FilterStatus } from "@/types/FilterStatus";

type FilterProps = TouchableOpacityProps & {
    status: FilterStatus,
    isActive: boolean,
}

export function Filter({ status, isActive, ...rest }: FilterProps){
    return (
        <TouchableOpacity 
            style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={styles.title}>
                {status === FilterStatus.DONE ? "Comprado" : "Pendente"}

            </Text>
        </TouchableOpacity>
    )
}