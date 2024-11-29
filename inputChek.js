function validateForm(event) {
    const fullName = document.forms["Form"]["fname"].value;
    const phoneNumber = document.forms["Form"]["num"].value;
    const email = document.forms["Form"]["email"].value;

    if (!fullName || !phoneNumber || !email) {
      alert("Please fill in your name, phone number, and email.");
      event.preventDefault(); // Prevent the form from being submitted
      return false;
    }

    alert("Message sent!");
    return true;
  }