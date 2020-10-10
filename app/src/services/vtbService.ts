import axios from 'axios';

const instance = axios.create({
    baseURL:'https://gw.hackathon.vtb.ru/vtb/hackathon/',
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
        return ;
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
        return ;
    }
}
