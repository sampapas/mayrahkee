const min = document.querySelector('nav .min');
const plus = document.querySelector('nav .plus');
let num = document.querySelector('.number .item-nav');

const mainPage = document.querySelector('.mainPage');
const mainPageTitre = document.querySelector('.mainPage h1');
const mainPageSousTitre = document.querySelector('.mainPage h2');
const mainPageImg = document.querySelector('.mainPage .container-img img');
const mainPageContainerImg = document.querySelector('.mainPage .container-img');
const mainPageStyleTitre = document.querySelector('.mainPage .style h4');
const mainPageStyleP = document.querySelector('.mainPage .style p');
const mainPagePortraitTitre = document.querySelector('.mainPage .portrait h4');
const mainPagePortraitP = document.querySelector('.mainPage .portrait p');
const mainPageInfoTitre = document.querySelector('.mainPage .info h4');
const mainPageInfoP = document.querySelector('.mainPage .info p');
const mainPageStyle = document.querySelector('.mainPage .style');
const mainPagePortrait = document.querySelector('.mainPage .portrait');
const mainPageInfo = document.querySelector('.mainPage .info');
const mainPageContainerAnnee = document.querySelector('.mainPage .annee');
const mainPageAnneeTitre = document.querySelector('.mainPage .annee h4');
const mainPageAnneeP = document.querySelector('.mainPage .annee p');
const mainPageNumero = document.querySelector('.mainPage h5');

const page1 = document.querySelector('.page1');
const page1Entete = document.querySelector('.page1 .entete');
const page1Img1 = document.querySelector('.page1 .container-img1-page1 img');
const page1Img2 = document.querySelector('.page1 .container-img2-page1 img');
const page1Titre = document.querySelector('.page1 h6');
const page1SousTitre = document.querySelector('.page1 h5');
const page1ContainerImg1 = document.querySelector('.page1 .container-img1-page1');

const page2 = document.querySelector('.page2');
const page2Img = document.querySelector('.page2 .container-img-page2 img');

const page3 = document.querySelector('.page3');
const page3Entete = document.querySelector('.page3 .entete');
const page3Img1 = document.querySelector('.page3 .container-img-page3 img') ;
const page3Img2 = document.querySelector('.page3 .container-img1-2-page3 img:nth-child(1)');
const page3Img3 = document.querySelector('.page3 .container-img1-2-page3 img:nth-child(2)');
const page3Img4 = document.querySelector('.page3 .container-img3-page3 img');

const page4 = document.querySelector('.page4');
const page4Entete = document.querySelector('.page4 .entete');
const page4Img1 = document.querySelector('.page4 .container-img1-page4 img');
const page4Img2 = document.querySelector('.page4 .container-img2-page4 img');
const page4Titre = document.querySelector('.page4 h6');
const page4SousTitre = document.querySelector('.page4 h5');
const page4ContainerImg1 = document.querySelector('.page4 .container-img1-page4');

const page5 = document.querySelector('.page5');
const page5Img = document.querySelector('.page5 .container-img-page5 img');

const page6 = document.querySelector('.page6');
const page6Entete = document.querySelector('.page6 .entete');
const page6Img1 = document.querySelector('.page6 .container-img-page6 img') ;
const page6Img2 = document.querySelector('.page6 .container-img1-2-page6 img:nth-child(1)');
const page6Img3 = document.querySelector('.page6 .container-img1-2-page6 img:nth-child(2)');
const page6Img4 = document.querySelector('.page6 .container-img3-page6 img');

const page7 = document.querySelector('.page7');
const page7Img = document.querySelector('.page7 .container-img-page7 img');
const page7Entente = document.querySelector('.page7 .entete');
const page7ResumePortrait = document.querySelector('.page7 .resume-portrait');

const page8 = document.querySelector('.page8');
const page8Titre = document.querySelector('.page8 h5');
const page8SousTitre = document.querySelector('.page8 h6');
const page8Text = document.querySelector('.page8 .portrait-txt');

