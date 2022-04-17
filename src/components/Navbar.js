import React from "react"
function Navbar(){
    return(
        <div>
        <div className="header">
        <h1>Welcome To The Jam Jamboree!</h1>
        </div>
        <div id="navbar" className= "flex-container">
            <a id ="blog" href="./blog.html">Blog</a>
            <a id = "playlists" href="./playlists.html">Playlists</a>
            <a id="faq" href="./faq.html">About/FAQ</a>
            <a id="submissionPage" href="./submissionPage.html">Submissions</a>
        </div>
        </div>
    )
}

export default Navbar