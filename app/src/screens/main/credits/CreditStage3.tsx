import React, {Component} from 'react';
import {styles} from "../../styles";
import {View} from "react-native";
import {TextInput, Switch, Text, Button, RadioButton} from "react-native-paper";
import DismissKeyboardWrapper from "../../../components/DismissKeyboardWrapper";
import {ScrollView} from "react-native-gesture-handler";

type State = {
    passportNo: string,
    passportCretedAt: string,
    passportCode: string,
    passportIssuedBy: string,
    placeOfBirth: string,
    sex: string,
    isLastNameChanged: boolean,
    currentAddressEqualFact: boolean,
    income: string,
}

export default class CreditStage3 extends Component<{}, State> {

    state: State = {
        passportNo: '',
        passportCretedAt: '',
        passportCode: '',
        passportIssuedBy: '',
        placeOfBirth: '',
        sex: 'men',
        isLastNameChanged: false,
        currentAddressEqualFact: false,
        income: '',
    }

    render() {
        return (
            <DismissKeyboardWrapper>
                <View style={styles.container}>
                    <ScrollView>
                        <Button icon="playlist-edit">
                            Паспорт
                        </Button>
                        <TextInput
                            label="Серия и номер паспорта"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({passportNo: value})}
                            placeholder="4444 44444"
                        />
                        <TextInput
                            label="Дата выдачи"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({passportCretedAt: value})}
                            placeholder="01.01.2020"
                        />
                        <TextInput
                            label="Код подразделения"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({passportCode: value})}
                            placeholder="380 000"
                        />
                        <TextInput
                            label="Кем выдан"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({passportIssuedBy: value})}
                            placeholder="УФМС РФ"
                        />
                        <TextInput
                            label="Место рождения"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({placeOfBirth: value})}
                            placeholder="г.Иркутск"
                        />
                        <View>
                            <Text>Мужчина</Text>
                            <RadioButton
                                uncheckedColor='#316FCC'
                                value="men"
                                status={this.state.sex === 'men' ? 'checked' : 'unchecked'}
                                onPress={() => this.setState({sex: 'men'})}
                            />
                            <Text>Женщина</Text>
                            <RadioButton
                                value="women"
                                status={this.state.sex === 'women' ? 'checked' : 'unchecked'}
                                onPress={() => this.setState({sex: 'women'})}
                                uncheckedColor='#316FCC'
                            />
                        </View>
                        <Text>Вы меняли фамилию?</Text>
                        <Switch
                            value={this.state.isLastNameChanged}
                            onValueChange={(value) => this.setState({isLastNameChanged: value})}
                            style={styles.input}
                        />
                        <Text> Адрес постоянной регистрации совпадает с адресом фактической регистрации</Text>
                        <Switch
                            value={this.state.currentAddressEqualFact}
                            onValueChange={(value) => this.setState({currentAddressEqualFact: value})}
                            style={styles.input}
                        />
                        <TextInput
                            label="Ежемесячныый доход"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({income: value})}
                            placeholder="200 000 рублей"
                        />
                    </ScrollView>
                    <Button mode="contained">Отправить заявку</Button>
                </View>
            </DismissKeyboardWrapper>
        );
    }
}