const page9 = document.querySelector('.page9');
const page9Entete = document.querySelector('.page9 .entete');
const page9Titre = document.querySelector('.page9 h5');
const page9Img = document.querySelector('.page9 .container-img1-page9 img');
const page9ImgReseau = document.querySelectorAll('.page9 .container-reseau-global .container-reseau img');
const page9TxtReseau = document.querySelectorAll('.page9 .container-reseau-global .container-reseau p');
const page9ContainerReseau = document.querySelectorAll('.page9 .container-reseau-global .container-reseau');
const page9ContainerImg1 = document.querySelector('.page9 .container-img1-page9');

const boutonMenu = document.querySelector('nav .list-nav .barre');
const menu = document.querySelector('#select-page');
const imgMenu = document.querySelectorAll('#select-page .container-selectpage-img img')

function normal() {

    num.textContent = "100%";
    mainPage.style.width = "800px";  
    mainPage.style.height = "1000px";
    mainPageTitre.style.fontSize = "110px";  
    mainPageImg.style.width = "730px";
    mainPageImg.style.height = "810px";
    mainPageContainerImg.style.marginTop = "0";
    mainPageSousTitre.style.fontSize = "55px";
    mainPageSousTitre.style.top = "120px";
    mainPageStyleTitre.style.fontSize = "23px";
    mainPageStyleP.style.fontSize = "18px";
    mainPagePortraitTitre.style.fontSize = "23px";
    mainPagePortraitP.style.fontSize = "18px";
    mainPageInfoTitre.style.fontSize = "23px";
    mainPageInfoP.style.fontSize = "18px";
    mainPagePortrait.style.bottom = "140px";
    mainPageStyle.style.bottom = "255px";
    mainPageAnneeTitre.style.fontSize = "50px";
    mainPageAnneeP.style.fontSize = "20px";
    mainPageContainerAnnee.style.bottom = "360px";
    mainPageInfo.style.bottom = "70px";
    mainPageNumero.style.fontSize = "12px";
    mainPageNumero.style.margin = "4px 35px 0 0";

    page1.style.width = "800px";
    page1.style.height = "1000px";
    page1Entete.style.fontSize = "12px";
    page1Img1.style.width = "680px";
    page1Img1.style.height = "325px";
    page1Img2.style.width = "680px";
    page1Img2.style.height = "325px";
    page1Titre.style.fontSize = "30px";
    page1SousTitre.style.fontSize = "80px";
    page1SousTitre.style.marginTop = "-15px";
    page1ContainerImg1.style.marginTop = "40px";

    page2.style.width = "800px";
    page2.style.height = "1100px";
    page2Img.style.width = "800px";
    page2Img.style.height = "1100px";

    page3.style.width = "800px";
    page3.style.height = "2000px";
    page3Entete.style.fontSize = "12px";
    page3Img1.style.width = "800px";
    page3Img1.style.height = "900px";
    page3Img2.style.width = "395px";
    page3Img2.style.height = "430px";
    page3Img3.style.width = "395px";
    page3Img3.style.height = "430px";
    page3Img4.style.width = "800px";
    page3Img4.style.height = "651px";

    page4.style.width = "800px";
    page4.style.height = "1000px";
    page4Entete.style.fontSize = "12px";
    page4Img1.style.width = "680px";
    page4Img1.style.height = "325px";
    page4Img2.style.width = "680px";
    page4Img2.style.height = "325px";
    page4Titre.style.fontSize = "30px";
    page4SousTitre.style.fontSize = "80px";
    page4ContainerImg1.style.marginTop = "40px";

    page5.style.width = "800px";
    page5.style.height = "1200px";
    page5Img.style.width = "800px";
    page5Img.style.height = "1200px";
    page5Img.style.objectPosition = "initial";

    page6.style.width = "800px";
    page6.style.height = "2000px";
    page6Entete.style.fontSize = "12px";
    page6Img1.style.width = "800px";
    page6Img1.style.height = "900px";
    page6Img2.style.width = "395px";
    page6Img2.style.height = "430px";
    page6Img3.style.width = "395px";
    page6Img3.style.height = "430px";
    page6Img4.style.width = "800px";
    page6Img4.style.height = "651px";

    page7.style.width = "800px"
    page7.style.height = "1000px";
    page7Entente.style.fontSize = "12px";
    page7Img.style.width = "800px";
    page7Img.style.height = "1000px";
    page7ResumePortrait.style.width = "260px";
    page7ResumePortrait.style.fontSize = "20px";
    page7ResumePortrait.style.bottom = "150px";
    page7ResumePortrait.style.padding = "25px";

    page8.style.width = "800px";
    page8.style.height = "1000px";
    page8Titre.style.fontSize = "45px";
    page8SousTitre.style.fontSize = "30px";
    page8Titre.style.paddingTop = "100px";
    page8Text.style.padding = "110px";
    page8Text.style.fontSize = "15px";

    page9.style.width = "800px";
    page9.style.height = "1000px";
    page9Entete.style.fontSize = "12px";
    page9Img.style.width = "550px";
    page9Img.style.height = "700px";
    page9Titre.style.fontSize = "60px";
    page9Titre.style.left = "120px";
    page9Titre.style.bottom = "205px";
    for (let i = 0; i < page9ImgReseau.length; i++) {
        page9ImgReseau[i].style.width = "25px";
    };
    for (let j = 0; j < page9ContainerReseau.length; j++) {
        page9ContainerReseau[j].style.margin = "10px 40px";
    };
    page9ContainerImg1.style.margin = "80px auto 30px";

};

