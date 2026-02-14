let main = document.querySelector("#main")
let form  = document.querySelector("form");
let input = document.querySelectorAll("input")
form.addEventListener("submit" ,function(e){
    e.preventDefault();
   let  card = document.createElement("div")
   card.classList.add("card");

   let profile = document.createElement("div") 
   profile.classList.add("profile");

   let image = document.createElement("img")
   image.setAttribute("src", input[0].value)

   let h3 = document.createElement("h3");
   h3.textContent = input[1].value
   let h5 = document.createElement("h5");
   h5.textContent = input[2].value;
   let p = document.createElement("p");
   p.textContent = input[3].value

   profile.appendChild(image);
   card.appendChild(profile);

   card.appendChild(h3);
   card.appendChild(h5);
   card.appendChild(p);

   main.appendChild(card);

   input.forEach((val) => {
    if(val.type !== "submit"){
      val.value = "";
    }
    
   })
})