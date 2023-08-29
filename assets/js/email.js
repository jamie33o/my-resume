function sendMail(contactForm) {
    emailjs.send("service_m86jn6a", "template_b9io2vb", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "projectsummary": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}