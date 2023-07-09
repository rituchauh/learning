import { useState } from "react";
//i have use here useStatehookup

function Form() {
    const [username, setUserName] = useState("");
    const [dob, setDob] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [mothername, setMotherName] = useState("");
    const [qualification, setQualification] = useState("");
    const [children, setChildrenName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [passingYear, setPassingYear] = useState("");
    const [submit, setSubmitValue] = useState("submit")


    const userNameChange = (e) => {
        console.log(e.target.value);
        setUserName(e.target.value)
    }
    const dobChange = (e) => {
        console.log(e.target.value);
        setDob(e.target.value)

    }
    const fatherNameChange = (e) => {
        console.log(e.target.value)
        setFatherName(e.target.value)
    }
    const motherNameChange = (e) => {
        console.log(e.target.value);
        setMotherName(e.target.value)
    }
    const qualificationChange = (e) => {
        console.log(e.target.value);
        setQualification(e.target.value)

    }
    const childrenNameChange = (e) => {
        console.log(e.target.value)
        setChildrenName(e.target.value)
    }
    const emailOnChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const mobileOnChange = (e) => {
        console.log(e.target.value);
        setMobileNo(e.target.value)

    }
    const passingYearOnChange = (e) => {
        console.log(e.target.value)
        setPassingYear(e.target.value)
    }
    const submitOnChange = (e) => {
        setSubmitValue("submitting")
        console.log(username)
        console.log(dob)
        console.log(fatherName)
        console.log(mothername)
        console.log(qualification)
        console.log(children)
        console.log(email)
        console.log(mobileNo)
        console.log(passingYear)
        setTimeout(function() {
            setSubmitValue("Saved successfully")
        }, 3000);

    }

    return (<>
    <div className="pagetitle">Registration Form</div>
        <div className="formparent">
            <div className="formgroup">
                <input type="text" className="input_element" value={username} placeholder="userName" onChange={userNameChange} />
                <input type="text" className="input_element" value={dob} placeholder="dateOfBirth" onChange={dobChange} />
                </div>
                <div className="formgroup">
                <input type="text" className="input_element" value={fatherName} placeholder="fatherName" onChange={fatherNameChange} />
                <input type="text" className="input_element" value={mothername} placeholder="mothername" onChange={motherNameChange} />
               </div>
               <div className="formgroup">
                <input type="text" className="input_element" value={qualification} placeholder="type ur qualification" onChange={qualificationChange} />
                <input type="text" className="input_element" value={children} placeholder="type ur children name" onChange={childrenNameChange} />
            </div >
            <div className="formgroup">
                <input type="text" id="kavyansh" className="input_element" value={email} placeholder="email" onChange={emailOnChange} />
                <input type="text" className="input_element" value={mobileNo} placeholder="mobileNo" onChange={mobileOnChange} />
                </div>
                <div className="formgroup" >
                <input type="text" className="input_element" value={passingYear} placeholder="passingYear" onChange={passingYearOnChange} />
            </div>

            <div className="submit" >
                <input type="button" id="hello" className="" value={submit} placeholder="submit" onClick={submitOnChange}/>
                           </div>



        </div>
        </>
    )
}

export default Form;