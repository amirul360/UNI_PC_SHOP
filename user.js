
    function cekNewCustomer(event) {
      event.preventDefault(); 

     
      const NewToShop = document.getElementById("NewToShop").value.toLowerCase();

     
      if (NewToShop === "yes") {
        alert("Welcome to the shop! We're glad to have you here.");
      } else if (NewToShop === "no") {
        alert("Welcome back! We're happy to see you again.");
      } else {
        alert("Please answer 'yes' or 'no'.");
      }
    }
// to recomen a package to user
    function packageList() {
        const selectedPackage = document.querySelector('input[name="package"]:checked').value;
        const contentDiv = document.getElementById("item");
  
        if (selectedPackage === "A") {
          contentDiv.innerHTML = "<h2>Package AMD:RM 1499</h2><p>AMD Ryzen 5 5500, GTX 1650, MOBO MSI A520M</p>";
        } else {
          contentDiv.innerHTML = "<h2>Package Intel:RM 3799</h2><p>Intel core i5 12400f , RTX 4060 8gb, MOBO MSI H610M-E</p>";
        }
      }

      function getRespon(event) {
        event.preventDefault(); 
  
       
        const respon = document.getElementById("satis").value.toLowerCase();
  
       
        if (respon === "yes") {
          alert("Happy we helped you.");
        } else if (respon === "no") {
          alert("Sorry we will try find a better video for you.");
        } else {
          alert("Please answer 'yes' or 'no'.");
        }
      }

      document.getElementById("cat").addEventListener("click", function() {
        var img = document.getElementById("myImage");
    
        // Change the image to a new one
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dd0b8x-ZGV4ivsNLwh97FMR6jlmX_NqPmw&s";
        var meow = document.getElementById("meow");
        meow.play();
        // After 0.3 second i think, change it back to the original image
        setTimeout(function() {
            
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppjAatgmYRLUJRV8j22oPeKDDT4ofLI7ZjQ&s";
        }, 300);
    });