const jobs = [
    {
        title: "Java Full Stack Developer",
        company: "Infosys",
        location: "Chennai",
        salary: "₹5 - 8 LPA",
        experience: "0-2 Years"
    },

    {
        title: "Software Tester",
        company: "TCS",
        location: "Bangalore",
        salary: "₹4 - 6 LPA",
        experience: "0-1 Years"
    },

    {
        title: "Frontend Developer",
        company: "Wipro",
        location: "Hyderabad",
        salary: "₹5 - 7 LPA",
        experience: "1-2 Years"
    },

    {
        title: "Data Analyst",
        company: "Amazon",
        location: "Chennai",
        salary: "₹6 - 10 LPA",
        experience: "0-2 Years"
    }
];


// Search Function

function searchJobs(){

    let jobInput = document
    .getElementById("jobInput")
    .value
    .toLowerCase();


    let locationInput = document
    .getElementById("locationInput")
    .value
    .toLowerCase();


    let result = jobs.filter(job =>

        job.title.toLowerCase().includes(jobInput)
        &&
        job.location.toLowerCase().includes(locationInput)

    );


    displayJobs(result);

}



// Display Jobs

function displayJobs(result){

    let jobResults = document.getElementById("jobResults");


    jobResults.innerHTML = "";


    if(result.length === 0){

        jobResults.innerHTML =
        "<h3>No Jobs Found</h3>";

        return;
    }


    result.forEach(job => {


        jobResults.innerHTML += `

        <div class="job-card">

        <h3>${job.title}</h3>

        <p>Company: ${job.company}</p>

        <p>Location: ${job.location}</p>

        <p>Salary: ${job.salary}</p>

        <p>Experience: ${job.experience}</p>

        <button>
        Apply Now
        </button>

        </div>

        `;

    });

}