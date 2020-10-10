import React from 'react';
import {Card, Title, Button, Paragraph, Text} from "react-native-paper";
import {StyleSheet} from 'react-native';
import {ICar} from "../../../types/car-type";

type Props = ICar;
const Car: React.FC<Props> = ({title, country, photo, type, price}) => {

    return (
        <Card style={styles.card}>
            <Card.Title title={title}/>
            <Card.Content>
                <Title>Описание</Title>
                <Paragraph>Тип: {type}</Paragraph>
                <Paragraph>Страна: {country}</Paragraph>
                <Paragraph>Цена: {price}</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: photo}}/>
            <Card.Actions>
                <Button>Подробнее</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
    },
});

export default Car;
