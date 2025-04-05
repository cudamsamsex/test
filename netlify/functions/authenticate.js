// netlify/functions/authenticate.js
const { totp } = require('otplib');

exports.handler = async (event, context) => {
  const { token } = event.queryStringParameters;

  const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'; // Secret key của bạn

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing token' }),
    };
  }

  const isValid = totp.check(token, secret);

  if (isValid) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ success: false }),
    };
  }
};
