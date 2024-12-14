import {useState} from "react";
import {MdMenu} from "react-icons/md";

export const Navbar = () => {

    const [menuToggole, setMenuToggole] = useState(false)

    const MenuOpen = () => {
        setMenuToggole(!menuToggole)
    }

    const Menu = [

        {
            name: 'Home',
            path: '#',
        },
        {
            name: 'Services',
            path: '#',
        },
        {
            name: 'Feature',
            path: '#',
        }
    ]
    return (
        <nav className={'max-w-[1200px] mx-[20px] md:mx-auto py-5'}>
            <div className={'flex justify-between'}>
                <h2 className={'font-bold text-2xl'}>DIGI Creative</h2>
                <ul className={'hidden md:flex gap-5 '}>
                    {Menu.map((myMenu) => (
                        <li className={'cursor-pointer border-therd hover:border-b-2 text-md font-bold'}
                            key={'id'}>{myMenu.name}</li>
                    ))}
                </ul>

                <div className={'md:hidden text-3xl cursor-pointer'}>
                    <MdMenu onClick={MenuOpen}/>
                </div>
            </div>
            {
                menuToggole ? (
                    <ul className={'flex md:hidden flex-col w-full '}>
                        {Menu.map((myMenu) => (
                            <li className={'py-2 hover:bg-therd px-5 cursor-pointer'} key={'id'}>{myMenu.name}</li>

                        ))}
                    </ul>
                ) : null
            }
        </nav>


    )
}