import React, {Component} from 'react';
import {styles} from "../../styles";
import {View} from "react-native";
import {TextInput, Switch, Text, Button} from "react-native-paper";
import DismissKeyboardWrapper from "../../../components/DismissKeyboardWrapper";
import {ScrollView} from "react-native-gesture-handler";

type State = {
    name: string,
    birth: string,
    phone: string,
    email: string,
    isAgree: boolean,
}

export default class CreditStage1 extends Component<{}, State> {

    state: State = {
        name: '',
        birth: '',
        phone: '',
        email: '',
        isAgree: false,
    }

    render() {
        return (
            <DismissKeyboardWrapper>

                <View style={styles.container}>
                    <ScrollView>
                        <TextInput
                            label="ФИО"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({name: value})}
                            placeholder="Олег Петров Петрович"
                        />
                        <TextInput
                            label="Дата рождения"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({birth: value})}
                            placeholder="04.11.2020"
                        />
                        <TextInput
                            label="Мобильный телефон"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({phone: value})}
                            placeholder="8950448900"
                        />
                        <TextInput
                            label="Электронная почта"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({email: value})}
                            placeholder="hack@sample.com"
                        />
                        <Switch value={this.state.isAgree} onValueChange={(value) => this.setState({isAgree: value})}/>
                        <Text>Я соглашаюсь с условиями обработки и использования моих
                            персональных данных и разрешаю сделать запрос в бюро
                            кредитных историй. Подробнее
                        </Text>
                        <Button mode="contained">Продолжить</Button>
                    </ScrollView>
                </View>
            </DismissKeyboardWrapper>

        );
    }
}


