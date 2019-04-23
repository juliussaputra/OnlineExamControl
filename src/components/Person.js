import {AsyncStorage} from 'react-native';

export default class PersonData {
    constructor( username, privateToken=null, token= null) {
        this.privateToken = privateToken;
        this.token = token;
    }


    _storeData = async () => {
        try {
          await AsyncStorage.setItem('token', this.token);
          await AsyncStorage.setItem('privateToken', this.privateToken);
        } catch (error) {
          // Error saving data
          console.log("Error on Saving");
        }
      };

      _retrieveData = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          const privateToken = await AsyncStorage.getItem('privateToken');
          if (token !== null && privateToken !== null) {
            // We have data!!
            console.log(value);
          }
        } catch (error) {
          // Error retrieving data
        }
      };



}