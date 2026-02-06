//legacy code, my belowed

const context_menu = document.querySelector('.context_menu');
const lang_selector = document.querySelector('.lang_container');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

var context_menu_shown = false;
var current_lang_id = 0;

function ToggleContextMenu(enabled) {
    context_menu.classList.toggle('active', enabled);
    context_menu.classList.toggle('hidden', !enabled);
    lang_selector.classList.toggle('hot', enabled);
    context_menu_shown = enabled;
}

function CheckScrollPos() {
    var scrollPos = window.scrollY || document.documentElement.scrollTop;
}

window.addEventListener('scroll', CheckScrollPos)

async function SetLeftSlideAnim(element) {
    element.style.animationName = 'section_slide_anim';
    element.style.animationTimingFunction = 'ease';
    element.style.animationDuration = '1s';
    element.style.animationDelay = '0s';
    element.style.animationIterationCount = '1';
    element.style.animationDirection = 'normal';
    element.style.animationFillMode = 'forwards';
    element.style.animationPlayState = 'running';
    element.style.visibility = 'visible';
}

//что делать, если я шампунь?
window.addEventListener('load', (event) => {
    CheckScrollPos();


    document.querySelector('#copyright_year').textContent = new Date().getFullYear();

    var sections = document.querySelectorAll('section');
    for (var section of sections) {
        section.style.visibility = 'hidden';
        section.style.opacity = '0';
    }

    setTimeout(() => {
        SetLeftSlideAnim(document.querySelector('.section_first'));
    }, 400);

    setTimeout(() => {
        SetLeftSlideAnim(document.querySelector('.section_second'));
        SetLeftSlideAnim(document.querySelector('.download_section'));

        SetLeftSlideAnim(document.querySelector('.screenshots_cection'));
        SetLeftSlideAnim(document.querySelector('.section_third'));
    }, 700);
});

document.addEventListener('click', (e) => {
    ToggleContextMenu(false);
    e.preventDefault();
});

function SetLanguage(langID) {
    if (langID < 3) {
        var queryResult = '';
        switch (langID) {
            case 0: {
                queryResult = 'en';
                break;
            }
            case 1: {
                queryResult = 'ru';
                break;
            }
            case 2: {
                queryResult = 'uk'
                break;
            }
            case 3: {
                queryResult = 'gb'
                break;
            }
        }
        alert(queryResult);
        ToggleContextMenu(false);
        window.location.assign(`https://boingosoftware.ru/projects/icon-extractor?hl=${queryResult}`)
    }
}

lang_selector.addEventListener('click', (event) => {
    event.stopPropagation();

    context_menu_shown = !context_menu_shown;
    ToggleContextMenu(context_menu_shown);
});

document.querySelectorAll('.menu_item_container').forEach(element => {
    element.addEventListener('click', (event) => {
        SetLanguage(event.currentTarget.getAttribute('data-id'));
    });
});

document.querySelector('.dark_light_mode_button').addEventListener('click', (e) => {
    var isDarkEnabled = document.body.classList.contains('dark');

    switch (isDarkEnabled) {
        case true: {
            document.body.classList.toggle('dark', false);
            document.body.classList.toggle('light', true);
            e.currentTarget.setAttribute('title', 'Light Mode');

            break;
        }

        case false: {
            document.body.classList.toggle('light', false)
            document.body.classList.toggle('dark', true)
            e.currentTarget.setAttribute('title', 'Dark Mode')

            break;
        }
    }
})