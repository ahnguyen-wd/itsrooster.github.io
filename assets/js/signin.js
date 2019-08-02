//Login Button - CHeck JSON to confirm
$("#loginBtn").click(function(){ 
    localStorage.username = $("#username").val();
    let username = $("#username").val();
    fetch("http://localhost:3000/users/")
    .then((response)=> response.json())
    .then((data)=>
    {   
        console.log(data.length);
        let found = false;
        for(let i = 0; i < data.length && found === false; i++) {
            
            if(data[i].id === username) {
                
                if($("#username").val() === data[i].id && $("#password").val() === data[i].password) {
                    found = true;
                    window.location.replace("dashboard.html");
                }
            }
        }
        if (found === false) {
            $("#loginerr").removeClass("hidden");
            $('#loginerr').addClass('hidden').fadeIn(1000);
        }
    });
});
