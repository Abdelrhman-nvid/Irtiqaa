"use strict"
//Profile
const username = document.querySelectorAll('.username')

//Header Import:
const profileUserNameHeader = document.getElementById('profile-user-name-header');
const profileLevelHeader = document.getElementById('profile-level-header');
const profilePhotoImg = document.getElementById('profile-photo-img');

//NavBar Import:'
const navBtns = document.querySelectorAll('.navBtn');

const dashboardNavBtn = document.getElementById('dashboardBtn');
const profileNavBtn = document.getElementById('profileBtn');
const communityNavBtn = document.getElementById('communityBtn');
const challengesNavBtn = document.getElementById('challengesBtn');
const tasksNavBtn = document.getElementById('tasksBtn');
const booksNavBtn = document.getElementById('booksBtn');
const settingNavBtn = document.getElementById('settingBtn');

const loginNavBtn = document.getElementById('log-in');

const themeBtn = document.getElementById('theme-Btn')
const themeBtnText = document.getElementById('theme-text-Btn');
const themeBtnIcon = document.getElementById('theme-icon')



//Level Bar Import:
const levelBar = document.getElementById('level-bar'); 

const xpBarNumAr = document.getElementById('xp-bar-num-ar');
const nextLevelBarAr = document.getElementById('next-level-num-ar');
const xpLevelGoalBarAr = document.getElementById('xp-next-level-goal-ar')

const xpBarNum = document.getElementById('xp-bar-num');
const nextLevelBar = document.getElementById('next-level-num');
const xpLevelGoalBar = document.getElementById('xp-next-level-goal')

//Left Dashboard Import:
const totalXp = document.getElementById('total-xp');
const streakDayNum = document.getElementById('streak-day');
const dailyGoalDash = document.getElementById('daily-goal');

//Profile View
const profilePic = document.getElementById('profile-pic');
const imageOptionsMenu = document.getElementById('image-options-menu');
const editNameOption = document.getElementById('edit-name-btn');
const editNameMenu = document.getElementById('editNameMenu');
const profileViewUsername = document.getElementById('user-name');

const editNameSaveBtn = document.getElementById('editNameSaveBtn');
const editNameInput = document.getElementById('editNameInput');

const photoInputProfileFile = document.getElementById('photoInputProfileFile');

const profilePicLookOption = document.getElementById('profilePicLookOption'); 
const profilePicChangeOption = document.getElementById('profilePicChangeOption');
/*
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

const  = document.getElementById('');
const  = document.getElementById('');

*/


/*
const  = document.getElementById('');
const  = document.getElementById('');*/

const viewCards = document.querySelectorAll(".view");

// Local Storage

//------------------------
// Theme
const savedTheme = localStorage.getItem('data-theme');
const savedThemeIcon = localStorage.getItem('themeBtnIcon');
const savedThemeText = localStorage.getItem('themeBtnText');

//Nav Bar
const savedViewId = localStorage.getItem('activeView');
const savedViewBtn = localStorage.getItem('activeNavBtn');

//Profile
const savedUsername = localStorage.getItem('username');


















const userData = {
    username: localStorage.getItem('username'),
    profileImg: localStorage.getItem('profileImg'),
    level: 1,
    xp: 0,
    isLogIn: false,
    doneTasks: 0,

    levels:{
        bodyLevel: 1,
        bodyXp: 0, 

        mindLevel: 1,
        mindXp: 0,

        socialLevel: 1,
        socialXp: 0,    
    },

    acount:{
        email: ``,
        password: ``,
        bornDate: ``,

    },

};
 