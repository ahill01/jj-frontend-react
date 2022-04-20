import React from "react"
import selfie from "../selfie.png"
function FaqPage(){

    
    return(
        <div id="faqInfo">
          <h1>FAQ</h1>
          <div id="aboutMe">
            <h2>Who's the Writer?</h2>
            <img src={selfie}/>
            <p>Hi! I am! <b>My name is Allison Hill</b> (<em>she/her/hers</em>), and I'm the one who made pretty much everything you see here (minus the music & the playlisting tool, <a href ="https://bndcmpr.co/f65cd3b9
              ">bndcmpr</a> </p>
          </div>
          <div id="title">
            <h2>Do You Take Submissions?</h2>
            <p><b>Yes, I do!</b> If you've got something great that you want so share, go ahead and send it my way! The only thing I ask is that you <b>please bear in mind I am a one-woman team!</b> As much as I would love to immediately respond to and write about everything piece of art that sparks interest, I do have the same 24 hours in a day as anyone else (most of which are occupied by work and school right now!). That being said, listening to new music brings me a lot of joy! So go ahead and send me an <a href="mailto:amh03160@gmail.com">email</a>, <a href="https://twitter.com/A_philharmonic8">a twitter DM</a>, or submit through <a href="./submissionPage.html">my nifty submission form</a></p>
          </div>
          <div id="whyThis">
            <h2>Why a Blog? Aren't They Going Out of Style?</h2>
            <p>The answer to this one is short. <b>Because it's fun.</b> And this isn't the only blog I've written for, either! You can check out some of my other work with <a href="https://www.thewildhoneypie.com/buzzing-daily">The Wild Honey Pie's Buzzing Daily</a></p>
          </div>
          <div id="myMusic">
            <h2>You Make Music Too??</h2>
            <p>Yes I do! If you're curious about what kind of music I make, check me out at <a href="https://denimdaisy.bandcamp.com/">denimdaisy.bandcamp.com</a></p>
          </div>
        </div>
    )
}

export default FaqPage