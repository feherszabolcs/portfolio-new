import { useState, useContext } from 'react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

import './switch.css'
import 'bootstrap/dist/css/bootstrap.css'
import { DarkModeContext } from '../Darkmode/DarkmodeToggle'

export const Switch = () => {

    const [isChecked, setChecked] = useState(false)

    const { toggleDarkMode }: any = useContext(DarkModeContext)

    const handleSwitching = () => {
        setChecked(!isChecked)
        toggleDarkMode();
    };

    const { darkMode }: any = useContext(DarkModeContext);
    return (
        <div id='switch-body' >
            <button className={darkMode ? 'btn btn-darktheme' : 'btn'} onClick={handleSwitching}>
                {isChecked ? <BsMoonStarsFill /> : <BsSun />}
            </button>
        </div>
    )
}
