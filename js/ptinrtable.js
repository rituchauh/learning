window.onload = (event) => {
    ptInrApi();
  };
  async function ptInrApi() {
  const res = await axios.get(`http://192.168.1.7:4000/ptinrs`);
  var sortId=res.data
  sortId.sort((a, b) => b.id - a.id);

console.log(sortId)
let tableList="<table id='tableAll'><thead><tr><th>id</th><th>test_date</th><th>test_time</th><th>ptinr_value</th><th>medicine_dose</th><th>lab_name</th><th>action</th></tr></thead><tbody>"
for( var i=0;i<sortId.length;i++){
  tableList=tableList+"<tr><td>"+sortId[i].id+"</td><td>"+sortId[i].test_date+"</td><td>"+sortId[i].test_time+"</td><td>"+sortId[i].ptinr_value+"</td><td>"+sortId[i].medicine_dose+"</td><td>"+sortId[i].lab_name+"</td><td onclick='editId("+res.data[i].id+")'>edit</td>"+"</tr>"
}

tableList = tableList +"</tbody></table>"
document.getElementById("ptInrList").innerHTML=tableList





  }


  function editId(id){
    alert(id)
  }


