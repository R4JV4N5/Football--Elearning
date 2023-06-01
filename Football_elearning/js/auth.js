window.onload = function() {
    var loggedIn = localStorage.getItem('loggedIn'); // replace 'loggedIn' with your actual key

    if (loggedIn) {
        var loginLink = document.getElementById('login-link');

        // Change the text
        loginLink.textContent = 'Logout';
        loginLink.removeAttribute("href");
        loginLink.onclick = logoutUser

    }else{

    }
}

const logoutUser = ()=>{
    localStorage.removeItem('loggedIn');
    location.href = '/index.html'
    alert("Logout Sucessful")
    // var loginLink = document.getElementById('login-link');
    

}