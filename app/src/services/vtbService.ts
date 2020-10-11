import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gw.hackathon.vtb.ru/vtb/hackathon/',
    timeout: 8000,
    headers: {
        'x-ibm-client-id': 'c2ba16caeef5f499897ebbda1abaa9d4',
        accept: 'application/json',
    },
})

export const getAutos = async () => {
    try {
        const res = await instance.get('marketplace');
        return res.data;
        // console.log(res);
    } catch (e) {
        console.log('error', e);
        return;
    }
}

export const carRecognition = async (base64Pic) => {
    try {
        const res = await instance.post('car-recognize', {
            content: base64Pic,
        });
        return res.data;
    } catch (e) {
        console.log('error', e);
        return;
    }
}

export const getDaDataCarsByQuery = async (query) => {
    try {
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/car_brand";
        var token = "b9d8b9f9e020bbf09930391cdc15323666f68945";
        var options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query})
        }

        const response = await fetch(url, options);
        const suggestions = await response.text();
        const res = JSON.parse(suggestions);
        console.log(res);
        return res.suggestions

        // const dadata = await axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/car_brand',{
        //     headers: { Authorization: 'Token b9d8b9f9e020bbf09930391cdc15323666f68945', "Accept": "application/json", "Content-Type": "application/json",},
        //     body: JSON.stringify({query: query})
        // })
        // return dadata.data;
    } catch (e) {
        console.log(e)
    }
}
