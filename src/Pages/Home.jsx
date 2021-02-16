import React, {useState} from 'react';
import Styled from 'styled-components';

import CryptoJS from 'crypto-js';

const Home = () => {

    const [encryptionMessage, setEncryptionMessage] = useState('');
    const [encryptionPassword, setEncryptionPassword] = useState('');
    const [decryptionMessage, setDecryptionMessage] = useState('');
    const [decryptionPassword, setDecryptionPassword] = useState('');
    const [encryptOutput, setEncryptOutput] = useState('');
    const [decryptOutput, setDecryptOutput] = useState('');

    const handleEncryptionMessage = (e) => {
        let value = e.target.value;
        setEncryptionMessage(value);
    }

    const handleEncryptionPassword = (e) => {
        let value = e.target.value;
        setEncryptionPassword(value);
    }

    const handleDecryptionMessage = (e) => {
        let value = e.target.value;
        setDecryptionMessage(value);
    }

    const handleDecryptionPassword = (e) => {
        let value = e.target.value;
        setDecryptionPassword(value);
    }

    // Onsubmit Event
    const handleDecrypt = (e) => {
        e.preventDefault();
        if (encryptionMessage !== '' && encryptionPassword !== '') {
            var encrypted = CryptoJS.DES.encrypt(encryptionMessage, encryptionPassword);
            setEncryptOutput(encrypted.toString());
        }
        else {
            alert('Please Fill All Encryption Fields!!!!')
        }
    }

    const handleEcrypt = (e) => {
        e.preventDefault();
        if (decryptionMessage !== '' && decryptionPassword !== '') {    
            var decrypted = CryptoJS.DES.decrypt(decryptionMessage, decryptionPassword);
            var decryptedMessage = decrypted.toString(CryptoJS.enc.Utf8);
            setDecryptOutput(decryptedMessage.toString());
        }

        else {
            alert('Please Fill all Decryption field!!!!');
        }
    }

    return (
        <HomeStyle>
            <div className="container">
                <h1>DES ENCRYPTION BY GROUP <span>3</span></h1>

                <div className="row">
                    <div className="col-md-6">
                        <h3>ENCRYPTION</h3>
                        <form onSubmit={handleDecrypt}>
                            <div className="inputGroup">
                                <label>Message</label>
                                <textarea onChange={handleEncryptionMessage}></textarea>
                            </div>
                            <div className="inputGroup">
                                <label>Password</label>
                                <input onChange={handleEncryptionPassword} type="password"/>
                            </div>
                            <button>Decode</button>
                        </form>
                        <div className="output">{encryptOutput}</div>
                    </div>
                    <div className="col-md-6">
                        <h3>DECRYPTION</h3>
                        <form onSubmit={handleEcrypt}>
                            <div className="inputGroup">
                                <label>Encryption Message</label>
                                <textarea onChange={handleDecryptionMessage}></textarea>
                            </div>
                            <div className="inputGroup">
                                <label>Password</label>
                                <input onChange={handleDecryptionPassword} type="password"/>
                            </div>
                            <button>Encode</button>
                        </form>
                        <div className="output">{decryptOutput}</div>
                    </div>
                </div>
            </div>
        </HomeStyle>
    )
}

export default Home;

const HomeStyle = Styled.div`
    max-width: 100vw;
    min-height: 100vh;
    background: #010A59;

    h1 {
        font-size: 3rem;
        font-weight: bold;
        color: #fff;
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem;

        span {
            color: orange;
        }

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        text-align: left;
        text-transform: uppercase;
    }

    .inputGroup {
        width: 100%;
        margin-bottom: 1.4rem;

        label {
            display: block;
            font-size: .9rem;
            color: rgba(255, 255, 255, .5);
        }

        input, textarea {
            width: 100%;
            max-width: 400px;
            background: rgba(255, 255, 255, .7);
            border: none;
            outline: none;
            color: #111;
            padding: 1rem;
            font-size: .9rem;
            min-height: 40px;
        }

        textarea {
            min-height: 80px;
        }
    }
    
    button {
        border: none;
        outline: none;
        background: orange;
        font-size: 1.1rem;
        font-weight: bold;
        padding: .7rem 1.3rem;

        &:hover {
            transform: scale(.98);
        }
    }

    .output {
        width: 100%;
        height: 100px;
        background: #fff;
        margin-top: 1.4rem;
        padding: 1rem;
        font-size: .9rem;
        word-wrap: break-word;
    }
`;