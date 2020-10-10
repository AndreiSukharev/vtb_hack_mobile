import React, {Component} from 'react';
import {styles} from "../../styles";
import {View} from "react-native";
import {TextInput, Switch, Text, Button} from "react-native-paper";
import DismissKeyboardWrapper from "../../../components/DismissKeyboardWrapper";
import {ScrollView} from "react-native-gesture-handler";

type State = {
    auto: string,
    isMileage: boolean,
    cost: string,
    initFee: string,
    sumCredit: string,
    dueDateCredit: string,

}

export default class CreditStage2 extends Component<{}, State> {

    state: State = {
        auto: '',
        isMileage: false,
        cost: '',
        initFee: '',
        sumCredit: '',
        dueDateCredit: '',
    }

    render() {
        return (
            <DismissKeyboardWrapper>

                <View style={styles.container}>
                    <ScrollView>
                        <TextInput
                            label="Выбранный авто"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({auto: value})}
                            placeholder="Мазда"
                        />
                        <Text>С пробегом?
                        </Text>
                        <Switch
                            value={this.state.isMileage}
                            onValueChange={(value) => this.setState({isMileage: value})}
                            style={styles.input}
                        />
                        <TextInput
                            label="Стоимость автомобиля"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({cost: value})}
                            placeholder="450 000"
                        />
                        <TextInput
                            label="Первоначальный взнос"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({initFee: value})}
                            placeholder="80 000"
                        />
                        <TextInput
                            label="Сумма кредита"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({sumCredit: value})}
                            placeholder="370 000"
                        />
                        <TextInput
                            label="Срок кредита"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({dueDateCredit: value})}
                            placeholder="5 лет"
                        />
                        <Button mode="contained">Продолжить</Button>
                    </ScrollView>
                </View>
            </DismissKeyboardWrapper>

        );
    }
}


