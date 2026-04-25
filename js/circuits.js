// ============================================================
// circuits.js — Vení Nomas PWA
// Orden geográfico: Centro → Norte
// ============================================================

const CIRCUITS = [
  // ─── CIRCUITO 1 — ROSARIO ESENCIAL (Centro) ──────────────
  {
    id: 1,
    es: { nombre: "Rosario Esencial" },
    en: { nombre: "Essential Rosario" },
    pt: { nombre: "Rosário Essencial" },
    origen:    "-32.9477,-60.6303",
    destino:   "-32.93873,-60.63681",
    waypoints: "-32.9489551,-60.6266192",
    paradas: [
      {
        es: { titulo: "Punto 1.1: El Mástil Mayor y la Proa del Monumento", guion: `Bienvenidos al punto cero de nuestra identidad. Párense aquí, respiren el aire del Paraná y miren hacia arriba. Estamos frente a una mole de mármol travertino extraído de las canteras de San Luis, una piedra que, si la tocan, se siente rústica, fuerte, como la gente que forjó esta ciudad. Rosario no fue fundada por un decreto real ni por conquistadores; Rosario nació de un oratorio y creció gracias a este río.\n\nEsta estructura que ven no es un edificio, es una nave simbólica. Los arquitectos Ángel Guido y Alejandro Bustillo la diseñaron para que pareciera un gran barco que navega hacia el futuro. La torre de 70 metros es la proa. Si miran los laterales, verán las esculturas monumentales de 'La Pampa' y 'Los Andes'. Rosario es el punto donde la llanura infinita se encuentra con el agua para alimentar al mundo.\n\nAquí mismo, en 1812, Manuel Belgrano desobedeció las órdenes de Buenos Aires. El Triunvirato le decía que no era momento de banderas, pero él, viendo el coraje de sus hombres en las baterías 'Libertad' e 'Independencia', decidió que necesitábamos un color propio. Cuando el sol pega en este mármol al amanecer, el blanco brilla tanto que parece que la bandera misma está grabada en la piedra. Este es el altar donde juramos ser quienes somos.` },
        en: { titulo: "Stop 1.1: The Main Mast and the Prow of the Monument", guion: `Welcome to the zero point of our identity. Stop here, breathe the air of the Paraná and look up. We are facing a mass of travertine marble extracted from the quarries of San Luis, a stone that, if you touch it, feels rustic, strong, like the people who forged this city. Rosario was not founded by a royal decree nor by conquerors; Rosario was born from an oratory and grew thanks to this river.\n\nThis structure you see is not a building, it is a symbolic ship. Architects Ángel Guido and Alejandro Bustillo designed it to look like a great ship sailing toward the future. The 70-meter tower is the prow.\n\nRight here, in 1812, Manuel Belgrano disobeyed the orders of Buenos Aires. When the sun hits this marble at dawn, the white shines so brightly that it seems the flag itself is engraved in the stone.` },
        pt: { titulo: "Ponto 1.1: O Mastro Maior e a Proa do Monumento", guion: `Bem-vindos ao ponto zero da nossa identidade. Parem aqui, respirem o ar do Paraná e olhem para cima. Estamos diante de uma mole de mármore travertino extraído das canteiras de San Luis, uma pedra rústica e forte como o povo que forjou esta cidade.\n\nEsta estrutura não é um edifício, é uma nave simbólica. Os arquitetos Ángel Guido e Alejandro Bustillo a desenharam para parecer um grande barco navegando rumo ao futuro.\n\nAqui mesmo, em 1812, Manuel Belgrano desobedeceu as ordens de Buenos Aires. Quando o sol bate neste mármore ao amanhecer, o branco brilha tanto que parece que a bandeira está gravada na própria pedra.` },
        lat: -32.9477, lng: -60.6303
      },
      {
        es: { titulo: "Punto 1.2: La Cripta de Manuel Belgrano", guion: `Bajemos ahora unos peldaños. Notarán que la temperatura baja y el sonido de la ciudad se apaga. Estamos en la Cripta. Es un espacio de silencio absoluto. Aquí, debajo de la torre, descansa simbólicamente la figura de Manuel Belgrano.\n\nQuiero que miren ese busto de mármol. Belgrano no está mirando hacia la ciudad, está mirando hacia el río, hacia el horizonte. Es un recordatorio de su humildad: murió pobre, pagándole a su médico con su reloj de bolsillo, después de haber donado sus premios de batallas para construir escuelas.\n\nNo es un mausoleo de muerte, es un santuario de valores. Cada 20 de junio, miles de personas pasan por aquí en un silencio que estremece. Es el corazón místico de Rosario.` },
        en: { titulo: "Stop 1.2: The Crypt of Manuel Belgrano", guion: `Let us go down a few steps. You will notice the temperature drops and the sound of the city fades. We are in the Crypt. It is a space of absolute silence.\n\nBelgrano is not looking toward the city, he is looking toward the river. He died poor, paying his doctor with his pocket watch, after having donated his battle prizes to build schools.\n\nIt is not a mausoleum of death, it is a sanctuary of values.` },
        pt: { titulo: "Ponto 1.2: A Cripta de Manuel Belgrano", guion: `Desçamos alguns degraus. A temperatura cai e o som da cidade se apaga. Estamos na Cripta, um espaço de silêncio absoluto.\n\nBelgrano está olhando para o rio, para o horizonte. Morreu pobre, pagando seu médico com seu relógio de bolso.\n\nNão é um mausoléu de morte, é um santuário de valores.` },
        lat: -32.9480, lng: -60.6300
      },
      {
        es: { titulo: "Punto 1.3: El Propileo Triunfal y la Llama Votiva", guion: `Caminen conmigo hacia esa estructura de columnas imponentes. Este es el Propileo. Si se paran justo en el centro, bajo el techo, el viento que viene del Paraná se encajona y genera un zumbido constante. Los rosarinos decimos que es la voz del río.\n\nEn el centro arde la Llama Votiva. Esta llama no se apagó nunca desde su inauguración en 1957. Custodia los restos de los soldados desconocidos que murieron en las guerras de la independencia. Es el fuego sagrado de la gratitud.\n\nMiren hacia las cuatro hornacinas en las esquinas; representan las etapas de nuestra historia: América Indígena, La Conquista, La Independencia y La Organización Nacional.` },
        en: { titulo: "Stop 1.3: The Triumphal Propylaea and the Votive Flame", guion: `Walk with me toward that structure of imposing columns. This is the Propylaea. If you stand right in the center, the wind from the Paraná generates a constant hum. We Rosarians say it is the voice of the river.\n\nIn the center burns the Votive Flame, never extinguished since 1957. It guards the remains of the unknown soldiers who died in the wars of independence.\n\nLook at the four niches: Indigenous America, The Conquest, Independence and National Organization.` },
        pt: { titulo: "Ponto 1.3: O Propileu Triunfal e a Chama Votiva", guion: `Caminhem em direção a essa estrutura de colunas imponentes. Este é o Propileu. Se ficarem bem no centro, o vento do Paraná gera um zumbido constante.\n\nNo centro arde a Chama Votiva, nunca apagada desde 1957.\n\nOlhem para as quatro hornacinas: América Indígena, A Conquista, A Independência e A Organização Nacional.` },
        lat: -32.9485, lng: -60.6295
      },
      {
        es: { titulo: "Punto 1.4: Pasaje Juramento y las Esculturas de Lola Mora", guion: `Salgamos del cemento y el mármol rústico para entrar al agua y a la delicadeza. Estamos en el Pasaje Juramento, inaugurado recién en 1999 para unir la ciudad con el río.\n\nSon obra de Lola Mora, una mujer que desafió a la sociedad de 1900. Usaba pantalones, fumaba y esculpía desnudos. Sus estatuas fueron exiliadas a depósitos mugrientos durante casi un siglo.\n\nMiren la suavidad de las figuras: La Victoria, La Libertad, Belgrano. Lola lograba que el mármol pareciera seda mojada. Este pasaje es un acto de justicia histórica para la artista más grande que tuvo este suelo.` },
        en: { titulo: "Stop 1.4: Pasaje Juramento and the Sculptures of Lola Mora", guion: `Let us leave the cement and rustic marble to enter the water and delicacy. We are at Pasaje Juramento, inaugurated in 1999.\n\nThey are the work of Lola Mora, a woman who defied the society of 1900. Her statues were exiled to dirty warehouses for almost a century.\n\nLola made marble look like wet silk. This passage is an act of historical justice.` },
        pt: { titulo: "Ponto 1.4: Passagem Juramento e as Esculturas de Lola Mora", guion: `Saímos do cimento para entrar na água e na delicadeza. Estamos na Passagem Juramento, inaugurada em 1999.\n\nSão obra de Lola Mora, uma mulher que desafiou a sociedade de 1900. Suas estátuas foram exiladas em depósitos sujos por quase um século.\n\nLola conseguia que o mármore parecesse seda molhada.` },
        lat: -32.9489, lng: -60.6266
      },
      {
        es: { titulo: "Punto 1.5: Plaza 25 de Mayo (Palacio de los Leones y Catedral)", guion: `Estamos en el Punto Cero. Aquí nació la Villa del Rosario. A mi derecha, el Palacio de los Leones, nuestra municipalidad. ¿Ven esos dos leones de mármol en la escalera? Son copias de los que custodian la tumba del Papa Clemente XIII en el Vaticano.\n\nA mi izquierda, la Basílica Catedral de Nuestra Señora del Rosario. Rosario no tiene un fundador hombre, tiene una patrona.\n\nLas Madres de Plaza de Mayo marchan aquí cada jueves, recordándonos que Rosario es una ciudad de memoria.` },
        en: { titulo: "Stop 1.5: Plaza 25 de Mayo (Palace of Lions and Cathedral)", guion: `We are at Point Zero. This is where the Villa del Rosario was born. To my right, the Palace of Lions, our city hall.\n\nTo my left, the Cathedral Basilica of Our Lady of the Rosary. Rosario does not have a male founder, it has a patron saint.\n\nThe Mothers of Plaza de Mayo march here every Thursday.` },
        pt: { titulo: "Ponto 1.5: Plaza 25 de Mayo (Palácio dos Leões e Catedral)", guion: `Estamos no Ponto Zero. Aqui nasceu a Villa del Rosario. À minha direita, o Palácio dos Leões.\n\nÀ minha esquerda, a Basílica Catedral de Nossa Senhora do Rosário. Rosário não tem um fundador homem, tem uma padroeira.\n\nAs Mães da Praça de Maio marcham aqui toda quinta-feira.` },
        lat: -32.9390, lng: -60.6368
      },
      {
        es: { titulo: "Punto 1.6: Palacio de Correos", guion: `Levanten la vista hacia esa cúpula imponente. Estamos frente al Palacio de Correos, una joya del academicismo francés. Se construyó en una época donde Rosario competía con Buenos Aires por ser la capital del país.\n\nEn ese entonces, las cartas eran el único vínculo con el mundo. Este edificio gritaba al mundo: Rosario es rica, es culta y es importante.` },
        en: { titulo: "Stop 1.6: The Post Office Palace", guion: `Raise your eyes to that imposing dome. We are in front of the Post Office Palace, a jewel of French academicism.\n\nAt that time, letters were the only link with the world. This building shouted: Rosario is rich, cultured and important.` },
        pt: { titulo: "Ponto 1.6: Palácio dos Correios", guion: `Levantem os olhos para aquela cúpula imponente. Estamos diante do Palácio dos Correios, uma joia do academicismo francês.\n\nNaquela época, as cartas eram o único vínculo com o mundo. Este edifício gritava: Rosário é rica, é culta e é importante.` },
        lat: -32.9388, lng: -60.6358
      },
      {
        es: { titulo: "Punto 1.7: Bajada Sargento Cabral", guion: `Pisen fuerte estos adoquines. Estamos en la Bajada Sargento Cabral. Por aquí subía la riqueza y bajaba el mundo. Imaginen el ruido de los carros cargados de bolsas de trigo, el olor a humedad del puerto y los gritos en diez idiomas distintos.\n\nLos edificios que nos rodean eran agencias marítimas y oficinas de exportación inglesas y francesas. Es una calle que todavía conserva el alma del siglo XIX.` },
        en: { titulo: "Stop 1.7: Bajada Sargento Cabral", guion: `Step firmly on these cobblestones. We are at Bajada Sargento Cabral. This is where wealth came up and the world came down.\n\nThe buildings around us were maritime agencies and export offices. This street still preserves the soul of the 19th century.` },
        pt: { titulo: "Ponto 1.7: Bajada Sargento Cabral", guion: `Pisem firme nestes paralelepípedos. Estamos na Bajada Sargento Cabral. Por aqui subia a riqueza e descia o mundo.\n\nOs edifícios ao nosso redor eram agências marítimas e escritórios de exportação.` },
        lat: -32.9392, lng: -60.6375
      },
      {
        es: { titulo: "Punto 1.8: Parque España (Escalinatas y Túneles)", guion: `Llegamos al final de este primer recorrido. El Parque España. Miren este despliegue de ladrillo visto diseñado por el catalán Oriol Bohigas. Son 50 metros de ancho de escalinatas que abrazan la barranca.\n\nPero el secreto está debajo. Bajo sus pies hay túneles ferroviarios del siglo XIX que conectaban el puerto con el interior. Rosario es una ciudad de capas. Lo que hoy es un centro cultural moderno, antes era un depósito de granos. Suban los escalones, siéntense a ver los barcos de ultramar pasar. Verán que Rosario no termina en la costa; Rosario sigue navegando el río hacia el océano.` },
        en: { titulo: "Stop 1.8: Parque España (Staircases and Tunnels)", guion: `We have reached the end of this first tour. Parque España. Look at this display of exposed brick by the Catalan Oriol Bohigas.\n\nUnder your feet there are 19th century railway tunnels. Rosario is a city of layers. Climb the steps, sit down and watch the ocean-going ships pass by.` },
        pt: { titulo: "Ponto 1.8: Parque España (Escadarias e Túneis)", guion: `Chegamos ao final deste primeiro roteiro. O Parque España, com escadarias de 50 metros de largura.\n\nSob seus pés há túneis ferroviários do século XIX. Rosário é uma cidade de camadas.` },
        lat: -32.9387, lng: -60.6368
      }
    ]
  },

  // ─── CIRCUITO 2 — ROSARIO CULTURAL (Centro) ──────────────
  {
    id: 2,
    es: { nombre: "Rosario Cultural" },
    en: { nombre: "Cultural Rosario" },
    pt: { nombre: "Rosário Cultural" },
    origen:    "-32.9502,-60.6375",
    destino:   "-32.9461,-60.6322",
    waypoints: "-32.9465,-60.6328",
    paradas: [
      {
        es: { titulo: "Punto 2.1: Teatro El Círculo", guion: `Párense un segundo y miren esta mole de estilo italiano. Estamos frente al Teatro El Círculo, inaugurado en 1904 como Teatro de la Ópera. Rosario en esa época era una potencia mundial; el puerto desbordaba de trigo y la plata sobraba.\n\n¿Saben quién vino a cantar acá? El mismísimo Enrico Caruso, el mejor tenor de la historia. El tipo se paró ahí adentro, tiró una nota y dijo: en este lugar mi voz suena mejor que en el Metropolitan de Nueva York. Pero el secreto más grande no está en el escenario, está abajo: las Catacumbas.` },
        en: { titulo: "Stop 2.1: Teatro El Círculo", guion: `Stop for a second and look at this Italian-style mass. We are in front of Teatro El Círculo, inaugurated in 1904 as the Opera Theater.\n\nEnrico Caruso himself came to sing here. He said: In this place my voice sounds better than at the Metropolitan in New York. But the greatest secret is below: the Catacombs.` },
        pt: { titulo: "Ponto 2.1: Teatro El Círculo", guion: `Parem um segundo e olhem esta mole de estilo italiano. Estamos diante do Teatro El Círculo, inaugurado em 1904.\n\nO próprio Enrico Caruso veio cantar aqui. Disse: Neste lugar minha voz soa melhor do que no Metropolitan de Nova York.` },
        lat: -32.9502, lng: -60.6375
      },
      {
        es: { titulo: "Punto 2.2: Plaza 25 de Mayo y Palacio de los Leones", guion: `Caminemos tres cuadras hacia el río. Llegamos al Punto Cero. Acá nació la Villa del Rosario. A mi derecha, el Palacio de los Leones, nuestra municipalidad desde 1898.\n\nAl lado, la Catedral Basílica. Acá las Madres de Plaza de Mayo marchan cada jueves desde hace décadas. Esta plaza es el resumen de Rosario: la fe, el poder político y la lucha incansable por los Derechos Humanos.` },
        en: { titulo: "Stop 2.2: Plaza 25 de Mayo and Palace of Lions", guion: `Let us walk three blocks toward the river. We arrive at Point Zero. To my right, the Palace of Lions, our city hall since 1898.\n\nThe Mothers of Plaza de Mayo march here every Thursday. This square is the summary of Rosario: faith, political power and the tireless struggle for Human Rights.` },
        pt: { titulo: "Ponto 2.2: Plaza 25 de Mayo e Palácio dos Leões", guion: `Caminhemos três quarteirões em direção ao rio. Chegamos ao Ponto Zero. À minha direita, o Palácio dos Leões, nossa prefeitura desde 1898.\n\nAs Mães da Praça de Maio marcham aqui toda quinta-feira.` },
        lat: -32.9465, lng: -60.6328
      },
      {
        es: { titulo: "Punto 2.3: Museo de la Memoria", guion: `Miren esta esquina de Córdoba y Moreno. Este edificio señorial tiene una historia oscura que Rosario decidió iluminar. Durante la dictadura militar, acá funcionaba la sede del II Cuerpo de Ejército. Pero Rosario es rebelde por naturaleza. En una decisión política valiente, se transformó este sitio en el Museo de la Memoria.\n\nNo es un museo de objetos muertos; es un espacio de reflexión. Rosario decidió que la mejor forma de honrar a sus hijos es educando.` },
        en: { titulo: "Stop 2.3: Museum of Memory", guion: `Look at this corner of Córdoba and Moreno. During the military dictatorship, the headquarters of the II Army Corps operated here. In a brave political decision, this site was transformed into the Museum of Memory.\n\nIt is not a museum of dead objects; it is a space for reflection.` },
        pt: { titulo: "Ponto 2.3: Museu da Memória", guion: `Olhem esta esquina de Córdoba e Moreno. Durante a ditadura militar, aqui funcionava a sede do II Corpo do Exército. Numa decisão corajosa, este local foi transformado no Museu da Memória.` },
        lat: -32.9468, lng: -60.6325
      },
      {
        es: { titulo: "Punto 2.4: Paseo del Siglo y Bolsa de Comercio", guion: `Para terminar, caminemos por calle Córdoba, el Paseo del Siglo. Miren hacia arriba, no miren las vidrieras. Vean esos palacetes, los detalles en las cúpulas, las herrerías traídas de Francia.\n\nLlegamos a la Bolsa de Comercio. En este edificio se ponía el precio del cereal que comía el mundo entero. Rosario era la Chicago Argentina. Rosario es una mezcla rara: tiene la elegancia de París, el empuje de Chicago y la calidez de un barrio de Santa Fe.` },
        en: { titulo: "Stop 2.4: Paseo del Siglo and Stock Exchange", guion: `To finish, let us walk along Córdoba Street, the Paseo del Siglo. Look up, do not look at the shop windows.\n\nWe arrive at the Stock Exchange. In this building, the price of the grain that fed the entire world was set. Rosario was the Argentine Chicago.` },
        pt: { titulo: "Ponto 2.4: Passeio do Século e Bolsa de Comércio", guion: `Para terminar, caminhemos pela rua Córdoba, o Passeio do Século. Olhem para cima.\n\nChegamos à Bolsa de Comércio. Neste edifício se fixava o preço do cereal que alimentava o mundo. Rosário era a Chicago Argentina.` },
        lat: -32.9461, lng: -60.6322
      }
    ]
  },

  // ─── CIRCUITO 3 — ARTE URBANO (Centro) ───────────────────
  {
    id: 3,
    es: { nombre: "Arte Urbano" },
    en: { nombre: "Urban Art" },
    pt: { nombre: "Arte Urbana" },
    origen:    "-32.9463,-60.6391",
    destino:   "-32.9431,-60.6288",
    waypoints: "-32.9398,-60.6276",
    paradas: [
      {
        es: { titulo: "Punto 3.1: Pasaje Pan", guion: `Bienvenidos al rincón más secreto y mágico de Rosario. Entramos al Pasaje Pan, inaugurado en 1899. En la época donde solo existían carretas, esto era un centro comercial de lujo con las primeras luces eléctricas.\n\nHoy es el refugio de la bohemia rosarina. Escuchen el crujido de la pinotea bajo sus pies; miren las claraboyas. Acá no hay autos, solo el sonido de los violines que se fabrican en los talleres de luthiers. Los murales que ven no son grafittis, son historias.` },
        en: { titulo: "Stop 3.1: Pasaje Pan", guion: `Welcome to the most secret and magical corner of Rosario. We enter Pasaje Pan, inaugurated in 1899.\n\nToday it is the refuge of Rosarian bohemia. Listen to the creak of the pine floor. There are no cars here, only the sound of violins made in the luthier workshops.` },
        pt: { titulo: "Ponto 3.1: Passagem Pan", guion: `Bem-vindos ao canto mais secreto e mágico de Rosário. Entramos na Passagem Pan, inaugurada em 1899.\n\nHoje é o refúgio da boemia rosarina. Não há carros aqui, apenas o som de violinos feitos nas oficinas de luthiers.` },
        lat: -32.9463, lng: -60.6391
      },
      {
        es: { titulo: "Punto 3.2: Murales de Calle Córdoba", guion: `Salimos del túnel del tiempo y nos metemos en el caos del centro. Rosario es un museo a cielo abierto, pero tenés que saber mirar para arriba.\n\nEl muralismo es parte de nuestro ADN, desde el famoso mural del Che Guevara (que nació acá en 1928, en la calle Entre Ríos) hasta las intervenciones modernas. Cada mural es un grito, una protesta, un homenaje.` },
        en: { titulo: "Stop 3.2: Murals of Córdoba Street", guion: `We leave the time tunnel and dive into the chaos of the center. Rosario is an open-air museum, but you have to know to look up.\n\nMuralism is part of our DNA, from the famous mural of Che Guevara to the modern interventions that give life to the grey facades.` },
        pt: { titulo: "Ponto 3.2: Murais da Rua Córdoba", guion: `Saímos do túnel do tempo e nos metemos no caos do centro. Rosário é um museu a céu aberto.\n\nO muralismo faz parte do nosso DNA, desde o famoso mural do Che Guevara (que nasceu aqui em 1928).` },
        lat: -32.9450, lng: -60.6340
      },
      {
        es: { titulo: "Punto 3.3: Centro de Expresiones Contemporáneas (CEC)", guion: `Caminemos hacia el río otra vez. ¿Ven esos galpones de chapa y madera? Son los viejos depósitos portuarios de principios de 1900. En los años 90, Rosario tomó una decisión: en lugar de demolerlos para hacer torres de lujo, decidimos abrirlos a la gente.\n\nEl CEC es un faro de la cultura joven. Aquí no hay reglas, solo experimentación.` },
        en: { titulo: "Stop 3.3: Center for Contemporary Expressions (CEC)", guion: `Let us walk toward the river again. Do you see those tin and wood warehouses? They are the old port warehouses from the early 1900s. Instead of demolishing them, we opened them to the people.\n\nThe CEC is a beacon of youth culture. There are no rules here, only experimentation.` },
        pt: { titulo: "Ponto 3.3: Centro de Expressões Contemporâneas (CEC)", guion: `Caminhemos em direção ao rio novamente. Veem aqueles galpões? São os velhos depósitos portuários do início de 1900. Em vez de demoli-los, decidimos abri-los ao povo.\n\nO CEC é um farol da cultura jovem.` },
        lat: -32.9415, lng: -60.6300
      },
      {
        es: { titulo: "Punto 3.4: Mercado de Frutos Culturales (Galpón 17)", guion: `Este galpón, el número 17, era un mercado de frutas y verduras que llegaban en tren desde el interior. Hoy es el Mercado de Frutos Culturales. Miren los puestos: no son negocios, son talleres de artistas, de diseñadores de ropa, de joyeros.\n\nSi quieren llevarse un souvenir que no sea la típica remera, acá lo van a encontrar. Es la economía creativa en acción.` },
        en: { titulo: "Stop 3.4: Cultural Fruit Market (Warehouse 17)", guion: `This warehouse, number 17, was a fruit and vegetable market. Today it is the Cultural Fruit Market. Look at the stalls: they are workshops of artists, clothing designers and jewelers.\n\nIf you want to take home a unique souvenir, you will find it here.` },
        pt: { titulo: "Ponto 3.4: Mercado de Frutos Culturais (Galpão 17)", guion: `Este galpão, o número 17, era um mercado de frutas e verduras. Hoje é o Mercado de Frutos Culturais com ateliês de artistas e designers.\n\nSe querem levar um souvenir diferente, vão encontrá-lo aqui.` },
        lat: -32.9431, lng: -60.6288
      }
    ]
  },

  // ─── CIRCUITO 4 — PARQUE INDEPENDENCIA (Centro-Oeste) ────
  {
    id: 4,
    es: { nombre: "Parque Independencia" },
    en: { nombre: "Independence Park" },
    pt: { nombre: "Parque Independência" },
    origen:    "-32.9572,-60.6585",
    destino:   "-32.9650,-60.6635",
    waypoints: "-32.9610,-60.6610",
    paradas: [
      {
        es: { titulo: "Punto 4.1: El Calendario de Flores e Historia del Parque", guion: `Párense un segundo acá, en la esquina de las dos avenidas más lindas de la ciudad: Pellegrini y Oroño. Miren este Calendario de Flores. Todos los días, desde hace décadas, los jardineros municipales cambian los números y las letras con flores vivas.\n\nEl Parque Independencia fue inaugurado el 1 de enero de 1902. El paisajista francés Carlos Thays lo diseñó con cuatro sectores: el francés, el británico, el español y el criollo. Caminar por acá es entender que Rosario siempre quiso ser la capital cultural de la Argentina.` },
        en: { titulo: "Stop 4.1: The Flower Calendar and Park History", guion: `Stop for a second here, at the corner of Pellegrini and Oroño. Look at this Flower Calendar. Every day, for decades, municipal gardeners change the numbers with live flowers.\n\nParque Independencia was inaugurated on January 1st, 1902. French landscape architect Carlos Thays designed it with four sectors: French, British, Spanish and Creole.` },
        pt: { titulo: "Ponto 4.1: O Calendário de Flores e História do Parque", guion: `Parem um segundo aqui, na esquina de Pellegrini e Oroño. Olhem este Calendário de Flores. Todo dia, há décadas, os jardineiros trocam os números com flores vivas.\n\nO Parque Independência foi inaugurado em 1º de janeiro de 1902. O paisagista francês Carlos Thays o projetou com quatro setores.` },
        lat: -32.9572, lng: -60.6585
      },
      {
        es: { titulo: "Punto 4.2: El Laguito y las Aguas Danzantes", guion: `Caminen conmigo hacia el agua. Este espejo que ven, el famoso Laguito, tiene un secreto industrial. En 1900, Rosario necesitaba tierra para elevar los terraplenes del ferrocarril. Entonces dijeron: hagamos un pozo gigante y convirtamos el hueco en un lago. Eso es Rosario: convertir una necesidad de trabajo en una belleza para la gente.\n\nEl sistema de Aguas Danzantes es una proeza de ingeniería local: música, luces y chorros de agua sincronizados que bailan cada noche. Fue uno de los primeros en Sudamérica.` },
        en: { titulo: "Stop 4.2: The Little Lake and the Dancing Waters", guion: `Walk with me toward the water. The famous Laguito has an industrial secret. In 1900, Rosario needed land to raise the railway embankments, so they made a giant hole and turned it into a lake.\n\nThe Dancing Waters system is a feat of local engineering: music, lights and synchronized water jets that dance every night.` },
        pt: { titulo: "Ponto 4.2: O Laguinho e as Águas Dançantes", guion: `Caminhem em direção à água. O famoso Laguinho tem um segredo industrial. Em 1900, Rosário fez um buraco gigante para a ferrovia e transformou no lago.\n\nO sistema de Águas Dançantes é uma proeza de engenharia: música, luzes e jatos sincronizados que dançam toda noite.` },
        lat: -32.9610, lng: -60.6610
      },
      {
        es: { titulo: "Punto 4.3: Museo Municipal de Bellas Artes Castagnino", guion: `Miren esta mole de piedra blanca en la esquina. El Museo Castagnino. Fue inaugurado en 1937. Es la segunda colección de arte más importante del país, solo después del Museo Nacional en Buenos Aires. Tenemos obras de Berni, de Pettoruti, de Spilimbergo. Rosario siempre fue cuna de artistas rebeldes, y el Castagnino es su templo.` },
        en: { titulo: "Stop 4.3: Castagnino Municipal Museum of Fine Arts", guion: `Look at that mass of white stone on the corner. The Castagnino Museum, inaugurated in 1937. It is the second most important art collection in the country. We have works by Berni, Pettoruti and Spilimbergo.` },
        pt: { titulo: "Ponto 4.3: Museu Municipal de Belas Artes Castagnino", guion: `Olhem aquela mole de pedra branca na esquina. O Museu Castagnino, inaugurado em 1937. É a segunda coleção de arte mais importante do país. Temos obras de Berni, Pettoruti e Spilimbergo.` },
        lat: -32.9630, lng: -60.6620
      },
      {
        es: { titulo: "Punto 4.4: Estadio Marcelo Bielsa (Newell's Old Boys)", guion: `Pisen con cuidado, porque estamos entrando a territorio sagrado para el fútbol mundial. Estamos frente al Coloso del Parque, la casa del Club Atlético Newell's Old Boys. Fundado en 1903 por Isaac Newell.\n\nEste pasto que ven ahí es místico: por acá caminó un tal Diego Armando Maradona en el 93, y acá dio sus primeros pasos un chico flaquito llamado Lionel Messi antes de irse a Barcelona. El estadio se llama Marcelo Bielsa porque el Loco no solo nos dio títulos, nos dio una identidad.` },
        en: { titulo: "Stop 4.4: Marcelo Bielsa Stadium (Newell's Old Boys)", guion: `Step carefully, because we are entering sacred territory for world football. We are in front of the Coloso del Parque, the home of Newell's Old Boys, founded in 1903 by Isaac Newell.\n\nThis grass is mystical: Diego Armando Maradona walked here in 1993, and Lionel Messi took his first steps here before leaving for Barcelona.` },
        pt: { titulo: "Ponto 4.4: Estádio Marcelo Bielsa (Newell's Old Boys)", guion: `Pisem com cuidado, estamos entrando em território sagrado. Estamos diante do Coloso do Parque, o lar do Newell's Old Boys, fundado em 1903.\n\nDiego Armando Maradona caminhou aqui em 1993, e Lionel Messi deu seus primeiros passos aqui.` },
        lat: -32.9650, lng: -60.6635
      }
    ]
  },

  // ─── CIRCUITO 5 — NOCHE EN PICHINCHA (Centro-Norte) ──────
  {
    id: 5,
    es: { nombre: "Noche en Pichincha" },
    en: { nombre: "Night in Pichincha" },
    pt: { nombre: "Noite em Pichincha" },
    origen:    "-32.93775,-60.65588",
    destino:   "-32.93514,-60.66106",
    waypoints: "-32.93483,-60.65576",
    paradas: [
      {
        es: { titulo: "Punto 5.1: Historia de Pichincha (El Barrio Prohibido)", guion: `Párense en esta esquina, cerca de la vieja estación de trenes Rosario Norte. Principios del siglo XX, Rosario es el puerto más importante del país. Este barrio, Pichincha, se convirtió en el centro del vicio de Sudamérica.\n\nAquí operaba la red mafiosa Zwi Migdal, dedicada a la trata de blancas a nivel internacional. Las casonas de altos techos que ven no eran casas de familia, eran burdeles de lujo. Se decía que había túneles secretos que conectaban estas casas con el puerto.` },
        en: { titulo: "Stop 5.1: History of Pichincha (The Forbidden Neighborhood)", guion: `Stand at this corner, near the old Rosario Norte train station. Early 20th century, Rosario is the most important port in the country. This neighborhood became the center of vice in South America.\n\nHere operated the Zwi Migdal mafia network, dedicated to international human trafficking. The high-ceilinged mansions were luxury brothels.` },
        pt: { titulo: "Ponto 5.1: História de Pichincha (O Bairro Proibido)", guion: `Parem nesta esquina, perto da antiga estação Rosario Norte. Início do século XX, este bairro tornou-se o centro do vício da América do Sul.\n\nAqui operava a rede mafiosa Zwi Migdal, dedicada ao tráfico internacional de mulheres.` },
        lat: -32.93775, lng: -60.65588
      },
      {
        es: { titulo: "Punto 5.2: Calle Güemes y el Polo Gastronómico", guion: `Ahora miremos el presente. Caminemos por calle Güemes. Donde antes hubo talleres ferroviarios, depósitos de carbón y bares de marineros, hoy hay un polo gastronómico que es la envidia del país.\n\nPichincha se recicló a sí mismo. Pasó de ser el barrio maldito al barrio cool. Las fachadas de ladrillo visto que guardaban secretos hoy albergan las mejores canillas de cerveza artesanal del país.` },
        en: { titulo: "Stop 5.2: Güemes Street and the Gastronomic Hub", guion: `Now let us look at the present. Let us walk along Güemes Street. Where there were once railway workshops and sailors bars, today there is a gastronomic hub that is the envy of the country.\n\nPichincha recycled itself. It went from the cursed neighborhood to the cool neighborhood.` },
        pt: { titulo: "Ponto 5.2: Rua Güemes e o Polo Gastronômico", guion: `Agora olhemos o presente. Caminhemos pela rua Güemes. Onde antes havia oficinas e bares de marinheiros, hoje há um polo gastronômico que é a inveja do país.\n\nPichincha se recicló. Passou de bairro maldito ao bairro cool.` },
        lat: -32.93483, lng: -60.65576
      },
      {
        es: { titulo: "Punto 5.3: El Legado de Alberto Olmedo", guion: `Para terminar el circuito, busquemos la esquina de Pueyrredón y Rivadavia. ¿Ven esa estatua? Es el Negro Alberto Olmedo. El cómico más grande que dio la Argentina nació en una casita humilde a metros de aquí.\n\nPichincha es ese contraste: la mafia y la risa, el pecado y el arte.` },
        en: { titulo: "Stop 5.3: The Legacy of Alberto Olmedo", guion: `To finish the circuit, let us find the corner of Pueyrredón and Rivadavia. Do you see that statue? It is Alberto Olmedo. The greatest comedian Argentina ever produced was born just meters from here.\n\nPichincha is that contrast: the mafia and the laughter, the sin and the art.` },
        pt: { titulo: "Ponto 5.3: O Legado de Alberto Olmedo", guion: `Para terminar o circuito, vamos até a esquina de Pueyrredón e Rivadavia. Veem aquela estátua? É Alberto Olmedo. O maior comediante da Argentina nasceu a metros daqui.\n\nPichincha é esse contraste: a máfia e o riso, o pecado e a arte.` },
        lat: -32.93514, lng: -60.66106
      }
    ]
  },

  // ─── CIRCUITO 6 — PARQUES Y RÍO (Norte) ─────────────────
  {
    id: 6,
    es: { nombre: "Parques y Río" },
    en: { nombre: "Parks and River" },
    pt: { nombre: "Parques e Rio" },
    origen:    "-32.9565,-60.6240",
    destino:   "-32.9450,-60.6200",
    waypoints: "-32.9552,-60.6255",
    paradas: [
      {
        es: { titulo: "Punto 6.1: Parque Urquiza y el Anfiteatro Municipal", guion: `Bienvenidos al balcón natural de Rosario. Estamos en el Parque Urquiza, ubicado sobre las barrancas más altas de la ciudad. Miren ese hemiciclo de cemento allá abajo, es el Anfiteatro Municipal Humberto de Nito. Miles de artistas, desde Fito Páez hasta Mercedes Sosa, pasaron por ese escenario con el río como telón de fondo.\n\nRosario siempre fue cuna de la música popular argentina, y este es su templo al aire libre.` },
        en: { titulo: "Stop 6.1: Parque Urquiza and the Municipal Amphitheater", guion: `Welcome to Rosario's natural balcony. We are in Parque Urquiza, located on the highest riverbanks of the city. Look at that concrete hemicycle down there, it is the Humberto de Nito Municipal Amphitheater. Thousands of artists, from Fito Páez to Mercedes Sosa, have performed there with the river as a backdrop.` },
        pt: { titulo: "Ponto 6.1: Parque Urquiza e o Anfiteatro Municipal", guion: `Bem-vindos à varanda natural de Rosário. Estamos no Parque Urquiza, sobre as barrancas mais altas da cidade. Olhem aquele hemiciclo de cimento lá embaixo, é o Anfiteatro Municipal Humberto de Nito.` },
        lat: -32.9565, lng: -60.6240
      },
      {
        es: { titulo: "Punto 6.2: Complejo Astronómico (El Planetario)", guion: `Miren esa estructura que parece un hongo de cemento, un ovni que aterrizó en las barrancas. Es el Complejo Astronómico Municipal, inaugurado en los años 70. Es una joya de la arquitectura brutalista argentina.\n\nRosario es una ciudad que mira al cielo. Desde el Planetario y el Observatorio, se estudian las estrellas que Belgrano veía cuando izaba la bandera.` },
        en: { titulo: "Stop 6.2: Astronomical Complex (The Planetarium)", guion: `Look at that structure that looks like a cement mushroom, a UFO that landed on the riverbanks. It is the Municipal Astronomical Complex, inaugurated in the 1970s.\n\nRosario is a city that looks at the sky.` },
        pt: { titulo: "Ponto 6.2: Complexo Astronômico (O Planetário)", guion: `Olhem aquela estrutura que parece um cogumelo de cimento. É o Complexo Astronômico Municipal, inaugurado nos anos 70.\n\nRosário é uma cidade que olha para o céu.` },
        lat: -32.9552, lng: -60.6255
      },
      {
        es: { titulo: "Punto 6.3: Estación Fluvial y el Puerto Activo", guion: `Bajemos por la barranca hacia la Estación Fluvial. Aquí la vida es movimiento constante. Miren las lanchas, los catamaranes que cruzan a las islas.\n\nRosario es el último puerto de aguas profundas del río Paraná. El mundo toca la costa aquí.` },
        en: { titulo: "Stop 6.3: River Station and the Active Port", guion: `Let us go down the riverbank to the River Station. Here life is constant movement. Look at the boats, the catamarans crossing to the islands.\n\nRosario is the last deep-water port on the Paraná river. The world touches the coast here.` },
        pt: { titulo: "Ponto 6.3: Estação Fluvial e o Porto Ativo", guion: `Desçamos pela barranca até a Estação Fluvial. Aqui a vida é movimento constante.\n\nRosário é o último porto de águas profundas do rio Paraná.` },
        lat: -32.9510, lng: -60.6230
      },
      {
        es: { titulo: "Punto 6.4: Costa Central (El Abrazo al Río)", guion: `Llegamos al final de la ruta. Miren hacia el norte y el sur. Tienen 5 kilómetros de parques continuos. Durante décadas, el puerto nos dio la espalda. En los 90 y 2000, Rosario decidió derribar esos muros y devolverle el río a la gente.\n\nHoy, la Costa Central es el parque público más grande de Argentina. El circuito termina aquí, pero la experiencia sigue. Vení Nomás te acompañó hasta el final, ahora te toca a vos disfrutar de Rosario.` },
        en: { titulo: "Stop 6.4: Central Coast (The Embrace of the River)", guion: `We have reached the end of the route. Look north and south. You have 5 kilometers of continuous parks. Rosario decided to tear down those walls and give the river back to the people.\n\nThe circuit ends here, but the experience continues. Vení Nomás accompanied you to the end, now it is your turn to enjoy Rosario.` },
        pt: { titulo: "Ponto 6.4: Costa Central (O Abraço ao Rio)", guion: `Chegamos ao final da rota. Têm 5 quilômetros de parques contínuos. Rosário decidiu derrubar os muros e devolver o rio ao povo.\n\nO circuito termina aqui. Vení Nomás te acompanhou até o final, agora é sua vez de desfrutar de Rosário.` },
        lat: -32.9450, lng: -60.6200
      }
    ]
  },

  // ─── CIRCUITO 7 — COSTANERA Y FÚTBOL (Norte) ─────────────
  {
    id: 7,
    es: { nombre: "Costanera y Fútbol" },
    en: { nombre: "Waterfront and Football" },
    pt: { nombre: "Costeira e Futebol" },
    origen:    "-32.9118,-60.6725",
    destino:   "-32.8986,-60.6841",
    waypoints: "-32.9142,-60.6750",
    paradas: [
      {
        es: { titulo: "Punto 7.1: Parque Alem y la Vieja Usina Sorrento", guion: `Bienvenidos al pulmón del norte rosarino. Miren a su alrededor: estos robles y tipas no están acá por casualidad. Este parque, inaugurado en 1939, fue diseñado para que el trabajador de los talleres ferroviarios tuviera un lugar de dignidad y descanso. Pero quiero que miren esa mole de ladrillo visto que parece una catedral industrial: la Vieja Usina Sorrento.\n\nRosario no nació de la agricultura, nació del hierro, del vapor y de la electricidad.` },
        en: { titulo: "Stop 7.1: Parque Alem and the Old Sorrento Power Plant", guion: `Welcome to the lung of northern Rosario. This park, inaugurated in 1939, was designed so that the railway workshop worker had a place of dignity and rest. Look at that mass of exposed brick that looks like an industrial cathedral: the Old Sorrento Power Plant.\n\nRosario was not born from agriculture, it was born from iron, steam and electricity.` },
        pt: { titulo: "Ponto 7.1: Parque Alem e a Antiga Usina Sorrento", guion: `Bem-vindos ao pulmão do norte rosarino. Este parque, inaugurado em 1939, foi projetado para que o trabalhador das oficinas ferroviárias tivesse um lugar de dignidade e descanso.\n\nRosário não nasceu da agricultura, nasceu do ferro, do vapor e da eletricidade.` },
        lat: -32.9118, lng: -60.6725
      },
      {
        es: { titulo: "Punto 7.2: Estadio Gigante de Arroyito (Rosario Central)", guion: `Pisen fuerte, estamos en tierra sagrada. Estamos frente al Gigante de Arroyito, el hogar del Club Atlético Rosario Central. Es uno de los pocos estadios del mundo construido literalmente a la vera de un río majestuoso como el Paraná. Central nació en 1889 en los talleres del Ferrocarril Central Argentino.\n\nEste estadio fue sede del Mundial del 78. Aquí Mario Alberto Kempes, el Matador, se convirtió en héroe nacional. Ser de Central en Arroyito es una religión que se hereda, una pasión que huele a río y a humo de ferrocarril.` },
        en: { titulo: "Stop 7.2: Gigante de Arroyito Stadium (Rosario Central)", guion: `Step firmly, we are on sacred ground. We are in front of the Gigante de Arroyito, the home of Club Atlético Rosario Central. It is one of the few stadiums in the world built literally on the banks of the Paraná river.\n\nThis stadium hosted the 1978 World Cup. Here Mario Alberto Kempes became a national hero.` },
        pt: { titulo: "Ponto 7.2: Estádio Gigante de Arroyito (Rosario Central)", guion: `Pisem firme, estamos em terra sagrada. Estamos diante do Gigante de Arroyito, o lar do Club Atlético Rosario Central.\n\nEste estádio foi sede da Copa do Mundo de 1978. Aqui Mario Alberto Kempes se tornou herói nacional.` },
        lat: -32.9142, lng: -60.6750
      },
      {
        es: { titulo: "Punto 7.3: Rambla Catalunya y La Florida", guion: `Caminen conmigo por la vereda alta, sientan la brisa. Esto es la Rambla Catalunya. Rosario es la ciudad con las playas de arena natural más extensas del país. Miren hacia allá, el Puente Rosario-Victoria. Inaugurado en 2003, ese gigante de acero parece un arco tenso uniendo dos mundos: la Rosario de cemento y las islas del Delta.\n\nLa Florida, fundada en 1933, es el ritual del rosarino. El río Paraná no es solo paisaje, es nuestra calle principal.` },
        en: { titulo: "Stop 7.3: Rambla Catalunya and La Florida Beach", guion: `Walk with me along the upper sidewalk, feel the breeze. This is Rambla Catalunya. Rosario is the city with the most extensive natural sand beaches in the country. Look over there, the Rosario-Victoria Bridge, inaugurated in 2003.\n\nLa Florida, founded in 1933, is the Rosarian ritual. The Paraná river is not just scenery, it is our main street.` },
        pt: { titulo: "Ponto 7.3: Rambla Catalunya e La Florida", guion: `Caminhem comigo pela calçada alta, sintam a brisa. Esta é a Rambla Catalunya. Rosário é a cidade com as praias de areia natural mais extensas do país.\n\nLa Florida, fundada em 1933, é o ritual do rosarino.` },
        lat: -32.8986, lng: -60.6841
      }
    ]
  }
];

window.CIRCUITS = CIRCUITS;