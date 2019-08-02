//Get username from localStorage.
let username = localStorage.username;

/**************************************************
*
*   Navigation Section
*
**************************************************/

//Function to make Home Navigation item .active
$("#nav-home").unbind('click').click(function() {
    $("#nav-settings").removeClass("active");
    $("#nav-subscribe").removeClass("active");
    $("#nav-home").addClass("active");
    $("#dashboard").removeClass("hidden");
    $("#settings").addClass("hidden");
    $("#subscribe").addClass("hidden");
});

//Function to make Settings Navigation item .active
$("#nav-settings").unbind('click').click(function() {
    $("#nav-settings").addClass("active");
    $("#nav-subscribe").removeClass("active");
    $("#nav-home").removeClass("active");
    $("#dashboard").addClass("hidden");
    $("#settings").removeClass("hidden");
    $("#subscribe").addClass("hidden");
});

//Function to make Home Navigation item .active
$("#nav-subscribe").unbind('click').click(function() {
    $("#nav-settings").removeClass("active");
    $("#nav-subscribe").addClass("active");
    $("#nav-home").removeClass("active");
    $("#dashboard").addClass("hidden");
    $("#settings").addClass("hidden");
    $("#subscribe").removeClass("hidden");
});

//Function for collapsing change email
$("#change-email").unbind('click').click(function() {
    if($("#change-email").text() === "Change") {
        $("#change-email").text("Cancel");
    }
    else {
        $("#change-email").text("Change");
    }

    $("#setting-email").unbind('click').toggleClass("hidden");
    $("#setting-cp").toggleClass("hidden");
    $("#setting-cpc").toggleClass("hidden");
    $("#setting-submit-em").toggleClass("hidden");
});

//Redirect to home page after logging out
$("#nav-log-out").unbind('click').click(function(){
    localStorage.username = "";
    window.location.replace("index.html");
});

//Setup subscription button
$("#submitSubscription").click(function(){
    setTimeout(function(){
        getUserObj("subscriptionplan", $("#getSubSelect :selected").val());
    },300);
    location.reload();
});

/**************************************************
*
*   Settings Section 
*
**************************************************/

/**************************************************
*   Change Email - Settings Section 
**************************************************/

//Event listener for button to expand form for email
$("#setting-submit-em").unbind('click').click(function(){
    if($("#setting-cp").val() === $("#setting-cpc").val()) {
        let newEmail = $("#setting-cp").val();
        getUserObj("email", newEmail);

        $("#setting-email").text(newEmail);
        $("#setting-email").removeClass("hidden");
        $("#setting-cp").addClass("hidden");
        $("#setting-cpc").addClass("hidden");
        $("#setting-submit-em").addClass("hidden");
        $("#change-email").text("Change");
    }
    else {
        $("#dupWarning").removeClass("hidden");
        $("#dupWarning").addClass("d-inline");
    }
});

//Submitting new email to JSON
$("#setting-submit-em").unbind('click').click(function(){
    if($("#setting-cp").val() === $("#setting-cpc").val()) {
        let newEmail = $("#setting-cp").val();
        getUserObj("email", newEmail);

        $("#setting-email").text(newEmail);
        $("#setting-email").toggleClass("hidden");
        $("#setting-cp").toggleClass("hidden");
        $("#setting-cpc").toggleClass("hidden");
        $("#setting-submit-em").toggleClass("hidden");
        $("#change-email").text("Change");
    }
    else {
        $("#dupWarning").removeClass("hidden");
        $("#dupWarning").addClass("d-inline");
    }
});

/**************************************************
*   Fitness - Settings Section 
**************************************************/

//Enable buttons for fitness questions
$("#change-fitnessQ").unbind('click').click(function() {
    if($("#change-fitnessQ").text() === "Change") {
        $("#change-fitnessQ").text("Cancel");
    }
    else {
        $("#change-fitnessQ").text("Change");
    }

    $("#setting-submit-fq").toggleClass("hidden");
});

