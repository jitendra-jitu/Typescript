type PersonT={
    name:string,
    age:number,
    isEmp:true
}

let personData:PersonT={
    name:"jitu",
    age:21,
    isEmp:true
}

type personX=keyof PersonT;
let personDataX:personX;
// let personDataX:keyof PersonT;  //Also Allowed

personDataX="name";
personDataX="age";
personDataX="isEmp";
// personDataX="country";   //Not Allowed

console.log(typeof personData)
let userX: keyof typeof personData = "name";
console.log(userX)




const SETTINGS = {
  theme: "dark",
  lang: "en",
} as const;

type SettingKeys = keyof typeof SETTINGS; 
// "theme" | "lang"


type SettingsType = typeof SETTINGS; 
// { readonly theme: "dark"; readonly lang: "en" }

type SettingValues = SettingsType[SettingKeys];
// "dark" | "en"



