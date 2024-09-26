

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `
    Você sabia que o planeta abriga cerca de <span>${pessoasNoMundo} bilhões</span> de pessoas? Destas, aproximadamente <span>${pessoasConectadas} bilhões</span> estão ativas em redes sociais, dedicando em média <span>${horas} horas</span> e <span>${minutos} minutos</span> por dia conectadas. <br>
    Isso representa cerca de <span>${porcentagemConectada}%</span> da população global que utiliza essas plataformas sociais.
`;

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
