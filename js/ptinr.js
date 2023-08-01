window.onload = (event) => {
  var particularId = localStorage.getItem("updateId");
//   console.log(particularId);
if(particularId){

 setvalueforupdate(particularId);
}
 };


async function getvalue() {
   var date = document.getElementById("date").value;
   var acitrom = document.getElementById("acitromQty").value;
   var ptinr = document.getElementById("ptinrValue").value;
   var whichLab = document.getElementById("labName").value;
   let x = document.getElementById("acitromQty").value;
   let y = document.getElementById("date").value;
   let z = document.getElementById("ptinrValue").value;
   let r = document.getElementById("labName").value
   let errorText;
   let ptinrnotint;
   let validLabName
   let formValid = false
   if (x !== "" && y !== "" && z !== "" && r !== "") {
      if (isNaN(x) || x < 1 || x > 10) {
         errorText = "plz enter a valid value for acitrom qty"
         document.getElementById("error").innerHTML =errorText
         document.getElementById("error").style.color ="red"
         formValid = false
         return false
      }
      else {
         formValid = true
      }
      if (isNaN(z) || z < 1 || z > 10) {
         ptinrnotint = "plz enter a valid value for PTINR"
         document.getElementById("error").innerHTML = ptinrnotint
         document.getElementById("error").style.color ="red"
         formValid = false
         return false
      }
      else {
         formValid = true
      }

      // var lab = /^[A-Za-z]+$/;
      // lab name validation only for letters
//       if (r.match(lab)) {
//          formValid = true;
//       }
//       else {
//          validLabName="Please enter letters only.";
//          document.getElementById("error").innerHTML=validLabName
// formValid = false;
//          return false
//       }


   }


   else {

      errorText = "input field should not be blank"
      document.getElementById("error").innerHTML = errorText
      document.getElementById("error").style.color ="red"

   }
   if (formValid) {
      let data = {
         "test_date": date,
         "ptinr_value": ptinr,
         "medicine_dose": acitrom,
         "lab_name": whichLab
      }
      console.log(data)
      errorText = "Data submitted successfully"
      document.getElementById("error").innerHTML = errorText
      document.getElementById("error").style.color ="green"

      await ptInrApi(data);
resetData()



   }

}
function resetData(){
   // document.getElementsByClassName("inputClass")[0].innerHTML="";
   document.getElementById("date").value="";
   document.getElementById("acitromQty").value="";
   document.getElementById("ptinrValue").value="";
   document.getElementById("labName").value="";
   document.getElementById("error").value=""

}
async function ptInrApi(data) {
   await axios.post("http://192.168.1.7:4000/ptinr/save", data).then(function (response) {
      if (response.data.status===1){
         errorText = "data saved successfully"
         document.getElementById("error").innerHTML = errorText
         // document.write("data saved successfully")
      }
      else{
        errorText="something went wrong.... plz try later"
         document.getElementById("error").value =errorText

      }
      console.log(response)
      // do whatever you want if console is [object object] then stringify the response
   }
   )


}


async function setvalueforupdate(idvalue){
   const res = await axios.get(`http://192.168.1.7:4000/ptinrs/`+ idvalue);

console.log(res)
   // var particularIdData={
   //    "status": 1,
   // "data": {
   // "id": 2,
   // "test_date": "24-08-2022",
   // "test_time": "12:30PM",
   // "ptinr_value": 2,
   // "medicine_dose": "3MG",
   // "lab_name": "1MG"
   // },
   // "message": "Data found successfully"
   // }
   // let dateFormatChange=res.data.data.test_date
   // let myArray=dateFormatChange.split("-")
   // let newDate=myArray[0]
   // let month=myArray[1]
   // let year=myArray[2]
   // let modifyDate=year+"-"+month+"-"+newDate
   // console.log(modifyDate)
   document.getElementById("date").value=res.data.data.test_date;
   console.log(res.data.data.test_date)
   document.getElementById("labName").value=res.data.data.lab_name;
   document.getElementById("ptinrValue").value=res.data.data.ptinr_value;
   document.getElementById("acitromQty").value=res.data.data.medicine_dose;

}

