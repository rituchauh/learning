window.onload = (event) => {
    ptInrApi();
  };
  async function ptInrApi() {
  const res = await axios.get(`http://192.168.1.7:4000/ptinrs`);
console.log(res)
  }


