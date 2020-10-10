import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumCreditIndexRoutes {
    credit = "Credit",
}

type CreditIndexStackParamList = {
    Credit: undefined;
};

export const CreditIndexStack = createStackNavigator<CreditIndexStackParamList>();

export type NavigationCreditIndexProps<T extends keyof CreditIndexStackParamList> = StackScreenProps<CreditIndexStackParamList, T>;

