let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

// Default jobs
if (jobs.length === 0) {
    jobs = [
        {
            title: "Java Developer",
            company: "Infosys",
            location: "Hyderabad"
        },
        {
            title: "Frontend Developer",
            company: "Google",
            location: "Bangalore"
        }
    ];

    localStorage.setItem("jobs", JSON.stringify(jobs));
}

// Post Job
const jobForm = document.getElementById("jobForm");

if (jobForm) {

    jobForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const title = document.getElementById("title").value;
        const company = document.getElementById("company").value;
        const location = document.getElementById("location").value;

        jobs.push({
            title,
            company,
            location
        });

        localStorage.setItem("jobs", JSON.stringify(jobs));

        alert("Job Posted Successfully!");

        window.location.href = "jobs.html";

    });

}

// Display Jobs
const container = document.getElementById("jobContainer");

if (container) {

    jobs.forEach(job => {

        container.innerHTML += `
        <div class="job-card">
            <h3>${job.title}</h3>
            <p><b>Company:</b> ${job.company}</p>
            <p><b>Location:</b> ${job.location}</p>
            <button onclick="location.href='apply.html'">
                Apply Now
            </button>
        </div>
        `;

    });

}

// Search
function searchJobs() {

    const search = document.getElementById("search").value.toLowerCase();

    const cards = document.querySelectorAll(".job-card");

    cards.forEach(card => {

        if (card.innerText.toLowerCase().includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}
// Submit Job Application
function submitApplication() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all the fields.");
        return;
    }

    let applicants = JSON.parse(localStorage.getItem("applicants")) || [];

    applicants.push({
        name: name,
        email: email,
        phone: phone
    });

    localStorage.setItem("applicants", JSON.stringify(applicants));

    alert("Application Submitted Successfully!");

    document.querySelector("form").reset();

    // Optional: Go back to Jobs page
    // window.location.href = "jobs.html";
}
// Recruiter Dashboard

const dashboardJobs = document.getElementById("dashboardJobs");

if (dashboardJobs) {

    dashboardJobs.innerHTML = "";

    jobs.forEach((job, index) => {

        dashboardJobs.innerHTML += `

        <div class="job-card">

        <h3>${job.title}</h3>

        <p>${job.company}</p>

        <p>${job.location}</p>

        <button onclick="deleteJob(${index})">Delete Job</button>

        </div>

        `;

    });

}

function deleteJob(index){

jobs.splice(index,1);

localStorage.setItem("jobs",JSON.stringify(jobs));

location.reload();

}



// Applicants

const applicantList=document.getElementById("applicantList");

if(applicantList){

let applicants=JSON.parse(localStorage.getItem("applicants")) || [];

if(applicants.length==0){

applicantList.innerHTML="<p>No Applicants Yet.</p>";

}else{

applicants.forEach(app=>{

applicantList.innerHTML+=`

<div class="job-card">

<h3>${app.name}</h3>

<p>${app.email}</p>

<p>${app.phone}</p>

</div>

`;

});

}

}