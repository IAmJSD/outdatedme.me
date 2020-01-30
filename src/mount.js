import React from "react"
import ReactDOM from "react-dom"

const memes = [
    <iframe width="560" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sTSA_sWGM44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KmtzQCSh6xk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/B1tL6rFsyAQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg"></img>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RGDDyZJPrYE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KNHgeykDXFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gy1B3agGNxw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LJP1DphOWPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WPkMUU9tUqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
]

// Ensures a fresh meme.
function generateFreshMeme() {
    for (;;) {
        const i = Math.floor(Math.random() * memes.length)
        if (localStorage.getItem("lastmeme") === i.toString()) continue
        localStorage.setItem("lastmeme", i.toString())
        return memes[i]
    }
}

ReactDOM.render(<div style={{textAlign: "center"}}>
    {generateFreshMeme()}
    <hr />
    <p>Website by <a href="https://jakegealer.me">Jake Gealer</a>.</p>
</div>, document.getElementById("app"))
