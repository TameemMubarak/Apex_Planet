function alertMessage(){
    alert("welcome to Sethi...")
}

function displayDate(){
    const date=new Date();
    const dateString=date.toLocaleString();
    document.getElementById("date").textContent=dateString;
}

displayDate();
setInterval(displayDate,1000);

// function showDateTime() {
//     const now = new Date();
//     const dateTimeString = now.toLocaleString(); // formatted date and time
//     document.getElementById("dateTimeDisplay").textContent = dateTimeString;
//   }
  
//   // Show immediately
//   showDateTime();
  
//   // Update every second (optional)
//   setInterval(showDateTime, 1000);