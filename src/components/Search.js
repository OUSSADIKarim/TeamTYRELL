import React, {useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import img from '../img/logo.png'
function Search() {
    const [input, setInput] = useState("")

    const search = e => {
        e.preventDefault()
    }

    return (
        <div className='search'>
            <div className='logo'>
                <img src={img} alt='logo'/>
            </div>

            <div className='input_container'>
                <SearchIcon onClick={search} className='input_icon'/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            <div className='search-buttons'>
                <Button>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

export default Search
