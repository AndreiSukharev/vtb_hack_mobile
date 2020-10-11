import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Card, Text, Button, ActivityIndicator} from "react-native-paper";
import {Camera} from 'expo-camera';
import {carRecognition} from "../../../services/vtbService";
import {styles} from "../../styles";
import * as ImageManipulator from "expo-image-manipulator";

type Photo = {
    uri?: string,
    height?: string,
    width?: string,
    base64: string,
}
export default function CameraSnapshot({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState<Photo>(undefined);
    const [car, setCar] = useState("mazda");
    const [loading, setLoading] = useState(false);

    const compress = async (uri) => {
        return await ImageManipulator.manipulateAsync(
            uri,
            [],
            {compress: 0, format: ImageManipulator.SaveFormat.JPEG, base64: true}
        );
    }

    const chooseCar = (data) => {
        let bestCar = '';
        let bestProbability = 0;
        for (const [carType, probability] of Object.entries(data.probabilities)) {
            if (probability > bestProbability) {
                bestCar = carType;
                bestProbability = probability
            }
        }
        setCar(bestCar)
    }
    const takePicture = async () => {
        if (!cameraRef) {
            return;
        }
        setLoading(true);
        try {
            const data : Photo = await cameraRef.takePictureAsync();
            const compressedPhoto = await compress(data.uri);
            const res = await carRecognition(compressedPhoto.base64);
            setLoading(false);
            if (res) {
                chooseCar(res);
                setPhoto(compressedPhoto);
            }
        } catch (e) {
            setLoading(false);
            console.log(e);
            return (
                <View style={styles.containerCenter}>
                    <Card>
                        <Card.Title title="Машина" subtitle={car}/>
                        <Card.Cover source={{uri: photo.uri}}/>
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate('Services')}>Заявка на кредит</Button>
                            <Button onPress={() => setPhoto('')}>Отмена</Button>
                        </Card.Actions>
                    </Card>
                </View>
            )
        }
    }

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    // const cameraView =
    //     <View style={styles.containerCenter}>
    //     <Card>
    //         <Card.Title title="Машина" subtitle={car}/>
    //         <Card.Cover source={{uri: photo.uri}}/>
    //         <Card.Actions>
    //             <Button onPress={() => navigation.navigate('Services')}>Заявка на кредит</Button>
    //             <Button onPress={() => setPhoto('')}>Перефотографирвать</Button>
    //         </Card.Actions>
    //     </Card>
    // </View>
    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    if (loading) {
        return (
            <View style={styles.containerCenter}>
                <ActivityIndicator animating={true}/>
            </View>
        )
    }
    if (photo) {
        return (
            <View style={styles.containerCenter}>
                <Card>
                    <Card.Title title="Машина" subtitle={car}/>
                    <Card.Cover source={{uri: photo.uri}}/>
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate('Services')}>Заявка на кредит</Button>
                        <Button onPress={() => setPhoto('')}>Перефотографирвать</Button>
                    </Card.Actions>
                </Card>
            </View>
        )
    }
    return (
        <View style={{flex: 1}}>
            <Camera
                style={{flex: 1}}
                type={type}
                ref={ref => {
                    setCameraRef(ref)
                }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'flex-end'
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end'
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={{fontSize: 18, marginBottom: 10, color: 'white'}}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}} onPress={async () => takePicture()}>
                        <View style={{
                            borderWidth: 2,
                            borderRadius: "50%",
                            borderColor: 'white',
                            height: 50,
                            width: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        >
                            <View style={{
                                borderWidth: 2,
                                borderRadius: "50%",
                                borderColor: 'white',
                                height: 40,
                                width: 40,
                                backgroundColor: 'white'
                            }}>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
