import { Alert } from 'react-native';


class API {

    async validarLog(user, pass){
        if((user=="Crossover") && (pass=="admin1234")){
            data=1;
        }else{
            data=0;
        }
        return data;
    }

    beginData(id, estado, name){
        const {
            Stitch,
            RemoteMongoClient,
            AnonymousCredential
        } = require('mongodb-stitch-browser-sdk');
        
        const client = Stitch.initializeDefaultAppClient('crossover-ghwxs');
        
        const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('test-store');
        
        client.auth.loginWithCredential(new AnonymousCredential()).then(
        db.collection('estado').insert({_id:id,estado:estado,objeto:name})
        ).then(docs => {
            console.log("Insert docs", docs)
            console.log("[MongoDB Stitch] Connected to Stitch")
            data=1;
        }).catch(err => {
            console.error(err)
        });
        return data;
        //Alert.alert(id+","+estado+","+name);
    }
}

export default new API()