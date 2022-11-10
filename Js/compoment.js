const compoment={};
// compoment.wellcomepage=`
// <h1>Wellcome page</h1>
// `
compoment.wellcomepage=`
<div class="register-container">
        <form  class="form-container" id="registerForm">
            <div>
                <input type="text" name="firstname" placeholder="firstName">
                <div class="error" id="firstname_error"></div>
            </div>
            <div>
                <input type="text"  name="email" placeholder="Email">
                <div class="error" id="email_error"></div>
            </div>
            <div>
                <input type="text" name="password" placeholder="Password">
                <div class="error" id="passWord_error"></div>
            </div>
            <div>
                <input type="text" name="confirmPassword" placeholder="Confirm Password">
                <div class="error" id="confirm_error"></div>
            </div>
            <div>Bạn đã có tài khoản? <a  id="login">Login</a></div>
            <button type="submit">Register</button>
        </form>
    </div>
`

compoment.loginpage=`
<div class="login-container">
        <form  class="form-container" id="login">
           
            <div>
                <input type="text"  name="email" placeholder="Email">
                <div class="error" id="email_login_error"></div>
            </div>
            <div>
                <input type="text" name="password" placeholder="Password">
                <div class="error" id="passWord_login_error"></div>
            </div>
            
            <div>Bạn chưa có tài khoản? <a  id="register">Regester</a></div>
            <button type="submit">Login</button>
        </form>
    </div>
`
compoment.web=`<div id="wellcome"> wellcome</div>
               <button id="signOut">Sign Out</button>
               <div class="chat-container">
    <div class="header-container">
    <p>First chat conversation</p>
    </div>
    <div class="body-container" id="body-container">
        <div class="chat-me" id="chat-me">
           
        </div>
        <div class="chat-owner">
            
        </div>
    </div>
    <form class="input-container" id="input-container">
       <input type="text" name="input">
        <button type="submit">Send</button>
        

    </form>
</div>
               
`
compoment.listChat=(data)=>{
  return  `
<div class="content">${data}</div>
`
}

