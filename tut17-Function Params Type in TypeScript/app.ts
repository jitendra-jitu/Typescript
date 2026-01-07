function totalPrice(price:number,item:number,text?:string) { 
    if(text){
        console.log(text+price*item);
    }
    else{
        console.log(price*item);
    }
}

totalPrice(10,20,"Total Cost: ");
totalPrice(10,20);


// function simple(data:number|string|boolean){
function simple(data:any){
    console.log(data)
}

simple(123);
simple("jituuuu");
simple(true);