import React from "react"
import ReactDOM from "react-dom"

const memes = [
    // Nyan cat
    <iframe width="560" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    
    // Troll song
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sTSA_sWGM44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    
    // Numa numa
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KmtzQCSh6xk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    
    // Kazoo kid
    <iframe width="560" height="315" src="https://www.youtube.com/embed/B1tL6rFsyAQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    
    // Doge
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg"></img>,
    
    // I'M FIRING MY LAZER!
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RGDDyZJPrYE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    
    // They did surgery on a grape
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KNHgeykDXFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    
    // Epic Sax Guy
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gy1B3agGNxw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    
    // Chuck testa
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LJP1DphOWPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

    // Jones' Good Ass BBG
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WPkMUU9tUqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

    // Friday
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kfVsfOSbJY0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

    // Gangnam style
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

   // MLG teletubbies
   <iframe width="560" height="315" src="https://www.youtube.com/embed/vr9O0uR4-Kw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

   // Shrek has swag
   <iframe width="560" height="315" src="https://www.youtube.com/embed/kHYZDveT46c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

   // Luigi's death stare
   <img src="https://i.kym-cdn.com/entries/icons/original/000/015/713/luigi.JPG"></img>,

   // Harlem shake
   <iframe width="560" height="315" src="https://www.youtube.com/embed/8vJiSSAMNWw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

   // We like to party
   <iframe width="560" height="315" src="https://www.youtube.com/embed/b8HO6hba9ZE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

   // Thanos car
   <img src="https://i.kym-cdn.com/entries/icons/original/000/027/072/thanos_car_2.jpg"></img>,

   // Nope!
   <iframe width="560" height="315" src="https://www.youtube.com/embed/gvdf5n-zI14" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

   // Damn Daniel!
   <iframe width="560" height="315" src="https://www.youtube.com/embed/tvk89PQHDIM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
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

ReactDOM.render(<div style={{textAlign: "center", fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}>
    {generateFreshMeme()}
    <hr />
    <p>Website by <a href="https://jakegealer.me">Jake Gealer</a>.</p>
</div>, document.getElementById("app"))