//Radio buttons options for the fitness questions
$(".clickable").unbind('click').click(function() {
    if($("#change-fitnessQ").text() != "Change") {
        let btnid = $(this).attr("id");
       
        if(btnid === $("#FqBeginner").attr("id") && !$("#FqBegBtn").hasClass("active")) {
            $("#FqBeginner").attr("checked", "checked");
            $("#FqExperienced").removeAttr("checked");
            $("#FqExpBtn").toggleClass("active").toggleClass("btn-primary").toggleClass("btn-secondary");
            $("#FqBegBtn").toggleClass("active").toggleClass("btn-primary").toggleClass("btn-secondary");
        }
        else if(btnid === $("#FqExperienced").attr("id") && !$("#FqExpBtn").hasClass("active")) {
            $("#FqExperienced").attr("checked", "checked");
            $("#FqBeginner").removeAttr("checked");
            $("#FqBegBtn").toggleClass("active").toggleClass("btn-primary").toggleClass("btn-secondary");
            $("#FqExpBtn").toggleClass("active").toggleClass("btn-primary").toggleClass("btn-secondary");
        }
        else if(btnid === $("#FqGym").attr("id") && !$("#FqGymBtn").hasClass("active")) {
            $("#FqGym").attr("checked", "checked");
            $("#FqHome").removeAttr("checked");
            $("#FqHomeBtn").toggleClass("active").toggleClass("btn-primary").toggleClass("btn-secondary");
            $("#FqGymBtn").toggleClass("active").toggleClass("btn-primary").toggleClass("btn-secondary");
        }
        else if(btnid === $("#FqHome").attr("id") && !$("#FqHomeBtn").hasClass("active")) {
            $("#FqHome").attr("checked", "checked");
            $("#FqGym").removeAttr("checked");
            $("#FqGymBtn").toggleClass("active").toggleClass("btn-primary").toggleClass("btn-secondary");
            $("#FqHomeBtn").toggleClass("active").toggleClass("btn-primary").toggleClass("btn-secondary");
        }
    }
});

//Submitting new fitness questions to JSON
$("#setting-submit-fq").unbind('click').click(function(){
    let equipment = "";
    let level = "";
    let workoutPlan = "";

    if($("#FqBeginner").attr("checked") == "checked") {
        level = "Beginner";
        getUserObj("level", $("#FqBeginner").attr("name"));
    }
    else if($("#FqExperienced").attr("checked") == "checked") {
        level = "Experienced";
        getUserObj("level", $("#FqExperienced").attr("name"));
    }
    setTimeout(function(){
        if($("#FqHome").attr("checked") == "checked") {
            equipment = "Body";
            getUserObj("equipment", $("#FqHome").attr("name"));
        }
        else if($("#FqGym").attr("checked") == "checked") {
            equipment = "Gym";
            getUserObj("equipment", $("#FqGym").attr("name"));
        }
    },200);

    setTimeout(function(){
        if(equipment === "Body") {
            if(level === "Beginner") {
                getUserObj("workoutplan", 3);
                workoutPlan = 3;
            }
            else {
                getUserObj("workoutplan", 4);
                workoutPlan = 4;
            }
        }
        else {
            if(level === "Beginner") {
                getUserObj("workoutplan", 2);
                workoutPlan = 2;
                
            }
            else {
                getUserObj("workoutplan", 1);
                workoutPlan = 1;
            }
        }

        $("#prof-exp").text(level);
        $("#prof-equip").text(equipment);
        $("#nav-settings").removeClass("active");
        $("#nav-subscribe").removeClass("active");
        $("#nav-home").addClass("active");
        $("#dashboard").removeClass("hidden");
        $("#settings").addClass("hidden");
        $("#subscribe").addClass("hidden");

        generateTable(1,workoutPlan);
    },200);

    $("#setting-submit-fq").toggleClass("hidden");
    $("#change-fitnessQ").text("Change");
});



/**************************************************
*
*   Reuseable Functions To PUT Data 
*
**************************************************/

//Function to create userobj to edit
let getUserObj = (item, updatedValue) => {
    fetch("https://finessedfitness.herokuapp.com/users/" + username)
    .then((response)=> response.json())
    .then((data)=>
    {
        updateUser(data,item,updatedValue);
    });
}

//Function to update user with helper function getUserObj
let updateUser = (userObj,item,updateditem) => {
    let username = userObj.id;
    userObj[item] = updateditem;

    fetch("https://finessedfitness.herokuapp.com/users/" + username,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userObj)
    })
    .then((response) => response.json())
    .then((data)=>console.log(data));
}

