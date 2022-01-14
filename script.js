const root = document.querySelector('#root');

const main = document.createElement('div');
const mainContainer =  main.cloneNode(true);
const mainContainerInformation = main.cloneNode(true);
const mainContainerInformationTextBlock = main.cloneNode(true);
const mainContainerInformationTitiel = main.cloneNode(true);
const mainContainerInformationUnderTitel = main.cloneNode(true);
const mainContainerInformationDescription = main.cloneNode(true);
const mainContainerExtraInformationContainer = main.cloneNode(true);
const mainContainerExtraInformationForAge = main.cloneNode(true);
const mainContainerExtraInformationAge = main.cloneNode(true);
const mainContainerExtraInformationEmail = main.cloneNode(true);
const mainContainerExtraInformationForPhone = main.cloneNode(true);
const mainContainerExtraInformationPhone = main.cloneNode(true);
const mainContainerExtraInformationSkype = main.cloneNode(true);
const mainContainerInformationLinks = main.cloneNode(true);
const mainFlexContainerForSocialLinks = main.cloneNode(true);
const mainFlexContainerForSocialLinksLinkedIn = document.createElement('a');
const mainFlexContainerForSocialLinksLinkedInImg = document.createElement('img');
const mainFlexContainerForSocialLinksGitHubImg = document.createElement('img');
const mainFlexContainerForSocialLinksGitHub = document.createElement('a');
const mainContainerForPhotoAndDownload = main.cloneNode(true);
const mainContainerPhoto = document.createElement('img');
const mainContainerDownload = main.cloneNode(true);
const mainContainerDownloadA = document.createElement('a');

// SKILLS
const skillsContainerBlock = document.createElement('div');
const skillsContainerTitle = skillsContainerBlock.cloneNode(true);
const skillsContainerTable = skillsContainerBlock.cloneNode(true);
const skillsFlexContainerTabel = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelFirstLine = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelSecondLine = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelSecondLinePercent = skillsContainerBlock.cloneNode(true);

const skillsFlexContainerTabelCSS = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelFirstLineCSS = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelSecondineCSS = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelSecondineCSSPercent = skillsContainerBlock.cloneNode(true);

const skillsFlexContainerTabelJS = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelFirstLineJS = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelSecondineJS = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelSecondineJSPercent = skillsContainerBlock.cloneNode(true);

const skillsFlexContainerTabelphp = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelFirstLinephp = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelSecondinephp = skillsContainerBlock.cloneNode(true);
const skillsContainerTabelSecondinephpPercent = skillsContainerBlock.cloneNode(true);

const skillsContainerImg = skillsContainerBlock.cloneNode(true);
const skillsImg = document.createElement('img');

//EDUCATION
const educationContainerBlock = document.createElement('div');
const educationContainerTitle = document.createElement('div');
const educationContainerTable = educationContainerBlock.cloneNode(true);
const educationContainerImg = educationContainerBlock.cloneNode(true);
const educationImg = document.createElement('img');

const educationFlexContainer = educationContainerBlock.cloneNode(true);
const educationFlexContainerFirstLine = educationContainerBlock.cloneNode(true);
const educationFlexContainerSecondLine = educationContainerBlock.cloneNode(true);

const educationFlexContainerBelsut = educationContainerBlock.cloneNode(true);
const educationFlexContainerFirstLineBelsut = educationContainerBlock.cloneNode(true);
const educationFlexContainerSecondLineBelsut = educationContainerBlock.cloneNode(true);
const educationFlexContainerSecondLineBelsutLink = document.createElement('a');

const educationFlexContainerIT = educationContainerBlock.cloneNode(true);
const educationFlexContainerFirstLineIT = educationContainerBlock.cloneNode(true);
const educationFlexContainerSecondLineIT = educationContainerBlock.cloneNode(true);
const educationFlexContainerSecondLineITLink = document.createElement('a');
const educationFlexContainerSecondLineDescription = educationContainerBlock.cloneNode(true);
const educationFlexContainerSecondLineFirstProject = educationContainerBlock.cloneNode(true);
const educationFlexContainerSecondLineFirstProjectLink = document.createElement('span');
const educationFlexContainerSecondLineFirstProjectLinkA = document.createElement('a');
const educationFlexContainerSecondLineSecondProject = educationContainerBlock.cloneNode(true);
const educationFlexContainerSecondLineSecondProjectLink = document.createElement('span');
const educationFlexContainerSecondLineSecondProjectLinkA = document.createElement('a');

