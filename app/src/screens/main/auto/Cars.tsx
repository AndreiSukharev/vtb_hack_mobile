import React, {Component} from 'react';
import {FlatList, TouchableWithoutFeedback} from "react-native-gesture-handler";
import CarItem from "./CarItem";
import {EnumCarRoutes, NavigationCarProps} from "../../../types/routes-type/routes-auto-types";
import {getAutos, getDaDataCarsByQuery} from "../../../services/vtbService";
import {ICar} from "../../../types/car-type";
import {ActivityIndicator, Text, Searchbar} from "react-native-paper";
import {View} from "react-native";
import {styles} from "../../styles";

type Props = NavigationCarProps<EnumCarRoutes.cars>

export default class Cars extends Component<Props> {
    state = {
        cars: [],
        filter: '',
};

    transformToICarList(data) {
        let cars: ICar[] = [];
        let count = 0;
        data.list.forEach(item => {
            if (count === 10) {
                return
            }
            const title = item.titleRus;
            const country = item.country.title;

            item.models.forEach(model => {
                if (count === 10) {
                    return
                }
                let price = model.minPrice;
                if (!price) {
                    price = model.minprice;
                }
                const car : ICar = {
                    country,
                    title,
                    price,
                    id: count.toString(),
                    photo: model.photo,
                    type: model.transportType.title,
                }
                cars.push(car);
                count++;
            });
        });
        return cars;
    }

    async componentDidMount() {
        const promiseVtbAuto = getAutos();
        const promiseDaData = getDaDataCarsByQuery('форд');
        const promises = await Promise.all([promiseVtbAuto, promiseDaData])
        const vtbData = promises[0];
        const daDataCars = promises[1];
        if (!vtbData) {
            return <View style={styles.container}><Text>VTB api is not responding</Text></View>
        }
        const cars = this.transformToICarList(vtbData);
        if (daDataCars.length > 0) {
            const noData = 'Неизвестно';
            const daDataCar : ICar = {
                title: daDataCars[0].value,
                id: 'daData1',
                type: 'Дополнительная машина со строннего API',
                price: noData,
                country: noData,
                photo: 'https://www.ford.ru/content/dam/guxeu/ru/ru_ru/vehicle-images/focus/ford-focus-ru-768x432-heroimage.png'
            }
            cars.push(daDataCar);
        }
        this.setState({cars});
    }

    toCar = (item: ICar) => {
        this.props.navigation.navigate(EnumCarRoutes.car, {...item});
    }

    render() {
        return (
            <View style={styles.container}>
                <Searchbar
                    placeholder="Фильтр"
                    onChangeText={(value) => this.setState({filter: value})}
                    value={this.state.filter}
                    style={{marginBottom: 10}}
                />

            <FlatList
                data={this.state.cars}
                ListEmptyComponent={<ActivityIndicator animating={true}/>}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => this.toCar(item)}>
                        <CarItem key={item.id} {...item} />
                    </TouchableWithoutFeedback>
                )}
            />
            </View>
        );
    }
}
