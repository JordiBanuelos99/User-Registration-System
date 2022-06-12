function User(email, password, fname, lname, age, address, phone, payment, color){
    this.email=email;
    this.password=password;
    this.firstname=fname;
    this.lastname=lname;
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}
function isValid(user){
    //Return false when the user is not valid
    //Return true when the user is valid
    let valid = true;
    if(user.email.length==0){
        valid=false;
        console.log("Please add an Email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length<6){
        valid=false;
        console.log("Please create a password with 6 or more characters");
        $("#txtPassword").addClass("input-error");
    }
    if(user.firstname.length==0){
        valid=false;
        console.log("Please add your first name");
        $("#txtFirstname").addClass("input-error");
    }
    if(user.lastname.length==0){
        valid=false;
        console.log("Please add your last name");
        $("#txtLastname").addClass("input-error");
    }
    if(user.age.length==0){
        valid=false;
        console.log("Please add your age");
        $("#txtAge").addClass("input-error");
    }
    if(user.address.length==0){
        valid=false;
        console.log("Please add your address");
        $("#txtAddress").addClass("input-error");
    }
    if(user.phone.length==0){
        valid=false;
        console.log("Please add a phone number");
        $("#txtPhone").addClass("input-error");
    }
    if(user.payment==0){
        valid=false;
        console.log("Please add a payment method");
        $("#txtPayment").addClass("input-error");
    }
    if(user.color==0){
        valid=false;
        console.log("Please add a color");
        $("#txtColor").addClass("input-error");
    }
    return valid;
}
function validatePass(){
    console.log("Validating pass");
        //get the value of the pass
    let txtPass = $("#txtPassword");
    let password = txtPass.val();
    if(password.length<6){ //Is the password less than 6 characters?
        txtPass.css("background","#ff9898"); //JQuery changes the css
        displayError("The password is too short");
    }else{
        txtPass.css("background","green");
        //jquery changes the css
        hideError();
    }
}
function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
}
function hideError(){
    $("#alertError").addClass("hide");
}
//register function
function register(){
    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress = $("#txtAddress").val();
    let userPhone = $("#txtPhone").val();
    let userPayment = $("#txtPayment").val();
    let userColor = $("#txtColor").val();
    // Creating the obj
    let newUser = new User (userName, userPass, userFirstName, userLastName, userAge, userAddress, userPhone, userPayment, userColor);
    if (isValid(newUser)==true){
        saveUser(newUser); //thin fn is in the StoreManager
        $("input").val(""); //Clear form
    }else{
        displayError("Please complete all the fields");
    }
}
function init(){
    console.log("Register");
    //Hook events
    $("#btnRegister").click(register);
    $("#txtEmail").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtPassword").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtFirstName").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtLastName").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtAge").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtAddress").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtPhone").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtPayment").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtColor").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtPassword").keyup(validatePass); //It is executed every time the key is up
}

window.onload=init();