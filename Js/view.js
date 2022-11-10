const view = {};
let dataUser = ""
view.dataUser = (dataUser1) => {
    dataUser = dataUser1
    console.log("222222222", dataUser1)
}
console.log(dataUser);
view.setScreenActive = (screenName) => {
    console.log(dataUser);
    switch (screenName) {
        case "registerPage":
            let app = document.getElementById("app")
            app.innerHTML = compoment.wellcomepage;
            let registerForm = document.getElementById("registerForm")

            registerForm.addEventListener("submit", (e) => {
                e.preventDefault();
                let a = registerForm.firstname.value
                let b = registerForm.email.value
                let c = registerForm.password.value
                let d = registerForm.confirmPassword.value
                //    console.log(a);
                //    console.log(b);
                //    console.log(c);
                //    console.log(d);
                const data = {
                    firstName: a,
                    email: b,
                    password: c,
                    confirmPassword: d

                }
                console.log(data);
                controler.register(data)

            });
            // Nếu địa chỉ url của action để trống thì mặc định nó ngầm hiểu trang đó là server luôn
            // registerForm.addEventListener("submit",(e)=>{
            //     e.preventDefault();
            // let a=registerForm.firstname.value
            // let b=registerForm.email.value
            //    let c=registerForm.password.value
            //    let d=registerForm.confirmPassword.value
            //    console.log(a);
            // console.log(b);
            //    console.log(c);
            // console.log(d);

            //  })
            view.setErrorMessage = (id, content) => {


                document.getElementById(id).innerHTML = content
            }
            // validate email
            view.validateEmail = (email1) => {
                var re = /\S+@\S+\.\S+/;
                return re.test(email1);
            }
            view.validatepassword = (password) => {
                var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                return password.match(re)
            }
            // CHuyển trang sang login
            //Trong thẻ a phải bỏ href="" đi. Vì href nó sẽ load trang. và khi đó onload của index.html sẽ lại được bắt
            //=>> trang lại bị tải lại RegisterPage
            let directToLogin = document.getElementById("login")
            directToLogin.addEventListener("click", () => {
                view.setScreenActive("loginpage")
            })
            break;
        case "loginpage":
            document.getElementById("app").innerHTML = compoment.loginpage;
            let directRegis = document.getElementById("register")
            directRegis.addEventListener("click", () => {
                view.setScreenActive("registerPage")
            })
            let a = document.getElementById("login")
            a.addEventListener("submit", (e) => {
                e.preventDefault();
                const data = {
                    email: a.email.value,
                    password: a.password.value,


                }
                //    model.register(data)
                controler.login(data)
                //    model.login(data)
                view.setErrorMessage = (id, content) => {
                    document.getElementById(id).innerHTML = content
                }
            })
            // view.currentPage(loginpage)


            // default:
            break;
        case "web":
            document.getElementById("app").innerHTML = compoment.web;
            document.getElementById("wellcome").innerHTML = "Wellcome" + " " + dataUser
         
           
            // view.dataUser=(id,content)=>{
            //     document.getElementById(id).innerHTML +=content
            // }
            let btn = document.getElementById("signOut")
            console.log(btn);
            btn.addEventListener("click", () => {
                let cf = confirm("bạn có muốn thoát trang không")
                if (cf == true) {
                    view.setScreenActive("registerPage")
                    firebase.auth().signOut()
                    //     setTimeout(() => {
                    //         console.log(auth.currentUser);
                    //     }, 2000);
                }
            })
            let formChat = document.getElementById("input-container")
            formChat.addEventListener("submit", (e) => {
                e.preventDefault();
                // set thời gian gủi tin nhắn
                var currentdate = new Date();
                var datetime = currentdate.getDate() + "/" + currentdate.getMonth()
                    + "/" + currentdate.getFullYear() + " " + "-" + " "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes()
                console.log(datetime);
                let dataInput = formChat.input.value;
                console.log("7777", dataUser)
                let checkInput = {
                    message: {
                        owner:firebase.auth().currentUser.displayName,
                        content: dataInput,
                        time:datetime
                    },
                    // messageFromBot: {
                    //     owner: "bot",
                    //     content: dataInput,
                    //     time:datetime
                    // }
                }
                // document.getElementsByClassName("chat-me")[0].innerHTML+=compoment.listChat(dataInput)
                // let node=document.createElement("div")
                // node.classList.add(".content")
                // let textNode=document.textNode(dataInput)
                // node.appendChild(textNode)
                // document.getElementById("chat-me").appendChild(node)
                // 
                controler.checkInput(checkInput)
                //     view.chatMessage(message)
                //     view.chatMessage(messageFromBot)
                //  document.getElementById("body-container").scrollTop=document.getElementById("body-container").scrollHeight
                formChat.input.value = ""
            })

            //Hiện thị ngày giờ
            // let arrContent=document.childNodes(".content")
            // arr.content=JSON.parse(JSON.stringify(arrContent))
            // console.log(arrContent);
            // console.log(arrContent[1]);
            // arrContent.forEach((item,index)=>{
            // item.addEventListener("mouseon",()=>{
            //     console.log(index);
            //     console.log("view time");
            //   let createElement=document.createElement("div")
            //   createElement.classList.add("display-time")
            //   createElement.innerHTML=data[index].time
    //         })
    //         })
     }
    view.chatMessage = (mess) => {
        let createElement =""
        for(let i=0; i<mess.length; i++){
            
            if (mess[i].owner == firebase.auth().currentUser.displayName) {
                createElement += `
            
            <div class="chat-me">
            ${mess[i].owner}
            <div class="content">
            ${mess[i].content}
            </div>
            </div>
            `
    
            } else {
                createElement+= `       
                
            <div class="chat-owner">
            ${mess[i].owner}
            <div class="content">
            ${mess[i].content}
            </div>
            </div>
            `
            }
        }
        
        document.getElementById("body-container").innerHTML= createElement
    }
    // View time message
    view.TimeMessage=(data)=> {
        let arr=document.querySelectorAll(".content")
        arr.forEach((item,index)=>{
            item.addEventListener("mouseover",(event)=>{
            //remove div cũ trước
            let a=document.getElementById("viewTime")
            if(a){
                a.remove()
            }
            console.log(data[index].time);
            let creatElement=document.createElement("div")
            creatElement.id="viewTime"
            creatElement.innerHTML=data[index].time
            document.getElementsByClassName("content")[index].appendChild(creatElement)
            })
            item.addEventListener("mouseout",(event)=>{
                document.getElementById("viewTime").remove()
            })
        })
    }
}
// console.log(location.hash);

// var cuong=10;

