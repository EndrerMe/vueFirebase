<script>
// Vendors
import firebase from 'firebase';

export default {
    name: 'articlesService',

    async testSave(data, file) {
        const db = firebase.firestore();
        const storageRef = firebase.storage().ref();
        await storageRef.child(file.name).put(file);
        const imageUrl = await this.getimaga(file);
        data.image = imageUrl;
        return db.collection('articles').add(data)
    },

    getimaga(file) {
        const storageRef = firebase.storage().ref();
        return storageRef.child(file.name).getDownloadURL();
    },

    getArticleById(id) {
        const db = firebase.firestore();
        return db.collection('articles').doc(id).get();
    },

    getArticles(page) {
        const db = firebase.firestore();
        const startAt = (page - 1) * 15;
        return db.collection('articles').orderBy("date").startAt(startAt).limit(15).get();
    },
}
</script>