function little() {

    num.textContent = "50%";
    mainPage.style.width = "500px";  
    mainPage.style.height = "700px";
    mainPageTitre.style.fontSize = "65px";  
    mainPageImg.style.width = "430px";
    mainPageImg.style.height = "560px";
    mainPageContainerImg.style.marginTop = "10px";
    mainPageSousTitre.style.fontSize = "33px";
    mainPageSousTitre.style.top = "82px";
    mainPageStyleTitre.style.fontSize = "18px";
    mainPageStyleP.style.fontSize = "14px";
    mainPagePortraitTitre.style.fontSize = "18px";
    mainPagePortraitP.style.fontSize = "14px";
    mainPageInfoTitre.style.fontSize = "18px";
    mainPageInfoP.style.fontSize = "14px";
    mainPagePortrait.style.bottom = "125px";
    mainPageStyle.style.bottom = "210px";
    mainPageAnneeTitre.style.fontSize = "30px";
    mainPageAnneeP.style.fontSize = "15px";
    mainPageContainerAnnee.style.bottom = "280px";
    mainPageInfo.style.bottom = "70px";
    mainPageNumero.style.fontSize = "12px";
    mainPageNumero.style.margin = "4px 35px 0 0";

    page1.style.width = "500px";
    page1.style.height = "700px";
    page1Entete.style.fontSize = "9px";
    page1Img1.style.width = "380px";
    page1Img1.style.height = "215px";
    page1Img2.style.width = "380px";
    page1Img2.style.height = "215px"
    page1Titre.style.fontSize = "20px";
    page1SousTitre.style.fontSize = "50px";
    page1SousTitre.style.marginTop = "-8px"
    page1ContainerImg1.style.marginTop = "25px";

    page2.style.width = "500px";
    page2.style.height = "700px";
    page2Img.style.width = "500px";
    page2Img.style.height = "700px";

    page3.style.width = "500px";
    page3.style.height = "1300px";
    page3Entete.style.fontSize = "9px";
    page3Img1.style.width = "500px";
    page3Img1.style.height = "550px";
    page3Img2.style.width = "245px";
    page3Img2.style.height = "280px";
    page3Img3.style.width = "245px";
    page3Img3.style.height = "280px";
    page3Img4.style.width = "500px";
    page3Img4.style.height = "451px";

    page4.style.width = "500px";
    page4.style.height = "700px";
    page4Entete.style.fontSize = "9px";
    page4Img1.style.width = "380px";
    page4Img1.style.height = "215px";
    page4Img2.style.width = "380px";
    page4Img2.style.height = "215px"
    page4Titre.style.fontSize = "15px";
    page4SousTitre.style.fontSize = "50px";
    page4SousTitre.style.marginTop = "-8px"
    page4ContainerImg1.style.marginTop = "25px";
    
    page5.style.width = "500px";
    page5.style.height = "800px";
    page5Img.style.width = "500px";
    page5Img.style.height = "800px";

    page6.style.width = "500px";
    page6.style.height = "1300px";
    page6Entete.style.fontSize = "9px";
    page6Img1.style.width = "500px";
    page6Img1.style.height = "550px";
    page6Img2.style.width = "245px";
    page6Img2.style.height = "280px";
    page6Img3.style.width = "245px";
    page6Img3.style.height = "280px";
    page6Img4.style.width = "500px";
    page6Img4.style.height = "451px";

    page7.style.width = "500px"
    page7.style.height = "700px";
    page7Entente.style.fontSize = "9px";
    page7Img.style.width = "500px";
    page7Img.style.height = "700px";
    page7ResumePortrait.style.width = "160px";
    page7ResumePortrait.style.fontSize = "15px";
    page7ResumePortrait.style.bottom = "120px";
    page7ResumePortrait.style.padding = "15px";

    page8.style.width = "500px";
    page8.style.height = "700px";
    page8Titre.style.fontSize = "30px";
    page8SousTitre.style.fontSize = "20px";
    page8Titre.style.paddingTop = "50px";
    page8Text.style.padding = "30px";
    page8Text.style.fontSize = "13px";

    page9.style.width = "500px";
    page9.style.height = "700px";
    page9Entete.style.fontSize = "9px";
    page9Img.style.width = "350px";
    page9Img.style.height = "450px";
    page9Titre.style.fontSize = "30px";
    page9Titre.style.left = "74px";
    page9Titre.style.bottom = "183px";
    for (let i = 0; i < page9ImgReseau.length; i++) {
        page9ImgReseau[i].style.width = "20px";
    };
    for (let j = 0; j < page9ContainerReseau.length; j++) {
        page9ContainerReseau[j].style.margin = "10px 20px";
    };
    page9ContainerImg1.style.margin = "60px auto 30px";

};

