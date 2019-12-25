![](https://i.imgur.com/y8gvtaw.png)
---
![](https://img.shields.io/github/license/MathBunny/model-car-inventory)

This application has three main purposes. First, it serves as an inventory of my model car collection. Secondly, it provides a simple utility for classifying any model car using modern cloud computer vision techniques. Lastly, it's a casual project to learn React and Google Cloud Platform offerings.


## Frontend
The frontend uses client-sided React compiled with Babel. It uses the bootstrap framework. Every component is carefully outlined in React to promote reusability with minimal state coupling. 

(In the future, hooks will be adopted to further reduce coupling)

## Backend
All the images are stored on Google Cloud Storage. The metadata for each model is stored on a Firestore powered by Firebase.  The backend logic is written in Typescript and is running as a function on Google Cloud. On the client side, the `JSON` from the model objects is processed and dynamically changes the contents of the site. 

## Gallery Screenshot
![](https://i.imgur.com/eGDA3dJ.jpg)
