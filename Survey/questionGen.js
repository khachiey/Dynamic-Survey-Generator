const questionContainer = document.querySelector(".questions-container");
let urls = "http://localhost:3000/questions";
const questionTypes = Object.freeze({
  input: "Input-field",
  textArea: "b",
  range: "Range",
  yesNo: "Yes/No",
  radioGroup: "e",
  multiCheckBox: "f",
});

async function getQuestionsData() {
  // 
  
  // console.log('eish');
  

  fetch(urls, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when
        // body: JSON.stringify({
        //   SurveyID:localStorage.getItem('surveyId'),
        //   Question: postQue,
        //   Type: postType
        // })
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){

      console.log('datra',data)
        return data;
      
    })

   
}
 var dummyQuestions = []

let filteredQuestions =[];
 document.addEventListener('DOMContentLoaded', async ()=>{
    
  fetch(urls, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when
      // body: JSON.stringify({
      //   SurveyID:localStorage.getItem('surveyId'),
      //   Question: postQue,
      //   Type: postType
      // })
  })
  .then(function(response){
   
    return response.json()
  })
  .then(data=>{
    

     filteredQuestions = data.filter(question=>question.SurveyID === sessionStorage.getItem('SurveyId'))
    console.log(filteredQuestions);
     dummyQuestions=filteredQuestions.map(record=>({
            question: record.Question,
            type: record.Type,
          questionId:record.Id,          
    })
    )
    
     let questionViews = "";

  

 dummyQuestions.forEach(({ question, questionId, type, options }, index) => {
   questionViews += questionsGenerator(question, type, questionId, index + 1, options);
 });
 questionContainer.innerHTML = questionViews;

 

})
 })

function questionsGenerator(question, type, questionId, questionNumber, options = []) {
  switch (type) {
    case questionTypes.input:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        `<input id=${questionId} placeholder=' Enter your answer' class='standard-input' />` +
        "</div>" +
        "</div>"
      );
    case questionTypes.yesNo:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer-yes-no'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        "<div class='yes-no'>" +
        `<input type="radio" id=${questionId} name=${questionId} value="{1}" class='yes' />` +
        "<label for='yes'>Yes</label>" +
        "<br />" +
        `<input type="radio" id=${questionId}  name=${questionId} value="{0}" class='no' />` +
        "<label for='no'>No</label>" +
        "<br/>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
    case questionTypes.range:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        `<input id=${questionId} class="standard-input" type="range" min="0" max="10" />` +
        "</div>" +
        "</div>"
      );
    case questionTypes.textArea:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer-textAreaField'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        `<textarea id=${questionId} class="textAreaField" rows="4" cols="45">` +
        "" +
        "</textarea>" +
        "</div>" +
        "</div>"
      );
    case questionTypes.radioGroup:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer-checkRadio'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        " <div class='radioQuestions'>" +
        radioOptionCreator(questionId, options) +
        "</div>" +
        "</div>" +
        "</div>"
      );

    case questionTypes.multiCheckBox:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer-checkRadio'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        " <div class='radioQuestions'>" +
        checkOptionCreator(questionId, options) +
        "</div>" +
        "</div>" +
        "</div>"
      );
    default:
      return ;
  }
}

// let questionViews = "";

// dummyQuestions.forEach(({ question, questionId, type, options }, index) => {
//   questionViews += questionsGenerator(question, type, questionId, index + 1, options);
// });




// questionContainer.innerHTML = questionViews;

function radioOptionCreator(questionId, options) {
  let initiaOptions = "";
  options.forEach(({ text, value }) => {
    initiaOptions +=
      `<input type="radio" id=${questionId} name=${questionId} value=${value} />` + `<label>${text}</label><br />`;
  }) + "</div>";
  return initiaOptions;
}

function checkOptionCreator(questionId, options) {
  let initiaOptions = "";
  options.forEach(({ text, value }) => {
    initiaOptions +=
      `<input type="checkbox" id=${questionId} name=${questionId} value=${value} />` + `<label>${text}</label><br />`;
  }) + "</div>";
  return initiaOptions;
}
console.log(dummyQuestions);