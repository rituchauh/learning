function Com1({item}){
   // console.log(props, "Nero cons");
    return(

        <div className="col-md-3">
            <img src= {item.image} width="20%" /><br></br>
            <label>Name : {item.name}</label><br/>
            <label>Mobile : {item.mobile}</label><br/>
            <label>Email : {item.email}</label><br/>
        </div>

    )
}
export default Com1;