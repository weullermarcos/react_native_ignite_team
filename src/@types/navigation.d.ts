export declare global {
    namespace ReactNavigation{
        interface RootParamList{
            groups: undefined; //nome da rota: tipo do parâmetro
            new: undefined;
            players:{ //define os parâmetros que serão passados
                group: string;
            }
        }
    }
}