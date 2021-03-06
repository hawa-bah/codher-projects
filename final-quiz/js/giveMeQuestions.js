//function to display quiz questions
export default function buildQuiz(questions){
    const quizDiv = document.getElementById('quizDiv');
    const btnsubmit = document.getElementById('btnsubmit');
    const resultsDiv = document.getElementById('resultsDiv');

    questions.map((question) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'questionDiv';
        questionDiv.id = 'questionDiv' + question.correct;
        //styling
        questionDiv.style.height = '500px';
        questionDiv.style.backgroundImage = "url('" + question.bgImage + "')";
        questionDiv.style.backgroundSize = '100%';
        questionDiv.style.backgroundPosition = 'center';
        //questionDiv.style.filter =  'brightness(50%)';
        questionDiv.style.display = 'flex';
        questionDiv.style.flexDirection = 'column';
        questionDiv.style.justifyContent = 'center';
        questionDiv.style.alignItems = 'center';
        questionDiv.style.justifyContent = 'space-between';
        questionDiv.style.padding = '20px';
        questionDiv.style.border = '30px';
    
        const qstnTitle = document.createElement('h2');
        qstnTitle.textContent = question.qstn;
        qstnTitle.className = 'qstn';
        qstnTitle.style.fontFamily = "'Pacifico', cursive";
        qstnTitle.style.color = 'white';
        qstnTitle.style.fontSize = '50px';
        qstnTitle.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

        const optionsForm = document.createElement('form');
        
        question.options.map((option) =>{
            
            const optionDiv = document.createElement('div');
            optionDiv.id = 'optionDiv' + option;

            const inputForm = document.createElement('input');
            inputForm.type = 'radio';
            inputForm.name = question.correct;
            //inputForm.value = option;
            inputForm.id = option;
            
            const inputLabel = document.createElement('label');
            inputLabel.for = option;
            inputLabel.textContent = option;
            inputLabel.style.cssText = "font-family: 'Balsamiq Sans', cursive;"

            optionDiv.appendChild(inputForm);
            optionDiv.appendChild(inputLabel);

            optionDiv.style.backgroundColor= 'rgba(0, 0, 0, 0.5)'; 
            optionDiv.style.width = '200px';
            //optionDiv.style.height = '50px';
            optionDiv.style.padding = '20px';
            // background-color: rgba(0, 0, 0, 0.5)

            optionsForm.appendChild(optionDiv);

            optionsForm.style.cssText = " width: 50%; display: grid; \
             grid-template-columns: 1fr 1fr; grid-template-rows: auto; \
             grid-gap: 5px; color: white; font-family: 'Anton', sans-serif; \
             padding-bottom: 30px; \
             " ;
            //end new
            // optionsForm.appendChild(inputForm);
            // optionsForm.appendChild(inputLabel);
        });

        questionDiv.appendChild(qstnTitle);
        questionDiv.appendChild(optionsForm);
        
        quizDiv.appendChild(questionDiv);
    });

    //////////////////////////////////////////////////////////////////////////////////
    ////////    ADDING AN EVENT LISTENER
    ///////////////////////////////////////////////////////////////////////////////
    btnsubmit.addEventListener('click', respondClick);

    var questionArray = questions;

    function respondClick(){

        //testing
        //console.log(questionArray);
        
        let countCorrect = 0;
        //testing
        // console.log(document.getElementById('Sitges').checked);

        questionArray.map((question) =>{

            const quizDiv2 = document.getElementById('questionDiv' + question.correct);
            const resultQuestion = document.createElement('p');            

            question.options.map((option) =>{

                ///testing
                //console.log (document.getElementById(option).checked, option, question.correct);
                
                if (document.getElementById(option).checked && (option == question.correct)) {
                    console.log('testing correct');
                    countCorrect = countCorrect + 1;
                    console.log('You have' + countCorrect + 'answers correct');

                    resultQuestion.textContent = 'You are right! ' + option + ' is the capital of ' + question.country;
                    resultQuestion.style.cssText = "font-family: 'Roboto', sans-serif; background-color: white; padding: 10px";
                    let optionDiv = document.getElementById('optionDiv' + option);
                    optionDiv.style.color = "green";
                    // testing
                    // let optionDiv = document.parentElement(document.getElementById(option));
                    // console.log(optionDiv);
                }

                // testing (this works) 
                // if (document.getElementById(option).checked){
                //         console.log('testing correct');
                //     };
                // }

                if (document.getElementById(option).checked && option != question.correct) {
                    console.log('testing incorrect');
                    
                    resultQuestion.textContent = 'Try again! ' + option + ' is not the correct answer...';
                    resultQuestion.style.cssText = " font-family: 'Roboto', sans-serif; background-color: white; padding: 10px";

                    let optionDiv = document.getElementById('optionDiv' + option);
                    optionDiv.style.color = 'red';
                }     
            });
            
            quizDiv2.appendChild(resultQuestion);
        });        
    }
};