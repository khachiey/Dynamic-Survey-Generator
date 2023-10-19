

document.addEventListener('DOMContentLoaded', async () => {
    surveyListArray = await getSurveyData();
    //console.log(surveyListArray);
    surveyListArray.forEach((survey) => {
      UI.addSurveyToList(survey)
  
    }); 
    arrTwo = await getSurveyData();
    if( document.querySelector(".status")!=null)
   {
      
    document.querySelector(".status").addEventListener('click',() =>{
        console.log("why?")
        var hold = arrTwo.length
        console.log(hold)
      const work =   document.querySelector('#work')
      console.log(work)
      console.log(arrTwo.length);
  })

   }
  
    })

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

