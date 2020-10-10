//function to display quiz questions
export default function buildQuiz(questions){
    const quizDiv = document.getElementById('quizDiv');
    const btnsubmit = document.getElementById('btnsubmit');

    questions.map((question) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'questionDiv';
        questionDiv.id = 'questionDiv' + question.correct;
        //styling
        questionDiv.style.minWidth = '100%';
        questionDiv.style.cssText = " padding: 30px; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 0px";
        questionDiv.style.overflow = 'hidden';
        questionDiv.style.backgroundImage = "linear-gradient(black, black), " + "url('" + question.bgImage + "')";
        questionDiv.style.backgroundBlendMode = 'saturation';
        questionDiv.style.backgroundRepeat = "no-repeat";
        questionDiv.style.backgroundSize = 'cover';
        questionDiv.style.backgroundPosition = 'center';

        const qstnTitle = document.createElement('h2');
        qstnTitle.textContent = question.qstn;
        qstnTitle.className = 'qstn';
        qstnTitle.style.cssText = " font-family: 'Pacifico', cursive; \
        color: white;  background-color: rgba(0, 0, 0, 0.5) "
        
        const optionsForm = document.createElement('form');
        optionsForm.className = 'optionsForm';

        const submitNextDiv = document.createElement('div');
        submitNextDiv.className = 'submitNextDiv';
        submitNextDiv.style.cssText = 'border-color: green; border-style: thin; background-color: white';
        
        
        const submitDiv = document.createElement('div');
        submitDiv.addEventListener('click', respondClick2)
        submitDiv.className = 'submitDiv';
        submitDiv.textContent = 'Submit';
        submitDiv.style.cssText = 'border-setyle: thin; background-color:  grey';
        
        function respondClick2(){
            question.options.map((option) => {
                if(document.getElementById(option).checked && (option == question. correct)) {
                    
                    const feedback = document.createElement('p');
                    feedback.textContent = 'You are right! ' + option + ' is the capital of ' + question.country;
                    feedback.style.cssText = "font-family: 'Roboto', sans-serif; background-color: white; padding: 10px";
                    questionDiv.appendChild(feedback);

                    let optionDiv = document.getElementById('optionDiv' + option);
                    optionDiv.style.color = 'green';
                    questionDiv.style.backgroundImage = " " + "url('" + question.bgImage + "')";
                    questionDiv.style.backgroundBlendMode = 'none';
                }

                if(document.getElementById(option).checked && (option !== question. correct)) {
                    
                    const feedback = document.createElement('p');
                    feedback.textContent = 'Try again! ' + option + ' is not the correct answer...';
                    feedback.style.cssText = "font-family: 'Roboto', sans-serif; background-color: white; padding: 10px";
                    questionDiv.appendChild(feedback);

                    let optionDiv = document.getElementById('optionDiv' + option);
                    optionDiv.style.color = 'red';
                    optionsForm.style.backgroundColor = 'red';

                    questionDiv.style.backgroundImage = "linear-gradient(black, red), " + "url('" + question.bgImage + "')";
                    questionDiv.style.backgroundBlendMode = 'multiply';
                }
            })
        }

        const nextDiv = document.createElement('div');
        nextDiv.className = 'nextDiv';
        nextDiv.id = 'nextDiv';
        nextDiv.textContent = 'Next';
        nextDiv.style.cssText = 'border-setyle: thin; background-color: black';
        
        question.options.map((option) =>{
            
            const optionDiv = document.createElement('div');
            optionDiv.id = 'optionDiv' + option;

            const inputForm = document.createElement('input');
            inputForm.type = 'radio';
            inputForm.name = question.correct;
            inputForm.id = option;
            
            const inputLabel = document.createElement('label');
            inputLabel.for = option;
            inputLabel.textContent = option;
            inputLabel.style.cssText = "font-family: 'Balsamiq Sans', cursive;"

            optionDiv.appendChild(inputForm);
            optionDiv.appendChild(inputLabel);

            optionDiv.style.backgroundColor= 'rgba(0, 0, 0, 0.5)'; 
            optionDiv.style.padding = '10px';

            optionsForm.appendChild(optionDiv);        
         
            optionsForm.style.cssText = "  display: grid;  \
            grid-template-columns: repeat(auto-fit, 186px);  \
            grid-gap: 5px; color: white; font-family: 'Anton', sans-serif; \
            justify-content: center; margin: 20px; padding: 5px " ;

        });

        submitNextDiv.appendChild(submitDiv);
        submitNextDiv.appendChild(nextDiv);

        questionDiv.appendChild(qstnTitle);
        questionDiv.appendChild(optionsForm);

        questionDiv.appendChild(submitNextDiv);
        
        quizDiv.appendChild(questionDiv);

        $(".nextDiv").click(function() {
            var next;
            next = $(this).parent().parent().next();
            $('html,body').animate({scrollTop: next.offset().top});  
        })
    });

    $("#start").click(function() {
        var elmnt = document.getElementById("quizDiv");
        console.log(elmnt);
        console.log('hi');
        elmnt.scrollIntoView();
        
    })



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
                
                if (document.getElementById(option).checked && (option == question.correct)) {
                    // console.log('testing correct');
                    countCorrect = countCorrect + 1;
                    console.log('You have' + countCorrect + 'answers correct');

                    resultQuestion.textContent = 'You are right! ' + option + ' is the capital of ' + question.country;
                    resultQuestion.style.cssText = "font-family: 'Roboto', sans-serif; background-color: white; padding: 10px";
                    let optionDiv = document.getElementById('optionDiv' + option);
                    optionDiv.style.color = "green";
                    console.log(quizDiv2);
                }
              
                if (document.getElementById(option).checked && option != question.correct) {
                    // console.log('testing incorrect');
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