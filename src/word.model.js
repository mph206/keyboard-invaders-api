// import { v4 as uuid } from 'uuid';
import { firestore } from '../config/firebase';

export default class Word {
    constructor(data) {
        // this.id = data.id || uuid();
        this.word = data.word;
        this.category = data.category;
        this.dateCreated = new Date().toUTCString();
    }

    static async findAll() {
        const response = await firestore.collection("words").get();
        return response.docs.map(doc => doc.data());
    }

    // static async find(id) {
    //     const response = await firestore.collection("recipes").doc(id).get();
    //     return response.data();
    // }

    async save() {
        this.dateModified = new Date().toUTCString();
        const word = {...this};
        const response = await firestore.collection("words").doc(word.word).set(word);
    }

    // static async destroy(id) {
    //     const response = await firestore.collection("recipes").doc(id).delete();
    // }
}