//COMMENTS
const commentsContainerBlock = document.createElement('div');
const commentsWrapTitel = commentsContainerBlock.cloneNode(true);
const commentsContainerTitle = commentsContainerBlock.cloneNode(true)
const commentsContainerUnderTitel = commentsContainerBlock.cloneNode(true);
const commentsContainerTable = commentsContainerBlock.cloneNode(true);
const commentsContainerWrapCheck = commentsContainerBlock.cloneNode(true);
const commentsContainerWrapInput = commentsContainerBlock.cloneNode(true);
const commentsContainerInput = document.createElement('input');
const commentsContainerButton = commentsContainerBlock.cloneNode(true);

const commentsContainerWrapInputTel = commentsContainerBlock.cloneNode(true);
const commentsContainerInputTel = document.createElement('input');
const commentsContainerInputTelMessage = commentsContainerBlock.cloneNode(true);

const commentsContainerImg = commentsContainerBlock.cloneNode(true);
const commentsImg = document.createElement('img');

main.classList.add('main');
mainContainer.classList.add('main-container');
mainContainerInformation.classList.add('main-container-inaformation');
mainContainerInformationTextBlock.classList.add('main-container-information-text-block');
mainContainerInformationTitiel.classList.add('main-container-information-titel');
mainContainerInformationTitiel.textContent = 'HANNA SOUPEL';
mainContainerInformationUnderTitel.classList.add('main-container-information-under-titel');
mainContainerInformationUnderTitel.textContent = 'Web-developer';
mainContainerInformationDescription.classList.add('main-container-information-description');
mainContainerInformationDescription.textContent = 'Hello! I\'m Hanna Soupel. I have been worked in a banking sector for 1 year. I have good teamwork and business communication skills. I was engaged in research activities in the past. I work as a part-time manager in SkyEng. My skills: HTML, CSS, JavaScript, familiar with GitHub, Figma, PHP. English Proficiency: A2+. I study English with my tutor to improve my skill. I have one real project that is in development.';
mainContainerExtraInformationContainer.classList.add('main-container-extra-information-container');
mainContainerExtraInformationForAge.classList.add('main-container-information-description');
mainContainerExtraInformationAge.textContent = 'Age: 24';
mainContainerExtraInformationEmail.textContent = 'Email: anna.soupel@gmail.com'
mainContainerExtraInformationForPhone.classList.add('main-container-information-description');
mainContainerExtraInformationPhone.textContent = 'Phone: +375291021308';
mainContainerExtraInformationSkype.textContent = 'Skype: Hanna Soupel';
mainContainerInformationLinks.classList.add('main-container-information-description');
mainContainerInformationLinks.textContent = 'Social Links';
mainFlexContainerForSocialLinksLinkedInImg.src = "./img/linkedin.png";
mainFlexContainerForSocialLinksLinkedInImg.classList.add('main-flex-container-social-links-img')
mainFlexContainerForSocialLinksLinkedIn.href = "https://www.linkedin.com/in/hanna-soupel-5aa584207/";
mainFlexContainerForSocialLinksGitHubImg.src = "./img/github.png"
mainFlexContainerForSocialLinksGitHub.href = "https://github.com/AnnaSovpel";
mainFlexContainerForSocialLinksGitHubImg.classList.add('main-flex-container-social-links-img')
mainContainerPhoto.src = "./img/main-photo300.jpg";
mainContainerPhoto.classList.add('main-container-inaformation-photo-size');
mainContainerDownload.classList.add('main-container-download');
mainContainerDownloadA.href="./img/CV Frontend developer Sovpel.docx";
mainContainerDownloadA.textContent = 'DOWNLOAD RESUME';
mainContainerDownloadA.classList = 'main-container-download-a';
mainContainerForPhotoAndDownload.classList.add('main-container-photodownload-media');

