import logo from '../assets/logos/logo-black-background.svg'

const links = [
    {"name":"Projects","url":"#Projects"},
    {"name":"Skills","url":"#Skills"},
    {"name":"Experience","url":"#Experience"},
    {"name":"Contact","url":"#Contact"},
]

export default function Header(){
    return(
        <div className="w-full px-8 flex justify-between items-center border-b border-b-cyan-900">
            <div className="icon-container w-38 flex justify-center">
                <img src={logo} className="logo react" alt="React logo" />
            </div>
            <div className="links flex justify-between w-fit">
                {
                    links.map(link=>(
                        <a className='mx-4' href={link.url}>{link.name}</a>
                    ))
                }
            </div>
            <div className="buttons-container w-38 flex">
                <div className="buttons">theme</div>
                <div className="buttons">Get in touch</div>
            </div>
        </div>
    )
}