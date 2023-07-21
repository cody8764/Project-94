function addUser() {
    userjs = document.getElementById("user").value;
  
      localStorage.setItem("username", userjs);

      window.location = "Kwitter_room.html";
  }