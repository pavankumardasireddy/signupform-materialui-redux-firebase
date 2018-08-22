//Here we import firebase SDK, initialize the app, create database reference and export it.
import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const sampleRef = databaseRef.child("sample");