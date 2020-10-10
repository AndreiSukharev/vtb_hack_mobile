import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {EnumMainRoutes} from "../types/routes-type/routes-main-types";
import {StyleSheet} from "react-native";
import {theme} from "../providers/theme";
import {MainStack} from "../types/routes-type/routes-main-types";
import Mock from "../screens/main/Mock";
import RoutesPost from "./RoutesPost";
import Chat from "../screens/main/chat/Chat";
import RoutesCreditIndex from "./RoutesCreditIndex";
import CameraSnapshot from "../screens/main/camera/CameraSnapshot";

const RoutesMain: React.FC<any> = () => {
    return (
        <MainStack.Navigator
            initialRouteName={EnumMainRoutes.main}
            activeColor={theme.colors.primary}
            barStyle={styles.tabs}
        >
            <MainStack.Screen
                name={EnumMainRoutes.main}
                component={RoutesPost}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="star" color={color} size={26} />
                    ),
                }}
            />
            {/*<MainStack.Screen*/}
            {/*    name={EnumMainRoutes.auto}*/}
            {/*    component={Mock}*/}
            {/*    options={{*/}
            {/*        tabBarIcon: ({ color }) => (*/}
            {/*            <MaterialCommunityIcons name="car" color={color} size={26} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            <MainStack.Screen
                name={EnumMainRoutes.photo}
                component={CameraSnapshot}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="camera" color={color} size={26} />
                    ),
                }}
            />
            <MainStack.Screen
                name={EnumMainRoutes.services}
                component={RoutesCreditIndex}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="purse" color={color} size={26} />
                    ),
                }}
            />
            <MainStack.Screen
                name={EnumMainRoutes.chat}
                component={Chat}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={26} />
                    ),
                }}
            />
        </MainStack.Navigator>
    );
}

const styles = StyleSheet.create({
    tabs: {
        backgroundColor: "white",
    }
});

export default RoutesMain;
