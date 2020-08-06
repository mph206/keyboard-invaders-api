import { firestore } from '../config/firebase';

export default class Word {
    constructor(data) {
        this.word = data.word;
        this.category = data.category;
    }

    static async findAll() {
        const response = await firestore.collection("words").get();
        return response.docs.map(doc => doc.data());
    }

    static async findCategory(category) {
        const response = await firestore.collection("words").where('category', '==', category).get();
        return response.docs.map(doc => doc.data());
    }

    async save() {
        const word = {...this};
        const response = await firestore.collection("words").doc(word.word).set(word);
    }
}