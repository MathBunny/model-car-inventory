![](https://i.imgur.com/y8gvtaw.png)
---
![](https://img.shields.io/github/license/MathBunny/model-car-inventory)

This application has three main purposes. First, it serves as an inventory of my model car collection. Secondly, it provides a simple utility for classifying any model car using modern cloud computer vision techniques. Lastly, it's a casual project to learn React and Google Cloud Platform offerings.


## Frontend
The frontend uses client-sided React compiled with Babel. It uses the bootstrap framework. Every component is carefully outlined in React to promote reusability with minimal state coupling. 

In addition, the home screen includes a 360º rotatable view of a car, which is powered using HTML5 videos and leverages VTT (Video Text Tracks) to use a sprite caption providing live scrubbing. More details can found on the site itself.

(In the future, hooks will be adopted to further reduce coupling)

## Backend
All the images are stored on Google Cloud Storage. The metadata for each model is stored on a Firestore powered by Firebase.  The backend logic is written in Typescript and is running as a function on Google Cloud. On the client side, the `JSON` from the model objects is processed and dynamically changes the contents of the site. 

## Future Work
* Improvements for responsive web design (i.e., improved mobile support and tiling)
* Embedding the computer vision component

## Screenshots
![](https://i.imgur.com/kbD4ZL1.png)
![](https://i.imgur.com/eGDA3dJ.jpg)
