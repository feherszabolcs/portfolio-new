import { useState } from 'react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

import './switch.css'
import 'bootstrap/dist/css/bootstrap.css'

export const Switch = () => {

    const [isChecked, setChecked] = useState(false)

    const handleSwitching = () => {
        setChecked(!isChecked)
    };

    // todo: make the switch sticky on the top right of the screen
    return (
        <div id='switch-body'>
            {/* <ReactSwitch
                onChange={handleSwitching}
                checked={isChecked}
                // onColor="#86d3ff"
                //onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={<BsSun />}
                checkedIcon={<BsMoonStarsFill />}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={28}
                width={55}
                id="material-switch"
            /> */}
            <button className='btn' onClick={handleSwitching}>
                {isChecked ? <BsMoonStarsFill /> : <BsSun />}
            </button>
        </div>
    )
}
