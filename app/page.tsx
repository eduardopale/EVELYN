"use client"

import { useState, useRef } from "react"
import { Home, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function LibroDeCuentoVisual() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [direction, setDirection] = useState("next")
  const [isBookOpen, setIsBookOpen] = useState(false)
  const [startX, setStartX] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const bookRef = useRef(null)

  // Lista de páginas con todos los capítulos
  const pages = [
    {
      // Página 0: Portada
      title: "INFINITOS",
      text: "",
      imageAlt: "Portada del libro Infinitos",
      bgColor: "from-blue-600 to-blue-400",
      isCover: true,
      hasImage: true,
      fullPageImage: true,
    },
    {
      // Página 1: Índice
      title: "Índice",
      isIndex: true,
      bgColor: "from-pink-50 to-purple-50",
      textColor: "text-purple-900",
      hasImage: false,
    },
    {
      // Página 2: Capítulo 1: El Reino en Penumbra
      title: "Capítulo 1: El Reino en Penumbra",
      text: 'En un rincón oculto del mapa, donde los vientos se detenían a escuchar las canciones de los árboles y los lagos reflejaban más que el cielo, se encontraba el reino de Silvara. Rodeado por montañas con picos de cristal y praderas donde las flores hablaban con las abejas, Silvara no era solo un lugar: era un corazón que latía con magia viva.\n\nEn el centro de ese mundo encantado se erguía un castillo brillante, construido con torres de vidrio tallado y muros de piedra blanca. Pero lo más sagrado de todo era una joya flotante, suspendida en la cima de la torre más alta: la Luz de Cristal.\n\nNadie sabía cómo había llegado allí. Algunas historias decían que había nacido del primer suspiro de una estrella caída; otras, que era el regalo de una diosa de la primavera. Pero lo que todos sabían era esto: mientras la Luz brillara, el reino viviría en equilibrio. Los cultivos florecían, el agua era pura, las enfermedades no duraban, y la gente dormía sin miedo.\n\nCada noche, la joya iluminaba el cielo con una luz tan suave como la de una luciérnaga, y cada mañana, su resplandor despertaba al sol.\n\nLa princesa Evelyn, hija del rey Altair, observaba todo desde su torre, donde las ventanas eran tan grandes que podía ver el bosque susurrante y los caminos serpenteantes que llevaban hacia los confines del mundo. Evelyn era distinta a lo que esperaban de una princesa. No le gustaban los bailes de gala ni los vestidos pesados. Le fascinaban los libros, las estrellas, las leyendas y las hojas secas que caían en otoño. Pasaba horas recolectando piedras curiosas y escribiendo ideas en un cuaderno de tapas de cuero.\n\nPero esa noche... algo cambió.\n\nMientras el reino dormía, un estremecimiento recorrió el aire. Evelyn, que miraba las constelaciones desde su ventana, sintió que el viento dejó de cantar. Corrió a la sala de observación, y lo vio: la Luz de Cristal ya no estaba.\n\nDonde antes brillaba, ahora solo había vacío. Un hueco. Una oscuridad que no era noche, sino pérdida.\n\nAl principio, pensó que soñaba. Pero los pájaros no cantaron al amanecer. Las flores no se abrieron. El río dejó de reír. Y por primera vez en mucho tiempo, el cielo de Silvara se cubrió de nubes densas y frías.\n\nLas campanas del castillo repicaron al amanecer, pero no por celebración. Eran campanas de alerta.\n\nEn la sala del trono, los rostros estaban pálidos. Los sabios no tenían respuestas. Los caballeros no sabían a quién culpar. Algunos murmuraban que era una maldición. Otros, que un enemigo del pasado había regresado. Pero todos coincidían en algo: Silvara estaba perdiendo su luz... y con ella, su alma.\n\nEvelyn no dijo nada. Observó. Sintió. Y supo, sin que nadie se lo dijera, que algo mucho más grande se avecinaba. Algo que no se resolvería con espadas, ni con oraciones, ni con consejos.\n\nEsa noche, mientras los demás dormían envueltos en miedo, ella escribió una sola frase en su cuaderno:\n"Si la luz se fue, iré tras ella." Y entonces lo entendió. El silencio que llenaba el reino no era de derrota. Era la calma antes de una decisión.\n\nY Evelyn... estaba a punto de tomar la suya.',
      bgColor: "from-indigo-600 to-blue-500",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo1.png",
      imageAlt: "La princesa Evelyn con su corona dorada mirando hacia el castillo de Silvara",
    },
    {
      // Página 3: Capítulo 2: El Juramento de Evelyn
      title: "Capítulo 2: El Juramento de Evelyn",
      text: "La niebla aún cubría las calles de Silvara cuando Evelyn bajó las escaleras de la torre sin que nadie la viera. El castillo, normalmente lleno de música de laúd y pasos apresurados de sirvientes, estaba sumido en un silencio incómodo. Nadie tenía respuestas sobre lo que había ocurrido la noche anterior. Solo había preguntas... y miedo.\n\nLos consejeros se reunían a puertas cerradas, los soldados aguardaban órdenes que no llegaban, y el Rey Altair, su padre, había caído en una tristeza muda, apenas capaz de alzar la vista. Evelyn entendía el peso de esa pérdida: la Luz de Cristal no era solo magia, era el alma del reino. Y cuando el alma desaparece, hasta el corazón más fuerte se rompe.\n\nPero ella no podía quedarse quieta. No cuando sentía que algo —una fuerza que nunca antes había experimentado— latía dentro de ella, guiándola hacia una verdad aún desconocida.\n\nSubió a la torre más alta del castillo, aquella desde la cual solía mirar las estrellas con su madre antes de que enfermara. Ahí, entre los ecos del pasado, abrió un antiguo baúl de madera: en su interior, su capa dorada, una brújula mágica heredada de su abuela, un mapa viejo cubierto de notas… y su corona de papel.\n\nLa tomó entre sus manos y sonrió. No era una corona de realeza, sino de infancia. De juegos y sueños. Pero hoy, esa corona tenía un nuevo propósito: sellar una promesa.\n\nSe la colocó con cuidado y, frente a los vientos del amanecer, pronunció su juramento:\n\n—Juro por el nombre de mi madre, por la sangre de mi linaje, y por cada flor que aún resiste el invierno, que traeré de vuelta la Luz de Cristal. No como princesa, sino como Evelyn, hija de Silvara.\n\nEn ese momento, el viento pareció responderle. Una ráfaga cálida acarició su rostro, como si el mundo mismo reconociera su decisión.\n\nTomó su mochila, guardó el mapa, la brújula, un frasco con agua y un libro de plantas mágicas. No llevaba soldados, ni joyas, ni discursos. Solo llevaba fe, memoria… y un corazón dispuesto a desafiar lo imposible.\n\nMientras caminaba hacia las puertas del castillo, los guardias la observaron con duda.\n\n—¿A dónde vais, mi princesa? —preguntó uno.\n\n—Voy a donde nadie quiere ir —respondió—. Al lugar donde empieza la esperanza.\n\nY sin mirar atrás, Evelyn dio su primer paso hacia el mundo que le cambiaría la vida.",
      bgColor: "from-purple-600 to-violet-500",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo2.png",
      imageAlt: "Evelyn con su capa dorada, sosteniendo un mapa y una brújula mágica",
    },
    {
      // Página 4: Capítulo 3: El Príncipe del Bosque
      title: "Capítulo 3: El Príncipe del Bosque",
      text: "El Bosque de los Susurros era un lugar que pocos osaban atravesar. Sus árboles altos parecían conversar entre sí, y el viento jugaba con las hojas dejando melodías que solo quienes tenían el corazón abierto podían entender. Evelyn avanzaba con paso firme, aunque cada crujido de ramas y cada sombra la mantenían alerta.\n\nMientras caminaba cerca de un arroyo cristalino, escuchó un pequeño sonido de angustia. Siguiendo el ruido, encontró a un cervatillo atrapado entre raíces enredadas. Justo cuando se agachaba para ayudarlo, una voz firme la detuvo:\n\n—¡Aléjate!\n\nUn joven apareció entre los árboles, espada en mano, con mirada decidida pero cautelosa.\n\n—No soy enemigo —dijo Evelyn con calma—. Solo quiero ayudar.\n\nEl joven bajó lentamente la espada y se presentó:\n\n—Soy Eduardo, príncipe del reino vecino, Celvyr. Y tú debes ser Evelyn, la princesa de Silvara.\n\nEvelyn asintió, sorprendida de que alguien supiera de ella en medio del bosque.\n\n—También estoy en busca de la Luz de Cristal —continuó Eduardo—. Mi reino comienza a oscurecerse desde que esa joya desapareció.\n\nEvelyn sintió que su misión se hacía más urgente. Decidieron unir fuerzas, pues sabían que juntos tendrían más posibilidades de recuperar la luz y salvar sus hogares.\n\nMientras caminaban, compartieron historias y sueños. Eduardo le mostró un mapa antiguo que había encontrado en las ruinas de su castillo y un libro de hechizos que esperaba algún día entender. Evelyn le habló de las noches estrelladas en Silvara y del misterio que sentía en su interior.\n\nA medida que avanzaban, la confianza entre ambos crecía. En ese bosque lleno de susurros, no solo buscaban una joya perdida, sino también la fortaleza que nacía de la amistad y la esperanza compartida.\n\nCuando el sol comenzó a ocultarse entre las copas de los árboles, acamparon junto al arroyo. Eduardo tocó una suave melodía en una flauta que llevaba consigo, y Evelyn sintió que, a pesar del peligro, no estaba sola.\n\nLa aventura apenas comenzaba, pero ya sabía que, con Eduardo a su lado, cualquier oscuridad podría enfrentarse.",
      bgColor: "from-green-600 to-teal-500",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo3.png",
      imageAlt: "Evelyn y Eduardo en el Bosque de los Susurros, con un castillo sombrío en el fondo",
    },
    {
      // Página 5: Capítulo 4: El Puente de los Recuerdos
      title: "Capítulo 4: El Puente de los Recuerdos",
      text: "Al día siguiente, Evelyn y Eduardo llegaron a un lugar que parecía sacado de un sueño: el Lago Espejo. Su superficie era tan clara y tranquila que reflejaba no solo el cielo, sino también los pensamientos más profundos de quienes se acercaban.\n\nPero para cruzar, debían pasar por un puente muy especial: el Puente de los Recuerdos. Allí, un anciano guardián los esperaba, con ojos brillantes y sonrisa sabia.\n\n—Para cruzar, deben mostrar el recuerdo más feliz de sus vidas —dijo con voz pausada—. Solo el poder de la alegría puede abrir este paso.\n\nEvelyn cerró los ojos y, en un instante, recordó aquella noche en la que su madre le enseñó a contar estrellas en el cielo, mientras le contaba historias de antiguas heroínas y promesas de valentía. Sintió el calor del abrazo de su madre y la paz de esos momentos juntos.\n\nEduardo sonrió al recordar la tarde en que su padre le enseñó a tocar laúd bajo un árbol frondoso, la música llenando el aire y sus risas mezclándose con el canto de los pájaros.\n\nEl lago comenzó a brillar con una luz suave y dorada. El agua se apartó para revelar el puente, construido con piedras de cristal y raíces entrelazadas. Con cuidado, ambos cruzaron, sintiendo que sus recuerdos los fortalecían.\n\nMientras avanzaban, compartieron aquellos momentos felices, y esa conexión los hizo sentir más cercanos que nunca. En el Puente de los Recuerdos, no solo cruzaban un obstáculo, sino que tejían un lazo invisible entre sus corazones.\n\nAl otro lado, el bosque parecía más amable, y el camino más claro. Sabían que la Luz de Cristal estaba cada vez más cerca, pero también que el verdadero viaje era descubrir quiénes eran realmente.",
      bgColor: "from-blue-600 to-cyan-500",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo4.png",
      imageAlt:
        "Evelyn y Eduardo sobre el Puente de los Recuerdos, con sus reflejos en el agua mostrando sus recuerdos más preciados",
    },
    {
      // Página 6: Capítulo 5: El Hechicero del Olvido
      title: "Capítulo 5: El Hechicero del Olvido",
      text: "Tras días de caminata entre senderos ocultos y viejas leyendas, Evelyn y Eduardo llegaron a la temida Torre de Sombras, una estructura alta y oscura que se alzaba como una mancha contra el cielo gris. Allí vivía el hechicero Kharon, un hombre que había sido desterrado por su uso de magia prohibida, y que ahora guardaba la Luz de Cristal.\n\nLa torre estaba rodeada por una niebla espesa que parecía absorber toda la luz, y el viento susurraba advertencias de antiguos guardianes. Sin embargo, Evelyn y Eduardo avanzaron sin titubear, porque sabían que ese era el último paso para salvar sus reinos.\n\nAl entrar, encontraron a Kharon, un hombre de rostro marcado por el tiempo y ojos llenos de tristeza. No era el monstruo que esperaban, sino alguien cansado y solo.\n\n—¿Por qué has tomado la Luz de Cristal? —preguntó Evelyn con voz firme, pero sin odio.\n\nKharon suspiró y comenzó a relatar su historia. Años atrás, había sido consejero del rey, pero tras perder a su familia en una guerra cruel, su corazón se había cerrado. Creyó que eliminando las emociones podría evitar el dolor y la tristeza, y por eso robó la joya, buscando crear un mundo sin sentimientos.\n\nEduardo, con suavidad, tocó una melodía en su laúd, una canción de perdón y esperanza que había aprendido de su padre.\n\nEvelyn se acercó y le habló del valor del amor, de la fuerza que hay en aceptar las heridas y seguir adelante.\n\nLas palabras y la música empezaron a romper la barrera de oscuridad que envolvía a Kharon. Por primera vez en años, una lágrima surcó su rostro, y con ella, la magia oscura comenzó a desvanecerse.\n\nCon voz temblorosa, el hechicero devolvió la Luz de Cristal, consciente de que el poder verdadero reside en la capacidad de sentir y amar.\n\nEvelyn y Eduardo salieron de la torre con la joya en sus manos, con la certeza de que no solo habían recuperado una gema, sino también la esperanza y el perdón.",
      bgColor: "from-gray-700 to-slate-600",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo5.png",
      imageAlt: "Evelyn frente al hechicero Kharon, quien sostiene la Luz de Cristal en su mano",
    },
    {
      // Página 7: Capítulo 6: La Promesa del Alba",
      title: "Capítulo 6: La Promesa del Alba",
      text: "El sol comenzaba a asomarse en el horizonte cuando Evelyn y Eduardo cruzaron las puertas del castillo de Silvara, la Luz de Cristal resplandeciendo con un brillo renovado entre sus manos. Todo el reino parecía contener el aliento, esperando el milagro que ambos jóvenes traían consigo.\n\nAl posar la gema en su pedestal, un resplandor cálido se extendió por cada rincón del castillo, iluminando las sombras que la oscuridad había dejado atrás. Los jardines se llenaron de flores vibrantes, los árboles susurraron canciones antiguas y el cielo, antes gris, se pintó de colores dorados y rosados.\n\nEl rey Altair, con lágrimas en los ojos, abrazó a su hija con orgullo y gratitud. Eduardo, a su lado, sintió que la misión no solo había salvado su hogar, sino que había creado un vínculo inquebrantable entre dos reinos.\n\nEn medio de la alegría y la celebración, Evelyn comprendió que la verdadera luz no estaba solo en la gema, sino en la fuerza, la valentía y el amor que habían surgido en ese viaje.\n\nMientras el amanecer se convertía en día, ella y Eduardo hicieron una promesa:\n\n—Que esta luz nunca se apague en nuestros corazones, y que siempre recordemos que, incluso en la oscuridad, somos infinitos.\n\nY así, con el alma llena de esperanza y los ojos puestos en un futuro brillante, la princesa y el príncipe comenzaron una nueva historia, juntos.",
      bgColor: "from-amber-500 to-orange-400",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo6.png",
      imageAlt:
        "Evelyn y Eduardo celebrando con el pueblo frente al castillo de Silvara tras devolver la Luz de Cristal",
    },
    {
      // Página 8: Capítulo 7: El Nuevo Amanecer
      title: "Capítulo 7: El Nuevo Amanecer",
      text: "Con la Luz de Cristal restaurada y los reinos unidos, Silvara y Celvyr comenzaron a florecer como nunca antes. Las viejas heridas del pasado se sanaban lentamente, y la gente recuperaba la alegría en sus rostros.\n\nEvelyn y Eduardo, ahora no solo aliados sino amigos inseparables, trabajaban juntos para fortalecer la paz. Juntos fundaron una escuela donde niños y jóvenes aprendían sobre magia, historia y respeto por la naturaleza, para que la luz nunca volviera a desaparecer.\n\nPero más allá de las murallas del castillo, en los bosques y las montañas, nuevas leyendas comenzaban a surgir. Hablaban de un futuro donde la valentía, la sabiduría y el amor serían las verdaderas fuerzas que guiarían al mundo.\n\nUna tarde, mientras caminaban por el sendero que bordeaba el río cristalino, Evelyn miró a Eduardo y dijo:\n\n—No sé qué nos traerá el futuro, pero sé que mientras estemos juntos, no habrá oscuridad que pueda detenernos.\n\nEduardo sonrió y tomó su mano.\n\n—Somos infinitos —respondió—. Y eso es solo el comienzo.\n\nEl sol se escondió tras las colinas, pero su luz no se apagó. Porque en los corazones de quienes creen, siempre brilla un nuevo amanecer.",
      bgColor: "from-rose-500 to-pink-400",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/evelyn.png",
      secondImageUrl: "/eduardo.png",
      imageAlt: "Evelyn y Eduardo, los nuevos líderes de los reinos unidos de Silvara y Celvyr",
      hasDualImages: true,
    },
    {
      // Página 9: Capítulo 8: El Legado de la Luz
      title: "Capítulo 8: El Legado de la Luz",
      text: "Pasaron los años, y la historia de Evelyn y Eduardo se convirtió en leyenda, contada alrededor de fogatas y en las noches estrelladas, inspirando a generaciones a nunca dejar de soñar.\n\nEl reino de Silvara creció en prosperidad, guiado por los valores que la princesa y el príncipe habían sembrado: valentía, empatía y esperanza. La Luz de Cristal permaneció protegida, no solo como una joya, sino como un símbolo eterno de que la verdadera magia reside en el corazón humano.\n\nEn el centro del castillo, un nuevo salón fue construido, dedicado a la memoria del viaje que cambió sus destinos. Allí, entre mapas, libros y objetos mágicos, jóvenes aprendices estudiaban, aprendiendo que cada desafío es una oportunidad para brillar.\n\nEvelyn y Eduardo, ahora líderes sabios, miraban con orgullo cómo el legado de la luz se expandía más allá de los muros del castillo, tocando vidas y creando nuevos caminos.\n\nY aunque nuevas aventuras siempre aguardaban en el horizonte, sabían que mientras mantuvieran vivo el fuego interior, nada podría apagar la luz que los hacía infinitos.",
      bgColor: "from-indigo-500 to-purple-400",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo8.png",
      imageAlt: "El salón del legado en el castillo con jóvenes aprendices estudiando la historia de Evelyn y Eduardo",
    },
    {
      // Página 10: Capítulo 9: El Corazón del Bosque
      title: "Capítulo 9: El Corazón del Bosque",
      text: 'Una tarde de otoño, cuando las hojas caían lentamente como suspiros del viento, Evelyn sintió algo distinto en el aire. Era apenas un murmullo, un tirón suave en la brújula antigua que siempre llevaba consigo. Desde la restauración de la Luz de Cristal, el artefacto había permanecido en silencio… hasta ahora.\n\nLa aguja temblaba, marcando un rumbo hacia el sur, más allá del Bosque de los Susurros, hacia un punto del mapa que ningún sabio había podido descifrar: un lugar marcado solo con un símbolo antiguo, un espiral rodeado de raíces. Se decía que allí latía el Corazón del Bosque, un sitio donde la magia no solo vivía, sino que respiraba por sí misma.\n\nEvelyn lo sintió como una llamada, no de peligro, sino de propósito. Eduardo, al escuchar la historia, no dudó ni un segundo en acompañarla. Sabía que cuando Evelyn decidía algo, el mundo cambiaba.\n\nEl viaje fue más silencioso que los anteriores. El bosque los recibió con un aire distinto: más profundo, más vivo. Los árboles eran altos como torres y sus raíces se entrelazaban como si formaran un lenguaje antiguo. El viento no solo susurraba... parecía escuchar.\n\nA medida que avanzaban, comenzaron a notar cosas imposibles: flores que brillaban bajo la sombra, mariposas que dejaban rastros de luz, y cantos suaves que salían de árboles huecos. Allí, la magia no era fuerza, ni poder: era presencia.\n\nFinalmente, llegaron a un claro donde un gran árbol se alzaba como un guardián del tiempo. Su tronco era tan ancho como una casa, y de sus ramas colgaban cristales naturales que cantaban con el viento. Evelyn y Eduardo se miraron, y supieron que estaban ante el Corazón del Bosque.\n\nAl acercarse, la brújula de Evelyn se detuvo. No giró más. En su centro, la aguja se transformó en una pequeña chispa de luz… y desapareció.\n\nUna voz antigua, sin forma ni figura, habló a través del viento:\n\n—"Habéis devuelto la luz al mundo. Ahora os toca proteger su origen."\n\nDel árbol surgió una pequeña gema verde, parecida a la Luz de Cristal, pero viva, palpitante como un corazón. No necesitaba pedestal. Ella los eligió.\n\n—¿Qué es esto? —preguntó Eduardo.\n\n—No lo sé —respondió Evelyn, con los ojos llenos de asombro—. Pero es parte de algo más grande… y nos ha elegido para entenderlo.',
      bgColor: "from-green-500 to-emerald-400",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo9.png",
      imageAlt: "Evelyn y Eduardo frente al gran árbol del Corazón del Bosque, con un corazón rojo y cristales azules",
    },
    {
      // Página 11: Capítulo 10: Donde Comienzan los Sueños
      title: "Capítulo 10: Donde Comienzan los Sueños",
      text: "Los días en Silvara volvieron a ser largos y luminosos, pero algo había cambiado. Evelyn y Eduardo ya no eran los mismos jóvenes que partieron a buscar la Luz de Cristal. Ahora llevaban en sus corazones no solo la experiencia de lo vivido, sino también el peso —y el honor— de custodiar un nuevo secreto: el Corazón del Bosque.\n\nLa pequeña gema verde que habían recibido no era un simple objeto mágico. Su energía vibraba de forma distinta. No iluminaba como la Luz de Cristal, sino que conectaba con todo lo que respiraba: árboles, ríos, animales, incluso personas. Era la magia pura del mundo, la que aún no había sido escrita ni domada.\n\nEvelyn decidió guardar la gema en un lugar especial, no en lo alto de una torre, sino en una cámara secreta, bajo la tierra, donde crecerían raíces alrededor de ella. Quería protegerla no con muros, sino con vida.\n\nEduardo, por su parte, comenzó a viajar entre Silvara y Celvyr, compartiendo lo que habían aprendido: que la luz más poderosa no es la que ciega, sino la que guía desde dentro. Enseñaba canciones, historias, y a veces simplemente escuchaba, porque había entendido que en el silencio también hay sabiduría.\n\nAmbos sabían que vendrían nuevas amenazas, nuevos retos. Pero también sabían que estaban listos.\n\nUna noche, Evelyn subió a su torre favorita, donde las estrellas parecían colgar más cerca del alma. Llevaba su cuaderno de tapas de cuero, ahora lleno de hojas gastadas, dibujos y recuerdos. Eduardo la encontró allí, como solía hacerlo, sin hacer ruido.\n\n—¿Escribiendo un final? —preguntó él.\n\nElla sonrió.\n\n—No… estoy escribiendo un comienzo.\n\nSe quedaron en silencio, viendo cómo el cielo se llenaba de luces. No sabían qué les esperaba más allá de las montañas, ni cuánto tiempo estarían juntos, ni qué otras verdades guardaba el mundo.\n\nPero en ese instante, en la calma entre aventuras, en la paz de dos corazones que se eligieron sin prisa ni promesas, lo supieron:\n\nQue no hay final cuando los sueños siguen naciendo. Que no hay distancia cuando dos almas caminan en la misma dirección.\n\nQue mientras haya amor, magia y memoria…\n\nsomos infinitos.",
      bgColor: "from-blue-500 to-indigo-400",
      textColor: "text-white",
      isChapter: true,
      hasImage: true,
      imageUrl: "/capitulo10.png",
      imageAlt: "Evelyn y Eduardo bajo un cielo estrellado, contemplando juntos las estrellas",
    },
    {
      // Página 12: Dedicatoria
      title: "Dedicatoria",
      text: 'Para ti, Lyn,\nmi amor bonito, mi sueño despierto.\n\nA ti, que llegaste a mi vida como un suspiro de luz\ny te quedaste como el mejor de los milagros.\n\nA ti, que haces que cada día tenga sentido,\nque con una sonrisa me llenas el alma\ny con un abrazo me haces sentir en casa.\n\nA ti, que no necesitas corona para ser mi princesa,\nni magia para hechizar mi corazón.\n\nEste cuento, esta historia, esta vida que soñamos juntos,\nes solo el comienzo de todo lo que quiero vivir contigo.\n\nPorque mientras tú existas,\nmientras tus ojos me miren y tu voz me llame "amor",\nyo sabré que soy el hombre más afortunado del mundo.\n\nTú, mi vida,\neres mi infinito.',
      bgColor: "from-purple-500 to-pink-400",
      textColor: "text-white",
      isDedication: true,
      hasImage: true,
      imageUrl: "/dedicatoria.png",
      imageAlt: "Evelyn y Eduardo dándose un beso, rodeados de un campo de flores y un atardecer dorado",
      isEnding: true,
    },
  ]

  // Función para abrir el libro
  const openBook = () => {
    setIsBookOpen(true)
  }

  // Función para navegar a la siguiente página
  const goToNextPage = () => {
    if (currentPage < pages.length - 2) {
      setDirection("next")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 2)
        setIsFlipping(false)
      }, 1000)
    }
  }

  // Función para navegar a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setDirection("prev")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 2)
        setIsFlipping(false)
      }, 1000)
    }
  }

  // Función para navegar a una página específica
  const goToPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < pages.length && pageNumber !== currentPage) {
      setDirection(pageNumber > currentPage ? "next" : "prev")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(pageNumber)
        setIsFlipping(false)
      }, 1000)
    }
  }

  // Función para volver a la portada
  const goToHome = () => {
    setDirection("prev")
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentPage(0)
      setIsFlipping(false)
    }, 1000)
  }

  // Manejadores de eventos para la interacción de arrastrar
  const handleMouseDown = (e) => {
    if (!isBookOpen) return
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleTouchStart = (e) => {
    if (!isBookOpen) return
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = startX - currentX

    // Determinar si el usuario está arrastrando lo suficiente para cambiar de página
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentPage < pages.length - 2) {
        setIsDragging(false)
        goToNextPage()
      } else if (diff < 0 && currentPage > 1) {
        setIsDragging(false)
        goToPreviousPage()
      }
    }
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    // Determinar si el usuario está arrastrando lo suficiente para cambiar de página
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentPage < pages.length - 2) {
        setIsDragging(false)
        goToNextPage()
      } else if (diff < 0 && currentPage > 1) {
        setIsDragging(false)
        goToPreviousPage()
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Manejadores de clics en los bordes para cambiar de página
  const handleLeftEdgeClick = () => {
    if (currentPage > 1) {
      goToPreviousPage()
    }
  }

  const handleRightEdgeClick = () => {
    if (currentPage < pages.length - 2) {
      goToNextPage()
    }
  }

  // Renderizar el índice
  const renderIndex = () => {
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <ul className="space-y-4 text-blue-700 font-serif">
            {pages.map((page, index) => {
              // Solo mostrar capítulos y dedicatoria en el índice
              if (index > 1 && (page.isChapter || page.isDedication)) {
                return (
                  <li
                    key={index}
                    className="p-2 rounded-md hover:bg-[#71e5ff]/20 transition-colors cursor-pointer"
                    onClick={() => goToPage(index)}
                  >
                    <span className="text-lg font-medium">{page.title}</span>
                  </li>
                )
              }
              return null
            })}
          </ul>
        </div>
      </div>
    )
  }

  // Formatear texto con saltos de línea
  const formatText = (text) => {
    if (!text) return null

    // Si es la dedicatoria, aplicar un formato especial
    if (pages[currentPage]?.isDedication) {
      return text.split("\n").map((line, index) => (
        <p
          key={index}
          className={cn(
            "mb-4 last:mb-0 leading-relaxed text-center",
            index === 0 || index === 2 || index === 5 || index === 9 ? "font-bold text-xl mt-6" : "",
            index === text.split("\n").length - 1 ? "italic mt-8 text-xl" : "",
          )}
        >
          {line}
        </p>
      ))
    }

    // Para el resto de páginas, mantener el formato normal
    return text.split("\n\n").map((paragraph, index) => (
      <p key={index} className={cn("mb-6 last:mb-0 leading-relaxed", currentPage === 0 ? "text-center" : "")}>
        {paragraph}
      </p>
    ))
  }

  // Renderizar letra capital para los capítulos
  const renderCapitalLetter = (text) => {
    if (!text || !pages[currentPage]?.isChapter) return formatText(text)

    const firstParagraph = text.split("\n\n")[0]
    const restOfParagraphs = text.split("\n\n").slice(1)

    const firstLetter = firstParagraph.charAt(0)
    const restOfFirstParagraph = firstParagraph.slice(1)

    return (
      <>
        <p className="mb-6 leading-relaxed">
          <span className="float-left text-5xl font-bold mr-2 mt-1 text-[#71e5ff] font-serif">{firstLetter}</span>
          {restOfFirstParagraph}
        </p>
        {restOfParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 last:mb-0 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </>
    )
  }

  // Renderizar espacio para imagen
  const renderImagePlaceholder = () => {
    if (!pages[currentPage]?.hasImage) return null

    // Si es la portada y se requiere imagen a página completa
    if (currentPage === 0 && pages[currentPage].fullPageImage) {
      return (
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada%20-6sgh9bfkMw51GaSUuWqjisxwB00bAt.png"
              alt="Portada del libro Infinitos"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )
    }

    // Para el resto de imágenes
    return (
      <div className="flex justify-center my-6">
        {pages[currentPage]?.hasDualImages ? (
          <div className="w-full flex flex-col md:flex-row gap-4 justify-center">
            <div className="w-full md:w-1/2 h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
              <img
                src={pages[currentPage].imageUrl || "/placeholder.svg"}
                alt="Evelyn, princesa de Silvara"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
              <img
                src={pages[currentPage].secondImageUrl || "/placeholder.svg"}
                alt="Eduardo, príncipe de Celvyr"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ) : pages[currentPage]?.imageUrl ? (
          <div className="w-full max-w-sm h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
            <img
              src={pages[currentPage].imageUrl || "/placeholder.svg"}
              alt={pages[currentPage].imageAlt || "Ilustración del capítulo"}
              className="w-full h-full object-contain"
            />
          </div>
        ) : pages[currentPage]?.hasPlaceholderImage ? (
          <div className="w-full max-w-sm h-48 md:h-64 border-2 border-dashed border-[#71e5ff]/60 rounded-lg flex items-center justify-center">
            <div className="text-center text-blue-700/70">
              <p className="text-sm font-medium">{pages[currentPage].imageAlt || "Espacio para imagen"}</p>
            </div>
          </div>
        ) : null}
      </div>
    )
  }

  // Renderizar el contenido de la página actual
  const renderCurrentPageContent = () => {
    return (
      <div className="h-full">
        {/* Título de la página (solo para el índice) */}
        {pages[currentPage].isIndex && (
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 font-serif tracking-wide text-center">
            Índice
          </h2>
        )}

        {/* Título de la página (para capítulos) */}
        {!pages[currentPage].isIndex && !pages[currentPage].isCover && (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700 font-serif">{pages[currentPage].title}</h2>
        )}

        {/* Espacio para imagen */}
        {pages[currentPage].hasImage && !pages[currentPage].isCover && renderImagePlaceholder()}

        {/* Texto del capítulo */}
        <div className="text-purple-950 font-serif">
          {pages[currentPage].isIndex
            ? renderIndex()
            : pages[currentPage].isChapter
              ? renderCapitalLetter(pages[currentPage].text)
              : formatText(pages[currentPage].text)}
        </div>
      </div>
    )
  }

  // Modificar la función renderNextPageContent para mostrar la página actual + 1
  const renderNextPageContent = () => {
    if (currentPage >= pages.length - 1) {
      return (
        <div className="h-full flex flex-col items-center justify-center">
          <p className="text-xl text-blue-700 italic font-serif text-center">FIN</p>
        </div>
      )
    }

    return (
      <div className="h-full">
        {/* Título de la siguiente página */}
        {pages[currentPage + 1].isIndex ? (
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 font-serif tracking-wide text-center">
            Índice
          </h2>
        ) : (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700 font-serif">
            {pages[currentPage + 1]?.title || ""}
          </h2>
        )}

        {/* Espacio para imagen de la siguiente página */}
        {pages[currentPage + 1]?.hasImage && !pages[currentPage + 1]?.fullPageImage && (
          <div className="flex justify-center my-6">
            {pages[currentPage + 1]?.hasDualImages ? (
              <div className="w-full flex flex-col md:flex-row gap-4 justify-center">
                <div className="w-full md:w-1/2 h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
                  <img
                    src={pages[currentPage + 1].imageUrl || "/placeholder.svg"}
                    alt="Evelyn, princesa de Silvara"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2 h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
                  <img
                    src={pages[currentPage + 1].secondImageUrl || "/placeholder.svg"}
                    alt="Eduardo, príncipe de Celvyr"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ) : pages[currentPage + 1]?.imageUrl ? (
              <div className="w-full max-w-sm h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
                <img
                  src={pages[currentPage + 1].imageUrl || "/placeholder.svg"}
                  alt={pages[currentPage + 1].imageAlt || "Ilustración del capítulo"}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : pages[currentPage + 1]?.hasPlaceholderImage ? (
              <div className="w-full max-w-sm h-48 md:h-64 border-2 border-dashed border-[#71e5ff]/60 rounded-lg flex items-center justify-center">
                <div className="text-center text-blue-700/70">
                  <p className="text-sm font-medium">{pages[currentPage + 1]?.imageAlt || "Espacio para imagen"}</p>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Texto del siguiente capítulo */}
        <div className="text-purple-950 font-serif">
          {pages[currentPage + 1]?.isIndex
            ? renderIndex()
            : pages[currentPage + 1]?.isChapter
              ? renderCapitalLetter(pages[currentPage + 1]?.text)
              : formatText(pages[currentPage + 1]?.text)}
        </div>

        {/* Mostrar "Fin" si es la última página de capítulos */}
        {pages[currentPage + 1]?.isEnding && (
          <p className="text-center font-bold text-2xl text-blue-700 mt-8 font-serif italic">FIN</p>
        )}
      </div>
    )
  }

  // Renderizar la portada del libro cerrado
  const renderClosedBookCover = () => {
    return (
      <div
        className="w-full max-w-5xl relative cursor-pointer book-cover"
        onClick={openBook}
        style={{
          minHeight: "600px",
          height: "calc(100vh - 140px)",
          maxHeight: "800px",
        }}
      >
        {/* Portada del libro */}
        <div className="absolute inset-0 rounded-lg shadow-xl border-8 border-[#71e5ff]/30 overflow-hidden">
          {/* Imagen de portada */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada%20-6sgh9bfkMw51GaSUuWqjisxwB00bAt.png"
            alt="Portada del libro Infinitos"
            className="w-full h-full object-contain"
          />

          {/* Botón para abrir el libro */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <button
              className="mt-8 flex items-center gap-2 px-6 py-3 bg-[#71e5ff]/50 hover:bg-[#71e5ff]/70 text-white rounded-full transition-all duration-300 border-2 border-amber-500/50 hover:border-amber-500/70 group"
              onClick={openBook}
            >
              <span className="text-lg font-serif">Abrir el libro</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Efecto 3D */}
        <div className="absolute top-0 right-0 bottom-0 w-[20px] bg-gradient-to-b from-[#71e5ff] to-[#5ad8f5] rounded-r-sm transform translate-x-[18px] skew-y-[45deg] origin-top"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-gradient-to-r from-[#5ad8f5] to-[#71e5ff] rounded-b-sm transform translate-y-[18px] skew-x-[45deg] origin-right"></div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-200 flex flex-col items-center justify-center py-8 px-4"
      style={{
        background: `linear-gradient(135deg, #71e5ff 0%, #a0eeff 50%, #f0d4ff 100%)`,
      }}
    >
      {/* Botones de navegación - solo visibles cuando el libro está abierto */}
      {isBookOpen && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-700 hover:text-blue-900 hover:bg-[#71e5ff]/30"
            onClick={goToHome}
          >
            <Home className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-700 hover:text-blue-900 hover:bg-[#71e5ff]/30"
            onClick={() => setIsBookOpen(false)}
          >
            <span className="text-sm font-serif">Cerrar libro</span>
          </Button>
        </div>
      )}

      {/* Libro cerrado o abierto */}
      {!isBookOpen ? (
        renderClosedBookCover()
      ) : (
        <div
          ref={bookRef}
          className={cn(
            "w-full max-w-5xl overflow-hidden",
            "relative",
            "transition-all duration-1000 ease-in-out",
            isBookOpen ? "animate-book-open" : "animate-book-close",
          )}
          style={{
            minHeight: "600px",
            height: "calc(100vh - 140px)",
            maxHeight: "800px",
            perspective: "2000px",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Libro abierto - Diseño de libro real */}
          <div
            className={cn(
              "w-full h-full flex",
              "transform transition-transform duration-700",
              "relative book-container",
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Lomo del libro */}
            <div className="absolute left-1/2 top-0 bottom-0 w-4 -ml-2 bg-gradient-to-r from-[#71e5ff] to-[#a0eeff] z-10 shadow-lg"></div>

            {/* Página izquierda (par) - Siempre visible */}
            <div
              className={cn(
                "w-1/2 h-full",
                "bg-blue-50 bg-opacity-90",
                "shadow-lg rounded-l-lg",
                "border-r border-blue-800",
                "relative overflow-hidden",
                "page-left",
              )}
            >
              <div className="absolute inset-0 bg-[url('/placeholder-4wz5n.png')] opacity-20 mix-blend-overlay"></div>

              {/* Borde decorativo */}
              <div className="absolute inset-0 border-8 border-[#71e5ff]/30 pointer-events-none rounded-l-lg"></div>

              {/* Área para hacer clic y cambiar a la página anterior */}
              <div
                className="absolute left-0 top-0 bottom-0 w-16 cursor-pointer z-40 flex items-center justify-start opacity-30 hover:opacity-100 transition-opacity"
                onClick={handleLeftEdgeClick}
              >
                <div className="w-8 h-16 bg-[#71e5ff]/40 rounded-r-full flex items-center justify-center">
                  <div className="w-2 h-8 bg-[#71e5ff]/60 rounded-l-full"></div>
                </div>
              </div>

              {/* Contenido de la página par */}
              <div className="h-full p-8 flex flex-col relative z-10">
                {/* Número de página (par) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-700/70 font-serif italic">
                  {currentPage === 0 ? "" : currentPage * 2 - 1}
                </div>

                {/* Contenido principal */}
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
                  {currentPage === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center relative z-10">
                      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-serif mb-6 text-center drop-shadow-lg">
                        {pages[currentPage].title}
                      </h1>
                    </div>
                  ) : (
                    renderCurrentPageContent()
                  )}
                </div>
              </div>
            </div>

            {/* Página que se voltea - Animación de cambio de página */}
            <div
              className={cn(
                "absolute top-0 right-0 w-1/2 h-full",
                "page-flip",
                isFlipping && direction === "next" && "page-flip-next",
                isFlipping && direction === "prev" && "page-flip-prev",
                "z-30",
              )}
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Cara frontal de la página que se voltea (visible cuando se avanza) */}
              <div
                className={cn(
                  "absolute inset-0",
                  "bg-blue-100 bg-opacity-90",
                  "shadow-lg rounded-r-lg",
                  "border-l border-blue-800",
                  "page-flip-front",
                  "overflow-hidden",
                )}
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 bg-[url('/placeholder-4wz5n.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 border-8 border-[#71e5ff]/30 pointer-events-none rounded-r-lg"></div>

                <div className="h-full p-8 flex flex-col relative z-10">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-700/70 font-serif italic">
                    {currentPage === 0 ? "" : currentPage * 2}
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">{renderNextPageContent()}</div>
                </div>
              </div>

              {/* Cara trasera de la página que se voltea (visible cuando se retrocede) */}
              <div
                className={cn(
                  "absolute inset-0",
                  "bg-blue-50 bg-opacity-90",
                  "shadow-lg rounded-l-lg",
                  "border-r border-blue-800",
                  "page-flip-back",
                  "overflow-hidden",
                )}
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="absolute inset-0 bg-[url('/placeholder-4wz5n.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 border-8 border-[#71e5ff]/30 pointer-events-none rounded-l-lg"></div>

                <div className="h-full p-8 flex flex-col relative z-10">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-700/70 font-serif italic">
                    {currentPage <= 1 ? "" : (currentPage - 1) * 2 - 1}
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
                    {currentPage > 1 ? (
                      <div className="h-full">
                        {/* Título de la página anterior */}
                        {pages[currentPage - 1].isIndex ? (
                          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 font-serif tracking-wide text-center">
                            Índice
                          </h2>
                        ) : (
                          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700 font-serif">
                            {pages[currentPage - 1]?.title || ""}
                          </h2>
                        )}

                        {/* Espacio para imagen de la página anterior */}
                        {pages[currentPage - 1]?.hasImage && !pages[currentPage - 1]?.fullPageImage && (
                          <div className="flex justify-center my-6">
                            {pages[currentPage - 1]?.hasDualImages ? (
                              <div className="w-full flex flex-col md:flex-row gap-4 justify-center">
                                <div className="w-full md:w-1/2 h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
                                  <img
                                    src={pages[currentPage - 1].imageUrl || "/placeholder.svg"}
                                    alt="Evelyn, princesa de Silvara"
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div className="w-full md:w-1/2 h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
                                  <img
                                    src={pages[currentPage - 1].secondImageUrl || "/placeholder.svg"}
                                    alt="Eduardo, príncipe de Celvyr"
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                            ) : pages[currentPage - 1]?.imageUrl ? (
                              <div className="w-full max-w-sm h-48 md:h-64 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-4 border-[#71e5ff]/30">
                                <img
                                  src={pages[currentPage - 1].imageUrl || "/placeholder.svg"}
                                  alt={pages[currentPage - 1].imageAlt || "Ilustración del capítulo"}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ) : (
                              <div className="w-full max-w-sm h-48 md:h-64 border-2 border-dashed border-[#71e5ff]/60 rounded-lg flex items-center justify-center">
                                <div className="text-center text-blue-700/70">
                                  <p className="text-sm font-medium">
                                    {pages[currentPage - 1]?.imageAlt || "Espacio para imagen"}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Texto de la página anterior */}
                        <div className="text-purple-950 font-serif">
                          {pages[currentPage - 1]?.isIndex
                            ? renderIndex()
                            : pages[currentPage - 1]?.isChapter
                              ? renderCapitalLetter(pages[currentPage - 1]?.text)
                              : formatText(pages[currentPage - 1]?.text)}
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-serif mb-6 text-center">
                          {pages[0].title}
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Página derecha (impar) - Siempre visible */}
            <div
              className={cn(
                "w-1/2 h-full",
                "bg-blue-100 bg-opacity-90",
                "shadow-lg rounded-r-lg",
                "border-l border-blue-800",
                "relative overflow-hidden",
                "page-right",
              )}
            >
              <div className="absolute inset-0 bg-[url('/placeholder-4wz5n.png')] opacity-20 mix-blend-overlay"></div>

              {/* Borde decorativo */}
              <div className="absolute inset-0 border-8 border-[#71e5ff]/30 pointer-events-none rounded-r-lg"></div>

              {/* Área para hacer clic y cambiar a la página siguiente */}
              <div
                className="absolute right-0 top-0 bottom-0 w-16 cursor-pointer z-40 flex items-center justify-end opacity-30 hover:opacity-100 transition-opacity"
                onClick={handleRightEdgeClick}
              >
                <div className="w-8 h-16 bg-[#71e5ff]/40 rounded-l-full flex items-center justify-center">
                  <div className="w-2 h-8 bg-[#71e5ff]/60 rounded-r-full"></div>
                </div>
              </div>

              {/* Contenido de la página impar */}
              <div className="h-full p-8 flex flex-col relative z-10">
                {/* Número de página (impar) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-700/70 font-serif italic">
                  {currentPage === 0 ? "" : currentPage * 2}
                </div>

                {/* Contenido principal - continuación del texto o siguiente capítulo */}
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">{renderNextPageContent()}</div>
              </div>
            </div>

            {/* Indicadores de página */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 z-20">
              {pages.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentPage === index
                      ? "bg-gradient-to-r from-[#71e5ff] to-[#f0d4ff] shadow-[0_0_5px_#71e5ff]"
                      : "bg-[#71e5ff]/30",
                  )}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
