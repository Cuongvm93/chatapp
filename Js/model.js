const model = {};
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGOUQ2rMy7nMdeuUmZkuNBApAET26X-Ec",
    authDomain: "js-mvc.firebaseapp.com",
    projectId: "js-mvc",
    storageBucket: "js-mvc.appspot.com",
    messagingSenderId: "628727785240",
    appId: "1:628727785240:web:8918e7760de11f61dda06d" /* Firebase config */
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
model.register = async (data) => {
    try {
        
        console.log("mode", data);
        let respone = await auth.createUserWithEmailAndPassword(data.email, data.password)
        view.setScreenActive("loginpage")
        auth.currentUser.sendEmailVerification();// gửi mail verify 
        await firebase.auth().currentUser.updateProfile({
            displayName:data.firstName
        })
        dataUser=auth.currentUser.displayName;
        console.log(dataUser);
        view.dataUser(dataUser)
    }
    catch (error) {
        alert(error.message)
    }
    // .then((res)=>{
    //     console.log("111",res);
    //     //firebase.auth().currentUser.sendEmailverification()
    // })
    // .catch((err)=>{
    //     console.log(err);
    //     // view error
    // })
}
model.login = async (data) => {
    try {
        let respone = await auth.signInWithEmailAndPassword(data.email, data.password);
        console.log("success!");
        console.log("666666",auth.currentUser);
        if (auth.currentUser.emailVerified) {// sét điều kiện respone được trả và email đã được verified
            view.dataUser(auth.currentUser.displayName)
            view.setScreenActive("web")
       
            // show lịch sử đoạn chat
        
        const fireStoreQueries=async()=>{
            try{
            let respone= await  firebase.firestore()
            .collection("Message")
            .doc("e3UyS5qwuYMQzDJ2qOjG")
            .get();
            console.log(respone.data().content);
            data=respone.data().content
            model.getData(data)// gọi hàm get data
            for (let index = 0; index < data.length; index++) {
                // let checkInput={
                //     message:{
                //     owner:firebase.auth().currentUser.displayName,
                //     content:data[index].content
                // },
                //  messageFromBot:{
                //     owner:"bot",
                //     content:data[index].content
                // }
                view.chatMessage(data[index])
            } 
            
            // view.chatMessage(checkInput.messageFromBot)
            
           
                
            } 
            
            catch(error){
                 console.log(error.message);
            }
        }
        fireStoreQueries(); 
            
        }else{
            alert("Bạn chưa verify")
        }
    }
    catch (error) {
        alert(error.message)
    }
    // 
}

// update content message
let uid="e3UyS5qwuYMQzDJ2qOjG";
// let arr=[]
// model.getData=(data)=>{// get mảng data tin nhắn về trước sau đó push mới vào
//     arr=data
// }
// console.log(arr);
model.updateFireStoreQueries=async(data)=>{
    try{
        // arr.push(data)
        let respone=await firebase.firestore()
        .collection("Message")
        .doc(uid)
        .update({message:firebase.firestore.FieldValue.arrayUnion(data)});
    console.log(respone);
   
    } catch(error){
      console.log((error.message));
    }
}
// model.snapshoot=async()=>{
//     console.log("111");
//     try{
//         let respone=await firebase.firestore()
//         .collection("Message")
//         .onSnapshot((data)=>{
//             let data4=data.docs.map((item)=>({...item.data()}))
//             console.log(data4);
//         })
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }


// let uid2="s13OsUEzcOts9cCezDvs";
// model.updateFireStoreQueries2=async(data)=>{
//     try{
//         let respone=await firebase.firestore()
//         .collection("users")
//         .doc(uid)
//         .update(data);
//     console.log(respone);
//     } catch(error){
//       console.log((error.message));
//     }
// }
// model.signOut= async (data)=>{
//     try

// }
// let dataUser=""
// model.getUserProfile=async(data)=>{
//     try{
//          dataUser= await updateProfile(auth.currentUser,{
//             displayName:data.firstName
//          })
//          console.log(dataUser);
//          view.dataUser("wellcome",dataUser)
//     }
//     catch(error){

//     }
// }


