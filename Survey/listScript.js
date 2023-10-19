let url = "http://localhost:3000/";
document.addEventListener('DOMContentLoaded', async()=>{
    let myArr = [];
    myArr = await getSurveyData();
    console.log(myArr)
     myArr.forEach(item => {
       showSurveys(item);
        });
 })
function showSurveys(survey){
    const tableBody = document.querySelector('#sur-list');
    const row = document.createElement('tr');
    row.innerHTML =`
    <td>${survey.SurveyName}</td>
    `
    tableBody.appendChild(row)
    const button = document.createElement('button');
    button.innerText = "Take the survey";
    row.appendChild(button);

    button.addEventListener('click',()=>{
      sessionStorage.setItem('SurveyId', survey.Id)
       // getSurvey(survey.Id);
        // modal.style.display = "block";
        location.href = 'QnA.html'
    })



}
var surveyListArray = [];
 async function getSurveyData(data) {
  try {
    const response = await fetch(url+'surveys', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json();
  } catch (err) {
    console.log("found error", err);
  }
}


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}