function big() {

    num.textContent = "150%";
    mainPage.style.width = "1400px";  
    mainPage.style.height = "1600px";
    mainPageTitre.style.fontSize = "200px";  
    mainPageImg.style.width = "1330px";
    mainPageImg.style.height = "1320px";
    mainPageContainerImg.style.marginTop = "-16px";
    mainPageSousTitre.style.fontSize = "101px";
    mainPageSousTitre.style.top = "200px";
    mainPageStyleTitre.style.fontSize = "35px";
    mainPageStyleP.style.fontSize = "30px";
    mainPagePortraitTitre.style.fontSize = "35px";
    mainPagePortraitP.style.fontSize = "30px";
    mainPageInfoTitre.style.fontSize = "35px";
    mainPageInfoP.style.fontSize = "30px";
    mainPagePortrait.style.bottom = "185px";
    mainPageStyle.style.bottom = "370px";
    mainPageAnneeTitre.style.fontSize = "80px";
    mainPageAnneeP.style.fontSize = "40px";
    mainPageContainerAnnee.style.bottom = "550px";
    mainPageNumero.style.fontSize = "12px";
    mainPageNumero.style.margin = "4px 35px 0 0";

    page1.style.width = "1400px";
    page1.style.height = "1600px";
    page1Entete.style.fontSize = "15px";
    page1Img1.style.width = "1280px";
    page1Img1.style.height = "605px";
    page1Img2.style.width = "1280px";
    page1Img2.style.height = "605px";
    page1Titre.style.fontSize = "40px";
    page1SousTitre.style.fontSize = "100px";
    page1ContainerImg1.style.marginTop = "40px";
    mainPageInfo.style.bottom = "70px";

    page2.style.width = "1400px";
    page2.style.height = "2000px";
    page2Img.style.width = "1400px";
    page2Img.style.height = "2000px";

    page3.style.width = "1400px";
    page3.style.height = "3419px";
    page3Entete.style.fontSize = "15px";
    page3Img1.style.width = "1400px";
    page3Img1.style.height = "1500px";
    page3Img2.style.width = "695px";
    page3Img2.style.height = "800px";
    page3Img3.style.width = "695px";
    page3Img3.style.height = "800px";
    page3Img4.style.width = "1400px";
    page3Img4.style.height = "1100px";

    page4.style.width = "1400px";
    page4.style.height = "1600px";
    page4Entete.style.fontSize = "15px";
    page4Img1.style.width = "1280px";
    page4Img1.style.height = "605px";
    page4Img2.style.width = "1280px";
    page4Img2.style.height = "605px";
    page4Titre.style.fontSize = "40px";
    page4SousTitre.style.fontSize = "100px";
    page4ContainerImg1.style.marginTop = "40px";

    page5.style.width = "1400px";
    page5.style.height = "2050px";
    page5Img.style.width = "1400px";
    page5Img.style.height = "2050px";
    page5Img.style.objectPosition = "initial";

    page6.style.width = "1400px";
    page6.style.height = "3419px";
    page6Entete.style.fontSize = "15px";
    page6Img1.style.width = "1400px";
    page6Img1.style.height = "1500px";
    page6Img2.style.width = "695px";
    page6Img2.style.height = "800px";
    page6Img3.style.width = "695px";
    page6Img3.style.height = "800px";
    page6Img4.style.width = "1400px";
    page6Img4.style.height = "1100px";

    page7.style.width = "1400px"
    page7.style.height = "1600px";
    page7Entente.style.fontSize = "15px";
    page7Img.style.width = "1400px";
    page7Img.style.height = "1600px";
    page7ResumePortrait.style.width = "350px";
    page7ResumePortrait.style.fontSize = "30px";
    page7ResumePortrait.style.bottom = "350px";
    page7ResumePortrait.style.padding = "25px";

    page8.style.width = "1400px";
    page8.style.height = "1600px";
    page8Titre.style.fontSize = "65px";
    page8SousTitre.style.fontSize = "40px";
    page8Titre.style.paddingTop = "150px";
    page8Text.style.padding = "230px";
    page8Text.style.fontSize = "24px";

    page9.style.width = "1400px";
    page9.style.height = "1600px";
    page9Entete.style.fontSize = "15px";
    page9Img.style.width = "1150px";
    page9Img.style.height = "1300px";
    page9Titre.style.fontSize = "100px";
    page9Titre.style.left = "119px";
    page9Titre.style.bottom = "192px";
    for (let i = 0; i < page9ImgReseau.length; i++) {
        page9ImgReseau[i].style.width = "40px";
    };
    for (let j = 0; j < page9ContainerReseau.length; j++) {
        page9ContainerReseau[j].style.margin = "10px 80px";
    };
    page9ContainerImg1.style.margin = "80px auto 30px";

};

