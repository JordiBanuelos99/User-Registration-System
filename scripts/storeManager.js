const STORE_KEY = "users";
function saveUser(user){
    let oldData = readUsers(); //Getting LS info
    oldData.push(user); // Appending the new element
    let val = JSON.stringify(oldData); // Creating the string
    localStorage.setItem(STORE_KEY, val);
}

function readUsers(){
    // Get the values from the LS
    let data = localStorage.getItem(STORE_KEY);
    console.log(data); // JSON
    if (!data){ // Is not data?
        return []; // Creating the array
    }
    else{   // We have data
        let list = JSON.parse(data); // Parsing JSON from OBJ
        console.log(list);
        return list;
    }
}