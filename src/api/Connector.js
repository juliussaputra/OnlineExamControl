import axios from 'axios';
import PersonData from '../Person';

const siteUrl = 'https://moodle.htwchur.ch';

export function sendRequest(username, password){
    console.log("Send Request function")

    let userData = {
        username: username,
        password: password,
        service: 'moodle_mobile_app'
    }

    return new Promise((resolve, reject) =>{
        axios.post(siteUrl + '/login/token.php', encodeForm(userData))
            .then(res => {
                console.log("Keys = "+ Object.keys(res));
                console.log("RESPONSE ==== \n " + JSON.stringify(res));
                let parsed = JSON.stringify(res.data);

                if(res.data.error){
                    console.log("ERROR Found :: " + JSON.stringify(res.data));
                    reject(null);
                } else {
                    console.log("Response Data == " + parsed);
                    resolve(new PersonData(this.username, res.data.privatetoken, res.data.token));
                }
        }).catch(error => {
            console.log("Error while trying to login : " + error);
            reject(null)
        })
    })
}

const encodeForm = (data) => {
    return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join('&');
}