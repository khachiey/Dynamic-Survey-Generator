const question = document.querySelector('.question');
const type = document.querySelector('#type');
const addBtn = document.querySelector('.btn');



let url = "http://localhost:3000/questions";


  
addBtn.addEventListener('click',postData)

function postData(e) {
    e.preventDefault();
    const postQue = question.value;
    const postType = type.value;
    
    console.log('eish');
    

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
            SurveyID:localStorage.getItem('surveyId'),
            Question: postQue,
            Type: postType
          })
      })
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        console.log(data)
      })
    
     location.reload(); 

    }
    
