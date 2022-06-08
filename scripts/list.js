//this function needs an array
function displayUsers(usersArray){
    let row;
    //travel the array (for)
    for (let i=0;i<usersArray.length;i=i+1){
        let user=usersArray[i];
        console.log(user);
        //create the row = `<>${} <>`
        row=`
            <tr>
                <td>${user.email}</td>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td style="background-color: ${user.color}">${user.color}</td>
            </tr>
            `;
        $("#users").append(row); //Append the row to the table
    }  
}

function init(){
    console.log("Listing users");
    let users = readUsers();
    // is an array
    displayUsers(users);
}
window.onload = init;