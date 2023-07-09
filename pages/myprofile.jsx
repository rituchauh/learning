import { useEffect, useState } from "react";
import Com1 from "../Components/myprofilecard/Com1";

function mainpage() {

    const [myData, setMyData] = useState([]);


    useEffect(() => {
        console.log("Ritu");
        const profilesData = [
            {
                image: "ritu.jpeg",
                name: "Neeraj Kumar",
                mobile: "7042731975",
                email: "n@gmail.com"
            },
            {
                image: "suman.jpeg",
                name: "Ritu Devi",
                mobile: "7042733975",
                email: "r@gmail.com"
            },
            {
                image: "ritu.jpeg",
                name: "Neeraj Kumar",
                mobile: "7042731975",
                email: "n@gmail.com"
            },
            {
                image: "suman.jpeg",
                name: "Ritu Devi",
                mobile: "7042733975",
                email: "r@gmail.com"
            },
            {
                image: "ritu.jpeg",
                name: "Neeraj Kumar",
                mobile: "7042731975",
                email: "n@gmail.com"
            },
            {
                image: "suman.jpeg",
                name: "Ritu Devi",
                mobile: "7042733975",
                email: "r@gmail.com"
            }
        ]
        setMyData(profilesData);
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    myData && myData.length > 0 && myData.map((item) => {
                        return <Com1 item={item} />
                    })
                }
            </div>

        </div>
    )
}
export default mainpage;