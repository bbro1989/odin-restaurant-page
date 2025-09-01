function createContact() {
    const content = document.getElementById('content');
    content.style.textAlign = 'center'; 
    content.style.padding   = "5rem";

    content.innerHTML = '';


    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Feel free to contact us using these methods";

    const ul  = document.createElement('ul');
    ul.style.listStyleType = 'none';

    const li1 = document.createElement('li');
    li1.textContent = "email: awesome@email.com" 
   
    const li2 = document.createElement('li');
    li2.textContent = "facebook: facebook.com/facebook_page" 
   
    const li3 = document.createElement('li');
    li3.textContent = "address: awesome address" 
    
    ul.append(li1, li2, li3);
    

    content.append(contactTitle, ul);

    
}
export default createContact