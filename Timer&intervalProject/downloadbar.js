let count = 0;
let progressBar = document.querySelector("#progressBar");
let progressCount = document.querySelector("#percentage");
let startbtn = document.querySelector("#startBtn");
let resetbtn = document.querySelector("#resetBtn");
let downloadStatus = document.querySelector("#downloadStatus");

startbtn.addEventListener("click" ,function() {
  let download = setInterval(function () {
    if(count<=99){
     count++;
     progressBar.style.width = `${count}%`
     progressCount.textContent = `${count}%`
     downloadStatus.textContent = "Downloading File";
    }
    else {
      clearInterval(download);
       downloadStatus.textContent = "File Downloaded";
    }
    
},30)
})

resetbtn.addEventListener("click", function () {
    count = 0;
    progressBar.style.width = `${count}%`
    progressCount.textContent = `${count}%`
    downloadStatus.textContent = "Download File";
})

