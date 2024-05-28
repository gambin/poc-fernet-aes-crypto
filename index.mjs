import { Fernet } from 'fernet-nodejs';

export const handler = async (event) => {
    // Get query string parameters from event object
    const queryStringParameters = event.queryStringParameters;

    // Get data and parameters to decrypt
    let requestCryptData
    try{
        requestCryptData = queryStringParameters.data;
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify("Error: Parametros ausentes ou incorretos")
        };
    }
    
    // Get crypto key from environment variable
    let key = Fernet.generateKey();

    // Returns 32-byte long base64url encoded string
    // Example: "Brxd-7fAiRQFYz2eI81ZNzCzJwf7BjAsMjtx-_KH5wo="
    /* let key = Fernet.generateKey(); */

    let cryptoKey = process.env.CRYPTO_KEY || "qltrY4rh25bHsAgGSqgh3EBhrHgELCtH4lrNzADxVK8";

    // Create new Fernet instance
    const f = new Fernet(cryptoKey);

    // Decrypt token and get message
    let plainText
    try{
        plainText = f.decrypt(requestCryptData);
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify("Error: Falha ao descriptografar ou chave incorreta")
        };
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(plainText),
    };
    return response;
  };