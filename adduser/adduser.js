// Container
const container = document.querySelector(".container");

// Form
const profileForm = document.getElementById("profileForm");

// Inputs
const usernameInput = document.getElementById("username");
const roleInput = document.getElementById("role");
const profilePicInput = document.getElementById("profilePic");

// Profiles Section
const profilesSection = document.querySelector(".profiles");

// Profile Container (where cards will be added)
const profileContainer = document.getElementById("profileContainer");

// Button
const submitButton = profileForm.querySelector("button");






const userManager = {
users:[],
init: function () {
  profileForm.addEventListener("submit",this.submitForm.bind(this))  //this ==> userManager
},
submitForm: function(e){
 e.preventDefault();
 this.addUser();
},
addUser: function () {
    this.users.push({
    usernameInput : usernameInput.value,
    roleInput: roleInput.value,
    profilePicInput: profilePicInput.value,
})
 profileForm.reset();
 this.renderui();
},
renderui: function( ){
    profilesSection.innerHTML = '';
this.users.forEach( (user,index) =>{
// Create main profiles div



// Create profile container
const profileContainer = document.createElement("div");
profileContainer.classList.add("profile-card");

// Create name element
const name = document.createElement("h1");
name.textContent = user.usernameInput;
name.classList.add("profile-info");

// Create bio paragraph
const bio = document.createElement("p");
bio.textContent = user.roleInput;
bio.classList.add("profile-info-p")

// Create image
const img = document.createElement("img");
img.src = user.profilePicInput;
img.classList.add("profile-card-img");



const cross = document.createElement("span");
cross.innerHTML = "❌";
cross.style.cursor = "pointer";
cross.style.marginLeft = "auto";
cross.style.fontSize = "18px";

cross.addEventListener("click",  this.removeUser.bind(this,index));

profileContainer.appendChild(cross);

profileContainer.appendChild(img);

profileContainer.appendChild(name);

profileContainer.appendChild(bio);



// Finally append to body (or any parent)
profilesSection.append(profileContainer);


});

},
removeUser: function(index) {
    console.log("entering removeUser section")
  this.users.splice(index,1)
   this.renderui();
},
}

userManager.init();