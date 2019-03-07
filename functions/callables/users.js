const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');
const { users } = require('../mocks/users');

const createHash = ({ textToBeHash, hash = 'md5', digest = 'hex', encode = 'base64', salt = '' }) =>
    textToBeHash &&
    crypto
        .createHash(hash)
        .update(salt + textToBeHash)
        .digest(digest)
        .toString(encode);

exports.uploadUsers = () =>
    functions.https.onCall(async (data, context) => {
        const salt = 'salt'.toString('base64');

        const userImportOptions = {
            hash: {
                algorithm: 'MD5',
                rounds: 0
            }
        };

        const usersImported = await admin.auth().importUsers(
            users.map(({ uid, email, password }) => ({
                uid,
                email,
                passwordHash: Buffer.from(createHash({ textToBeHash: password, salt })),
                passwordSalt: Buffer.from(salt)
            })),
            userImportOptions
        );

        return usersImported;
    });
