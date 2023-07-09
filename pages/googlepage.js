
import Image from "next/image";
function Aboutus() {
    return (
        <>
            <div className="google-container">
                <div className="link">
                    <a href="">Gmail</a>
                    <a href="">Images</a>
                    <a className="sign" href="">Sign In</a>
                </div>
                <div className="googlecenter">
                    <div>
                        <Image className="googlelogo" src="/googlelogo.png" width="200" height="100" ></Image>
                    </div>
                    <div ><input type="text" className="border"></input> </div>
                    <div className="search_feel">
                        <div className="search">Google Search</div>
                        <div>I'm feeling lucky</div>
                    </div>
                    <div className="diff_language">
                        <div>Google offered in</div>
                        <div className="main_language">
                            <a href="">English</a>
                            <a href="">हिन्दी</a>
                            <a href="">বাংলা</a>

                            <a href="">મરાઠી</a>
                            <a href="">தமிழ்</a>
                            <a href="">ગુજરાતી</a>

                            <a href="">മലയാളം</a>
                            <a href="">પંજાબી</a>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
export default Aboutus;