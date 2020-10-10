import * as React from "react";
import {CreditIndexStack, EnumCreditIndexRoutes} from "../types/routes-type/routes-credit-index-types";
import RoutesCredit from "./RoutesCredit";

const RoutesCreditIndex: React.FC<any> = ({}) => {
    return (
            <CreditIndexStack.Navigator
                initialRouteName={EnumCreditIndexRoutes.credit}
            >
                <CreditIndexStack.Screen name={EnumCreditIndexRoutes.credit} component={RoutesCredit}/>
            </CreditIndexStack.Navigator>
    )
};

export default RoutesCreditIndex;
