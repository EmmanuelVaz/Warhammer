const onglets = document.querySelectorAll('.onglets2')
const contenu = document.querySelectorAll('.contenu2')
let index = 0;

onglets.forEach(onglets2 => {

    onglets2.addEventListener('click', () => {

        if(onglet2.classList.contains('active')){
            return;
        } else {
            onglet2.classList.add('active');
        }

        index = onglet2.getAttribute('data-anim2');
        console.log(index);

        for(i = 0; i < onglets2.length; i++) {
           
            if(onglets2[i].getAttribute('data-anim2')
            != index){
                onglets2[i].classList.remove
                ('active');
            }

        }

        for(j = 0; j < contenu2.length; j++){

            if(contenu2[j].getAttribute('data-anim2') == index){
                contenu2[j].classList.add('activeContenu2');
            } else {
                contenu2[j].classList.remove('activeContenu2');
            }
        }

    })
})