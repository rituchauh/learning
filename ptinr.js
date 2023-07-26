
// let form=document.forms[myform]
// form.addEventListener("submit", getValues)
// function getValues(event){
//     event.preventDefault();
// }
// let data ={
//     date : this.date.value,
//     acitrom : this.acitrom.value,
//     ptinr : this.ptinr.value
// }


function getvalue() {
   var date = document.getElementById("date").value;
   var acitrom = document.getElementById("acitromQty").value;
   var ptinr = document.getElementById("ptinrValue").value;
   var whichLab = document.getElementById("labName").value;
   let x = document.getElementById("acitromQty").value;
   let y = document.getElementById("date").value;
   let z = document.getElementById("ptinrValue").value;
   let r = document.getElementById("labName").value
   let text;
   let ptinrnotint;
   let validLabName
   let formValid = false
   if (x !== "" && y !== "" && z !== "" && r !== "") {
      if (isNaN(x) || x < 1 || x > 10) {
         text = "plz enter a valid value for acitrom qty"
         document.getElementById("error").innerHTML = text
         formValid = false
         return false
      }
      else {
         formValid = true
      }
      if (isNaN(z) || z < 1 || z > 10) {
         ptinrnotint = "plz enter a valid value for PTINR"
         document.getElementById("error").innerHTML = ptinrnotint
         formValid = false
         return false
      }
      else {
         formValid = true
      }
      //   if (r==/^[A-Za-z]+$/){
      //    validLabName="plz enter a valid labname"
      //    document.getElementById("error").innerHTML=validLabName
      //    formValid =true
      //    return true
      //   }
      //   else{
      //    formValid =false
      //   }
      var lab = /^[A-Za-z]+$/;
      if (r.match(lab)) {
         formValid=true;
      }
      else {
         alert("Please enter letters only.");
         formValid= false;
         return false
      }


   }


   else {

      text = "input field should not be blank"
      document.getElementById("error").innerHTML = text

   }
   if (formValid) {
      let data = {
         dateOfTest: date,
         acitromQty: acitrom,
         ptinrValue: ptinr,
         labName: whichLab
      }
      console.log(data)

   }





}
