//scope --> created variables and functions ko kaha tk use kar sakte ho

// functional scope -->  function ke andar hi use ho sakti hai

// function abcd (){
// var a = 12;

// }
//global scope --pore code mein kahi bhi use ho sakti hai
//var a = "blinkit"
//blockscope  -- {} curly breses me hi use ho sakti hai

// function countForme(){
//     let c = 0;
//     return function () {
//         c++;
//         console.log(c)
//     }
// }

// let count = countForme();
// count();
// count();
// count();
// let count2 = countForme();
// count2()

//encapsulation

// function clickLimiter () {
//     let click = 0;
//     return function () {
//         if(click < 5) {
//             click++
//             console.log(`clicked :${click} times`)
//         }  else {
//             console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
//         }
//     }
// }

// let fnc  = clickLimiter()
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();

function createToaster (config) {


    return function (str) {
      let div =  document.createElement("div");
      div.textContent = str;
     div.className = `inline-block ${config.theme ==="dark"?"bg-gray-800 text-white":"bg-gray-800 text-black"} px-6 py-3 rounded shadow-lg opacity pointer-event-none `;
     document.querySelector(".parent").appendChild(div);

     if(config.positionX !== "left" || config.positionY !== "top" ) {
         document.querySelector(".parent").classList.add = "fixed"
          document.querySelector(".parent").className += 
          `${config.positionX === "right" ? " right-5":"left-5"}
          ${config.positionY === "bottom" ? " bottom-5":"top-5"}`
     } 
      setTimeout(()=> {
         document.querySelector(".parent").removeChild(div);
      },(config.duration) * 1000)
    }
}
let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
})
toaster("Download Done");
setTimeout(() => {
    toaster("He accepted your friend request");
},2000)

