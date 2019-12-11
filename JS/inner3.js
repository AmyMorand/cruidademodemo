function check(form)
{

if(form.pwd.value == "PASS")
{
	return true;
}
else
{
	alert("Error Password or Username")
	return false;
}
}


$("#con").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        submitMSG(false, "Did you fill in the form properly?");
        // handle the invalid form...
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

