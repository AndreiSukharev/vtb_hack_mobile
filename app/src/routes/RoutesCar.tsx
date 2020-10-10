import React from "react";

import {EnumCarRoutes, CarStack} from "../types/routes-type/routes-auto-types";
import Car from "../screens/main/auto/Car";
import Cars from "../screens/main/auto/Cars";

const RoutesCar: React.FC<any> = ({}) => {
    return (
            <CarStack.Navigator
                initialRouteName={EnumCarRoutes.cars}
            >
                <CarStack.Screen name={EnumCarRoutes.cars} component={Cars}/>
                <CarStack.Screen name={EnumCarRoutes.car} component={Car}/>
            </CarStack.Navigator>
    )
};

export default RoutesCar;
