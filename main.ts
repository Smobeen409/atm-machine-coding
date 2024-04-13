#! usr/bin/env node
import inquirer from "inquirer"
let userBalance=10000;
let userPin=123456;
let pinAns=await inquirer.prompt(
    {
        name:"pin",
        type:"number",
        message:"enter your pin",
    }

   
)
let currentBalance=userBalance;

if(pinAns.pin===userPin){
    console.log("correct pin");
    let optionAns=await inquirer.prompt(
       {

        name:"option",
        type:"list",
        message:"select one option.",
        choices:["withdraw","check-balance","exit"]
    })
    
if(optionAns.option==="withdraw"){
   console.log("option withdraw");
   let amountAns=await inquirer.prompt(
    {
        name:"amount",
        type:"number",
        message:"please!enter amount to withdraw.",
        
    }
)
              if(optionAns.amount>=userBalance){
                  console.log("sorry,you have insuficient balance.");
                                            }
             else{ console.log(`you have withdraw ${amountAns.amount}`);
                   currentBalance=userBalance-amountAns.amount;
                   console.log(`your current balance is ${currentBalance}`);
                                            }}
    else if(optionAns.option==="check-balance"){
          console.log(`your current balance is ${currentBalance}Rs`);
               }
    else if( optionAns.option==="exit"){
            console.log("thank you.");
}}

else{
    console.log("sorry invalid pin");
}