import Mainmenu from "../Components/webpage";
// import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";


const errorpage =() =>{
    const router=useRouter();

     function hello(){
        router.push("/")
    }

    return(
        <>
        <div className="mainpage">
        <div className="home">Ritu Home Page</div>


            {/* <Link href = "/">back to hompage
        </Link> */}
        <a onClick={hello}>back to homepage</a>

        </div>
        <Mainmenu />

        </>
    )
}

export default errorpage;