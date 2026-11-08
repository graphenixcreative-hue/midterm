
const form = document.getElementById("registrationForm");

const genderBoxes = document.querySelectorAll(
    'input[name="gender"]'
);

// Allow only one gender selection
genderBoxes.forEach(box => {
    box.addEventListener("change", function() {
        if (this.checked) {
            genderBoxes.forEach(other => {
                if (other !== this) {
                    other.checked = false;
                }
            });
        }
    });
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const first = document.getElementById("firstName").value;
    const second = document.getElementById("secondName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;

    const selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!selectedGender) {
        alert("Please select your gender!");
        return;
    }

    // Display information
    document.getElementById("outFirst").textContent = first;
    document.getElementById("outSecond").textContent = second;
    document.getElementById("outEmail").textContent = email;
    document.getElementById("outPhone").textContent = phone;
    document.getElementById("outAge").textContent = age;
    document.getElementById("outGender").textContent =
        selectedGender.value;
    document.getElementById("outCity").textContent = city;
    document.getElementById("outAddress").textContent = address;

    // Change button according to gender
    const earnBtn = document.getElementById("earnBtn");

    if (selectedGender.value === "Female") {
        earnBtn.textContent = "Go to task";
    } else {
        earnBtn.textContent = "Go and earn";
    }

    // Show output section
    document.getElementById("output").hidden = false;

    // Scroll to output
    document.getElementById("output").scrollIntoView({
        behavior: "smooth"
    });

});

// Button click
document.getElementById("earnBtn").addEventListener("click", function() {

    const selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (selectedGender.value === "Female") {
        alert("Welcome! Go to your task.");
    } else {
        alert("Welcome! Go and earn!");
    }

});
