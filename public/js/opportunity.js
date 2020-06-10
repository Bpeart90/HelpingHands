$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    // $.get("/").then((data) => {
    //     $(".member-name").text(data.email);
    // });

    function searchOpportunity() {
        // If role is volunteer create volunteer role
        $.get("/api/opportunity", {
            email: email,
            password: password
        })
            .then((data) => {
                console.log(data);
                // window.location.replace("/members");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }
});