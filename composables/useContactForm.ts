import {ref} from 'vue';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';
import {db} from './useFirebase';

export const useContactForm = () => {
    const loading = ref(false);
    const error = ref('');
    const success = ref(false);

    const submitContact = async (name: string, email: string, message: string) => {
        loading.value = true;
        error.value = '';
        success.value = false;

        try{
            // Add document to 'contacts' collection
            await addDoc(collection(db, 'contacts'), {
                name,
                email,
                message,
                createdAt: serverTimestamp()
            });
            success.value = true;
            loading.value = false;
        } catch (err) {
            error.value = 'Failed to send message. Please try again.';
            loading.value = false;
            console.error(err);            
        }
    };

    return {submitContact, loading, error, success};
};