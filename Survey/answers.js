let questionsAnswers = [];
let submitButton = document.querySelector(".submitting-answers");


let urls1 = "http://localhost:3000/answers";
let url1 = "http://localhost:3000/responses";

submitButton.addEventListener("click", receivedAnswers);
function receivedAnswers() {
  dummyQuestions.forEach(({ questionId, type }) => {
    if (type == questionTypes.yesNo || type == questionTypes.radioGroup) {
      let answers = document.querySelectorAll(`[id='${questionId}']`);

      questionsAnswers.push({
        questionId: questionId,
        answer: [...answers].find((elmnt) => elmnt.checked == true).value,
      });
      return;
    } else if (type == questionTypes.multiCheckBox) {
      let answers = [...document.querySelectorAll(`[id='${questionId}']`)];

      answers = answers.filter((elmnt) => elmnt.checked).map((elnt) => elnt.value);

      questionsAnswers.push({
        questionId: questionId,
        answer: answers,
      });
      return;
    }

    questionsAnswers.push({
      questionId: questionId,
      answer: document.querySelector(`[id='${questionId}']`).value,
  
    });
  });
  console.log("checking....", questionsAnswers);
  // var ouma = localStorage.getItem('userCredentials');
  // var dataTwo = localStorage.getItem('surveyId');
  // var data = JSON.parse(ouma)
 
  // console.log(data.Id);
  // console.log(localStorage);
  // console.log(dataTwo)

  // var grabObj = {
  //   SurveyID: dataTwo,
  //   UserID: data.Id
  // }

  questionsAnswers.forEach(answers => {
    let Answers = {
      QuestionID: answers.questionId,
      AnswerQ: answers.answer,
     
    }

    postData(Answers)
    // postResp(grabObj)
    // console.log('here' ,grabObj);
  });

  
}

// submitButton.addEventListener('click',resp)

function resp(){
  var ouma = localStorage.getItem('userCredentials');
  var dataTwo = localStorage.getItem('surveyId');
  var data = JSON.parse(ouma)

  console.log(data.Id);
  console.log(localStorage);
  console.log(dataTwo)

  var grabObj = {
    SurveyID: dataTwo,
    UserID: data.Id
  }

  postResp(grabObj)
  console.log('here' ,grabObj);
}


submitButton.addEventListener('click',postData)

function postData(data) {
    // e.preventDefault();

    
    // console.log('eish');
    fetch(urls1, {
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
          body: JSON.stringify(data)
      })
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        
        console.log(data)
        
        
      }) 
      
      window.location.replace('surList.html');
      //alert('thank you for taking the survey');


    }
    
    submitButton.addEventListener('click',resp)

    async function postResp(data) {
      try {
        const response = await fetch(url1, {
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
    
    
     
