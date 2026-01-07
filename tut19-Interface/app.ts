interface vehicle{
    engine:string,
    motor:string
}

interface FourWheeler extends vehicle{
    wheels:number
}

interface car extends FourWheeler{
    model:string,
    brand:string
}


const car:car={
    model:"100x",
    brand:"TATA",
    wheels:4,
    engine:"V6",
    motor:"xMotor"
}


console.log(car)