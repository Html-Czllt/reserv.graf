import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuariosPorRede() {
    // Dados fictícios dos usuários na escola, incluindo YouTube
    const dadosEscola = {
        "Facebook": 100,  // Menos usuários
        "Instagram": 400,
        "Twitter": 250,
        "TikTok": 800,
        "WhatsApp": 1000, 
        "YouTube": 500
    };


    // Ordenar os dados pela quantidade de usuários em ordem decrescente
    const ordenados = Object.entries(dadosEscola).sort((a, b) => b[1] - a[1]);
    const nomeDasRedes = ordenados.map(item => item[0]);
    const quantidadeDeUsuarios = ordenados.map(item => item[1]);

    
    const textoExplicativo = document.createElement('p');
    textoExplicativo.classList.add('graficos-container__texto');
    textoExplicativo.innerHTML = `
        <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">Você sabia que a nossa escola conta com cerca de 3.000 alunos?</span>
        <br><br>
        Aproximadamente <span class="highlight">2.400 estudantes</span> estão ativos em alguma rede social, o que representa cerca de <span class="highlight">80%</span> do total de alunos. Em média, cada aluno passa em torno de <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">4 horas</span> por dia nas redes sociais. Isso mostra que uma grande parte dos nossos alunos está bastante conectada.
        <br><br>
        Abaixo, você pode ver um gráfico que destaca as plataformas sociais mais populares entre os nossos estudantes:
    `;
    
    
    
    
    
    


    const container = document.getElementById('graficos-container');
    container.appendChild(textoExplicativo);

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--highlight-color') 
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários entre alunos',
            font: {
                color: getCSS('--highlight-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--highlight-color') // Espaço removido
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de usuários',
                font: {
                    color: getCSS('--highlight-color') // Espaço removido
                }
            }
        }
    };
    

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    container.appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadeUsuariosPorRede();
