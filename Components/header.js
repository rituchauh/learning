import Link from "next/link";
import Image from "next/image";
import { menuLinks } from "../DataLib/"
import { useEffect, useState } from "react";
function Header() {
    const[headerData, setHeaderData] = useState([]);

    useEffect(function(){
       const activeLink = menuLinks && menuLinks.length>0 && menuLinks.filter((item)=> item.active)
       setHeaderData(activeLink);
    }, [])
    return (
        <> <div>
            <div className="headerclass">

                <ul className="cbseportal">
                    <li> <Link href="/studentparent">Student & Parent Portal</Link></li>
                    <li><Link href="/cbseaffiliated" >CBSE Affiliated School</Link></li>
                </ul>
                <div className="header">
                    <Image src="/mspublic.jpeg" width="100" height="100"></Image>
                    <p className="header_ritu">M.S.Public School</p>
                    <ul className="linkbar">
                        {headerData && headerData.length > 0 && headerData.map(function (item) {
                            //return <><div>{item.name}</div><div>{item.active}</div><div>{item.url}</div><br /></>
                            return <li> <Link href={item.url}>{item.name}</Link></li>


return <div>
    <Image src={item.image}></Image>
    <div>{item.name}</div>
</div>
                        })
                        }


                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;
