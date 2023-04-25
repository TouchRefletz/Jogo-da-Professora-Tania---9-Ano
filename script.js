var audio = document.getElementById("EfeitoSonoroTecnológico");
            function playSound() {
            audio.play();
            }
            function stopSound() {
            audio.pause();
            audio.currentTime = 0;
            }
            const menu = document.createElement('div');
            menu.classList.add('config-menu');
            menu.innerHTML = '<p>Configurações</p> <p id="textoconfig">Configurações</p> <p id="textoconfig">Configurações</p> <p id="textoconfig">Configurações</p> <p id="textoconfig">Configurações</p>';
            menu.style.position = "absolute";
            menu.style.top = "50%";
            menu.style.left = "0";
            menu.style.right = "0";
            menu.style.bottom = "0";
            menu.style.borderRadius = "75px";
            menu.style.width = "500px";
            menu.style.height = "600px";
            menu.style.backgroundColor = "rgba(11, 0, 61, 1)";
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
            menu.style.justifyContent = "center";
            menu.style.alignItems = "center";
            menu.style.margin = "auto";
            menu.style.transform = "translateY(-50%)";
            menu.style.transition = "1s ease";
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Fechar';
            closeButton.classList.add('botaoconfig');
            closeButton.onmouseover = () => { playSound(); };
            closeButton.onmouseout = () => { stopSound(); };
            closeButton.addEventListener('click', () => {
            menu.remove();
            });
            menu.appendChild(closeButton);
            const menuButton = document.getElementById('config');
            menuButton.addEventListener('click', () => {
            document.body.appendChild(menu);
            });
            const menuComoJogar = document.createElement('div');
            menuComoJogar.classList.add('config-menu');
            menuComoJogar.innerHTML = '<p>Como jogar</p> <p id="textoconfig">Instruções</p> <p id="textoconfig">Objetivos</p> <p id="textoconfig">Controles</p> <p id="textoconfig">Dicas</p>';
            menuComoJogar.style.position = "absolute";
            menuComoJogar.style.top = "50%";
            menuComoJogar.style.left = "0";
            menuComoJogar.style.right = "0";
            menuComoJogar.style.bottom = "0";
            menuComoJogar.style.borderRadius = "75px";
            menuComoJogar.style.width = "500px";
            menuComoJogar.style.height = "600px";
            menuComoJogar.style.backgroundColor = "rgb(0, 95, 150)";
            menuComoJogar.style.display = "flex";
            menuComoJogar.style.flexDirection = "column";
            menuComoJogar.style.justifyContent = "center";
            menuComoJogar.style.alignItems = "center";
            menuComoJogar.style.margin = "auto";
            menuComoJogar.style.transform = "translateY(-50%)";
            menuComoJogar.style.transition = "1s ease";
            const closeButtonComoJogar = document.createElement('button');
            closeButtonComoJogar.textContent = 'Fechar';
            closeButtonComoJogar.classList.add('botaocomojogar');
            closeButtonComoJogar.onmouseover = () => { playSound(); };
            closeButtonComoJogar.onmouseout = () => { stopSound(); };
            closeButtonComoJogar.addEventListener('click', () => {
                menuComoJogar.remove();
            });
            menuComoJogar.appendChild(closeButtonComoJogar);
            const menuButtonComoJogar = document.getElementById('como-jogar');
            menuButtonComoJogar.addEventListener('click', () => {
                document.body.appendChild(menuComoJogar);
            });
            document.addEventListener('DOMContentLoaded', function() {
            const jogarButton = document.querySelector('#jogar');
            const elementosASeremSubstituidos = document.querySelector('#elementos-a-serem-substituidos');
            const elementosSubstitutos = document.querySelector('#elementos-substitutos');
            console.log(elementosSubstitutos);
            jogarButton.addEventListener('click', function() {
                elementosASeremSubstituidos.classList.add('fade-out');
                setTimeout(function() {
                    elementosASeremSubstituidos.style.display = 'none';
                    elementosSubstitutos.style.display = 'block';
                }, 500); // aguarda 500ms para realizar a transição antes de mudar os elementos
            });
            });
            function verificar() {
                var resposta = document.getElementById("resposta").value;  
                var certoresposta = document.querySelector(".certoresposta");
                var erradoresposta = document.querySelector(".erradoresposta");
                var botaoresposta = document.querySelector(".botaoresposta");
                var input = document.getElementById("resposta");
                input.disabled = true;
                if (resposta === "profissoes") {
                    certoresposta.style.opacity= "1";
                    botaoresposta.style.opacity= "0";
                    setTimeout(function() {
                        certoresposta.style.opacity= "0";
                        botaoresposta.style.opacity= "1";
                        input.disabled = false;
                    }, 5000); // 5000 milissegundos = 5 segundos
                } else {
                    erradoresposta.style.opacity= "1";
                    botaoresposta.style.opacity= "0";
                    setTimeout(function() {    
                        erradoresposta.style.opacity= "0";
                        botaoresposta.style.opacity= "1";
                        input.disabled = false;
                    }, 5000);
                }
            }

            const botaoPesquisa = document.querySelector('.botaopesquisa');
botaoPesquisa.addEventListener('click', function() {
  var resposta = document.getElementById("pesquisa").value;
  var elementosASeremSubstituidos = document.querySelector('#elementos-a-serem-substituidos');
  var elementosSubstitutos = document.querySelector('#elementos-substitutos');
  if (resposta === "profissoes") {
    elementosASeremSubstituidos.classList.add('fade-out');
    setTimeout(function() {
        elementosASeremSubstituidos.style.display = 'none';
        elementosSubstitutos.style.display = 'block';
    }, 500);
  } else {
    // outra ação, caso não seja "profissoes"
  }
});

            const menuDica = document.createElement('div');
menuDica.classList.add('config-menu');
menuDica.innerHTML = '<p>Configurações</p> <p id="textoconfig">Configurações</p> <p id="textoconfig">Configurações</p> <p id="textoconfig">Configurações</p> <p id="textoconfig">Configurações</p>';
menuDica.style.position = "absolute";
menuDica.style.top = "50%";
menuDica.style.left = "0";
menuDica.style.right = "0";
menuDica.style.bottom = "0";
menuDica.style.borderRadius = "75px";
menuDica.style.width = "500px";
menuDica.style.height = "600px";
menuDica.style.backgroundColor = "rgba(11, 0, 61, 1)";
menuDica.style.display = "flex";
menuDica.style.flexDirection = "column";
menuDica.style.justifyContent = "center";
menuDica.style.alignItems = "center";
menuDica.style.margin = "auto";
menuDica.style.transform = "translateY(-50%)";
menuDica.style.transition = "1s ease";
const fecharBotao = document.createElement('button');
fecharBotao.textContent = 'Fechar';
fecharBotao.classList.add('botaodica');
fecharBotao.onmouseover = () => { playSound(); };
fecharBotao.onmouseout = () => { stopSound(); };
fecharBotao.addEventListener('click', () => {
  menuDica.remove();
});
menuDica.appendChild(fecharBotao);
const menubotaodica = document.querySelector(".botaodica");
if (menubotaodica) {
  menubotaodica.addEventListener('click', () => {
    document.body.appendChild(menuDica);
  });
}