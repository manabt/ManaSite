
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('status')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
/* function validate() {
    var textarea = document.getElementById('textarea').value;
    var usr = document.getElementById('username');
    var username = usr.value.trim();
    if ('\''.test(textarea)) {
        alert('do not add single qoutes to your inputs!');
    }
    if(username.charAt(0) != [A-Za-z]){
        alert("Must start with an alphabet!\n");
        return false;
    }
    if(username.length() < 6){
        alert("Must have at least 6 characters!\n");
        return false;
    }
    alert("Validations successful!");
   return true;
} */
/*
function validate(){
    var textarea = document.getElementById('textarea').value.trim();
    var pattern = /^[A-Z][A-Za-z]{19}[A-Za-z]*$/;
    if(textarea.value.match(pattern)) {
        alert("Validations successful!");
        return true;
    }
    else {
        alert("Must start with an alphabet and have at least 6 characters!");
        return false;
    }
}*/
/*
function validate(username) {
    var pattern2 = /^[A-Za-z][0-9a-zA-Z]{5}*$/;
    if ((username.value.match(pattern2))) {
        alert("Validations successful!");
        return true;
    }
    else {
        alert("Must start with an alphabet and have at least 6 characters!");
        return false;
    }
}*/