// SKILLS
skillsContainerTitle.textContent = 'SKILLS';
skillsContainerTitle.classList.add('main-container-information-titel', 'skills-container-item');
skillsContainerBlock.classList.add('main-container-inaformation');
skillsContainerTable.classList.add('main-container-information-text-block');
skillsContainerImg.classList.add('main-container-photodownload-media');
skillsFlexContainerTabel.classList.add('skills-flex-container-tabel');
skillsContainerTabelFirstLine.textContent = 'HTML';
skillsContainerTabelFirstLine.classList.add('skills-flex-container-tabel-line');
skillsContainerTabelSecondLine.classList.add('skills-flex-container-tabel-line');
skillsContainerTabelSecondLine.textContent = '85%';
skillsContainerTabelSecondLinePercent.classList.add('skills-flex-container-tabel-second-line');

skillsFlexContainerTabelCSS.classList.add('skills-flex-container-tabel');
skillsContainerTabelFirstLineCSS.textContent = 'CSS';
skillsContainerTabelFirstLineCSS.classList.add('skills-flex-container-tabel-line');
skillsContainerTabelSecondineCSS.classList.add('skills-flex-container-tabel-line');
skillsContainerTabelSecondineCSS.textContent = '85%';
skillsContainerTabelSecondineCSSPercent.classList.add('skills-flex-container-tabel-second-line');

skillsFlexContainerTabelJS.classList.add('skills-flex-container-tabel');
skillsContainerTabelFirstLineJS.textContent = 'JavaScript';
skillsContainerTabelFirstLineJS.classList.add('skills-flex-container-tabel-line');
skillsContainerTabelSecondineJS.classList.add('skills-flex-container-tabel-line');
skillsContainerTabelSecondineJS.textContent = '50%';
skillsContainerTabelSecondineJSPercent.classList.add('skills-flex-container-tabel-second-line','skills-flex-container-tabel-second-line-js');

skillsFlexContainerTabelphp.classList.add('skills-flex-container-tabel');
skillsContainerTabelFirstLinephp.textContent = 'PHP';
skillsContainerTabelFirstLinephp.classList.add('skills-flex-container-tabel-line');
skillsContainerTabelSecondinephp.classList.add('skills-flex-container-tabel-line');
skillsContainerTabelSecondinephp.textContent = '10%';
skillsContainerTabelSecondinephpPercent.classList.add('skills-flex-container-tabel-second-line','skills-flex-container-tabel-second-line-php');
skillsImg.src = "./img/skills300.jpg";
skillsImg.classList.add('main-container-inaformation-photo-size');


//EDUCATION
educationContainerTitle.textContent = 'EDUCATION';
educationContainerTitle.classList.add('main-container-information-titel', 'skills-container-item');
educationContainerBlock.classList.add('main-container-inaformation', 'education-main-container-margin');
educationContainerTable.classList.add('main-container-information-text-block');
educationFlexContainer.classList.add('skills-flex-container-tabel');
educationFlexContainerFirstLine.classList.add('education-flex-container-first-line');
educationFlexContainerFirstLine.textContent = 'Institution and years of study';
educationFlexContainerSecondLine.classList.add('education-flex-container-first-line','education-flex-container-second-line');
educationFlexContainerSecondLine.textContent = 'Discription and links';

educationFlexContainerBelsut.classList.add('skills-flex-container-tabel');
educationFlexContainerFirstLineBelsut.classList.add('education-flex-container-first-line', 'education-flex-container-first-line__belsut');
educationFlexContainerFirstLineBelsut.textContent = 'Belarusian State University of transport (2015-2019)';
educationFlexContainerSecondLineBelsut.classList.add('education-flex-container-first-line','education-flex-container-second-line', 'education-flex-container-first-line__belsut', 'education-flex-container-first-line__belsut__color');
educationFlexContainerSecondLineBelsut.textContent = 'Specialization:commercial activity.';
educationFlexContainerSecondLineBelsutLink.href = 'https://www.bsut.by/';
educationFlexContainerSecondLineBelsutLink.textContent = 'UNIVERCITY LINK';
educationFlexContainerSecondLineBelsutLink.classList.add('education-flex-container-link');

