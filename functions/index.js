const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const { uploadUsers } = require('./callables/users');

exports.uploadUsers = uploadUsers();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// const userImportResult = await auth.importUsers(
//     users.map(({ email, uid, password }) => {
//         console.log('password', password);
//         console.log(sha256(password));
//         const pass = sha256(password);
//         console.log('base 64 ', Buffer.from(pass));
//         return {
//             email,
//             uid,
//             passwordHash: Buffer.from(pass)
//         };
//     }),
//     userImportOptions
// );
