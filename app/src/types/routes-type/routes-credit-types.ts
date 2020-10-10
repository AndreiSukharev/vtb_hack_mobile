import {createMaterialTopTabNavigator, MaterialTopTabScreenProps} from "@react-navigation/material-top-tabs";

export enum EnumCreditRoutes {
    stage1 = "Stage1",
    stage2 = "Stage2",
    stage3 = 'Stage3',
}

type CreditStackParamList = {
    Stage1: undefined;
    Stage2: undefined;
    Stage3: undefined;
};

export const CreditStack = createMaterialTopTabNavigator<CreditStackParamList>();

export type NavigationCreditProps<T extends keyof CreditStackParamList> = MaterialTopTabScreenProps<CreditStackParamList, T>;
