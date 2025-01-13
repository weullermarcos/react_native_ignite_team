import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCrate(newGroup: string){

    try{

        const storedGroups = await groupsGetAll(); //Recupera os grupos armazenados

        const storage = JSON.stringify([...storedGroups, newGroup]); //Concatena os grupos existentes com o novo grupo

        await AsyncStorage.setItem(GROUP_COLLECTION, storage); //Armazena os dados passados como parâmetro
    }
    catch(error){
        throw error; //Joga a exceção pra quem chamou a função
    }
    
}



