import Link from "next/link";
import Image from "next/image";
import { teacherList } from "../DataLib"
import { useEffect, useState } from "react";
import Popup from "../Components/popup"

function facultyList() {

    const [facultyData, setfacultyData] = useState([]);
    const [isPopupActive, setPopupActive] = useState(false);
    const [name, setName] = useState();
    const [subject, setSubject] = useState()
    const [allItem, setItem] = useState()

    const itemClick = (item) => {
        console.log(item);
        // alert("hello " + item.name)
        setPopupActive(true);
        setName(item.name);
        setSubject(item.sub);
        setItem(item);
    }
    const closePopup = () => {
        setPopupActive(false);
    }


    useEffect(function () {
        const activeLink = teacherList && teacherList.length > 0 && teacherList.filter((item) => item.active)
        setfacultyData(activeLink);
    }, [])
    return (
        <> <div>
             <div className="pagetitle">School Faculty</div>
            <div className="FacultyDetails">

                <ul className="faculty_details">
                    {facultyData && facultyData.length > 0 && facultyData.map(function (item) {
                        //return <><div>{item.name}</div><div>{item.active}</div><div>{item.url}</div><br /></>
                        return <div className="boxstyle" onClick=
                            {() => { itemClick(item) }}>
                            <Image src={item.image} width="200" height="150" />
                            <div className="dflex"><p className="fontstyle">Name:-</p>
                                <p className="flexwrap">{item.name}</p></div>

                            <div className="dflex"><p className="fontstyle">Subject:-</p>
                                <p className="flexwrap">{item.sub}</p></div>
                            <div className="dflex"><p className="fontstyle">Mobile:-</p>
                                <p className="flexwrap">{item.Mobile}</p></div>
                            <div className="dflex"><p className="fontstyle">Experience:-</p>
                                <p className="flexwrap">{item.Exp}</p></div>
                        </div>


                    })
                    }


                </ul>
            </div>


        </div>

            {isPopupActive && <div id="myModal" class="modal">

                <div class="modal-content">
                    <span class="close" onClick={() => {
                        closePopup()
                    }}>x</span>
                    <p>
                        <div><Image src={allItem.image} width="200" height="150" /></div>
                        <div className="dflex">
                            <p className="fontstyle">Name :</p> <div className="flexwrap">{name}</div>
                        </div>
                        <div className="dflex">
                            <p className="fontstyle">Subject :</p><div className="flexwrap">{subject}</div>
                        </div>
                        <div className="dflex">
                            <p className="fontstyle">Experience :</p>  <div className="flexwrap">{allItem.Exp}</div>
                        </div>
                        <div className="dflex">
                        <p className="fontstyle">Mobile :</p> <div className="flexwrap">{allItem.Mobile}</div>s
                        </div>
                        <div className="dflex">
                                <div className="flexwrap">{allItem.Description}</div>
                                </div>
                            </p>
                        </div>

                </div> }

            </>
    )
}
            export default facultyList;
