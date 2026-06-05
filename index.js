

//Functions

//_----------------------------------------------------------_


if(savedTheme === 'dark'){
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtnText.textContent = "Light";
    themeBtnIcon.textContent = "light_mode";
}
else{
    themeBtnText.textContent = "Dark";
    document.documentElement.removeAttribute('data-theme');
    themeBtnIcon.textContent = "dark_mode";
}
themeBtn.addEventListener('click', function(){ /**Dark&Light Theme Button*/
    if(themeBtnText.textContent === "Dark"){
        themeBtnText.textContent = "Light";
        localStorage.setItem('themeBtnText', 'Light');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
        themeBtnIcon.textContent = "light_mode";
        localStorage.setItem('themeBtnIcon', 'light_mode');
    }
    
    else{

        themeBtnText.textContent = "Dark";
        document.documentElement.removeAttribute('data-theme');
        themeBtnIcon.textContent = "dark_mode";
        localStorage.removeItem('data-theme');
        localStorage.removeItem('themeBtnIcon');
        localStorage.removeItem('ThemeBtnText');

    }
})

//Navbar Buttons

if(localStorage.getItem('activeView') === null){
    localStorage.setItem('activeView', 'dashboard-view');
    localStorage.setItem('activeNavBtn', 'dashboardBtn')
};
viewCards.forEach(function(viewCard){
    if(viewCard.id === savedViewId){
        viewCard.classList.remove('hidden');
        viewCard.classList.add('showed');
    }
    else{
        viewCard.classList.add('hidden');
        viewCard.classList.remove('showed');
    }
});
navBtns.forEach(function(btn){
    if(btn.getAttribute('data-target') === savedViewId){
        btn.classList.add('active');
        btn.classList.remove('notActive');
    }
    else{
        btn.classList.add('notActive');
        btn.classList.remove('active');
    }
})

 navBtns.forEach(function(navBtn){
    
    navBtn.addEventListener('click', function(){         
    navBtns.forEach(function(btn){
            btn.classList.remove('active');
             btn.classList.add('notActive');
        });

        navBtn.classList.add('active');
        navBtn.classList.remove('notActive');
   
        const targetId = navBtn.getAttribute('data-target');
        const navBtnId = navBtn.getAttribute('id');

        localStorage.setItem('activeView', targetId);
        localStorage.setItem('activeNavBtn', navBtnId)

   
        viewCards.forEach(function(viewCard){
            if(viewCard.id === targetId){
                viewCard.classList.remove('hidden');
                viewCard.classList.add('showed');
            }
            else{
               viewCard.classList.add('hidden');
                 viewCard.classList.remove('showed');
   
          }
       })
    })
 })



//Profile View;

profilePic.addEventListener('click', () => {
    if(imageOptionsMenu.classList.contains('hidden')){

        imageOptionsMenu.classList.remove('hidden');
    }
    else{
        imageOptionsMenu.classList.add('hidden');
    }
});
profilePicChangeOption.addEventListener('click', () => {
    photoInputProfileFile.click();
});
photoInputProfileFile.addEventListener('change', function(e){
    const file = e.taget.files[0];
    if(file){
        const reader = new FileReader;
        reader.onload = (event) => {
            userData.profileImg = event.target.result;
            localStorage.setItem('profileImg', event.target.result);
            document.querySelectorAll('profilePic').src = event.target.result;

        }
        reader.readAsDataURL(file)
    }
});

editNameOption.addEventListener('click', () => {
    editNameMenu.classList.remove("hidden");
    editNameOption.classList.add('hidden');
    profileViewUsername.classList.add('hidden');


});
editNameSaveBtn.addEventListener('click', (e) => {
   // e.preventDefault();
    const inputValue = editNameInput.value.trim();

    if(inputValue.length >= 3){
        localStorage.setItem('username', inputValue);
        userData.username = inputValue
        username.forEach( (usern) => {
        usern.textContent = savedUsername;
        });
        editNameMenu.classList.add("hidden");
        editNameOption.classList.remove('hidden');
        profileViewUsername.classList.remove('hidden');
    }
    else{
         e.preventDefault();
        alert("The Name must be over Than 3 letters");
    }
    
    
});
username.forEach( (usern) => {
        usern.textContent = savedUsername;})

console.log(username)
//Footer
/*
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(`User isOnline: ${navigator.onLine}`);
console.log(`User platForm is: ${navigator.platform}`)
console.log(`Web Cookie is: ${navigator.cookieEnabled}`)

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(screen.width);
console.log(screen.height);

console.log(screen.availWidth);
console.log(screen.availHeight)


console.log(window.location);
console.log(window.navigator);
console.log(window.document);

console.log(location);

console.log(history)

console.log(document.children)*/