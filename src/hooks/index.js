import {auth, db} from '../firebase/firebase'

const register = (email, password,userName,fullName) =>{
    auth.createUserWithEmailAndPassword(email,password).then(()=>{
        db.collection('users').add({
        
            email:email,
            fullName:fullName,
            userName:userName
        })
    })
}
export default register