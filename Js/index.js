window.onload=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if (user) {
            view.setScreenActive("web")
            // view message
        }else{
            view.setScreenActive("registerPage")
        }
    })
    // Thao tác với Firestore
    // Get document
    let data=[];
    const fireStoreQueries=async()=>{
        try{
        let respone= await  firebase.firestore().collection("Message")
        .doc("e3UyS5qwuYMQzDJ2qOjG").get();
        console.log(respone.data().content);
        data=respone.data().content
        model.getData(data)// gọi hàm get data
        for (let index = 0; index < data.length; index++) {
            let checkInput={
                message:{
                owner:data[index].owner,
                content:data[index].content
            },
            //  messageFromBot:{
            //     owner:data[index].owner,
            //     content:data[index].content
            // }
        } 
        view.chatMessage(checkInput.message)
        // view.chatMessage(checkInput.messageFromBot)
        
        
            
        } 
        }
        catch(error){
             console.log(error.message);
        }
    }
    fireStoreQueries();
    console.log(data);
// Duyệt qua mảng các phần tử của content tin nhắn


    //  get all Users
    const fireStoreQueries2=async()=>{
        try{
        let respone= await  firebase.firestore()
        .collection("users")
        .where("adress"==="Hà Nội")//truy vấn dữ liệu có adress= Hà nội
        .get();
        console.log(respone.docs);
        for (let index = 0; index < respone.docs.length; index++) {
            console.log(respone.docs[index].data());
            
        }
        }
        catch(error){
            console.log(error.message);
        }
    }
    fireStoreQueries2();

/*
    //create document
    let addfield={
        phone:"0987654321",
        name:"Hoa"
    }
    const addFireStoreQueries=async()=>{
        try{
            let respone=await firebase.firestore()
            .collection("users")
            .add(addfield);
        console.log(respone);
        } catch(error){
          console.log((error.message));
        }
    }
    addFireStoreQueries() */
    let updateField={
        name:"Cuong vu"
    }
    //update document
   let uid="rgRUVMzICs1NSjJmFvZG";
   const updateFireStoreQueries=async()=>{
    try{
        let respone=await firebase.firestore()
        .collection("users")
        .doc(uid)
        .update(updateField);
    console.log(respone);
    } catch(error){
      console.log((error.message));
    }
}
updateFireStoreQueries() 
// Delete 
// let respone=await firebase.firestore()
//         .collection("users")
//         .doc(uid)
// .delete()

firebase.firestore()
.collection("Message")
.doc("e3UyS5qwuYMQzDJ2qOjG")
.onSnapshot((data)=>{
  console.log("cóadasdad",data.data())
  let dataContent=data.data().message
    view.chatMessage(dataContent)
    view.TimeMessage(dataContent)
    document.getElementById("body-container").scrollTop=document.getElementById("body-container").scrollHeight
})
}

// hàm windown. onload sẽ giúp việc gọi được biến được khởi tạo ở 1 file JS khác, cùng có kết nối tới index.html