function smartphone() {

    num.textContent = "50%";
    mainPage.style.width = "375px";  
    mainPage.style.height = "575px";
    mainPageTitre.style.fontSize = "45px";  
    mainPageImg.style.width = "295px";
    mainPageImg.style.height = "465px";
    mainPageContainerImg.style.marginTop = "12px";
    mainPageSousTitre.style.fontSize = "23px";
    mainPageSousTitre.style.top = "62px";
    mainPageStyleTitre.style.fontSize = "18px";
    mainPageStyleP.style.fontSize = "14px";
    mainPagePortraitTitre.style.fontSize = "18px";
    mainPagePortraitP.style.fontSize = "14px";
    mainPageInfoTitre.style.fontSize = "18px";
    mainPageInfoP.style.fontSize = "14px";
    mainPagePortrait.style.bottom = "110px";
    mainPageStyle.style.bottom = "195px";
    mainPageInfo.style.bottom = "55px";
    mainPageAnneeTitre.style.fontSize = "30px";
    mainPageAnneeP.style.fontSize = "15px";
    mainPageContainerAnnee.style.bottom = "280px"
    mainPageNumero.style.fontSize = "11px";
    mainPageNumero.style.margin = "4px 40px 0 0";

    page1.style.width = "375px";
    page1.style.height = "575px";
    page1Entete.style.fontSize = "9px";
    page1Img1.style.width = "300px";
    page1Img1.style.height = "160px";
    page1Img2.style.width = "300px";
    page1Img2.style.height = "160px"
    page1Titre.style.fontSize = "15px";
    page1SousTitre.style.fontSize = "50px";
    page1SousTitre.style.marginTop = "-8px"
    page1ContainerImg1.style.marginTop = "20px";

    page2.style.width = "375px";
    page2.style.height = "575px";
    page2Img.style.width = "375px";
    page2Img.style.height = "575px";

    page3.style.width = "375px";
    page3.style.height = "1000px";
    page3Entete.style.fontSize = "9px";
    page3Img1.style.width = "375px";
    page3Img1.style.height = "420px";
    page3Img2.style.width = "182.5px";
    page3Img2.style.height = "220px";
    page3Img3.style.width = "182.5px";
    page3Img3.style.height = "220px";
    page3Img4.style.width = "375px";
    page3Img4.style.height = "341px";

    page4.style.width = "375px";
    page4.style.height = "575px";
    page4Entete.style.fontSize = "9px";
    page4Img1.style.width = "300px";
    page4Img1.style.height = "160px";
    page4Img2.style.width = "300px";
    page4Img2.style.height = "160px"
    page4Titre.style.fontSize = "15px";
    page4SousTitre.style.fontSize = "50px";
    page4SousTitre.style.marginTop = "-8px"
    page4ContainerImg1.style.marginTop = "20px";
    
    page5.style.width = "375px";
    page5.style.height = "575px";
    page5Img.style.width = "375px";
    page5Img.style.height = "575px";

    page6.style.width = "375px";
    page6.style.height = "1000px";
    page6Entete.style.fontSize = "9px";
    page6Img1.style.width = "375px";
    page6Img1.style.height = "420px";
    page6Img2.style.width = "182.5px";
    page6Img2.style.height = "220px";
    page6Img3.style.width = "182.5px";
    page6Img3.style.height = "220px";
    page6Img4.style.width = "375px";
    page6Img4.style.height = "341px";

    page7.style.width = "375px"
    page7.style.height = "575px";
    page7Entente.style.fontSize = "9px";
    page7Img.style.width = "375px";
    page7Img.style.height = "575px";
    page7ResumePortrait.style.width = "160px";
    page7ResumePortrait.style.fontSize = "15px";
    page7ResumePortrait.style.bottom = "120px";
    page7ResumePortrait.style.padding = "15px";

    page8.style.width = "375px";
    page8.style.height = "575px";
    page8Titre.style.fontSize = "20px";
    page8SousTitre.style.fontSize = "14px";
    page8Titre.style.paddingTop = "20px";
    page8Text.style.padding = "20px";
    page8Text.style.fontSize = "10.5px";

    page9.style.width = "375px";
    page9.style.height = "575px";
    page9Entete.style.fontSize = "9px";
    page9Img.style.width = "300px";
    page9Img.style.height = "380px";
    page9Titre.style.fontSize = "30px";
    page9Titre.style.left = "35px";
    page9Titre.style.bottom = "137px";
    for (let i = 0; i < page9ImgReseau.length; i++) {
        page9ImgReseau[i].style.width = "15px";
    };
    for (let j = 0; j < page9ContainerReseau.length; j++) {
        page9ContainerReseau[j].style.margin = "0px 10px";
    };
    page9ContainerImg1.style.margin = "50px auto 30px";

};


min.addEventListener('click', ()=> {

    if (mainPage.style.width == "1400px") {

        normal();

    } else {

        smartphone();

    }

});


plus.addEventListener('click', ()=> {

    if (mainPage.style.width == "375px") {

        normal();

    } else {

        big();

    }

});

window.onload = function() {


    if(window.matchMedia("(max-width:820px)").matches) {

        smartphone();

    };


    window.addEventListener('resize', ()=> {

        if(window.matchMedia("(max-width:820px)").matches) {

            smartphone();
    
        };

    });

};


boutonMenu.addEventListener('click', ()=> {
    
   if (menu.className == "menu-animation") {

        menu.className = "menu-animation-retour";

   } else {

        menu.className = "menu-animation";

   }

});

imgMenu.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.className = "menu-animation-retour";
    })
})