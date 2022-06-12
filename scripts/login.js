function login(){
    //Get the values from the form
    let inputEmail = $("#txtEmail").val();
    let inputPass = $("#txtPassword").val();
    
    //Use a flag
    let flag = false;
    //Get the users from LS
    let userList= readUsers(); //From StoreManager
    //Travel the user list
    for(let i=0; i<userList.length;i=i+1){
        let user = userList[i];
        //Compare Email and password
        if(user.email == inputEmail && user.password == inputPass){
            flag=true;
            window.location = "users.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },5000)
        }
    }
}

function init(){
    $("#btnLogin").click(login);
}
window.onload=init();