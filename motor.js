const imgSpin = [ // img src/Url
    "img/Derrotado.PNG",
    "img/Dungeon.PNG",
    "img/Pacman.PNG",
    "img/Perdendo.PNG"
];

const imgDesc = [ // img desc for narrator
    "Imagem de um NPC Lobo Branco sendo derrotado.",
    "Imagem de uma gameplay de Masmorra C#.",
    "Imagem de um jogador nomeado de PacManUser69 realizando um contra-ataque.",
    "Imagem de um jogador nomeado de PacManUser69 perdendo para o Necromante Maligno."
]
let selected = 0;

// Após carregar, iniciar os eventos em JS
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("paging").textContent = "Imagem "+(selected+1)+" de "+imgSpin.length
    document.getElementById("btnNext").addEventListener("click", () => {
        if ((selected+1) < imgSpin.length){
            selected++;
        }
        else{
            selected = 0;
        }
        imgUpdt();
    });
    document.getElementById("btnBack").addEventListener("click", () => {
        if (selected > 0){
            selected--;
        }
        else{
            selected = (imgSpin.length-1);
        }
        imgUpdt();
    });
});

// Variável de Função de Atualizar IMG
const imgUpdt = function(){
    let img = document.getElementById("img");
    let page = document.getElementById("paging");
    img.setAttribute("src",imgSpin[selected]);
    img.setAttribute("alt",imgDesc[selected]);
    page.textContent = "Imagem "+(selected+1)+" de "+imgSpin.length
}
