const header = document.querySelector('header');
const footer = document.querySelector('footer');

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

    const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    if (darkModeMql && darkModeMql.matches) {
        // Dark Mode
        ToggleColorMode(false);
    } 
    else {
        ToggleColorMode(true);
    }


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
    }
}

function ToggleColorMode(lightMode) {
    switch (lightMode) {
        case true: {
            document.body.classList.toggle('dark', false);
            document.body.classList.toggle('light', true);

            break;
        }

        case false: {
            document.body.classList.toggle('light', false)
            document.body.classList.toggle('dark', true)

            break;
        }
    }
}

document.querySelector('.dark_light_mode_button').addEventListener('click', (e) => {
    var isDarkEnabled = document.body.classList.contains('dark');

ToggleColorMode(isDarkEnabled);
})