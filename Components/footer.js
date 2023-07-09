import Link from "next/link";
import { footerLinks } from "@/DataLib";
import { useState, useEffet, useEffect } from "react";
function Footer() {
    const [footerData,setfooterData]=useState([]);

    useEffect(function(){
        const active=footerLinks && footerLinks.length>0 && footerLinks.filter((item) =>item.active)
        setfooterData(active);
    },
    [] )

    return (
        <>
        <div>
            <div className="footer">
                    <div className="implink">
                        <p className="heading">Important Links</p>
                    <ul className="link">
                        <li><Link href="/datsheet" >Annual Examination date Sheet</Link></li>
                        <li><Link href="/admform">Download Admission Form</Link></li>
                        <li><Link href="/feestruc">Fee Structure</Link></li>
                        <li> <Link href="/sessions">Sessions</Link></li>
                    </ul></div>

                <div className="contact_us">
                <div className="heading">Contact Us</div>
                <div> Phool Bag Calony, Dhampur, Bijnor(UP)</div>
                <div>Mob.-xxxxxxxxx   xxxxxxxxxx</div>
                </div>
                </div>
                <ul className="link_bar">
                {footerData && footerData.length > 0 && footerData.map(function (item) {
                return <li> <Link href={item.url}>{item.name}</Link></li>


                        })
                        }

                </ul>
                <div className="copyright">Copyright 2020. M.S.Public School All rights reserved |</div>

            </div>
        </>
    )
}
export default Footer;