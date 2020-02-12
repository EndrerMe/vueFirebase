<script>
// Vendors
import firebase from 'firebase';

export default {
    name: 'authSerivce',
    regist(userData) {
        return firebase.auth().createUserWithEmailAndPassword(userData.userEmail, userData.userPassword);
    },

    login(userData) {
        return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
    }
}
</script>