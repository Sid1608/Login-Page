alert('This Form Is Only For Those Students Whose Age Is Above 18!!');
var yourname=prompt('Enter your name');
/*this function validates first name of the student */
function validatefName()
{
	var name=document.getElementById("fname").value;
	var f=/^[a-zA-Z\s\'\-]{2,20}$/;
	
	if(f.test(name)){
		document.getElementById("namef").style.color="green";
		document.getElementById("namef").innerHTML="<strong>valid</strong>";
		return(true);
	}
	else
	{
		document.getElementById("namef").style.color="red";
		document.getElementById("namef").innerHTML="<strong>Enter 2-20 characters </strong>";
		return(false);
	}
}	
function validateLastName(){
	var naml=document.getElementById("lname").value;
	var f2=/^[a-zA-Z\s\'\-]{2,10}$/;
	
	if(f2.test(naml)){
		document.getElementById("namel").style.color="green";
		document.getElementById("namel").innerHTML="<strong>valid</strong>";
		return (true);
	}
	else
	{
		document.getElementById("namel").style.color="red";
		document.getElementById("namel").innerHTML="<strong> Enter 2-10 characters</strong>";
		return(false);
	}
		
}
function validatingAge()
{
	var a=document.getElementById("age").value;
	if(a="")
	{
		document.getElementById("ageprompt").style.color="red";
		document.getElementById("ageprompt").innerHTML="Enter the Age!!";
	}
	else if(a<18)
	{
		document.getElementById("ageprompt").style.color="red";
		document.getElementById("ageprompt").innerHTML="Error! 'This is for 18 above students'";
	}
	else
	{
		document.getElementById("ageprompt").style.color="green";
		document.getElementById("ageprompt").innerHTML="valid";
	}
}
function validatingNumber()
{
	var m=document.getElementById("mobile").value;
	var p=/^\d{3}-\d{3}-\d{4}$/;
	if(p.test(m)){
		document.getElementById("mobileprompt").style.color="green";
		document.getElementById("mobileprompt").innerHTML="valid";
	}
	else{
		document.getElementById("mobileprompt").style.color="red";
		document.getElementById("mobileprompt").innerHTML="Error! It Should Be In xxx-xxx-xxxx Format";
	}
}
function validatingCollegename()
{
	var c=document.getElementById("cname").value;
	if(c!="")
		document.getElementById("cprompt").innerHTML="input accepted";
	else
		document.getElementById("cprompt").innerHTML="you must provide input";
}

