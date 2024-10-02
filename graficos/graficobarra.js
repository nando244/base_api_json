const url ='https://raw.githubusercontent.com/vini-destruidor19/API-ex-vini/refs/heads/main/entrevista.json'

async function CriarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/vini-destruidor19/API-ex-vini/refs/heads/main/entrevista.json'
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}

CriarGraficoBarra()