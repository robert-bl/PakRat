import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer () {
    return(
        <div>
            <div className="flex fixed justify-end bottom-0 w-screen gap-2 bg-med p-1 pr-8">
                    Robert Buskirk-Lechner: 
                    <a href="https://github.com/robert-bl" target="_blank" className="mt-1">
                    <BsGithub/></a>
                    <a href="https://www.linkedin.com/in/robert-buskirk-lechner/" target="_blank" className="mt-1"><BsLinkedin /></a>
                </div>
        </div>
    )
}