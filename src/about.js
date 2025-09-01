import barmen from './images/barmen.jpg'

function createAbout() {
    const content = document.getElementById('content');
    content.style.textAlign = 'center'; 

    content.innerHTML = '';

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "Meet our team";

    const aboutImage = document.createElement('img');
    aboutImage.id    = "barmen";
    aboutImage.src   = barmen;
    aboutImage.alt   = "barmen";
    aboutImage.width = 576;
    aboutImage.height = 384;
    
    const aboutParagraph = document.createElement('p');
    aboutParagraph.id    = "aboutParagraph";
    aboutParagraph.textContent= 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex officiis culpa est perspiciatis impedit tenetur commodi! Repellat asperiores officiis, necessitatibus eum deserunt ipsum, soluta, facere laudantium consequatur dolor velit vel enim aliquam debitis nam mollitia quod iste perspiciatis! Maiores consequuntur magnam explicabo quam facilis at a perferendis cumque sunt debitis, ipsa error voluptates amet totam sint exercitationem eos in quos dolorem dolor eaque? Non repellat est architecto consequatur iste. Odio aut illum voluptates porro est velit perspiciatis sunt cupiditate alias doloribus voluptatum obcaecati, incidunt nemo non dolorum fugiat, officiis excepturi? Doloremque quibusdam labore, recusandae cupiditate accusamus eius corporis dolorum!";
    aboutParagraph.style.padding = "0 5rem";

    content.append(aboutTitle, aboutImage, aboutParagraph);

    
}
export default createAbout 