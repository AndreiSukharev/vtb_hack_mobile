import {createMaterialBottomTabNavigator, MaterialBottomTabScreenProps} from "@react-navigation/material-bottom-tabs";

export enum EnumMainRoutes {
    main = "Main",
    auto = "Auto",
    photo = "Photo",
    services = "Services",
    chat = "Chat",
}

type MainStackParamList = {
    Main: undefined;
    Auto: undefined;
    Photo: undefined;
    Services: undefined;
    Chat: undefined;
};

export const MainStack = createMaterialBottomTabNavigator<MainStackParamList>();

export type NavigationMainProps<T extends keyof MainStackParamList> = MaterialBottomTabScreenProps<MainStackParamList, T>;

