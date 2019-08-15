const firebase = require('firebase-admin');
const functions = require('firebase-functions');

// Simulator link:
// http://localhost:5000/toy-car-visualizer/us-central1/retrieveModels

export const retrieveModels = functions.https.onRequest((request: any, response: any) => {
    response.set('Access-Control-Allow-Origin', "*")
    const firebaseConfig = {
      authDomain: 'toy-car-visualizer.firebaseapp.com',
      databaseURL: 'https://toy-car-visualizer.firebaseio.com',
      projectId: 'toy-car-visualizer',
      storageBucket: '',
      messagingSenderId: '30835560445',
      appId: '1:30835560445:web:e7fa1a767bbebdce'
    };
        
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const res: any[] = [];

    db.collection("cars").get().then((querySnapshot: any) => {
        querySnapshot.forEach((doc:any) => {
            res.push(doc.data());
        });

        console.log('Successfully retrieved!');
        response.send( {'data': res} );
    }).catch((e: any) => {
        console.log('Promise Rejected ' + e);
        response.send( {'data': []} );
    });
});
