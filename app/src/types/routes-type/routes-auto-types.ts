import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";
import {IAuto} from "../car-type";

export enum EnumCarRoutes {
    car = "Car",
    cars = "Cars",
}

type CarStackParamList = {
    Car: IAuto;
    Cars: undefined;
};

export const CarStack = createStackNavigator<CarStackParamList>();

export type NavigationCarProps<T extends keyof CarStackParamList> = StackScreenProps<CarStackParamList, T>;

