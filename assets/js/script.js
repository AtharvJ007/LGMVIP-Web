var row = 1;
var entry = document.getElementById('add-btn');
entry.addEventListener("click",displayDetails);

function displayDetails(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var website = document.getElementById('website').value;
  var pic = document.getElementById('imgurl').value;
  var  gender = document.querySelector("input[name='myGen']:checked").value;
  var value1="", value2="", value3="";
  if(document.getElementById("html").checked == true)
  {
    value1 = document.getElementById("html").value;
  }
  if(document.getElementById("css").checked == true)
  {
    value2 = document.getElementById("css").value;
  }
  if(document.getElementById("js").checked == true)
  {
    value3 = document.getElementById("js").value;
  }

if((!name || !email || !website || !gender || (!value1 && !value2 && !value3) )){
  alert("Please fill all the fields")
} 

else  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
{
  alert("You have entered an invalid email address!")
}

else  if (!(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(website)))
{
  alert("You have entered an invalid website url!")
}
  
else{
const description = `<p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Website:</strong>${website}<br><strong>Gender:</strong> ${gender}<br><strong>Skills:</strong> ${value1} ${value2} ${value3}</p>`


const img = document.createElement('img');
  img.setAttribute('src', pic)

var display = document.getElementById("display");
var newRow = display.insertRow(row);

        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)

        cell1.innerHTML = description;
        cell2.appendChild(img);
        row++;

 }
}