const url = 'https://github.com/nando244/trabalho-sobre-o-mundo-e-sobre-escola/blob/main/Json';

async function visualizarInformacoes() {
    try {
        const res = await fetch(url);
        const dados = await res.json();

        // Acesso a dados sobre comidas mais consumidas
        const comidasMundo = dados.comidas.mais_consumidas_mundo;
        const comidasEscola = dados.comidas.mais_consumidas_escola;

        // Criação do parágrafo com informações
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('caixa-grafico__texto');
        paragrafo.innerHTML = `Em nosso site, você encontrará uma rica variedade de comidas do mundo, como ${comidasMundo[0].nome}, 
        que refletem culturas e tradições diversas. 
        Além disso, explore opções populares na escola, como ${comidasEscola[0].nome}, que enriquecem lanches e refeições. 
        Aprecie a importância da alimentação saudável e a diversidade que cada prato traz. Entre e inspire-se a experimentar novas receitas e sabores.`;

        // Adiciona o parágrafo ao elemento com ID 'caixa-grafico'
        const caixa = document.getElementById('caixa-grafico');
        caixa.appendChild(paragrafo);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

visualizarInformacoes();
