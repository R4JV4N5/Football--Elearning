const signinBtn = document.querySelector(".signinbtn");
      const signupBtn = document.querySelector(".signupbtn");
      const formBx = document.querySelector(".formBx");
      const body = document.querySelector("body");

      signupBtn.onclick = function () {
        formBx.classList.add("active");
        body.classList.add("active");
      };

      signinBtn.onclick = function () {
        formBx.classList.remove("active");
        body.classList.remove("active");
      };

const loginUser = (e) =>{
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  if(email==='admin' &&password==="admin"){
    localStorage.setItem('loggedIn', true)
    location.href = '/index.html'
    alert("Login Successful !")
    return
  }
  alert("Invalid Login details !")
}