educationFlexContainerIT.classList.add('skills-flex-container-tabel');
educationFlexContainerFirstLineIT.classList.add('education-flex-container-first-line', 'education-flex-container-first-line__belsut');
educationFlexContainerFirstLineIT.textContent = 'Educational Center for Programming and High Tech(IT-Academy) (2020-2021)';
educationFlexContainerSecondLineIT.classList.add('education-flex-container-first-line','education-flex-container-second-line', 'education-flex-container-first-line__belsut', 'education-flex-container-first-line__belsut__color');
educationFlexContainerSecondLineIT.textContent = 'Specialization:Website Development with HTML, CSS, JavaScript.';
educationFlexContainerSecondLineITLink.href = 'https://www.it-academy.by/';
educationFlexContainerSecondLineITLink.textContent = 'IT-ACADEMY LINK';
educationFlexContainerSecondLineITLink.classList.add('education-flex-container-link');
educationFlexContainerSecondLineDescription.textContent = 'I have 2 projects during my studying.'
educationFlexContainerSecondLineFirstProject.textContent = 'The firts project is visual model of the online cosmetics store.This is my first project where I used HTML and CSS. JavaScript was used at the initial level.'
educationFlexContainerSecondLineFirstProjectLinkA.href = 'https://annasovpel.github.io/Project_HTML_CSS.github.io/project.html';
educationFlexContainerSecondLineFirstProjectLinkA.textContent = 'PROJECT LINK';
educationFlexContainerSecondLineFirstProjectLinkA.classList.add('education-flex-container-link');

educationFlexContainerSecondLineSecondProject.textContent = 'The second project is dedicated to healthy eating. User can chose some menu and found yoga practice after registration. DOMbuildingwas created using JavaScript.'
educationFlexContainerSecondLineSecondProjectLinkA.href = 'https://annasovpel.github.io/Project_JavaScript.github.io/project.html';
educationFlexContainerSecondLineSecondProjectLinkA.textContent = 'PROJECT LINK';
educationFlexContainerSecondLineSecondProjectLinkA.classList.add('education-flex-container-link');

educationContainerImg.classList.add('main-container-photodownload-media');
educationImg.src = "./img/educat350.jpg";
educationImg.classList.add('main-container-inaformation-photo-size');

//COMMENTS 
commentsContainerTitle.textContent = 'COMMENTS';
commentsWrapTitel.classList.add('main-container-information-titel', 'comments-container-item');
commentsContainerUnderTitel.textContent = 'Here you can leave a comment and check your phone number';
commentsContainerUnderTitel.classList.add('comments-container-under-item');
commentsContainerBlock.classList.add('main-container-inaformation');
commentsContainerWrapCheck.classList.add('comments-check-container');
commentsContainerTable.classList.add('main-container-information-text-block', 'comments-container-tabel');
commentsContainerWrapInput.classList.add('comments-container-input');
commentsContainerButton.textContent = 'Проверить\\check';
commentsContainerButton.classList.add('comments-container-button');
commentsContainerWrapInputTel.classList.add('comments-container-input-tel');
commentsContainerInputTel.placeholder = '+375YYXXXXXXX';
commentsContainerInputTel.type = 'number';

commentsContainerImg.classList.add('main-container-photodownload-media');
commentsImg.src = "./img/comments350.jpg";
commentsImg.classList.add('main-container-inaformation-photo-size');

function CommentsCheck () {
    commentsContainerInput.placeholder = 'anna.soupel@gmail.com';
    if(commentsContainerInput.value != '') {
        commentsContainerInput.placeholder = '';
    }
}
function TelCheck () {
    if(commentsContainerInputTel.value.length < 12 || commentsContainerInputTel.value.length > 12){
        commentsContainerInputTelMessage.textContent ='Номер не верный\\Number is not correct.'
    } else if (commentsContainerInputTel.value[0] != 3){
        commentsContainerInputTelMessage.textContent ='Номер не верный\\Number is not correct.'
    } else if (commentsContainerInputTel.value[1] != 7){
        commentsContainerInputTelMessage.textContent ='Номер не верный\\Number is not correct.'
    } else if (commentsContainerInputTel.value[2] != 5){
        commentsContainerInputTelMessage.textContent ='Номер не верный\\Number is not correct.'
    } else {
        commentsContainerInputTelMessage.textContent ='Номер верный\\Number is correct.'
    }
}
commentsContainerButton.addEventListener('click', CommentsCheck);
commentsContainerButton.addEventListener('click', TelCheck);

