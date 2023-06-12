// viberSender.js
const axios = require('axios');

const viberSender = {};

viberSender.sendMessage = async (receiverId, text) => {
    const url = 'https://chatapi.viber.com/pa/send_message';
    const headers = {
        'Content-Type': 'application/json',
        'X-Viber-Auth-Token': 'YOUR_AUTH_TOKEN' // replace with your bot's auth token
    };
    const body = {
        receiver: receiverId, // User Viber id
        type: 'text',
        text: text
    };

    try {
        const response = await axios.post(url, body, { headers: headers });
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
};

module.exports = viberSender;
