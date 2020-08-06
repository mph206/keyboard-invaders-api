import { v4 as uuid } from 'uuid';
import { firestore } from '../config/firebase';
 
export default class Score {
    constructor(data) {
        this.id = uuid();
        this.name = data.name;
        this.wpm = data.wpm;
        this.wordsTyped = data.wordsTyped;
        this.dateCreated = new Date().toLocaleString();
    }

    static async findAll() {
        const response = await firestore.collection("scores").get();
        return response.docs.map(doc => doc.data());
    }

    async saveScore() {
        const score = {...this};
        const response = await firestore.collection("scores").doc(score.id).set(score);
    }
}
uuid()