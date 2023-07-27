


async function getvalue() {
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

      var lab = /^[A-Za-z]+$/;
      if (r.match(lab)) {
         formValid = true;
      }
      else {
         validLabName="Please enter letters only.";
         document.getElementById("error").innerHTML=validLabName
formValid = false;
         return false
      }


   }


   else {

      text = "input field should not be blank"
      document.getElementById("error").innerHTML = text

   }
   if (formValid) {
      let data = {
         "test_date": date,
         "ptinr_value": ptinr,
         "medicine_dose": acitrom,
         "lab_name": whichLab
      }
      console.log(data)
      await ptInrApi(data);




   }

}
function resetData(){
   // document.getElementsByClassName("inputClass")[0].innerHTML="";
   // document.getElementById("date").value="";
   // document.getElementById("acitromQty").value="";
   // document.getElementById("ptinrValue").value="";
   // document.getElementById("labName").value="";
}
async function ptInrApi(data) {
   await axios.post("http://192.168.1.7:3002/api/dummyapi/save-ptnir-test-data", JSON.stringify(data)).then(function (response) {
      console.log(response)
      // do whatever you want if console is [object object] then stringify the response
   })
}


