function createMenu() {
    const content = document.getElementById('content');
    content.style.textAlign = 'center'; 
    content.style.padding   = "5rem";

    content.innerHTML = '';


    const MenuTitle = document.createElement('h1');
    MenuTitle.textContent = " Welcome to Brew Haven – Artisan Coffee & More";

    const ul  = document.createElement('ul');
    ul.style.listStyleType = 'none';

    const li1 = document.createElement('li');
    li1.textContent = "Espresso – $3.00" ;
   
    const li2 = document.createElement('li');
    li2.textContent = "Americano – $3.75" ;
   
    const li3 = document.createElement('li');
    li3.textContent = "Cappuccino – $4.50" ;
    
    ul.append(li1, li2, li3);
    

    content.append(MenuTitle, ul);

    
}
export default createMenu