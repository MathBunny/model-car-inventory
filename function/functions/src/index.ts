const cors = require('cors')({origin: true});
const firebase = require('firebase-admin');
const functions = require('firebase-functions');

// Simulator link:
// http://localhost:5000/toy-car-visualizer/us-central1/retrieveModels

export const retrieveModels = functions.https.onRequest((request: any, response: any) => {
    cors(request, response, () => {
        response.set('Access-Control-Allow-Origin', '*');
        response.set('Access-Control-Allow-Methods', 'GET');
        response.set('Access-Control-Allow-Headers', 'Content-Type');
        response.set('Access-Control-Max-Age', '3600');

        const firebaseConfig = {
          authDomain: 'toy-car-visualizer.firebaseapp.com',
          databaseURL: 'https://toy-car-visualizer.firebaseio.com',
          projectId: 'toy-car-visualizer',
          storageBucket: '',
          messagingSenderId: '30835560445',
          appId: '1:30835560445:web:e7fa1a767bbebdce'
        };

        let db: any = {};
            
        try {
            db = firebase.firestore();
        }
        catch(err) {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
        }

        const res: any[] = [];

        db.collection("cars").get().then((querySnapshot: any) => {
            querySnapshot.forEach((doc:any) => {
                res.push(doc.data());
            });

            console.log('Successfully retrieved!');
            response.send( {'data': res } );
        }).catch((e: any) => {
            console.log('Promise Rejected ' + e);
            response.send( {'data': [] } );
        });
    });
});
