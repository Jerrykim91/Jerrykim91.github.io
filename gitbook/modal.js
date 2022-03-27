

//function showPopup(){window.open("popup.html","hey","width=300,height=350", status=no);}
// 경로 url , 
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');
// const btnOpenPopup_2 = document.getElementById('btn');

btnOpenPopup.addEventListener('click', () => {
    modal.classList.toggle('show');

    if (modal.classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
});


// btnOpenPopup_2.addEventListener('click', () => {
//     modal.classList.toggle('show');

//     if (modal.classList.contains('show')) {
//         body.style.overflow = 'hidden';
//     }
// });

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.toggle('show');

        if (!modal.classList.contains('show')) {
            body.style.overflow = 'auto';
        }
    }
});

