import {createMaterialBottomTabNavigator, MaterialBottomTabScreenProps} from "@react-navigation/material-bottom-tabs";

export enum EnumMainRoutes {
    main = "Main",
    car = "Car",
    photo = "Photo",
    services = "Services",
    chat = "Chat",
}

type MainStackParamList = {
    Main: undefined;
    Car: undefined;
    Photo: undefined;
    Services: undefined;
    Chat: undefined;
};

export const MainStack = createMaterialBottomTabNavigator<MainStackParamList>();

export type NavigationMainProps<T extends keyof MainStackParamList> = MaterialBottomTabScreenProps<MainStackParamList, T>;

