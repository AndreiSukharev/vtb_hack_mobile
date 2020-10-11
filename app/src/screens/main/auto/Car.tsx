import React from 'react';
import { Card, Paragraph, Title, Button} from "react-native-paper";
import {EnumCarRoutes, NavigationCarProps} from "../../../types/routes-type/routes-auto-types";
import {NavigationMainProps, EnumMainRoutes} from "../../../types/routes-type/routes-main-types";

type Props = NavigationCarProps<EnumCarRoutes.car> & NavigationMainProps<EnumMainRoutes.car>

const Car: React.FC<Props> = ({ route,navigation}) => {

    return (
        <Card>
            <Card.Title title={route.params.title} />
            <Card.Content>
                <Title>Description</Title>
                <Paragraph>Тип: {route.params.type}</Paragraph>
                <Paragraph>Страна: {route.params.country}</Paragraph>
                <Paragraph>Цена: {route.params.price}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: route.params.photo }} />
            <Button onPress={() => navigation.navigate('Services')} >Оформить заявку на кредит</Button>
        </Card>
    )
}

export default Car;
