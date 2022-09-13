//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MENSAGENS
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

//TEMAS 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

/* ==================SIDEBAR================== */
//Remover active de todos os itens da sidebar 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
/* **** */

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

/* =================MENSAGENS================ */
//Pesquisas dos chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}
//Pesquisar do chat 
messageSearch.addEventListener('keyup', searchMessage);


//Highlight quando clica no item do menu - mensagem -
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxshadow = 'none';
    }, 2000)
})


/* ====================TEMAS===================== */

//Abrindo o modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//Fechando o modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//Fechando o modal
themeModal.addEventListener('click', closeThemeModal);

//Abrindo o modal
theme.addEventListener('click', openThemeModal);


/* --------FONTES----------- */
// Removendo classe active dos spans ou dos seletores do tamanho de fonte
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }

        // Mudando todos os tamanhos de fonte (possivel pois todos estão em "rem")
        document.querySelector('html').style.fontSize = fontSize;
    })

})

// Remover a classe active das cores
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Mudando as cores primarias 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // Remover a classe active das cores
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 150;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})



// Valores de temas background
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
// Mudar a cor de fundo
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    // adicionar classe active
    Bg1.classList.add('active');
    // remover classe active das outras
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // adicionar classe active
    Bg2.classList.add('active');
    // remover classe active das outras
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // adicionar classe active
    Bg3.classList.add('active');
    // remover classe active das outras
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

