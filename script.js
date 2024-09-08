
document.addEventListener("DOMContentLoaded", function() {
    let studentsCount = document.getElementById("students-count");
    let coursesCount = document.getElementById("courses-count");
    let facultyCount = document.getElementById("faculty-count");

    studentsCount.innerHTML = "1500+";
    coursesCount.innerHTML = "50+";
    facultyCount.innerHTML = "100+";
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    
    if (name === "" || email === "" || message === "") {
        document.getElementById("response").innerHTML = "All fields are required.";
        document.getElementById("response").style.color = "red";
    } else {
        document.getElementById("response").innerHTML = "Thank you for contacting us!";
        document.getElementById("response").style.color = "green";
    }
});
