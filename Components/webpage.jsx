import Link from "next/link";

const Mainmenu = () => {
    return (
        <>
            <nav>
                <ul classname="menubar">
                    <li>
                        <Link href="/home">Home</Link></li>
                    <li>
                        <Link href="/aboutus">about</Link></li>
                    <li>
                        <Link href="/contactform">Form</Link></li>
                    <li>
                        <Link href="/blogg">blog </Link></li>

                    <li>
                        <Link href="/googlepage">google </Link></li>

                    <li>
                        <Link href="/faculty">Faculty </Link></li>

                </ul>
            </nav>

        </>

    )
}
export default Mainmenu;