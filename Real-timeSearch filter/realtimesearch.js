const users = [
  {
    name: "Rahul Sharma",
    pic: "https://images.unsplash.com/photo-1770954179401-c069cf539be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Frontend developer passionate about building modern and responsive web applications."
  },
  {
    name: "Priya Verma",
    pic: "https://images.unsplash.com/photo-1637765910812-d466eae168f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhZHklMjBwaG90b3N8ZW58MHx8MHx8fDA%3D",
    bio: "UI/UX designer who loves creating clean and user-friendly interfaces."
  },
  {
    name: "Amit Patel",
    pic: "https://images.unsplash.com/photo-1621867431223-7c96c3ba50df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFzdGhldGljJTIwcGVyc29ufGVufDB8fDB8fHww",
    bio: "Full-stack developer with experience in React, Node.js, and MongoDB."
  },
  {
    name: "Sneha Reddy",
    pic: "https://images.unsplash.com/photo-1663507898093-1c3c55439c4d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkeSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D",
    bio: "Software engineer who enjoys solving complex problems with clean code."
  },
  {
    name: "Vikram Singh",
    pic: "https://images.unsplash.com/photo-1696964337990-1a1540c3deb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0aGV0aWMlMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
    bio: "Cybersecurity enthusiast learning ethical hacking and penetration testing."
  },
  {
    name: "Neha Gupta",
    pic: "https://media.istockphoto.com/id/618969516/photo/silhouette-of-girl-standing-alone-in-pine-forest-at-twilight.webp?a=1&b=1&s=612x612&w=0&k=20&c=r8gzs3vkY3UgkA310PSh1y0Omn1btdWwJNl9BBJ5Lg8=",
    bio: "Backend developer specializing in APIs and database management."
  },
 
  
];


        // Main container
// const mainDiv = document.createElement("div");
// mainDiv.className = "flex flex-col gap-10 items-center";



const cardsContainer = document.querySelector(".cards");
const input = document.querySelector(".inp");

// Function to show users
function showUsers(arr) {
  cardsContainer.innerHTML = ""; // Clear previous cards

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.append(heading, para);
    card.append(img, blurredLayer, content);

    cardsContainer.appendChild(card);
  });
}

// Initial render
showUsers(users);

// Search functionality
input.addEventListener("input", function () {
  const searchText = input.value.toLowerCase().trim();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(searchText)
  );

  showUsers(filteredUsers);
});
