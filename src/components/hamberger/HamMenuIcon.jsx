import React from "react"
import './HamStyle.css'

function HamMenuIcon({ toggleMenu }) {

    const clicked = () => {
        const btn = document.getElementById("menu-btn")

        btn.classList.toggle("open")
        toggleMenu()
    }


    return (
        <div className="absolute right-5 top-5  z-20 block md:hidden">
            <button onClick={clicked} id="menu-btn" className="hamburger focus:outline-none">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </div>
    )
}

export default HamMenuIcon