const controler={}
controler.register=(data)=>{
   
 if (data.firstName=="") {
    
    view.setErrorMessage("firstname_error","Please input first Name again")
 }else{
    console.log(111);
   view.setErrorMessage("firstname_error","")
   
 }

 if (view.validateEmail(data.email)==true) {
    view.setErrorMessage("email_error","")
 }else{
    view.setErrorMessage("email_error","Email sai định dạng")
 }
 if (view.validatepassword(data.password)) {
   view.setErrorMessage("passWord_error","")
 }else{
   console.log("111");
   view.setErrorMessage("passWord_error","Password sai định dạng") 
 }

 if (data.password == data.confirmPassword) {
   view.setErrorMessage("confirm_error","")
 }else{
   view.setErrorMessage("confirm_error","Pass nhaaoj lại không đúng")
 }
 if (data.firstName!=="" && view.validateEmail(data.email)==true
 && view.validatepassword &&data.password==data.confirmPassword) {
   model.register(data)
  //  model.getUserProfile(data)// đổ ra model
 }
}
// control login
controler.login=(data)=>{
 if (data.email=="") {
   view.setErrorMessage("email_login_error","Please input email")
 }else{
   view.setErrorMessage("email_login_error","")
 }
 //validate pass
 if (data.password=="") {
   
   view.setErrorMessage("passWord_login_error","Please fill password")
 }else{
   view.setErrorMessage("passWord_login_error","")
 }

 if (data.email&&data.password) {
   model.login(data) // đổ dữ liệu lên model
  //  model.getUserProfile(data)
 }
}
// var a="";

// if (a) {
//    console.log(123);
// }else{
//    console.log("sai");
// }
controler.checkInput=(checkInput)=>{
  console.log("1111",checkInput.message.content);
  if(checkInput.message.content!=""){
    // view.chatMessage(checkInput.message)
    // view.chatMessage(checkInput.messageFromBot)
    // model.updateFireStoreQueries(checkInput.message.content)
    model.updateFireStoreQueries(checkInput.message)
    document.getElementById("body-container").scrollTop=document.getElementById("body-container").scrollHeight
    // document.getElementById("body-container").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})// auto scroll view to bottom
  }
}