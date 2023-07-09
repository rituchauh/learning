import { useState } from "react";

function Blog() {
    const [mothername,setmothername]= useState("");
    const [fatherName,setfatherName] =useState("")
    console.log(fatherName)
    const [submit, setsubmit] = useState("")
    const [mobileno, setmobileno] = useState("")
    //console.log(mobileno);
    const [inputvalue, setNewValue] = useState("");

    const motherandlechange =(e) =>{
        console.log(e.target.value)
    }

    const fatherHandleChange = (e) => {
        //console.log(e.target.value)
        setfatherName(e.target.value)
    }

    const submitonChange = (e) => {
        console.log(mobileno)
        console.log(inputvalue)



    }

    const mobileonChange = (e) => {
        //console.log(e.target.value)
        setmobileno(e.target.value)
    }
    //console.log(inputvalue)

    const myOnChange = (e) => {
        //console.log(e.target.value, "New Valuesssss")
        setNewValue(e.target.value);

    }

    return (
        <div>
            <div className="row" >
                <input type="text" className="col-md-6 mt-5" value={inputvalue} placeholder="type ur name" onChange={myOnChange} /><br /><br />
                <input type="text" placeholder="mobile no" className="col-md-6 mt-5" onChange={mobileonChange} />
                </div>
            <div className="row mt-5">
                <input type="text" className="col-md-6" placeholder="fatherName" onChange={fatherHandleChange}/>
            <input type="text" className="col-md-6" placeholder="motherName" onChange={motherandlechange}/>
            </div>
            <input type="button" className="mt-5" value="Submit" onClick={submitonChange} />
        </div>

    )
}

export default Blog;
