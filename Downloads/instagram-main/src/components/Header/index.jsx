import "./header.css"

import { AiOutlineSearch, AiFillHome  } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { useState } from "react"



export function Header() {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const alert = () => {
        window.alert("funcionou")
    }

    // const [text, setText] = useState('')

    // const handleChange = (e) => {
    //    setText(e.target.value)
    // }
    
    return (

        <header className="Header">

           
                <h1 onClick={alert} style={{cursor: "pointer"}}>{text}</h1>
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />


            <div style={{backgroundColor: "#eee", display: "flex", alignItems: "center", padding: "5px"}}>

                <AiOutlineSearch />
                <input placeholder="Buscar" style={{marginLeft: "15px", backgroundColor: "#eee", padding: "5px"}} onChange={handleChange}/>
            </div>


            <div className="icons">
                <a href="#"> <AiFillHome /> </a>
                <RiMessengerLine />
                <BsPlusSquare />
                <MdOutlineExplore />
                <FiHeart />
            </div>


        </header>
    


    )

}
