$("#nextSec").click(function() {
    $("#firstSection").addClass("hidden");
    $("#nextSection").removeClass("hidden");
    $("#updateBtnText").text("Create Account");
    $("#nextSec").addClass("hidden");
    $("#createAcc").removeClass("hidden");
});

$("#createAcc").click(function(){
    console.log("This worked");

    if($("#username").val().length > 0) {
        localStorage.username = $("#username").val();
        fetch("https://finessedfitness.herokuapp.com/users/default")
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data);
            data.id = $("#username").val();
            data.password = $("#password").val();
            data.firstname = $("#fname").val();
            data.lastname = $("#lname").val();
            data.email = $("#email").val();
            data.age = $("#age").val();
            data.WeightLB = $("#weight").val();
            data.dob = $("#dob").val();
            data.country = $("#country").val();
            data.userimage = $("#imglink").val();
            console.log(data);
            
            POSTacc(data);
        });
    }
    setTimeout(function(){ window.location.replace("dashboard.html"); }, 1000);
});

let POSTacc = (userObj) => {
    console.log(userObj);
    fetch("https://finessedfitness.herokuapp.com/users/",{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userObj)
    })
    .then((response) => response.json())
    .then((data)=>console.log(data));
}