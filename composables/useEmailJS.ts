import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
emailjs.init('vshikfgTo-4IgTlyt');

export const useEmailJS = () => {
    const sendEmail = async(name: string, email: string, message: string) => {
        try{
            const response = await emailjs.send(
                'service_6ii1rnk',      // Service ID
                'template_wwcy65z',     // Template ID
                {
                    from_name: name,
                    from_email: email,
                    message: message
                }
            );

            console.log('Email sent successfully!', response);
            return true;
        }catch (error) {
            console.error('Failed to send email:', error);
            return false;
        }
    }

    return { sendEmail };
}