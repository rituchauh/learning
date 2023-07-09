import { useEffect, useState } from "react";


function ApiCalling() {
const[oneData, setOneData] = useState([]);
const[totalCount, setMyCount] = useState(0);
const[allData, setAllData] = useState([]);
    useEffect(function () {
        console.log("Hello APIS");
        fetch('https://api.publicapis.org/entries')
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data, "API Data");
                setMyCount(data.count);
                setOneData(data.entries[0])
                setAllData(data.entries);
            });

    }, [])

    return (
        <>
            <div>API Count - {totalCount}</div>
            <div>{oneData.Category}</div>
            <div>{oneData.Description}</div>
            {
                allData && allData.length>0 && allData.map(function(item){
                   return <><div>{item.Category}</div><div>{item.Description}</div><div>{item.Link}</div><br /></>
                })
            }

        </>
    )
}
export default ApiCalling;