import { firestore } from './config/firebase';

export default class Word {
    constructor(data) {
        this.word = data.word;
        this.category = data.category;
        this.dateCreated = new Date().toUTCString(); 
    }

    static async findAll() {
        const response = await firestore.collection("words").get();
        return response.docs.map(doc => doc.data());
    }

    static async findCategory(category) {
        const response = await firestore.collection("words").where('category', '==', category).get();
        return response.data();
    }
}