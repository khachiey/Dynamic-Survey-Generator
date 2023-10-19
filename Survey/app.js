const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

 sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

let url = "http://localhost:3000/users" ;


// const username = document.querySelector(".userOne");
// const password =document.querySelector(".passOne");
// const email = document.querySelector(".email");
const loginbtn = document.querySelector(".btn1");

loginbtn.addEventListener('click',login)

function login(e) {
  e.preventDefault();
const username = document.querySelector(".userOne").value;
const password =document.querySelector(".passOne").value;
const email = document.querySelector(".email").value;

  
  if (!username && !password && !email){
    alert('please enter all required details');
  }
  else{
  
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when
        body: JSON.stringify({
          Username: username,
          Password: password,
          Email: email
        })
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data)
      questionId
    })
  }
  window.location.replace('surList.html');
}

  const logUsername = document.querySelector(".user");
  const logPassword = document.querySelector(".pass");
  const logInBtn = document.querySelector(".btn");


logInBtn.addEventListener('click',logIn);

function logIn(e){
  e.preventDefault();

  if ((!logUsername.value) && (!logPassword.value)){
    alert('Please enter all the fields');
  }
  else{
    console.log('hayi noooo');
    function getUsers() {
     
    fetch(url,{
      method:'GET'
    })
    .then(function(resp){
      return resp.json();
    })
    .then(function(data){
      console.log(data)
           //for users
     if(!data.find(dt => dt.Username ===  logUsername.value &&  dt.Password === logPassword.value || dt.Username.toLocaleUpperCase() ===  (`${logUsername.value}/admin`).toLocaleUpperCase())){
      alert('Incorrect username or password')
    }else{
     
     window.location.replace('surList.html')
    }

    })

    }  
    getUsers();
   }}


//for admins
const createBtn = document.querySelector('.btn2');


createBtn.addEventListener('click',checkUser);

function checkUser(e){
  e.preventDefault();

  if ((!logUsername.value) && (!logPassword.value)){
    alert('Please enter all the fields');
  }
  else{
    console.log('hayi noooo');
    function getUsers() {
     
    fetch(url,{
      method:'GET'
    })
    .then(function(resp){
      return resp.json();
    })
    .then(function(data){
     
      //for users
     if(!data.find(dt => (dt.Username.toLocaleUpperCase() ===  (`${logUsername.value}/admin`).toLocaleUpperCase())  && (dt.Password === logPassword.value))){
       
      console.log('admin:',`${logUsername.value}/admin`)
       alert('Incorrect username and password')
     }else{

      let local = data.find(object =>object.Username == (`${logUsername.value}/admin`));
      console.log(local)
      var json = JSON.stringify(local)

      localStorage.setItem('userCredentials', json)
      //var myData = JSON.parse(localStorage.getItem('userCredentials'))
      //console.log(myData)
        // alert(data);
      window.location.replace('dash.html')
     }
    }) 
  }
    getUsers();
  }
}

//  let url2 = "http://localhost:3000/surveys";

//  async function postData(data) {
//   try {
//     const response = await fetch(url2, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json();
//   } catch (err) {
//     console.log("found error", err);
//   }
// }






