function validateForm(){
    var firstName = document.theForm.firstName.value;
    var lastName = document.theForm.lastName.value;
    var zipCode = document.theForm.zipCode.value;

    var errMessage = document.getElementById("errorMessage");


    var fullName = firstName + " " + lastName;

    if(fullName.length > 20 || fullName.length == 1){
        errMessage.innerHTML = "The first and last name mus have a combined length of 20 characters";
        return false;
    }

    if(zipCode.length !=5){
        errMessage.innerHTML = "The zip code must have exactly 5 digits.";
    }

    document.getElementById("secretMessage").innerHTML = "Mark Zuckerburg is a lizard man";
    return false;
}