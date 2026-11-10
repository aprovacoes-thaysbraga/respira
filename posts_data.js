const CLIENTE = {
  nome: "Respira",
  mes: "Outubro/Novembro 2026",
  usuario: "respira.vaipassar",
  bio: "Entre um relato e outro, um respiro. Um podcast sobre ser mãe, mulher e humana. Por @obstetramarcinha e @luisasader.psi",
  iniciais: "RP",
  /* Logo redonda, usada no avatar em vez das iniciais. Deixe vazio ("") para voltar às iniciais. */
  logo: "imagens/logo.png?v=2"
};

const POSTS = [
  { data:"2026-10-19", tema:"Identificação", tipo:"imagem", titulo:"O teste de gravidez feito numa barraca de praia", legenda:"A Luisa descobriu que estava grávida dentro de uma barraca de praia, com um teste comprado na farmácia mais próxima. Nada de cenário perfeito, nada de vídeo pronto pra guardar. Foi assim, no meio de um dia qualquer de verão, que começou a história que ela conta hoje como psicóloga perinatal. A gente sempre imagina um jeito especial de descobrir a gravidez, mas a vida raramente segue o roteiro que a gente planeja.\n\nEla nunca contou esse detalhe em nenhuma entrevista antes. Está no episódio 1. Link na bio.\n\n#RespiraVaiPassar #MaternidadeReal #TesteDeGravidez", slides:[
      {img:"imagens/p01-1.jpg"}
    ] },
  { data:"2026-10-20", tema:"Tema da semana", tipo:"imagem", titulo:"Tema do EP 31: a obstetra que não conseguia abrir o próprio WhatsApp", legenda:"A Ana é obstetra, sócia da Marcinha, e passou por quase tudo que ela acompanha no consultório. Teve um parto de cócoras na banheira que ela mesma recebeu. Passou meses sem dormir mais de três horas seguidas, teve uma depressão pós-parto que ninguém diagnosticou, e viveu duas perdas gestacionais. Nesta conversa ela fala de cada uma delas, do que ajudou e do que ainda faz diferença quando ela atende outras mulheres.\n\nAssista o episódio 31 completo, 21/10, às 20h, no YouTube e Spotify.\n\n#RespiraVaiPassar #PerdaGestacional #Puerpério #PartoNormal", slides:[
      {img:"imagens/p02-1.jpg"}
    ] },
  { data:"2026-10-22", tema:"Corte do episódio", tipo:"reel", titulo:"Corte 1 do Ep.31: depressão pós-parto sem diagnóstico e bebê que não dormia", legenda:"Oito meses sem dormir mais do que três horas seguidas.\n\nA Ana é obstetra e estudou gestação e parto a fundo. Sono de bebê ninguém tinha ensinado. Com a primeira filha, a madrugada era ninar, balançar, e a pequena só dormia no colo ou mamando. Hoje, olhando para trás, ela reconhece a depressão pós-parto que ninguém diagnosticou na época.\n\nSe você está nessa fase, o cansaço que você sente é real e merece ser dito em voz alta. Divida a noite com quem puder, peça ajuda cedo.\n\nQuem revezou a madrugada com você? Marca essa pessoa nos comentários.\n\n#DepressãoPósParto #Puerpério #SonoDoBebê #MaternidadeReal #RespiraVaiPassar", poster:"imagens/p03-capac.jpg", video:"videos/ep31-corte-depressao-sono.mp4" },
  { data:"2026-10-23", tema:"Saúde emocional", tipo:"carrossel", titulo:"A obstetra que achava que ia dar conta do sono", legenda:"A Ana é obstetra, dá plantão de madrugada e achou que cuidar de um bebê à noite seria fácil. Depois de um plantão ela chega em casa e dorme. Com a filha não funcionava assim. Foram oito meses sem dormir mais de três horas seguidas, uma vez sequer. Aos poucos veio a sensação de prisão, e junto com ela a impressão de estar ficando para trás na profissão. Ela diz hoje que teve uma depressão pós-parto que ninguém diagnosticou na época. No episódio 31 ela conta como aquilo foi mudando, e o que ajudou a se reencontrar. Se você ou alguém perto de você está sem dormir há meses, manda esse post.\n\n#RespiraVaiPassar #Puerpério #DepressãoPósParto #SaúdeMentalMaterna", slides:[
      {img:"imagens/p04-1.jpg"},
      {img:"imagens/p04-2.jpg"},
      {img:"imagens/p04-3.jpg"},
      {img:"imagens/p04-4.jpg"},
      {img:"imagens/p04-5.jpg"},
      {img:"imagens/p04-6.jpg"}
    ] },
  { data:"2026-10-24", tema:"Informação", tipo:"carrossel", titulo:"Não existe um exame que prova que você é fértil", legenda:"Não existe exame de fertilidade, gente. Isso é um dos primeiros pontos que a Marcinha desfaz no episódio sobre tentantes: o AMH mede reserva ovariana, não fertilidade, e pedir esse exame antes mesmo de começar a tentar engravidar costuma gerar mais ansiedade do que resposta. Um casal jovem e saudável tem até um ano de tentativas antes de precisar investigar qualquer coisa, e a chance de engravidar em cada mês gira entre 8% e 15%. O estresse também entra na conta, porque ele interfere diretamente nos hormônios que regulam a ovulação. Vale ouvir o episódio inteiro antes de marcar aquele exame.\n\nSalve para consultar depois.\n\n#RespiraVaiPassar #Tentantes #FertilidadeFeminina #SaúdeDaMulher", slides:[
      {img:"imagens/p05-1.jpg"},
      {img:"imagens/p05-2.jpg"},
      {img:"imagens/p05-3.jpg"},
      {img:"imagens/p05-4.jpg"},
      {img:"imagens/p05-5.jpg"}
    ] },
  { data:"2026-10-26", tema:"Corte do episódio", tipo:"reel", titulo:"Corte 2 do Ep.31: o truque do horário fixo para o WhatsApp", legenda:"Parada no carro, na porta da casa da enfermeira, ela chorou e disse: eu não consigo abrir meu WhatsApp.\n\nMensagem sem resposta foi juntando, a vergonha de responder tarde foi crescendo, e abrir o aplicativo virou pânico. Quem resolveu foi a Nívia, que limpou o que já não precisava de resposta e sugeriu um horário tranquilo do dia, com alarme, só para isso.\n\nÀs vezes o que ajuda é alguém olhar junto e dizer: calma, vamos por partes.\n\nSalva este vídeo para o dia em que a bola de neve vier, e manda para quem anda sufocada com o celular.\n\n#SaúdeMentalMaterna #Puerpério #MaternidadeReal #Sobrecarga #RespiraVaiPassar", poster:"imagens/p06-capac.jpg", video:"videos/ep31-corte-whatsapp.mp4" },
  { data:"2026-10-27", tema:"Tema da semana", tipo:"imagem", titulo:"Tema do EP 32: quem você era antes de virar mãe?", legenda:"A Luisa queria ser atriz e chegou a fazer teste para Chiquititas, com o pai encarando a fila por uma senha. A Marcinha estudava para o vestibular de medicina desde a quinta série e só foi curtir depois de passar.\n\nAmanhã as duas voltam para antes da Tereza, da Sofia e da Clara. Falam do que ficou para trás, do que ainda faz falta e do que a maternidade trouxe no lugar.\n\nAmanhã, 28/10, às 20h, episódio 32 no YouTube e Spotify.\n\n#RespiraVaiPassar #MaternidadeReal #IdentidadeMaterna", slides:[
      {img:"imagens/p07-1.jpg"}
    ] },
  { data:"2026-10-29", tema:"Corte do episódio", tipo:"reel", titulo:"Corte 3 do Ep.32: a perda de autonomia", legenda:"Antes, comprar pão era descer e ir até a padaria.\n\nCom um bebê pequeno, a ida vira uma conta: a fralda está trocada? Já mamou? A padaria vai estar cheia? Vai de carro e arrisca o choro na cadeirinha, ou vai a pé com o sling? Mesmo com a Sofia aos 6 anos, ainda tem chinelo, garrafinha e xixi antes de sair.\n\nA Luisa chama isso de luto, e diz que vive até hoje. Sentir falta de sair sem planejar nada não diminui o amor por ninguém. Dá para sentir as duas coisas.\n\nMarca alguém que entende essa logística sem precisar explicar.\n\n#MaternidadeReal #Puerpério #SaúdeMentalMaterna #IdentidadeMaterna #RespiraVaiPassar", poster:"imagens/p08-capa.jpg", video:"videos/ep32-corte-perda-de-autonomia.mp4" },
  { data:"2026-10-30", tema:"Identificação", tipo:"carrossel", titulo:"Antes, a lista de aniversário tinha 80, 100 pessoas", legenda:"A lista de aniversário da Luisa já teve 80, 100 pessoas. Hoje, além da família, são pouquíssimas. Quando uma colega chama para um café às nove de uma terça, ela ri: é o horário mais caótico da casa. A Marcinha ouviu um convite para um samba no domingo e devolveu com outra pergunta: e a Tereza, onde eu guardo?\n\nAs pessoas continuam importantes. O que mudou foi o tempo, e quem ainda não tem filho nem sempre consegue enxergar isso. No episódio 32 as duas contam do que mais sentem falta da vida de antes.\n\nManda para aquela amiga que ainda te chama para o café das nove.\n\n#RespiraVaiPassar #MaternidadeReal #IdentidadeMaterna #AmizadeDepoisDosFilhos", slides:[
      {img:"imagens/p09-1.jpg"},
      {img:"imagens/p09-2.jpg"},
      {img:"imagens/p09-3.jpg"},
      {img:"imagens/p09-4.jpg"},
      {img:"imagens/p09-5.jpg"}
    ] },
  { data:"2026-10-31", tema:"Respiro", tipo:"imagem", titulo:"Respiro: dá para deixar a louça para amanhã? A resposta é: dá.", legenda:"A pia cheia não é um teste de quanto você dá conta.\n\nTem dia que o corpo pede sofá, banho demorado ou só cinco minutos de silêncio antes do bebê acordar de novo. A louça espera. Amanhã ela continua lá, e você vai estar um pouco mais inteira para lidar com ela.\n\nManda para aquela amiga que anda se cobrando demais esta semana.\n\n#Puerpério #MaternidadeReal #SaúdeMentalMaterna #RespiraVaiPassar", slides:[
      {img:"imagens/p10-1.jpg"}
    ] },
  { data:"2026-11-02", tema:"Corte do episódio", tipo:"reel", titulo:"Corte 2 do Ep.32: até engravidar da Tereza, eu era uma adolescente", legenda:"Uma amiga com dois filhos perguntou o que a Marcinha fazia quando chegava da residência. Ela respondeu: leio, mexo na internet, escuto música. A amiga devolveu: você tem tempo demais.\n\nNa época ela se sentia sem tempo nenhum. Depois da Tereza, descobriu que procrastinava muito, e que a maternidade trouxe uma coragem nova: de se arriscar e de se importar menos com o que os outros pensam.\n\nPode ser que você se reconheça no antes. Ou no depois.\n\nCompartilha com uma amiga que virou mãe e mudou de ritmo.\n\n#MaternidadeReal #IdentidadeMaterna #VidaAntesDosFilhos #RespiraVaiPassar", poster:"imagens/p11-capa.jpg", video:"videos/ep32-corte-amadureci.mp4" },
  { data:"2026-11-03", tema:"Tema da semana", tipo:"imagem", titulo:"Tema do EP 33: luto perinatal, o tempo que a Julia ficou com a gente", legenda:"A Mari esperou a Julia por dois anos. No primeiro exame morfológico apareceu uma alteração, depois vieram outras, e a gestação inteira foi vivida sem saber quanto tempo elas teriam juntas.\n\nAmanhã ela conta essa história no Respira, com a Luisa, que acompanhou tudo de perto, e com a Marcinha. Fala do parto, da saudade, de quem esteve ao lado dela e do Gabriel, que está a caminho.\n\nAmanhã, 04/11, às 20h, episódio 33 no YouTube e Spotify.\n\n#RespiraVaiPassar #LutoPerinatal #MaternidadeReal", slides:[
      {img:"imagens/p12-1.jpg"}
    ] },
  { data:"2026-11-05", tema:"Corte do episódio", tipo:"reel", titulo:"Corte 6 do Ep.33: o médico que fica calado", legenda:"Médico que fica calado durante o exame parece que está dizendo que a sua vida acabou.\n\nNo exame do coração da Julia, a médica foi explicando cada coisa enquanto olhava. Para a Mari, que já vinha recebendo uma alteração atrás da outra, isso mudou tudo. Ela lembra de quando mostrou um exame para uma amiga que ainda estudava medicina: a amiga ficou séria, olhando, sem falar nada. A Mari pediu que ela nunca fizesse isso com um paciente.\n\nVocê pode perguntar. E pode pedir que te expliquem.\n\nCompartilha com alguém da saúde que atende gestantes.\n\n#PréNatal #CuidadoRespeitoso #MaternidadeReal #LutoPerinatal #RespiraVaiPassar", poster:"imagens/p13-capa.jpg", video:"videos/ep33-corte-medico-que-explica.mp4" },
  { data:"2026-11-06", tema:"Saúde emocional", tipo:"carrossel", titulo:"Quem segurou a mão dela", legenda:"Até quantas semanas? A Mari fazia essa pergunta ao obstetra em toda consulta, e ele não respondia. Ela saía indignada. Só no fim entendeu que ele, sem esconder nada, estava deixando que ela vivesse a gestação da Julia.\n\nNo parto, a Luisa chegou ao hospital antes de a ficha de internação ficar pronta. A amiga, grávida, segurou a mão dela no finalzinho. E ela e o Ricardo foram se revezando: em cada exame difícil, um foi ao chão e o outro segurou.\n\nA história inteira está no episódio 33.\n\nManda para alguém que foi rede de apoio para você.\n\n#RespiraVaiPassar #LutoPerinatal #RedeDeApoio #SaúdeMentalMaterna", slides:[
      {img:"imagens/p14-1.jpg"},
      {img:"imagens/p14-2.jpg"},
      {img:"imagens/p14-3.jpg"},
      {img:"imagens/p14-4.jpg"},
      {img:"imagens/p14-5b.jpg"}
    ] },
  { data:"2026-11-07", tema:"Identificação", tipo:"carrossel", titulo:"O dia em que a filha mais velha deixou de ser filha única", legenda:"A Luisa conta que, no dia em que descobriu a segunda gravidez, sentiu que estava perdendo a filha mais velha. Chorou por 40 minutos na hora de colocar a Sofia pra dormir, só de pensar que a relação exclusiva entre as duas ia mudar para sempre. Ela também fala sobre uma pergunta que incomoda muita mãe de segundo filho: dá pra amar os dois com a mesma intensidade? A resposta que ela chegou foi mais honesta do que romântica, e vale o episódio inteiro sobre a maternidade do segundo filho.\n\nVocê também já sentiu esse luto?\n\n#RespiraVaiPassar #SegundoFilho #MaternidadeReal #IdentificaçãoMaterna", slides:[
      {img:"imagens/p15-1c.jpg"},
      {img:"imagens/p15-2.jpg"},
      {img:"imagens/p15-3.jpg"},
      {img:"imagens/p15-4.jpg"},
      {img:"imagens/p15-5c.jpg"}
    ] },
  { data:"2026-11-09", tema:"Corte do episódio", tipo:"reel", titulo:"Corte 10 do Ep.33: é justo sentir saudade", legenda:"\"Esse é o primeiro bebê?\" Não. É o segundo.\n\nGrávida do Gabriel, a Mari conta que todo mundo faz essa pergunta. E ela responde assim, porque a Julia esteve aqui. Ela existiu.\n\nA Marcinha fala das frases que chegam querendo consolar, como \"agora ela está no céu\", quase sempre numa tentativa de acalmar o coração. Só que é justo sentir saudade, e é justo querer a filha aqui.\n\nSe você perdeu um bebê, a sua saudade tem lugar.\n\nSalva e manda para quem não sabe o que dizer a uma mãe enlutada.\n\n#LutoPerinatal #PerdaGestacional #SaúdeMentalMaterna #MaternidadeReal #RespiraVaiPassar", poster:"imagens/p16-capa.jpg", video:"videos/ep33-corte-justo-sentir-saudade.mp4" },
  { data:"2026-11-10", tema:"Tema da semana", tipo:"imagem", titulo:"Tema do EP 34 (Carol): ela só contou que estava grávida no último dia de prova", legenda:"Engravidou aos 19, no fim do cursinho. Descobriu em dezembro, tinha as provas de janeiro pela frente e decidiu não contar para ninguém. Só chamou os pais quando saiu da última prova. Amanhã a Carol conta essa história no Respira, e o que veio depois: a faculdade de medicina com um filho pequeno.\n\nAmanhã, episódio 34 da Carol no YouTube e Spotify.\n\n#RespiraVaiPassar #MaternidadeReal #GravidezNaJuventude", slides:[
      {img:"imagens/p18-1.jpg"}
    ] },
  { data:"2026-11-12", tema:"Corte do episódio", tipo:"reel", titulo:"Corte 12 do Ep.34 (Carol): contou aos pais no último dia de prova", legenda:"Engravidou aos 19, no fim do cursinho, e só contou no último dia da última prova.\n\nA Carol descobriu em dezembro e tinha as provas finais em janeiro. Decidiu não contar nem para si mesma: se ninguém sabe, não existe. Fez a segunda fase de três vestibulares como se nada tivesse mudado, e no dia 13 de janeiro, saindo da última prova em Campinas, chamou os pais.\n\nCada pessoa dá conta do jeito que consegue. Sem julgar.\n\nJá guardou uma notícia grande para depois? Conta aqui, a gente lê tudo.\n\n#GravidezNaJuventude #MaternidadeReal #HistóriasDeMãe #Vestibular #RespiraVaiPassar", poster:"imagens/p19-capa.jpg", video:"videos/ep34-corte-ultimo-dia-de-prova.mp4" },
  { data:"2026-11-13", tema:"Histórias reais", tipo:"carrossel", titulo:"Ele achava que a mãe morava no ônibus", legenda:"No terceiro ano da faculdade, a Carol deixou o Lucas com a mãe dela em Três Corações e ia vê-lo toda semana: de ônibus na sexta, voltando no domingo. Quando chegava, ele ficava no colo da babá e fingia que ela não estava lá. Hoje, adulto, ele entende o que ela precisava fazer pela vida dos dois. E foi justamente nessa época difícil que ela encontrou o homem com quem se casou. Como isso aconteceu está no episódio 34 da Carol.\n\nManda pra uma mãe que vive dividida entre dois lugares.\n\n#RespiraVaiPassar #MaternidadeReal #CulpaMaterna #Obstetra", slides:[
      {img:"imagens/p20-1.jpg"},
      {img:"imagens/p20-2.jpg"},
      {img:"imagens/p20-3.jpg"},
      {img:"imagens/p20-4.jpg"},
      {img:"imagens/p20-5.jpg"}
    ] },
  { data:"2026-11-14", tema:"Respiro", tipo:"imagem", titulo:"Respiro: em vez de “como o bebê está?”, talvez ela precise ouvir “e você, como está?”", legenda:"Depois que o bebê nasce, quase toda visita chega com a mesma pergunta. E ela responde: dorme mal, mama bem, ganhou peso.\n\nPouca gente pergunta como está a mulher que acabou de parir. Se ela dormiu, se comeu, se está conseguindo respirar no meio de tudo isso.\n\nDa próxima vez que visitar alguém no pós-parto, começa por ela.\n\nCompartilha com quem vai fazer uma visita essa semana.\n\n#PósParto #Puerpério #RedeDeApoio #SaúdeMentalMaterna #RespiraVaiPassar", slides:[
      {img:"imagens/p17-1.jpg?v=2"}
    ] },
  { data:"2026-11-16", tema:"Corte do episódio", tipo:"reel", titulo:"Corte 7 do Ep.34 (Carol): do intercâmbio à vontade de fazer medicina", legenda:"Foi nos Estados Unidos, dissecando um gato numa aula de biologia, que a Carol decidiu fazer medicina.\n\nEla voltou do intercâmbio com a cabeça diferente, e a cidade de origem ficou pequena. Comissão de formatura, rifa, festa. Foi aí que veio a frase: se eu ficar aqui só fazendo festa, eu não vou passar em medicina. No meio do terceiro ano, mudou de cidade e foi para o cursinho em Campinas, com as amigas.\n\nQuando foi que a sua cabeça mudou de direção? Compartilha esse corte com alguém que está num momento de decidir.\n\n#Medicina #Intercâmbio #HistóriasDeMãe #Escolhas #RespiraVaiPassar", poster:"imagens/p21-capa.jpg", video:"videos/ep34-corte-intercambio-medicina.mp4" },
  { data:"2026-11-17", tema:"Tema da semana", placeholder:true },
  { data:"2026-11-19", tema:"Corte do episódio", placeholder:true },
  { data:"2026-11-20", tema:"Carrossel do episódio", placeholder:true },
  { data:"2026-11-21", tema:"Relacionamentos", tipo:"imagem", titulo:"Claro que você pode chorar na frente dela", legenda:"Uma paciente da Marcinha ia viajar uma semana com o marido antes de voltar ao trabalho. A bebê tinha seis meses. Na despedida ela chorou, e depois disse que não podia ter chorado na frente da filha. A Marcinha discordou: pode, sim. O choro da mãe também é legítimo, e a filha também vai chorar um dia. No episódio 30 ela fala de como mostrar vulnerabilidade aproxima pais e filhos, e conta o que aconteceu quando chegou a vez dela de viajar sem a Tereza.\n\nManda pra quem vai viajar pela primeira vez sem o filho.\n\n#RespiraVaiPassar #MaternidadeReal #SaúdeEmocional", slides:[
      {img:"imagens/p22-1.jpg"}
    ] },
  { data:"2026-11-23", tema:"Corte do episódio", placeholder:true },
  { data:"2026-11-24", tema:"Tema da semana", placeholder:true },
  { data:"2026-11-26", tema:"Corte do episódio", placeholder:true },
  { data:"2026-11-27", tema:"Carrossel do episódio", placeholder:true },
  { data:"2026-11-28", tema:"Respiro", tipo:"imagem", titulo:"Respiro: um banho demorado sem ninguém chamando também é cuidado.", legenda:"Banho com a porta aberta, ouvido atento, xampu às pressas. Quem tem filho pequeno conhece bem.\n\nQuando alguém fica com o bebê e o banho dura um pouco mais, o corpo volta a ser seu por alguns minutos. Dá pra pedir esses minutos sem culpa.\n\nManda pra quem pode segurar o bebê enquanto ela toma esse banho.\n\n#Puerpério #MaternidadeReal #Autocuidado #RespiraVaiPassar", slides:[
      {img:"imagens/p23-1.jpg"}
    ] },
  { data:"2026-11-30", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-01", tema:"Tema da semana", placeholder:true },
  { data:"2026-12-03", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-04", tema:"Carrossel do episódio", placeholder:true },
  { data:"2026-12-05", tema:"Identificação", tipo:"imagem", titulo:"O parto acontece entre as orelhas, não entre as pernas", legenda:"A analgesia é a intervenção mais usada no trabalho de parto, e não tem nada de errado nisso. A Marcinha costuma repetir uma frase que resume bem o que ela vê todos os dias no consultório: o parto acontece entre as orelhas, não entre as pernas. A cabeça da mulher, o quanto ela se sente segura e acompanhada, pesa tanto quanto a parte física. Ela já teve uma assistência de 44 horas, a mais longa da carreira dela, e segue acreditando nisso.\n\nA assistência mais longa da carreira dela está nesse episódio. 44 horas. Episódio 5, link na bio.\n\n#RespiraVaiPassar #TrabalhoDeParto #PartoHumanizado", slides:[
      {img:"imagens/p24-1.jpg"}
    ] },
  { data:"2026-12-07", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-08", tema:"Tema da semana", placeholder:true },
  { data:"2026-12-10", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-11", tema:"Carrossel do episódio", placeholder:true },
  { data:"2026-12-12", tema:"Respiro", tipo:"imagem", titulo:"Respiro: dormiu mal de novo? hoje o dia pode ir mais devagar.", legenda:"Acordou três vezes, ou cinco, ou perdeu a conta. E o dia começou do mesmo jeito.\n\nHoje dá pra baixar a régua. Comida simples, roupa no cesto mais um dia, cochilo junto com o bebê se ele deixar. O que ficar pra amanhã, fica.\n\nSalva pra ler na próxima madrugada difícil.\n\n#SonoDoBebê #Puerpério #MaternidadeReal #RespiraVaiPassar", slides:[
      {img:"imagens/p25-1.jpg"}
    ] },
  { data:"2026-12-14", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-15", tema:"Tema da semana", placeholder:true },
  { data:"2026-12-17", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-18", tema:"Carrossel do episódio", placeholder:true },
  { data:"2026-12-19", tema:"Humor", tipo:"imagem", titulo:"Eu me tranco no banheiro pra fugir das minhas filhas", legenda:"Porta trancada, celular na mão, alguns minutos fora daquela realidade. A Luisa admitiu que faz isso desde que a Sofia era bebê e alguém batia na porta pedindo pra agilizar. Anos depois, continua. Ela sabe que um dia vai sentir falta de ouvir \"mamãe, mamãe, mamãe\". Hoje, às vezes, só quer cinco minutos de banheiro. Essa foi uma das confissões do episódio 30, um bate-papo mais curto entre a Luisa e a Marcinha sobre o que muita mãe pensa e não fala.\n\nTem mais confissão de mãe que ninguém admite no episódio 30. Link na bio.\n\n#RespiraVaiPassar #MaternidadeReal #HumorMaterno", slides:[
      {img:"imagens/p26-1.jpg"}
    ] },
  { data:"2026-12-21", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-22", tema:"Tema da semana", placeholder:true },
  { data:"2026-12-24", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-25", tema:"Carrossel do episódio", placeholder:true },
  { data:"2026-12-26", tema:"Respiro", tipo:"imagem", titulo:"Respiro: visita demais no fim de ano? dá pra dizer hoje não.", legenda:"Fim de ano junta família, visita, bebê passando de colo em colo e uma agenda que quase nunca é a sua.\n\nDizer que hoje não dá também é cuidar do bebê e de você. Pode ser outro dia, pode ser uma visita mais curta, pode ser por foto.\n\nCompartilha com quem vai receber visita nesses dias.\n\n#FimDeAno #Puerpério #RedeDeApoio #MaternidadeReal #RespiraVaiPassar", slides:[
      {img:"imagens/p27-1.jpg"}
    ] },
  { data:"2026-12-28", tema:"Corte do episódio", placeholder:true },
  { data:"2026-12-29", tema:"Tema da semana", placeholder:true },
  { data:"2026-12-31", tema:"Corte do episódio", placeholder:true },
  { data:"2027-01-01", tema:"Carrossel do episódio", placeholder:true },
  { data:"2027-01-02", tema:"Humor", tipo:"imagem", titulo:"Quem pode tocar na sua barriga de grávida", legenda:"Tem gente que acha que barriga de grávida é propriedade pública. No episódio sobre gestação, a Marcinha e a Luisa falam sobre as polêmicas que toda mulher grávida enfrenta: quem pode tocar na barriga, o que fazer com o ranço do parceiro sumindo, se dá pra conversar com o bebê e como fica a vida sexual durante a gravidez. Respira fundo e lembra: seu corpo, suas regras.\n\nA resposta pra essa pergunta rende risada garantida. Episódio 3, link na bio.\n\n#RespiraVaiPassar #Gestação #MaternidadeReal", slides:[
      {img:"imagens/p28-1.jpg"}
    ] },
  { data:"2027-01-04", tema:"Corte do episódio", placeholder:true },
  { data:"2027-01-05", tema:"Tema da semana", placeholder:true },
  { data:"2027-01-07", tema:"Corte do episódio", placeholder:true },
  { data:"2027-01-08", tema:"Carrossel do episódio", placeholder:true },
  { data:"2027-01-09", tema:"Respiro", tipo:"imagem", titulo:"Respiro: começar o ano sem meta nenhuma também conta.", legenda:"Janeiro chega cheio de lista: voltar a treinar, organizar a casa, ler mais, dar conta de tudo.\n\nCom um bebê em casa, chegar inteira no fim do dia já é muita coisa. A lista pode esperar o tempo que for preciso.\n\nManda pra uma mãe que começou o ano se cobrando.\n\n#MaternidadeReal #Puerpério #SaúdeMentalMaterna #RespiraVaiPassar", slides:[
      {img:"imagens/p29-1.jpg"}
    ] },
  { data:"2027-01-11", tema:"Corte do episódio", placeholder:true },
  { data:"2027-01-12", tema:"Tema da semana", placeholder:true },
];
