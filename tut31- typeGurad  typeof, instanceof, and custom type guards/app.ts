let userData1:string|number|boolean="jitu";
userData1=true;

if(typeof userData1=="boolean"){
    console.log("This is bool dataType")
}
else if(typeof userData1=="string"){
    console.log("This is string dataType")
}
else {
    console.log("This is Number dataType")
}


class Product{
}
var product=new Product();

class Order{
}
var order=new Order();

function checkDetails(data:Order|Product) {
    if(data instanceof Product){
        console.log("This is the instance of Product");
    }
    else{
        console.log("This is the instance of Order");
    }
}
checkDetails(product);


interface userData{
    name:string,
    city:string
}

interface userInfo{
    id:string,
    email:string
}


var userdata1:userData|userInfo;
userdata1={
    name:"jitu",
    city:"vijayawada"
}

var userdata2:userData|userInfo;
userdata2={
    id:"101",
    email:"jitu@gmail.com"
}


function checkUserInfo(data:userData|userInfo){
    if((data as userData).name!=undefined){
        console.log("this is a user data")
    }
    else{
        console.log("this is a user info")
    }
}
checkUserInfo(userdata1);
checkUserInfo(userdata2);



