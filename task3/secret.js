//4-http://www.codewars.com/kata/can-you-keep-a-secret
function createSecretHolder(secret) {
    obj = {
        setSecret: function (value) {
            secret = value;
        },
        getSecret: function () {
            return secret;
        }
    };
    return obj;
}