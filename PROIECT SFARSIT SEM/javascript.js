
var url = "http://localhost:3000/users";




function putData(user) {
    let requestJSON = new XMLHttpRequest();
    
    console.log(user);
   
    let jsonString = JSON.stringify(user);
    console.log(user);
    requestJSON.open('POST', url);
    requestJSON.setRequestHeader("Content-Type", "application/json");
    requestJSON.send(jsonString);

}

function deleteData(id)
{
    let requestJSON=new XMLHttpRequest();

    requestJSON.open('DELETE', url+'/'+id);
    requestJSON.send();
    getData();
}



