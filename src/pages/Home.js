import React from 'react'
import './Home.css'
import Search from '..//components/Search'
function Home() {
    return (
        <div className="home">
            <div className='header'>
                    <a href="/">Gmail</a>
                    <a href="/">Images</a>
            </div>

            <div className='body'>
                <div className='logo'>
                </div>

                <div className='search_container'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
