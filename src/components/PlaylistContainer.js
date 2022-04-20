import React, { useState } from'react';

function PlaylistContainer(){

    return(
        <div>
            <h4 id="bndcmpr">playlists powered by <a href="https://bndcmpr.co/">bndcmpr</a></h4>
            <div id="Gush1">
             <h1 id="Gush1Title">GUSH Vol 1</h1>
                <iframe src="https://bndcmpr.co/embed/f65cd3b9?orientation=landscape" title="JamJamboree Vol 1"></iframe>
           <div className="tracklist">
            <h2>Tracklist</h2> 
            <ol>
                <li><b>Darling</b> by Mannequin Pussy</li>
                <li><b>Peach Pit</b> by Rosie Tucker</li>
            </ol>
           </div>    
        </div>
        </div>
        )
}

export default PlaylistContainer