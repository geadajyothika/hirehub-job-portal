function submitApplication() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(name === "" || email === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

    let applicant = {
        name: name,
        email: email,
        phone: phone
    };

    localStorage.setItem(
        "applicant",
        JSON.stringify(applicant)
    );

    document.body.innerHTML =
    "<h1>Application Submitted Successfully!</h1>";
}