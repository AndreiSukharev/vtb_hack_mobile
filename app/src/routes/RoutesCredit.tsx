import * as React from "react";
import {Dimensions} from "react-native";
import {CreditStack, EnumCreditRoutes} from "../types/routes-type/routes-credit-types";
import CreditStage1 from "../screens/main/credits/CreditStage1";
import CreditStage2 from "../screens/main/credits/CreditStage2";
import CreditStage3 from "../screens/main/credits/CreditStage3";

const RoutesCredit: React.FC<any> = () => {
    const initialLayout = {width: Dimensions.get('window').width};
    return (
        <CreditStack.Navigator
            initialRouteName={EnumCreditRoutes.stage1}
            initialLayout={initialLayout}
        >
            <CreditStack.Screen name={EnumCreditRoutes.stage1} component={CreditStage1}/>
            <CreditStack.Screen name={EnumCreditRoutes.stage2} component={CreditStage2}/>
            <CreditStack.Screen name={EnumCreditRoutes.stage3} component={CreditStage3}/>
        </CreditStack.Navigator>
    );
}


export default RoutesCredit;
