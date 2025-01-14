import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION} from '@storage/storageConfig';
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroups } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){

    try{

        //Verifica se o jogador já está em algum grupo
        const storedPlayers = await playersGetByGroups(group);
        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

        if(playerAlreadyExists.length > 0){

            throw new AppError('Essa pessoa já está cadastrada em um time!');
        }

        //Armazena o novo jogador
        const storage = JSON.stringify([...storedPlayers, newPlayer]);
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

        /*
        Vai armazenar similar a:
            @ignite-teams:players-rocket: [jogadores]
            @ignite-teams:players-ignite: [jogadores]
            @ignite-teams:players-amigos: [jogadores]
        */            
    }
    catch(error){

        throw error;
    }

}