/**************************************************
*
*   Populatest he page with JSON Data
*
**************************************************/

//Populates the dashboard and settings page
let getUser = (username) => {
    fetch("https://finessedfitness.herokuapp.com/users/" + username)
    .then((response)=> response.json())
    .then((data)=>
    {
        let user = data;
        let day = user.dayOn;
        let email = user.email;
        let subscriptionplan = data.subscriptionplan;
        localStorage.subscription = data.subscriptionplan;

        $(".prof-name").text(user.firstname + " " + user.lastname);
        $("#prof-img").attr("src", user.userimage);
        $("#prof-dayOn").text(day);
        $("#setting-email").text(email);
        $(".prof-member-since").text("Member Since: " + user.memberSince);
        $(".prof-country").text("Country: " + user.country);
        $(".prof-dob").text("DOB: " + user.dob);
        $(".prof-weight").text("Weight: " + user.weightLB + " LBs");
        $("#prof-exp").text(data.level);
        $("#prof-equip").text(data.equipment);

        generateTable(day,data.workoutplan);

        //Day forward and backward functions
        $("#prof-dayback").click(function(){
            if(day != 1) {
                $("#prof-dayOn").text(day-1);
                generateTable(day-1,data.workoutplan);
                day--;
            }
        });

        $("#prof-dayforward").click(function(){
            if(localStorage.subscription === "Free") {
                if(day != 7) {
                    $("#prof-dayOn").text(day+1);
                    generateTable(day+1,data.workoutplan);
                    day++;
                }
            }
            else {
                if(day != 14) {
                    $("#prof-dayOn").text(day+1);
                    generateTable(day+1,data.workoutplan);
                    day++;
                }
            }
        });

        if(subscriptionplan === "Annual") {
            $("#nav-subscribe").addClass("hidden");
            $("#subscription-title").text("Annual Premium Subscription");
        }
        else if(subscriptionplan === "Monthly") {
            $(".subscribe-text").text("Upgrade To Annual Now!");
            $("#subscription-title").text("Monthly Premium Subscription");
        }
        else {
            $(".subscribe-text").text("Subscribe Now!");
            $("#subscription-title").text("Free Edition");
        }

        if(user.equipment === "Gym") {
            $("#FqGymBtn").addClass("active").addClass("btn-primary");
            $("#FqHomeBtn").addClass("btn-secondary");
            $("#FqGym").attr("checked", "checked");
        }
        else {
            $("#FqHomeBtn").addClass("active").addClass("btn-primary");
            $("#FqGymBtn").addClass("btn-secondary");
            $("#FqHome").attr("checked", "checked");
        }

        if(user.level === "Beginner") {
            $("#FqBegBtn").addClass("active").addClass("btn-primary");
            $("#FqExpBtn").addClass("btn-secondary");
            $("#FqBeginner").attr("checked", "checked");
        }
        else {
            $("#FqExpBtn").addClass("active").addClass("btn-primary");
            $("#FqBegBtn").addClass("btn-secondary");
            $("#FqExperienced").attr("checked", "checked");
        }
    });
};

getUser(username);

/**************************************************
*
*   Table Generator - Using Tabulator
*
**************************************************/

//Table Generator
var table = new Tabulator("#workout-table", {
    layout:"fitColumns",
    placeholder:"No Data Set",
    columns:[
        {title:"#", field:"num"},
        {title:"Name", field:"name"},
        {title:"Sets", field:"sets"},
        {title:"Rep", field:"reps"},
    ],
});

let generateTable = (day, planID) => {
    if(day > 14 || day < 1) {
        day = 1;
    }

    fetch("https://finessedfitness.herokuapp.com/workoutplans/" + planID)
    .then((response)=> response.json())
    .then((data)=>
    {
        let workoutList = data.day[parseInt(day-1,10)];
        let dailyVideo = data.day[parseInt(day-1,10)].recommendedV;
        let focus = data.day[parseInt(day-1,10)].focus;

        $("#prof-focus").text(focus);

        //Populate the how-to videos
        dailyVideo.forEach(function(element, index) {
            $("#howtoname" + index).text(element.vname);
            $("#howtovideo" + index).attr("src", element.vurl);
        });

        table.setData(workoutList.workouts);
    });
}

