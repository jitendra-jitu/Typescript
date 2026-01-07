function GetInfo(){

    let nameInput=document.getElementById("userName") as HTMLInputElement;
    let nameValue:string=nameInput.value;

    let ageInput=document.getElementById("age") as HTMLInputElement;
    let ageValue:string=ageInput.value;

    let emailInput=document.getElementById("email") as HTMLInputElement;
    let emailValue:string=emailInput.value;

    console.log(nameValue);
    console.log(ageValue);
    console.log(emailValue);
}


