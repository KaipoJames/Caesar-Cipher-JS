import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const Mailer = {
    getTransport(service, user, password) { // Create Transport Object
        return nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.GMAIL,
                pass: process.env.PASSWORD
            }
        });
    },

    createTransport() { // IN PROGRESS. User can create their own transport if DNE.
        // TODO
        const transport = '';
        return transport
    },
    
    getMsgOptions(sender, recipient, type, data, constraint) { // Set Up Message Options
        let subject = "CCJS-";
        let bodyText = "";

        if (type === 'encrypt') {
            subject += "ENC";
            bodyText = "<---- Encrypted Text ---->\n";
        }
        if (type === 'decrypt') {
            subject += "DEC";
            bodyText = "<---- Decrypted Text ---->\n";
        }

        bodyText = this.configureBodyText(bodyText, data, constraint);
        bodyText += "\n\nSent From: " + sender;

        return {
            subject: subject,
            text: bodyText,
            to: recipient,
            from: sender
        };
    },
    configureBodyText(bodyText, data, constraint) {
        if (!constraint || constraint === 'ALL') {
            if (data.msg){ bodyText += "\nMessage: " + data.msg; }
            if (data.shift){ bodyText += "\nShift: " + data.shift; }
            if (data.shifts){ bodyText += "\nShifts: " + data.shifts; }
            if (data.indexes){ bodyText += "\nNumber Indexes: " + data.indexes; }
            if (data.numIndexes){ bodyText += "\nNumber Indexes: " + data.numIndexes; }
        } 
        if (constraint === 'MESSAGE') {
            if (data.shifts){ bodyText += "\nMessage: " + data.msg; }
        }
        if (constraint === 'KEYS') {
            if (data.shift){ bodyText += "\nShift: " + data.shift; }
            if (data.shifts){ bodyText += "\nShifts: " + data.shifts; }
            if (data.indexes){ bodyText += "\nNumber Indexes: " + data.indexes; }
            if (data.numIndexes){ bodyText += "\nNumber Indexes: " + data.numIndexes; }
        }
        return bodyText;
    },

    // SEND ENCRYPTIONS
    sendEncryptionMessage(sender, recipient, data) {
        const msgOptions = this.getMsgOptions(sender, recipient, 'encrypt', data, 'MESSAGE');
        return this.sendMailAttempt(msgOptions);
    },
    sendEncryptionKeys(sender, recipient, data) {
        const msgOptions = this.getMsgOptions(sender, recipient, 'encrypt', data, 'KEYS');
        return this.sendMailAttempt(msgOptions);
    },
    sendEncryptionAll(sender, recipient, data) {
        const msgOptions = this.getMsgOptions(sender, recipient, 'encrypt', data);
        return this.sendMailAttempt(msgOptions);
    },

    // SEND DECRYPTIONS
    sendDecryptionMessage(sender, recipient, data) {
        const msgOptions = this.getMsgOptions(sender, recipient, 'decrypt', data, 'MESSAGE');
        return this.sendMailAttempt(msgOptions);
    },
    sendDecryptionKeys(sender, recipient, data) {
        const msgOptions = this.getMsgOptions(sender, recipient, 'decrypt', data, 'KEYS');
        return this.sendMailAttempt(msgOptions);
    },
    sendDecryptionAll(sender, recipient, data) {
        const msgOptions = this.getMsgOptions(sender, recipient, 'decrypt', data);
        return this.sendMailAttempt(msgOptions);
    },

    sendMailAttempt(msgOptions) {
        const TP = this.getTransport();
        return TP.sendMail(msgOptions) ? "Message Sent Successfully" : "Message Sending Failed";
    }

}

export default Mailer;