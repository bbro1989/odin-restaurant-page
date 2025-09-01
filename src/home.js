import heroImage from "./images/steak.jpg" 
import footerImage from "./images/barista.jpg" 

function createHome() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const heroSection = document.createElement('div');
    heroSection.id    = "heroSection";

    const heroTitle   = document.createElement("h1");
    heroTitle.textContent = "Welcome to Food Heaven Where Flavor Meets Excellence!";
    
    const heroButton   = document.createElement("button");
    heroButton.textContent = "View Menu";

    const steak = document.createElement("img");
    steak.id    = "heroImage";
    steak.src   = heroImage;
    steak.alt   = "steak";
    steak.width = 327;
    steak.height = 408;

    heroSection.append(heroTitle, heroButton, steak);

    // footer
    const footer = document.createElement('div');
    footer.id    = "footer";

    const footerInfo = document.createElement('div');
    footerInfo.id = "footerInfo";

    const footerTitle  = document.createElement('h1');
    footerTitle.textContent = "A healthier way now has a seat at the table.";
    
    const footerParagraph = document.createElement('p');
    footerParagraph.textContent = 
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex officiis culpa est perspiciatis impedit tenetur commodi! Repellat asperiores officiis, necessitatibus eum deserunt ipsum, soluta, facere laudantium consequatur dolor velit vel enim aliquam debitis nam mollitia quod iste perspiciatis! Maiores consequuntur magnam explicabo quam facilis at a perferendis cumque sunt debitis, ipsa error voluptates amet totam sint exercitationem eos in quos dolorem dolor eaque? Non repellat est architecto consequatur iste. Odio aut illum voluptates porro est velit perspiciatis sunt cupiditate alias doloribus voluptatum obcaecati, incidunt nemo non dolorum fugiat, officiis excepturi? Doloremque quibusdam labore, recusandae cupiditate accusamus eius corporis dolorum!";

    
    const ul = document.createElement('ul');

    const li1 = document.createElement('li');
    li1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    const li2 = document.createElement('li');
    li2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    const li3 = document.createElement('li');
    li3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    ul.append(li1, li2, li3);

    const footerButton = document.createElement("button");
    footerButton.textContent = "View Menu";

    footerInfo.append(footerTitle, footerParagraph, ul, footerButton);

    //footer image section
    const footerImageDiv = document.createElement("div");
    footerImageDiv.id = "footerImage";

    const barista = document.createElement("img");
    barista.src = footerImage;
    barista.alt = "barista";
    barista.width = 384;
    barista.height = 576;

    footerImageDiv.append(barista);

   
    footer.append(footerInfo, footerImageDiv);

    content.append(heroSection, footer);

}
export default createHome