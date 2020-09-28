///lets make a function to check that the email is correct
// export default function checkEmail(input){
//     const mailChar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] + @[a-zA-Z0-9-] + (?: \.[a-zA-Z0-9-] + )*$/;
// }
function ValidateEmail(){
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailInput = document.getElementById('email');
    const emailInputVal = document.getElementById('email').value;
    console.log(emailInput);
    console.log(emailInputVal);
    if(emailInputVal.match(mailformat))
        {alert("Valid email address!");
        emailInput.focus();
        return true;
    }
    else
        {alert("You have entered an invalid email address!");
        emailInput.focus();
        return false;
    }
};

$(document).on("click", "#btn-submit", function() {
    ValidateEmail()
    //this is going to empty the input box and make the cursor again in the input box after clicking $('#item').val('').focus();
});

