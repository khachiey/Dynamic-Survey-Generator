let url2 = "http://localhost:3000/surveys";
let url1 = "http://localhost:3000/responses";

var surveyListArray = [];
 async function postData(data) {
  try {
    const response = await fetch(url2, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
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

const addbtn = document.querySelector(".addBtn");
const input = document.querySelector(".myInput");
//const create = document.querySelector(".btn")
var surveyName = document.querySelector('#myInput');

if(addbtn!=null) {
  addbtn.addEventListener('click',async ()=>{
    // e.preventDefault();
    
    var user = localStorage.getItem('userCredentials');
    var data =JSON.parse(user);
  
    let newSurvey ={
      SurveyName: surveyName.value,
      UserID: data.Id
    }

    


    let surveyArr =[]

    // let array = await postData(newSurvey);
    // localStorage.setItem('surveyId',array.SurveyID)
    // console.log(arr.SurveyID)
    
    //post survey
    surveyArr = await postData(newSurvey);
    console.log(surveyArr)
    surveyListArray.push(surveyArr);
    UI.addSurveyToList(newSurvey);
    console.log(surveyListArray)
    console.log(arrTwo);

    // surArray = await getSurveyData()
    // let keep = surArray.find(data => {
    //   data.Id, data.UserID
    // })
    // console.log(keep);
    // var grab = surveyListArray.forEach(survey => {
    //  let grabArray = []
    //  grabArray.push(survey.Id)
    //  console.log(grabArray)
    // })
    //var getSurvey = sessionStorage.setItem('')

  })
}


class UI {
    static displaySurveys() {
  
      surveyListArray.forEach(survey => UI.addBookToList(survey));
    }
    
    static addSurveyToList(survey) {
      const list = document.querySelector('#sur-list');
      if(list!=null){
        var user = localStorage.getItem('userCredentials');
        var data =JSON.parse(user);
        console.log(data)
       let row = document.createElement("tr")
       
    
        row.innerHTML = `
          <td>${survey.SurveyName}</td>
          <td>${data.Username}</td>
        `
        list.appendChild(row);
      }
     
    }

  }

  document.addEventListener('DOMContentLoaded', async () => {
    surveyListArray = await getSurveyData();
    //console.log(surveyListArray);
    surveyListArray.forEach((survey) => {
      UI.addSurveyToList(survey)
  
    }); 
    arrTwo = await getSurveyData();

    console.log(document.querySelector("#work"))
    if( document.querySelector("#work")!=null)
   {
    
    document.querySelector("#status").addEventListener('click',() =>{
      document.querySelector('#work').append(arrTwo.length)
      var valuesSurvays = arrTwo.length
      yValues.push(valuesSurvays);
      console.log(valuesSurvays);
      //console.log(localStorage);
  })

   }
  
    })

   if (addbtn!=null){
    addbtn.addEventListener('click',openForm);
    function openForm() {
      document.getElementById("myForm").style.display = "block";
      
    }
   }
  
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
   
  function openQuestion() {

    // console.log(surveyListArray);
    let json =[] ;
    json = surveyListArray.find(js=>js.SurveyName === surveyName.value);
    // console.log(json.Id);
    localStorage.setItem('surveyId', json.Id)
    console.log(localStorage.getItem('surveyId'))
    window.location.href= 'creSurvay.html';
  }

  var surArray = []
  var arrTwo = []
  async function getSurveyData(data) {
    try {
      const response = await fetch(url2, {
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
 
  //  if( document.querySelector(".status")!=null)
  //  {
  //   document.querySelector(".status").addEventListener('click',() =>{
  //     document.querySelector('.allList').append(arrTwo.length)
  //     console.log(arrTwo.length);
  // })

  //  }


  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("status");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//////////////////////////////////////////////////////////////////////////

// var xValues = ["Italy", "France"];
// var yValues = [55, 49];
// var barColors = [
//   "#b91d47",
//   "#00aba9",
  
// ];

// new Chart("myChart", {
//   type: "pie",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "World Wide Wine Production 2018"
//     }
//   }
// });




// var xValues = ["Surveys", "Responses"];
// // var yValues = [valuesSurvays, valuesResponse];
// var barColors = [
//   "#e8c3b9",
//   "#00aba9",
//   "#2b5797",
//   "#e8c3b9",
//   "#1e7145"
// ];

// new Chart("myChart", {
//   type: "pie",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "Survey and Response"
//     }
//   }
// });


var responseArray = []
function getResponses() {
 console.log('whats app')
  fetch(url1,{
    method:'GET'
  })
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    console.log(data)
})

 }

getResponses();

var  yValues  = []
responseArray.push(getResponses);
var valuesResponse = responseArray.length;
yValues.push(valuesResponse);
console.log(valuesResponse);


var xValues = ["Surveys", "Responses"];
// var yValues = [valuesSurvays, valuesResponse];
var barColors = [
  "#e8c3b9",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Survey and Response"
    }
  }
});