root.append(main);
main.append(mainContainer, skillsContainerBlock, educationContainerBlock, commentsContainerBlock);
mainContainer.append(mainContainerInformation);
mainContainerInformation.append(mainContainerInformationTextBlock,mainContainerForPhotoAndDownload);
mainContainerInformationTextBlock.append(mainContainerInformationTitiel, mainContainerInformationUnderTitel, mainContainerInformationDescription, mainContainerExtraInformationContainer, mainContainerInformationLinks,mainFlexContainerForSocialLinks);
mainContainerExtraInformationContainer.append(mainContainerExtraInformationForAge, mainContainerExtraInformationForPhone);
mainContainerExtraInformationForAge.append(mainContainerExtraInformationAge,mainContainerExtraInformationEmail);
mainContainerExtraInformationForPhone.append(mainContainerExtraInformationPhone, mainContainerExtraInformationSkype);
mainFlexContainerForSocialLinks.append(mainFlexContainerForSocialLinksLinkedIn, mainFlexContainerForSocialLinksGitHub);
mainFlexContainerForSocialLinksGitHub.append(mainFlexContainerForSocialLinksGitHubImg);
mainFlexContainerForSocialLinksLinkedIn.append(mainFlexContainerForSocialLinksLinkedInImg);
mainContainerForPhotoAndDownload.append(mainContainerPhoto,mainContainerDownload);
mainContainerDownload.append(mainContainerDownloadA);

//SKILLS
skillsContainerBlock.append(skillsContainerImg, skillsContainerTable);
skillsContainerTable.append(skillsContainerTitle, skillsFlexContainerTabel, skillsFlexContainerTabelCSS, skillsFlexContainerTabelJS, skillsFlexContainerTabelphp);
skillsFlexContainerTabel.append(skillsContainerTabelFirstLine, skillsContainerTabelSecondLine);
skillsContainerTabelSecondLine.append(skillsContainerTabelSecondLinePercent);
skillsFlexContainerTabelCSS.append(skillsContainerTabelFirstLineCSS, skillsContainerTabelSecondineCSS);
skillsContainerTabelSecondineCSS.append(skillsContainerTabelSecondineCSSPercent);
skillsFlexContainerTabelJS.append(skillsContainerTabelFirstLineJS, skillsContainerTabelSecondineJS);
skillsContainerTabelSecondineJS.append(skillsContainerTabelSecondineJSPercent);
skillsFlexContainerTabelphp.append(skillsContainerTabelFirstLinephp, skillsContainerTabelSecondinephp);
skillsContainerTabelSecondinephp.append(skillsContainerTabelSecondinephpPercent);
skillsContainerImg.append(skillsImg);

//EDUCATION
educationContainerBlock.append(educationContainerTable,educationContainerImg);
educationContainerTable.append(educationContainerTitle, educationFlexContainer, educationFlexContainerBelsut, educationFlexContainerIT);
educationFlexContainerBelsut.append(educationFlexContainerFirstLineBelsut, educationFlexContainerSecondLineBelsut);
educationFlexContainer.append(educationFlexContainerFirstLine, educationFlexContainerSecondLine);
educationFlexContainerSecondLineBelsut.append(educationFlexContainerSecondLineBelsutLink);
educationFlexContainerIT.append(educationFlexContainerFirstLineIT, educationFlexContainerSecondLineIT);
educationFlexContainerSecondLineIT.append(educationFlexContainerSecondLineITLink, educationFlexContainerSecondLineDescription,educationFlexContainerSecondLineFirstProject, 
                                        educationFlexContainerSecondLineFirstProjectLink, educationFlexContainerSecondLineSecondProject, 
                                        educationFlexContainerSecondLineSecondProjectLink);
educationFlexContainerSecondLineFirstProject.append(educationFlexContainerSecondLineFirstProjectLinkA);
educationFlexContainerSecondLineSecondProject.append(educationFlexContainerSecondLineSecondProjectLinkA);
educationContainerImg.append(educationImg);

//COMMENTS
commentsContainerBlock.append(commentsContainerImg, commentsContainerTable);
commentsContainerTable.append(commentsWrapTitel,commentsContainerWrapCheck);
commentsWrapTitel.append(commentsContainerTitle, commentsContainerUnderTitel);
commentsContainerWrapCheck.append(commentsContainerWrapInput, commentsContainerButton,commentsContainerWrapInputTel);
commentsContainerWrapInput.append(commentsContainerInput);
commentsContainerWrapInputTel.append(commentsContainerInputTel, commentsContainerInputTelMessage);
commentsContainerImg.append(commentsImg);


