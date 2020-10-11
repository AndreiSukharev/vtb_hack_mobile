import React from "react";

import {EnumCarRoutes, CarStack} from "../types/routes-type/routes-auto-types";
import Car from "../screens/main/auto/Car";
import Cars from "../screens/main/auto/Cars";
import {navigationColours} from "../styles";

const RoutesCar: React.FC<any> = ({}) => {
    return (
            <CarStack.Navigator
                initialRouteName={EnumCarRoutes.cars}
                screenOptions={navigationColours}
            >
                <CarStack.Screen name={EnumCarRoutes.cars} component={Cars}/>
                <CarStack.Screen name={EnumCarRoutes.car} component={Car}/>
            </CarStack.Navigator>
    )
};

export default RoutesCar;
