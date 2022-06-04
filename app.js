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
    // Clear form
    $("input").val("");
    console.log(newUser);
}
function init(){
    console.log("Register");
    //Hook events
    $("#btnRegister").click(register);
}

window.onload=init();