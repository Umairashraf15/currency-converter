#! /usr/bin/env node
import inquirer from "inquirer"

let conversion = {
    "PKR":{
        "USD":0.0036,
        "EUR":0.0033,
        "PKR":1
    },
    "EUR":{
        "USD":1.08,
        "PKR":300.90,
        "EUR":1
    },
    "USD":{
        "EUR":0.93,
        "PKR":279.40,
        "USD":1
    }
}

const answer:{
    from: "PKR" | "USD" | "EUR",
    to: "PKR" | "USD" | "EUR" ,
    amount:number
} = await inquirer.prompt([
    {
    type:"list",
    name:"from",
    choices:["PKR", "USD", "EUR"],
    message:"Select your currency: "
    },
    {
        type:"list",
        name:"to",
        choices:["PKR", "USD", "EUR"],
        message:"Select the currency you want to convert to: "
    },
    {
        type:"number",
        name:"amount",
        message:"Enter the amount to be converted:"
        }
]);

const{from,to, amount}= answer;

if (from && to && amount){
    let result=conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
    
}else{
    console.log("Invalid inputs");
}