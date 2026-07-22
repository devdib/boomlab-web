import type { Locale } from "./content";

export type BlogSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  callout?: string;
  sources?: readonly { label: string; href: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  updatedDate: string;
  icon: string;
  tone: "orange" | "teal" | "yellow";
  image: string;
  imageAlt: string;
  imageCaption: string;
  author: string;
  authorRole: string;
  reviewer?: string;
  reviewerLabel?: string;
  reviewerRole?: string;
  takeaways: readonly string[];
  takeawayNarrative?: string;
  content: readonly BlogSection[];
};

const sharedAuthor = {
  es: { author: "Equipo editorial Boom! Lab", authorRole: "Contenido educativo basado en experiencias prácticas" },
  en: { author: "Boom! Lab editorial team", authorRole: "Educational content grounded in hands-on experiences" },
} as const;

export const blogPosts: Record<Locale, readonly BlogPost[]> = {
  es: [
    {
      ...sharedAuthor.es,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Revisión científica y pedagógica",
      reviewerRole: "Profesora de Química y Biología",
      slug: "como-organizar-jornada-cientifica-colegio",
      title: "Cómo organizar una jornada científica en un colegio",
      excerpt: "Una ruta práctica para definir objetivos, estaciones, tiempos, seguridad y evaluación sin transformar la jornada en una carga para el equipo educativo.",
      category: "Actividades para colegios",
      readTime: "9 min",
      date: "20 de julio de 2026",
      updatedDate: "20 de julio de 2026",
      icon: "⌁",
      tone: "orange",
      image: "/images/blog/como-organizar-jornada-cientifica.webp",
      imageAlt: "Estudiantes participan en distintas estaciones de una jornada científica escolar bajo supervisión adulta.",
      imageCaption: "Ilustración editorial original de Boom! Lab sobre una jornada científica organizada por estaciones.",
      takeaways: [
        "Comenzar con un objetivo educativo observable, no con una lista de experimentos.",
        "Diseñar estaciones y rotaciones según edad, atención, espacio y adultos disponibles.",
        "Cerrar con evidencias simples: observaciones, explicaciones y preguntas nuevas.",
      ],
      content: [
        {
          heading: "Primero: definir qué debería ocurrir en el aprendizaje",
          paragraphs: [
            "Una jornada científica funciona mejor cuando comienza con una pregunta concreta: ¿qué queremos que las y los estudiantes observen, prueben, comparen o expliquen al finalizar? Ese objetivo ayuda a elegir actividades adecuadas y evita reunir experimentos llamativos sin conexión entre sí.",
            "El objetivo no necesita ser complejo. Para primer ciclo puede ser reconocer que los materiales se comportan de manera distinta; para cursos mayores, comparar resultados, controlar una variable o defender una explicación con evidencias. Lo importante es que el equipo pueda observar si el aprendizaje ocurrió.",
          ],
          callout: "Una buena jornada no se mide por la cantidad de experimentos, sino por la calidad de las preguntas y la participación que genera.",
        },
        {
          heading: "Hacer un diagnóstico antes de diseñar",
          paragraphs: [
            "Antes de definir el programa conviene levantar las condiciones reales del establecimiento. En la experiencia de Boom! Lab, esta conversación inicial reduce cambios de última hora y permite adaptar materiales, lenguaje y ritmo.",
          ],
          bullets: [
            "Número de estudiantes, edades y cursos que participarán.",
            "Tiempo disponible y forma en que los grupos podrán rotar.",
            "Sala, gimnasio, patio u otros espacios, incluyendo acceso a agua y electricidad.",
            "Cantidad de docentes y adultos que acompañarán cada estación.",
            "Necesidades de accesibilidad, apoyos sensoriales o tiempos diferenciados.",
            "Materiales existentes y presupuesto disponible para consumibles y montaje.",
          ],
        },
        {
          heading: "Elegir un formato que sostenga la atención",
          paragraphs: [
            "Para grupos numerosos, las estaciones suelen ser más manejables que una demostración extensa. Cada estación debe tener una acción principal, una pregunta visible y un resultado que pueda observarse en pocos minutos. Las instrucciones se entregan antes de manipular los materiales y se repiten con una señal común para todas las rotaciones.",
            "En grupos que requieren mayor apoyo, conviene disminuir la cantidad de pasos y ofrecer roles: quien manipula, quien observa, quien registra y quien explica. Así la participación no depende sólo de quién se acerca primero a la mesa.",
          ],
          bullets: [
            "Inicio común de 10 a 15 minutos para presentar la pregunta y las reglas.",
            "Estaciones de 15 a 25 minutos, según la edad y la complejidad.",
            "Pausas breves para ordenar, reponer materiales y cambiar de grupo.",
            "Cierre común de 15 minutos para compartir hallazgos y preguntas.",
          ],
        },
        {
          heading: "Planificar seguridad, montaje y personas responsables",
          paragraphs: [
            "Estos son los principales elementos que debes considerar al preparar cada estación:",
          ],
          bullets: [
            "Materiales y cantidades que se utilizarán en la actividad.",
            "Riesgos previsibles y medidas para prevenirlos.",
            "Elementos de protección personal requeridos.",
            "Forma de limpiar el espacio y desechar o almacenar los residuos.",
            "Persona adulta responsable de supervisar la estación.",
            "Restricciones claras: evitar mezclas desconocidas, recipientes cerrados en reacciones que liberan gas y materiales que puedan confundirse con alimentos.",
          ],
        },
        {
          heading: "Preparar la logística del espacio",
          paragraphs: [
            "La logística también incluye circulación, mesas estables, pisos protegidos, lavado de manos y separación entre experimentos y zonas de comida. Una prueba previa con las cantidades reales permite estimar tiempos y detectar problemas antes de recibir a los cursos.",
          ],
        },
        {
          heading: "Evaluar sin convertir la jornada en una prueba",
          paragraphs: [
            "La evaluación puede ser breve y útil. Al finalizar cada estación, el grupo puede completar una frase —“observamos que…”, “creemos que ocurrió porque…”—, dibujar un resultado o elegir qué variable cambiaría en un nuevo intento.",
            "Una lista de cotejo permite registrar de manera simple si cada estudiante o grupo cumple criterios observables. Puede complementarse con una evaluación de proceso que considere cómo participa, formula hipótesis, sigue las medidas de seguridad, registra evidencias, colabora y modifica sus ideas durante la experiencia.",
            "Estas evidencias no buscan calificar el momento de sorpresa. Sirven para reconocer avances, retroalimentar el aprendizaje, mejorar futuras jornadas y conectar lo vivido con las clases siguientes.",
          ],
          bullets: [
            "Participa y puede manipular u observar los materiales de manera segura.",
            "Comprende y sigue las instrucciones de la estación.",
            "Registra una observación o evidencia del resultado.",
            "Explica lo ocurrido utilizando sus observaciones.",
            "Colabora con su grupo y respeta los roles acordados.",
            "Propone una pregunta, mejora o nuevo intento a partir de la experiencia.",
          ],
        },
        {
          heading: "Una lista final antes de abrir las puertas",
          paragraphs: [
            "Una semana antes se confirma el programa, los responsables, los materiales y la distribución del espacio. El día anterior se preparan cajas por estación, etiquetas y repuestos. Al terminar, se revisan residuos, inventario y observaciones del equipo.",
            "Boom! Lab puede adaptar esta estructura a un taller puntual, una jornada STEM o un programa de varias sesiones. La clave es diseñar desde el contexto del colegio y no obligar al colegio a adaptarse a un formato rígido.",
          ],
        },
      ],
    },
    {
      ...sharedAuthor.es,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Revisión científica y pedagógica",
      reviewerRole: "Profesora de Química y Biología",
      slug: "experimentos-cientificos-seguros-con-ninos",
      title: "5 experimentos científicos seguros para hacer con niños",
      excerpt: "Cinco actividades para explorar densidad, tensión superficial, movimiento y reacciones, con preguntas, materiales cotidianos y criterios claros de seguridad.",
      category: "Experimentos seguros",
      readTime: "10 min",
      date: "20 de julio de 2026",
      updatedDate: "20 de julio de 2026",
      icon: "⚗",
      tone: "teal",
      image: "/images/blog/experimentos-seguros-ninos.webp",
      imageAlt: "Mesa ordenada con cinco experimentos infantiles seguros y una persona adulta supervisando.",
      imageCaption: "Ilustración editorial original. Toda actividad debe realizarse con supervisión adulta y cantidades pequeñas.",
      takeaways: [
        "La seguridad comienza eligiendo materiales conocidos, cantidades pequeñas y recipientes abiertos.",
        "Cada efecto visual debe ir acompañado de una pregunta y tiempo para observar.",
        "Nunca se mezclan productos de limpieza ni se ingieren los materiales.",
      ],
      content: [
        {
          heading: "Antes de experimentar: preparar un entorno seguro",
          paragraphs: [
            "Experimentar con niñas y niños no requiere sustancias complejas. Requiere una mesa despejada, materiales identificados, instrucciones breves y una persona adulta que acompañe de principio a fin. Las cantidades deben ser pequeñas y todos deben saber que los materiales no se comen ni se prueban.",
            "Protege la superficie, recoge el cabello largo, separa alimentos y utiliza antiparras cuando pueda haber salpicaduras. Revisa alergias o sensibilidades y detén la actividad si un material produce irritación. Nunca mezcles productos de limpieza ni cierres un recipiente donde una reacción pueda producir gas.",
          ],
          callout: "Estas ideas son educativas y de bajo riesgo cuando se siguen las indicaciones, pero no sustituyen la supervisión ni el criterio de una persona adulta responsable.",
        },
        {
          heading: "1. ¿Flota o se hunde?",
          paragraphs: [
            "Llena un recipiente transparente con agua y reúne objetos limpios de distintos materiales: una tapa plástica, una piedra, un corcho, una cuchara y una bolita de papel aluminio. Antes de probar, cada participante predice qué ocurrirá y explica por qué.",
            "Introduce los objetos uno por uno y registra el resultado. Luego cambia la forma del papel aluminio: primero una bola compacta y después una pequeña embarcación. La comparación abre una conversación sobre densidad, forma y desplazamiento de agua.",
          ],
          bullets: ["Pregunta guía: ¿el peso por sí solo permite predecir el resultado?", "Evita objetos cortantes, oxidados o demasiado pequeños para la edad del grupo."],
        },
        {
          heading: "2. Una torre de líquidos",
          paragraphs: [
            "En un vaso alto y transparente agrega lentamente pequeñas cantidades de miel o jarabe, agua coloreada y aceite. Espera entre cada capa y observa desde el costado. Los líquidos se ordenan porque tienen densidades diferentes y algunos no se mezclan fácilmente.",
            "Para investigar, deja caer un objeto liviano y otro más denso. Observa hasta qué capa llega cada uno. No es necesario probar muchos materiales: el objetivo es describir la posición y buscar una explicación.",
          ],
          bullets: ["Pregunta guía: ¿por qué las capas conservan un orden?", "Usa sólo ingredientes conocidos y desecha la mezcla; no debe consumirse."],
        },
        {
          heading: "3. Pimienta que se aleja del jabón",
          paragraphs: [
            "Coloca agua en un plato, espolvorea poca pimienta molida y toca el centro con un cotonito que tenga una gota de lavalozas. La pimienta se desplazará rápidamente hacia los bordes por el cambio en la tensión superficial del agua.",
            "Repite con un cotonito limpio y compara. El valor científico está en identificar qué variable cambió y no en repetir el efecto muchas veces.",
          ],
          bullets: ["Pregunta guía: ¿el jabón empuja directamente cada grano de pimienta?", "Evita el contacto con ojos y lava las manos al finalizar."],
        },
        {
          heading: "4. Movimiento impulsado por aire",
          paragraphs: [
            "Construye una pista lisa y utiliza una bombilla para impulsar una bolita de papel o un pompón grande. Marca una línea de salida y compara qué ocurre al soplar suavemente, fuerte o desde distintos ángulos.",
            "Esta actividad permite hablar de fuerza, dirección y distancia. Para evitar compartir objetos que toquen la boca, cada participante debe tener su propia bombilla o se puede usar una pera de aire manual.",
          ],
          bullets: ["Pregunta guía: ¿qué cambia cuando el aire llega desde un costado?", "No uses piezas pequeñas con niños que puedan llevárselas a la boca."],
        },
        {
          heading: "5. Una reacción abierta de bicarbonato y vinagre",
          paragraphs: [
            "Coloca una cucharadita de bicarbonato en una bandeja o vaso abierto y agrega lentamente una pequeña cantidad de vinagre. Las burbujas corresponden a dióxido de carbono producido durante la reacción.",
            "Prueba una segunda vez cambiando sólo una cantidad y compara la duración o altura de la espuma. No selles la reacción, no acerques la cara al recipiente y limpia inmediatamente los derrames.",
          ],
          bullets: ["Pregunta guía: ¿más espuma significa necesariamente más gas total?", "Realiza la actividad sobre una bandeja y usa antiparras si existe riesgo de salpicadura."],
        },
        {
          heading: "Convertir el efecto en aprendizaje",
          paragraphs: [
            "Después de cada experiencia pregunta qué cambió, qué se mantuvo y qué evidencia respalda la explicación. Dibujar el antes y el después o registrar una predicción ayuda a que el experimento no quede reducido al momento de sorpresa.",
            "Si una actividad no resulta como se esperaba, no es un fracaso. Revisar cantidades, pasos y condiciones es parte del trabajo científico y suele generar conversaciones más interesantes que un resultado perfecto.",
          ],
        },
      ],
    },
    {
      ...sharedAuthor.es,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Revisión científica y pedagógica",
      reviewerRole: "Profesora de Química y Biología",
      slug: "que-es-educacion-stem",
      title: "Qué es la educación STEM y por qué es importante",
      excerpt: "Una explicación práctica de cómo ciencia, tecnología, ingeniería y matemática se conectan para investigar preguntas y mejorar soluciones.",
      category: "Educación STEM",
      readTime: "8 min",
      date: "20 de julio de 2026",
      updatedDate: "20 de julio de 2026",
      icon: "✦",
      tone: "yellow",
      image: "/images/blog/educacion-stem.webp",
      imageAlt: "Estudiantes diseñan, miden y prueban juntos un puente de papel como desafío STEM.",
      imageCaption: "Ilustración editorial original de un desafío STEM: diseñar, probar, registrar y mejorar.",
      takeaways: [
        "STEM integra disciplinas alrededor de un desafío; no consiste en enseñarlas por separado el mismo día.",
        "Probar, registrar y mejorar una solución es tan importante como obtener un resultado.",
        "Se puede trabajar STEM con papel, agua, cartón y preguntas bien diseñadas.",
      ],
      content: [
        {
          heading: "STEM es una forma de conectar aprendizajes",
          paragraphs: [
            "La sigla STEM reúne ciencia, tecnología, ingeniería y matemática. Su valor no está en nombrar cuatro áreas, sino en utilizarlas de manera integrada para comprender una situación o resolver un desafío cercano a las y los estudiantes.",
            "En una experiencia STEM se observa un fenómeno, se recopila información, se propone una solución, se construye un modelo y se revisa lo ocurrido. Las disciplinas aparecen porque son necesarias para avanzar, no porque deban cumplirse como una lista.",
          ],
          callout: "Una actividad se vuelve STEM cuando conecta preguntas, decisiones, datos y mejoras; no sólo porque utiliza materiales tecnológicos.",
        },
        {
          heading: "Un ejemplo: construir un puente de papel",
          paragraphs: [
            "El desafío puede formularse así: construir con dos hojas de papel un puente que cruce 20 centímetros y soporte la mayor cantidad posible de monedas. Antes de construir, los equipos observan formas, dibujan una idea y acuerdan cómo medirán el resultado.",
            "La ciencia aparece al analizar propiedades del material; la matemática, al medir y comparar; la ingeniería, al diseñar y mejorar; y la tecnología, al utilizar herramientas y procedimientos para alcanzar un propósito. Después de la primera prueba, cada equipo modifica una sola característica y vuelve a ensayar.",
          ],
        },
        {
          heading: "Cinco momentos de una experiencia STEM",
          paragraphs: ["Una secuencia simple ayuda a mantener el foco sin convertir la actividad en una receta cerrada."],
          bullets: [
            "Presentar un desafío comprensible y relevante para el grupo.",
            "Explorar materiales y formular una primera idea.",
            "Diseñar o representar la solución antes de construir.",
            "Probar con un criterio observable y registrar datos.",
            "Modificar, volver a probar y comunicar lo aprendido.",
          ],
        },
        {
          heading: "El rol de la persona adulta",
          paragraphs: [
            "Quien facilita no entrega inmediatamente la solución. Ayuda a delimitar el problema, cuida la seguridad y hace preguntas: ¿qué dato necesitan?, ¿cómo sabrán si mejoró?, ¿qué variable cambiarán? También distribuye roles para que diseñar, medir, construir y explicar sean tareas valoradas.",
            "El error se trata como información. Si el puente cae, el equipo puede revisar dónde se deformó, qué parte soportó más carga y qué cambiará en el siguiente intento. Esa posibilidad de iterar distingue un desafío de una manualidad con resultado único.",
          ],
        },
        {
          heading: "STEM con recursos accesibles",
          paragraphs: [
            "No se necesita un robot ni un laboratorio costoso. Cartón, papel, elásticos, recipientes, agua y elementos reutilizables pueden sostener desafíos de estructuras, energía, mezclas, aislación o movimiento.",
            "Lo que sí se necesita es una pregunta que admita distintas soluciones, criterios para comparar y tiempo para intentar más de una vez. Cuando los recursos son limitados, trabajar en equipos y reutilizar prototipos permite mantener la experiencia activa.",
          ],
        },
        {
          heading: "Cómo observar el aprendizaje",
          paragraphs: [
            "Además del resultado final, se puede evaluar si el equipo justifica decisiones, registra datos, escucha otras propuestas y utiliza la evidencia para mejorar. Una fotografía del prototipo, una tabla breve y una explicación oral ofrecen información suficiente sin aplicar una prueba tradicional.",
            "Una experiencia STEM bien diseñada deja una idea transferible: los problemas complejos se pueden dividir, probar y mejorar de manera colaborativa.",
          ],
        },
      ],
    },
    {
      ...sharedAuthor.es,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Revisión científica y pedagógica",
      reviewerRole: "Profesora de Química y Biología",
      slug: "aprender-ciencia-jugando-curiosidad",
      title: "Por qué aprender ciencia jugando mejora la curiosidad infantil",
      excerpt: "El juego guiado crea espacio para predecir, probar y equivocarse, mientras la persona adulta convierte la experiencia en una investigación.",
      category: "Ciencia para niños",
      readTime: "8 min",
      date: "20 de julio de 2026",
      updatedDate: "20 de julio de 2026",
      icon: "?",
      tone: "orange",
      image: "/images/blog/aprender-ciencia-jugando.webp",
      imageAlt: "Niñas y niños exploran materiales mediante un juego científico guiado por preguntas.",
      imageCaption: "Ilustración editorial original sobre juego guiado, exploración y curiosidad científica.",
      takeaways: [
        "Jugar no elimina el objetivo: lo convierte en una misión que invita a explorar.",
        "Las mejores preguntas adultas ayudan a observar sin entregar la respuesta.",
        "El cierre conecta lo vivido con una idea científica sencilla.",
      ],
      content: [
        {
          heading: "La curiosidad necesita espacio para actuar",
          paragraphs: [
            "Cuando una actividad comienza con materiales, una misión y tiempo para explorar, niñas y niños pueden formular preguntas antes de recibir una explicación completa. Esa autonomía hace visible lo que ya saben, lo que imaginan y lo que quieren comprobar.",
            "El juego reduce el temor a equivocarse porque permite probar alternativas. En ciencia, esa disposición es valiosa: una predicción que no se cumple abre la oportunidad de mirar con más atención y cambiar una idea.",
          ],
        },
        {
          heading: "Juego libre y juego guiado no son lo mismo",
          paragraphs: [
            "En el juego libre, el propósito y las reglas surgen principalmente de quienes participan. En el juego guiado, una persona adulta prepara el entorno y propone una meta amplia, pero deja abiertas las decisiones. Ambos tienen valor; para aprender un contenido científico, el segundo facilita conectar la exploración con una pregunta.",
            "Un ejemplo es desafiar al grupo a transportar una bolita sin tocarla directamente, utilizando cartón, tubos y aire. No se entrega un modelo terminado: se ofrecen materiales seguros, límites claros y tiempo para revisar las ideas.",
          ],
          callout: "La misión orienta; las decisiones de niñas y niños mantienen vivo el juego.",
        },
        {
          heading: "Cuatro preguntas que sostienen la investigación",
          paragraphs: ["La persona adulta puede acompañar sin convertir cada intento en una evaluación."],
          bullets: [
            "Predicción: ¿qué crees que ocurrirá si cambiamos esto?",
            "Observación: ¿qué viste, escuchaste o sentiste?",
            "Comparación: ¿qué fue diferente entre el primer y el segundo intento?",
            "Proyección: ¿qué probarías ahora para comprobar tu idea?",
          ],
        },
        {
          heading: "Adaptar el desafío a la edad",
          paragraphs: [
            "Con niñas y niños pequeños convienen acciones visibles, pocas reglas y tiempos breves. Clasificar, mezclar colores, buscar texturas o mover objetos permite nombrar cambios y semejanzas. En edades mayores se pueden incorporar mediciones, registros y restricciones de diseño.",
            "La dificultad debe permitir avances sin que la solución sea inmediata. Si nadie sabe cómo comenzar, se puede modelar una sola acción; si todos terminan de la misma forma en pocos segundos, se agrega una nueva condición.",
          ],
        },
        {
          heading: "Observar el aprendizaje sin interrumpir",
          paragraphs: [
            "Durante el juego, conviene registrar frases, estrategias y cambios de idea en lugar de corregir cada respuesta. También se puede fotografiar una construcción o pedir que el grupo dibuje el intento que funcionó mejor.",
            "Estas evidencias muestran curiosidad, colaboración y razonamiento. No se trata de premiar a quien llega primero, sino de reconocer quién observa, explica, escucha y vuelve a intentar.",
          ],
        },
        {
          heading: "Un cierre breve que deja una idea",
          paragraphs: [
            "Al finalizar, reúne al grupo y recupera dos o tres observaciones: qué intentaron, qué cambió y qué pregunta quedó abierta. Después introduce la explicación científica con palabras acordes a la edad.",
            "Así el juego conserva su energía y, al mismo tiempo, deja una idea que puede aparecer nuevamente en la casa, el patio o la sala de clases.",
          ],
        },
      ],
    },
    {
      ...sharedAuthor.es,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Revisión científica y pedagógica",
      reviewerRole: "Profesora de Química y Biología",
      slug: "importancia-juego-aire-libre-desarrollo-infantil",
      title: "Importancia del juego al aire libre en el desarrollo infantil",
      excerpt: "Qué aporta el juego libre en espacios exteriores al movimiento, la creatividad, la autonomía y la convivencia, según la investigación disponible.",
      category: "Desarrollo infantil",
      readTime: "9 min",
      date: "20 de julio de 2026",
      updatedDate: "20 de julio de 2026",
      icon: "☀",
      tone: "teal",
      image: "/images/blog/importancia-juego-aire-libre.webp",
      imageAlt: "Niñas y niños juegan al aire libre con ramas, hojas y elementos naturales mientras una persona adulta acompaña a distancia.",
      imageCaption: "Ilustración editorial original de Boom! Lab sobre juego libre, autonomía y exploración de la naturaleza.",
      takeaways: [
        "El exterior ofrece más posibilidades de movimiento, exploración y juego creado por niñas y niños.",
        "Los elementos naturales favorecen formas variadas de juego imaginativo y resolución de problemas.",
        "La tarea adulta es retirar peligros no evidentes y acompañar sin dirigir cada decisión.",
      ],
      content: [
        {
          heading: "Jugar afuera es más que gastar energía",
          paragraphs: [
            "Cuando niñas y niños salen al patio, una plaza o un entorno natural, no sólo cambian de escenario. Encuentran superficies, distancias, sonidos, materiales y desafíos que no están completamente definidos de antemano. Una rama puede convertirse en herramienta, límite o parte de una construcción; una pendiente invita a ajustar el equilibrio y una hoja despierta preguntas sobre forma, color o textura.",
            "Ese carácter abierto permite que el juego sea iniciado y transformado por quienes participan. Correr importa, pero también importa elegir, imaginar, negociar reglas, observar y volver a intentar.",
          ],
          callout: "El valor del juego al aire libre no depende de organizar una actividad perfecta, sino de disponer de tiempo, un lugar posible y margen para decidir.",
        },
        {
          heading: "Qué muestra la investigación disponible",
          paragraphs: [
            "Las investigaciones sobre juego exterior incluyen diseños, edades y contextos muy distintos. Por eso conviene hablar de tendencias y asociaciones, no de promesas automáticas. Una revisión sistemática encontró relaciones generalmente positivas entre el tiempo al aire libre, la actividad física y algunos indicadores de condición física, aunque advirtió que la evidencia disponible no permitía asumir causalidad en todos los casos.",
            "Otra revisión centrada en juego libre en la naturaleza identificó resultados positivos consistentes en actividad física y conductas de juego cognitivo, como el juego imaginativo y dramático. Sus autores también señalaron diferencias importantes entre los estudios y la necesidad de investigaciones más robustas.",
          ],
          sources: [
            { label: "Gray et al. (2015): revisión sistemática sobre tiempo al aire libre, actividad física y condición física", href: "https://www.mdpi.com/1660-4601/12/6/6455" },
            { label: "Dankiw et al. (2020): revisión sistemática sobre juego libre en la naturaleza y desarrollo infantil", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229006" },
          ],
        },
        {
          heading: "Movimiento, creatividad y convivencia",
          paragraphs: [
            "Un espacio exterior suele permitir desplazamientos amplios, cambios de velocidad, saltos, arrastre y equilibrio. Esas acciones aparecen dentro del propósito del juego y no sólo como una serie de ejercicios indicados por una persona adulta.",
            "Cuando hay tierra, agua, piedras, hojas, semillas o ramas, los materiales no tienen una única forma correcta de uso. Esto abre oportunidades para construir, clasificar, representar historias y resolver problemas. Al jugar con otras personas también se negocian turnos, límites, reglas y significados compartidos.",
          ],
        },
        {
          heading: "Autonomía y desafíos que se pueden evaluar",
          paragraphs: [
            "Jugar con un desafío no equivale a quedar expuesto a un peligro que no se puede reconocer. Equilibrarse sobre un tronco bajo, decidir desde dónde saltar o explorar una superficie irregular permite percibir límites, ajustar movimientos y tomar decisiones.",
            "Una revisión sistemática sobre juego exterior con riesgo encontró asociaciones positivas con actividad física y salud social, pero calificó la evidencia entre muy baja y moderada. La conclusión útil no es que todo riesgo sea beneficioso, sino que la seguridad debe distinguir entre un desafío visible que puede evaluarse y un peligro oculto que debe eliminarse.",
          ],
          sources: [
            { label: "Brussoni et al. (2015): revisión sistemática sobre juego exterior con riesgo y salud infantil", href: "https://www.mdpi.com/1660-4601/12/6/6423" },
          ],
        },
        {
          heading: "El papel de las personas adultas",
          paragraphs: [
            "Acompañar no significa intervenir en cada movimiento. La persona adulta revisa el lugar, retira vidrios, tránsito u otros peligros que una niña o niño no podría anticipar, acuerda límites comprensibles y permanece disponible.",
            "Durante el juego puede observar antes de ofrecer una solución y preguntar: ¿qué estás intentando?, ¿qué necesitas para hacerlo más estable?, ¿cómo sabrás si es seguro? La ayuda aumenta cuando la edad, el contexto o una necesidad particular lo requieren.",
            "En la práctica, este acompañamiento comienza por elegir un espacio permitido, visible y adecuado para la edad del grupo. Antes de iniciar también conviene considerar la sombra, la hidratación, el clima, la protección solar y la ropa, además de revisar la accesibilidad para ofrecer distintas maneras de participar.",
            "Los límites funcionan mejor cuando son simples y comprensibles. Así, la persona adulta puede observar y escuchar con atención, brindar apoyo cuando el desafío supera las capacidades actuales y, al mismo tiempo, evitar que el juego se transforme en una secuencia de instrucciones.",
          ],
        },
        {
          heading: "Cómo abrir más oportunidades de juego exterior",
          paragraphs: [
            "No todas las familias y comunidades tienen el mismo acceso a plazas seguras, patios, tiempo disponible o áreas verdes. Una revisión de 107 estudios mostró que el juego exterior depende de factores personales, familiares, sociales, ambientales y estacionales. Por eso no corresponde tratarlo sólo como una decisión individual.",
            "Escuelas, municipios, comunidades y familias pueden aportar protegiendo tiempos de juego, habilitando lugares cercanos y ofreciendo materiales simples. No siempre se necesita una gran área natural: un patio, una sede comunitaria o una plaza pueden ganar posibilidades con elementos sueltos, zonas de sombra y libertad para transformar el espacio.",
            "Una forma realista de ampliar estas oportunidades consiste en reservar momentos frecuentes sin un objetivo productivo ni una competencia de por medio. Cajas, telas, recipientes, cuerdas cortas y elementos naturales adecuados para la edad pueden enriquecer el entorno y dar origen a construcciones, recorridos, historias y nuevas preguntas.",
            "La exploración libre puede alternarse con preguntas breves que inviten a observar, siempre que estas no interrumpan la iniciativa de quienes juegan. Si una construcción o una investigación queda inconclusa, permitir que continúe otro día comunica que el proceso importa más que llegar rápidamente a un resultado terminado.",
          ],
          sources: [
            { label: "Lee et al. (2021): revisión sistemática de factores asociados al juego y tiempo al aire libre", href: "https://link.springer.com/article/10.1186/s12966-021-01097-9" },
          ],
        },
      ],
    },
    {
      ...sharedAuthor.es,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Revisión científica y pedagógica",
      reviewerRole: "Profesora de Química y Biología",
      slug: "como-ensenar-usar-lupa-ninos-pequenos",
      title: "Cómo enseñar a usar una lupa a niños pequeños",
      excerpt: "Una guía práctica para presentar la lupa, enseñar a enfocar, formular preguntas de observación y explorar seres vivos con cuidado.",
      category: "Ciencia para niños",
      readTime: "8 min",
      date: "20 de julio de 2026",
      updatedDate: "20 de julio de 2026",
      icon: "⌕",
      tone: "yellow",
      image: "/images/blog/como-usar-lupa-ninos-pequenos.webp",
      imageAlt: "Niñas y niños usan una lupa para observar lombrices y elementos del suelo durante una experiencia educativa de Boom! Lab.",
      imageCaption: "Fotografía autorizada de una experiencia Boom! Lab. El archivo incluye metadatos descriptivos, autoría, derechos y palabras clave.",
      takeaways: [],
      takeawayNarrative: "Para comenzar, conviene ofrecer una lupa grande, liviana y resistente. El aprendizaje se vuelve más sencillo cuando se practica con un objeto quieto, se mantiene la lente estable y se ajusta lentamente la distancia. El propósito inicial no es adivinar qué se observa, sino describir colores, formas, texturas y otros detalles.",
      content: [
        {
          heading: "La lupa: un primer instrumento científico",
          paragraphs: [
            "Para una niña o un niño pequeño, la lupa convierte un objeto conocido en un territorio lleno de líneas, pelos, puntos, bordes y texturas. Su valor no está sólo en hacer que algo se vea más grande: ayuda a detenerse, elegir dónde mirar y comparar lo que se observa a simple vista con lo que aparece a través de la lente.",
            "Antes de explicar nombres o conceptos, conviene permitir un breve momento de exploración. La primera meta es comprender que la lupa funciona mejor cuando se mantiene estable y se ajusta la distancia con paciencia.",
          ],
          callout: "Primero se aprende a mirar; después se conversa sobre lo que podría significar cada detalle.",
        },
        {
          heading: "Elegir una lupa adecuada",
          paragraphs: [
            "Para comenzar es preferible una lupa de mano grande, liviana, con mango cómodo, lente resistente —idealmente acrílica— y bordes redondeados. Una lente amplia permite encontrar la imagen con mayor facilidad que una lupa pequeña.",
            "Si trabajará un grupo, conviene disponer de varias lupas o formar parejas con turnos breves. Una sola herramienta para muchas personas suele transformar la exploración en espera.",
            "Antes de entregar el instrumento, una persona adulta debe comprobar que la lente esté firme, sin quebraduras ni bordes cortantes. El mango debe poder sostenerse con una mano y la lente se limpia con un paño suave para evitar que manchas o polvo dificulten la observación.",
            "Una bandeja de color claro ayuda a mantener el objeto quieto y mejora el contraste. Esta preparación sencilla permite que la atención se concentre en encontrar el foco y reconocer detalles, en vez de perseguir una muestra que se desplaza sobre la mesa.",
          ],
        },
        {
          heading: "Enseñar a enfocar paso a paso",
          paragraphs: [
            "Modela el procedimiento con un objeto conocido, como una hoja. Colócala sobre una bandeja y muestra los movimientos lentamente. Al principio se modifica una sola cosa por vez para que sea posible descubrir qué distancia produce una imagen más clara.",
            "La niña o el niño sostiene el mango con una mano sin tocar la lente, mientras el objeto permanece quieto sobre la mesa, una bandeja o la palma de una persona adulta. Luego ubica la lupa sobre la muestra y la mueve lentamente hacia arriba o hacia abajo hasta que los bordes y detalles se vean nítidos.",
            "Una vez encontrado el foco, puede recorrer distintas partes del objeto con movimientos pequeños. Evitar que la cabeza, la lupa y la muestra se muevan al mismo tiempo facilita comprender qué ajuste permitió obtener una imagen clara.",
          ],
        },
        {
          heading: "Practicar primero con objetos simples",
          paragraphs: [
            "Comienza con objetos planos, inmóviles y contrastantes: una hoja con nervaduras, una piedra, un trozo de corteza, una pluma, una tela o una impresión de huella digital. Son más fáciles de enfocar que un insecto que se mueve.",
            "Cuando el grupo ya controla la distancia, incorpora muestras con volumen y después observaciones al aire libre. No es necesario reunir muchos objetos: comparar dos superficies con atención suele generar mejores descripciones que pasar rápidamente por una colección completa.",
          ],
        },
        {
          heading: "Preguntas que ayudan a observar",
          paragraphs: [
            "Preguntar solamente “¿qué es?” puede convertir la actividad en una adivinanza. Las preguntas de observación dirigen la atención hacia evidencias que todas y todos pueden describir, aunque todavía no conozcan el nombre del objeto.",
            "Eberbach y Crowley explican que la observación científica no es una habilidad automática: se desarrolla al aprender qué detalles resultan relevantes, relacionar lo observado con ideas previas y registrar los hallazgos. Por eso, la lupa es más útil cuando se acompaña de conversación, comparación y dibujo, en lugar de utilizarse únicamente para agrandar una imagen.",
            "La conversación puede comenzar preguntando qué colores aparecen de cerca y si se distinguen líneas, puntos, pelos, capas o bordes. Después se puede comparar qué partes parecen lisas o rugosas, identificar un detalle que no era visible sin la lupa y buscar semejanzas y diferencias entre dos muestras.",
            "Para cerrar, invita a representar mediante un dibujo el detalle observado en un tamaño mucho mayor. Dibujar obliga a volver a mirar, seleccionar rasgos y dejar un registro que luego puede compararse con la muestra o con las observaciones de otras personas.",
          ],
          sources: [
            { label: "Eberbach y Crowley (2009): cómo niñas y niños avanzan desde la observación cotidiana hacia la observación científica", href: "https://journals.sagepub.com/doi/10.3102/0034654308325899" },
          ],
        },
        {
          heading: "Observar pequeños animales con respeto",
          paragraphs: [
            "Si se observan lombrices, caracoles o insectos, la prioridad es reducir la manipulación. Siempre que sea posible, se miran en el lugar donde fueron encontrados o dentro de un recipiente amplio, ventilado y preparado por una persona adulta.",
            "La observación debe ser breve. Los animales se protegen del sol y del calor, no se aprietan ni se pasan de mano en mano y se devuelven al mismo sitio. Después de trabajar con suelo o seres vivos, todas las personas se lavan las manos.",
          ],
        },
        {
          heading: "Una actividad breve: detectives de detalles",
          paragraphs: [
            "Prepara tres o cuatro muestras seguras en bandejas numeradas. Cada pareja observa una muestra sin lupa, dibuja un detalle y luego repite la observación utilizando la lente. Para cerrar, compara ambos dibujos y completa una frase: “Con la lupa descubrimos que…”.",
            "La actividad permite verificar el uso de la herramienta sin aplicar una prueba. La persona adulta observa si se sostiene el mango, se ajusta la distancia lentamente, se cuida la muestra y se comunica al menos un detalle.",
          ],
        },
        {
          heading: "Seguridad y cuidado de la lupa",
          paragraphs: [
            "Nunca se debe mirar el Sol ni una luz intensa a través de una lupa. Tampoco se deja la lente bajo el sol, porque puede concentrar la luz y provocar una quemadura o iniciar fuego. Esta regla se explica antes de entregar el instrumento y se mantiene supervisión adulta durante toda la actividad.",
            "Al finalizar, limpia la lente con un paño suave, revisa que no existan daños y guarda cada lupa en una funda o caja separada. Cuidar la herramienta también forma parte del trabajo científico.",
            "Durante su uso, la lente no se apoya sobre los ojos, la boca ni el rostro. La lupa se transporta por el mango y se devuelve a su lugar inmediatamente después de ocuparla, de modo que no quede expuesta a la luz solar ni pueda caer o dañarse.",
          ],
        },
      ],
    },
  ],
  en: [
    {
      ...sharedAuthor.en,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Review of the Spanish source",
      reviewerRole: "Chemistry and Biology Teacher",
      slug: "how-to-plan-a-school-science-day",
      title: "How to plan a science day at school",
      excerpt: "A practical route for defining learning goals, stations, timing, safety and evaluation without overloading the education team.",
      category: "School activities",
      readTime: "9 min",
      date: "July 20, 2026",
      updatedDate: "July 20, 2026",
      icon: "⌁", tone: "orange",
      image: "/images/blog/como-organizar-jornada-cientifica.webp",
      imageAlt: "Students rotate through science-day stations with adult guidance.",
      imageCaption: "Original Boom! Lab editorial illustration of a school science day organised into stations.",
      takeaways: ["Begin with an observable learning goal, not a list of experiments.", "Shape rotations around age, attention, space and available adults.", "Close with evidence: observations, explanations and new questions."],
      content: [
        { heading: "Start with what students should learn", paragraphs: ["A strong science day begins with one specific question: what should students observe, test, compare or explain by the end? This goal helps the team choose age-appropriate activities and prevents the day from becoming a collection of unrelated effects.", "The goal can remain simple. Younger students may compare how materials behave, while older groups can control one variable or defend an explanation with evidence."] },
        { heading: "Run a practical diagnosis", paragraphs: ["Before building the programme, gather the school’s real conditions. This early conversation reduces last-minute changes and helps adapt language, materials and pace."], bullets: ["Student numbers, ages and participating classes.", "Available time and possible rotation pattern.", "Rooms, courtyard, water, electricity and accessibility.", "Teachers and adults available at each station.", "Existing resources, sensory needs and material budget."] },
        { heading: "Choose a format that holds attention", paragraphs: ["Stations are often easier to manage than a long demonstration. Each needs one central action, a visible question and an outcome that can be observed within a short period.", "For groups needing more support, reduce the number of steps and assign roles such as handling materials, observing, recording and explaining."], bullets: ["A 10–15 minute shared opening.", "Stations of roughly 15–25 minutes.", "Short reset periods between rotations.", "A 15-minute shared closing conversation."] },
        { heading: "Plan safety, setup and responsibilities", paragraphs: ["These are the main elements to consider when preparing each station:"], bullets: ["Materials and quantities used in the activity.", "Foreseeable risks and preventive measures.", "Required personal protective equipment.", "Cleaning, waste disposal or storage procedures.", "The adult responsible for supervising the station.", "Clear restrictions: avoid unknown mixtures, sealed gas-producing reactions and anything that could be mistaken for food."] },
        { heading: "Prepare the space", paragraphs: ["Plan circulation, stable tables, protected floors, handwashing and separation from food. Test the exact quantities beforehand to estimate timing and identify problems before students arrive."] },
        { heading: "Evaluate without turning the day into a test", paragraphs: ["Students can finish a station with a sentence such as ‘we observed…’, draw a result or suggest one variable to change.", "A checklist can record simple, observable criteria for each student or group. It can be paired with process assessment that considers participation, hypotheses, safety, evidence, collaboration and changes of mind during the experience.", "This evidence is not meant to grade the moment of surprise. It supports feedback, future planning and connections with later lessons."], bullets: ["Participates and handles or observes materials safely.", "Understands and follows the station instructions.", "Records an observation or evidence from the result.", "Explains what happened using observations.", "Collaborates and respects agreed roles.", "Suggests a question, improvement or new trial."] },
        { heading: "A final checklist", paragraphs: ["Confirm the programme, people, materials and room plan one week before the event. Prepare labelled boxes and spares the day before, then record inventory and team observations afterwards.", "Boom! Lab can adapt this structure to one workshop, a STEM day or a multi-session programme, always starting from the school’s context."] },
      ],
    },
    {
      ...sharedAuthor.en,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Review of the Spanish source",
      reviewerRole: "Chemistry and Biology Teacher",
      slug: "safe-science-experiments-for-children",
      title: "5 safe science experiments to try with children",
      excerpt: "Five ways to explore density, surface tension, movement and reactions with everyday materials, clear questions and adult supervision.",
      category: "Safe experiments",
      readTime: "10 min",
      date: "July 20, 2026", updatedDate: "July 20, 2026",
      icon: "⚗", tone: "teal",
      image: "/images/blog/experimentos-seguros-ninos.webp",
      imageAlt: "An organised table with five child-friendly experiments and adult supervision.",
      imageCaption: "Original editorial illustration. Every activity requires adult supervision and small quantities.",
      takeaways: ["Use familiar materials, small quantities and open containers.", "Pair every visual effect with a question and observation time.", "Never mix cleaning products or ingest the materials."],
      content: [
        { heading: "Prepare a safe environment", paragraphs: ["Science with children requires a clear table, labelled materials, short instructions and continuous adult supervision. Keep quantities small and make it clear that none of the materials are food.", "Protect the surface, tie back long hair, check sensitivities and use goggles where splashes are possible. Never mix cleaning products or seal a reaction that releases gas."], callout: "These low-risk educational ideas still require the judgement and supervision of a responsible adult." },
        { heading: "1. Will it float or sink?", paragraphs: ["Place clean objects made from different materials beside a transparent tub of water. Ask for predictions before testing one object at a time.", "Change aluminium foil from a compact ball into a small boat and compare. This opens discussion about density, shape and displaced water."], bullets: ["Guiding question: does weight alone predict the result?", "Avoid sharp, rusty or age-inappropriate small objects."] },
        { heading: "2. A liquid tower", paragraphs: ["Slowly layer syrup, coloured water and oil in a tall clear glass. The liquids settle according to density and how readily they mix.", "Drop one light and one denser object, then describe where each stops. Dispose of the mixture; do not drink it."], bullets: ["Guiding question: why do the layers keep this order?"] },
        { heading: "3. Pepper moves away from soap", paragraphs: ["Sprinkle a small amount of pepper on water in a plate, then touch the centre with a cotton bud holding one drop of dish soap. The pepper moves as the water’s surface tension changes.", "Compare with a clean cotton bud and identify the single variable that changed."], bullets: ["Keep soap away from eyes and wash hands afterwards."] },
        { heading: "4. Motion powered by air", paragraphs: ["Use a straw or manual air blower to move a paper ball along a smooth track. Compare gentle and stronger airflow or different directions.", "Give each participant a separate straw and avoid small pieces with children who may put them in their mouths."], bullets: ["Guiding question: what changes when air arrives from the side?"] },
        { heading: "5. An open baking-soda reaction", paragraphs: ["Place a teaspoon of baking soda in an open tray or cup and slowly add a small amount of vinegar. The bubbles are carbon dioxide produced by the reaction.", "Change only one quantity in a second trial and compare duration or foam height. Never seal the reaction or lean over the container."], bullets: ["Work on a tray and use goggles where splashing is possible."] },
        { heading: "Turn the effect into learning", paragraphs: ["Ask what changed, what stayed the same and what evidence supports the explanation. Drawing before and after or recording a prediction helps move beyond surprise.", "An unexpected result is useful information: review quantities, steps and conditions instead of treating it as failure."] },
      ],
    },
    {
      ...sharedAuthor.en,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Review of the Spanish source",
      reviewerRole: "Chemistry and Biology Teacher",
      slug: "what-is-stem-education",
      title: "What is STEM education and why does it matter?",
      excerpt: "A practical look at how science, technology, engineering and mathematics connect through investigation and iterative design.",
      category: "STEM education",
      readTime: "8 min",
      date: "July 20, 2026", updatedDate: "July 20, 2026",
      icon: "✦", tone: "yellow",
      image: "/images/blog/educacion-stem.webp",
      imageAlt: "Students design, measure and test a paper bridge together as a STEM challenge.",
      imageCaption: "Original editorial illustration of a STEM cycle: design, test, record and improve.",
      takeaways: ["STEM integrates disciplines around a challenge.", "Testing, recording and improving matter as much as the final result.", "Paper, water, cardboard and strong questions can support STEM learning."],
      content: [
        { heading: "STEM connects learning areas", paragraphs: ["STEM brings together science, technology, engineering and mathematics. Its value lies in using those areas together to understand a situation or solve a meaningful challenge.", "Students observe, gather information, propose a solution, build a model and review what happened. Each discipline appears because it helps the group move forward."], callout: "An activity becomes STEM through connected questions, decisions, evidence and improvement—not simply through the use of technology." },
        { heading: "Example: a paper bridge", paragraphs: ["Challenge teams to use two sheets of paper to span 20 centimetres and hold as many coins as possible. They observe forms, sketch an idea and agree how results will be measured.", "Science supports material observations; mathematics supports measurement; engineering shapes design; and technology includes the tools and procedures used for a purpose. Teams change one feature after the first trial."] },
        { heading: "Five moments in a STEM experience", paragraphs: ["A simple sequence keeps the investigation focused without prescribing one correct solution."], bullets: ["Present a clear, relevant challenge.", "Explore materials and initial ideas.", "Represent a design before building.", "Test against an observable criterion and record data.", "Modify, retest and communicate learning."] },
        { heading: "The adult’s role", paragraphs: ["The facilitator defines the problem, protects safety and asks questions instead of immediately giving the solution: what data do you need, how will you know it improved and what will you change?", "Errors become information. A failed bridge can reveal deformation, load paths and useful next steps."] },
        { heading: "STEM with accessible resources", paragraphs: ["Robots and expensive laboratories are not essential. Cardboard, paper, rubber bands, containers and reusable elements can support challenges involving structures, energy, mixtures or movement.", "What matters is a question with several possible solutions, a comparison criterion and enough time for more than one attempt."] },
        { heading: "Observe the process, not only the product", paragraphs: ["Look for justified decisions, useful records, listening and evidence-based changes. A photo, a short table and an oral explanation can document learning.", "A well-designed STEM experience leaves a transferable idea: complex problems can be divided, tested and improved collaboratively."] },
      ],
    },
    {
      ...sharedAuthor.en,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Review of the Spanish source",
      reviewerRole: "Chemistry and Biology Teacher",
      slug: "learning-science-through-play",
      title: "Why learning science through play supports curiosity",
      excerpt: "Guided play creates room to predict, test and revise ideas while an adult helps turn experience into investigation.",
      category: "Science for children",
      readTime: "8 min",
      date: "July 20, 2026", updatedDate: "July 20, 2026",
      icon: "?", tone: "orange",
      image: "/images/blog/aprender-ciencia-jugando.webp",
      imageAlt: "Children explore materials through a science game guided by questions.",
      imageCaption: "Original editorial illustration about guided play, exploration and scientific curiosity.",
      takeaways: ["Play turns a learning goal into a mission that invites exploration.", "Good adult questions support observation without giving away the answer.", "A short closing links the experience to a simple scientific idea."],
      content: [
        { heading: "Curiosity needs room to act", paragraphs: ["Materials, a mission and time to explore let children ask questions before receiving a full explanation. This autonomy reveals what they know, imagine and want to test.", "Play lowers the fear of being wrong. In science, a prediction that does not match the result invites closer observation and a revised idea."] },
        { heading: "Free play and guided play", paragraphs: ["In free play, participants largely shape the goal and rules. In guided play, an adult prepares the setting and offers a broad mission while leaving decisions open.", "A group might be challenged to move a ball without touching it, using cardboard, tubes and air. The adult provides safe materials and boundaries, not a finished model."], callout: "The mission provides direction; children’s decisions keep the play alive." },
        { heading: "Four questions that support inquiry", paragraphs: ["Adults can guide without turning every attempt into a test."], bullets: ["Prediction: what do you think will happen if we change this?", "Observation: what did you see, hear or feel?", "Comparison: what differed between the first and second attempt?", "Next step: what could you test now?"] },
        { heading: "Adapt the challenge to age", paragraphs: ["Young children benefit from visible actions, few rules and short cycles. Older groups can add measurement, records and design restrictions.", "The difficulty should allow progress without making the answer immediate. Model one action if nobody can begin; add a condition if every solution appears at once."] },
        { heading: "Observe without interrupting", paragraphs: ["Record phrases, strategies and changes of mind rather than correcting every response. Photographing a model or asking for a drawing can preserve useful evidence.", "Value observation, explanation, listening and renewed attempts—not simply the fastest answer."] },
        { heading: "Close with one reusable idea", paragraphs: ["Gather two or three observations: what was tried, what changed and what question remains. Then introduce the scientific explanation in age-appropriate language.", "The play keeps its energy while leaving an idea that can reappear at home, outside or in the classroom."] },
      ],
    },
    {
      ...sharedAuthor.en,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Review of the Spanish source",
      reviewerRole: "Chemistry and Biology Teacher",
      slug: "why-outdoor-play-matters-for-child-development",
      title: "Why outdoor play matters for child development",
      excerpt: "What child-led outdoor play can contribute to movement, creativity, autonomy and social development, according to the available research.",
      category: "Child development",
      readTime: "9 min",
      date: "July 20, 2026", updatedDate: "July 20, 2026",
      icon: "☀", tone: "teal",
      image: "/images/blog/importancia-juego-aire-libre.webp",
      imageAlt: "Children play outdoors with branches, leaves and natural materials while an adult observes from a respectful distance.",
      imageCaption: "Original Boom! Lab editorial illustration about child-led play, autonomy and nature exploration.",
      takeaways: ["Outdoor spaces offer varied opportunities for movement, exploration and child-led play.", "Natural loose parts can support imaginative play and problem-solving.", "Adults remove hidden hazards while leaving room for children to make decisions."],
      content: [
        { heading: "Outdoor play is more than using up energy", paragraphs: ["A courtyard, park or natural area offers surfaces, distances, sounds and materials that are not fully defined in advance. A branch can become a tool or part of a construction, while a slope invites children to adjust balance and speed.", "Movement matters, but so do choice, imagination, shared rule-making, observation and repeated attempts."], callout: "Outdoor play does not require a perfect activity—only time, a possible place and room for children to decide." },
        { heading: "What the available research shows", paragraphs: ["Outdoor-play studies use different ages, settings and methods, so findings should be described as trends and associations rather than automatic promises. One systematic review found generally positive relationships between outdoor time, physical activity and some fitness indicators, while warning that causality could not always be established.", "A review of unstructured nature play reported consistent positive outcomes for physical activity and cognitive play behaviours, including imaginative and dramatic play, while also identifying limitations in the evidence base."], sources: [{ label: "Gray et al. (2015): systematic review of outdoor time, physical activity and fitness", href: "https://www.mdpi.com/1660-4601/12/6/6455" }, { label: "Dankiw et al. (2020): systematic review of unstructured nature play and child development", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229006" }] },
        { heading: "Movement, creativity and social play", paragraphs: ["Outdoor spaces often allow larger movements, varied speeds, jumping, pulling and balancing. These actions arise within the purpose of play rather than as a list of adult-led exercises.", "Soil, water, stones, leaves and branches have no single correct use. They invite construction, classification, stories and problem-solving, while shared play involves negotiating turns, rules and meanings."] },
        { heading: "Autonomy and manageable challenge", paragraphs: ["A visible challenge is not the same as a hidden hazard. Balancing on a low log or choosing where to step allows children to notice limits and adjust their actions.", "A systematic review found positive associations between risky outdoor play, physical activity and social health, but rated the evidence from very low to moderate. The practical lesson is to distinguish challenges children can assess from hazards adults need to remove."], sources: [{ label: "Brussoni et al. (2015): systematic review of risky outdoor play and child health", href: "https://www.mdpi.com/1660-4601/12/6/6423" }] },
        { heading: "The adult’s role", paragraphs: ["Adults inspect the setting, remove traffic, broken glass or other hazards children cannot anticipate, agree clear boundaries and remain available without stepping into every decision.", "Observation can come before solutions: what are you trying, what would make it more stable, and how will you know it is safe? Support increases with age, context and individual need.", "In practice, this support begins with choosing a permitted, visible setting that suits the group’s age. Before play starts, adults can also consider shade, drinking water, weather, sun protection and suitable clothing, while checking accessibility and providing different ways for every child to participate.", "Boundaries work best when they are simple and easy to understand. This allows adults to observe and listen closely, offer help when a challenge exceeds a child’s current capabilities and avoid turning play into a sequence of instructions."] },
        { heading: "Creating more opportunities", paragraphs: ["Families and communities do not have equal access to safe parks, courtyards, time or green space. A review of 107 studies showed that outdoor play is shaped by individual, family, social, environmental and seasonal factors, so it should not be framed only as a personal choice.", "Schools, councils, communities and families can protect playtime, improve nearby settings and offer simple loose materials. Even a small courtyard or community space can support outdoor play when children may transform it.", "A realistic way to create more opportunities is to protect regular periods of time without a productive goal or competition. Age-appropriate boxes, fabric, containers, short ropes and natural loose parts can enrich the setting and inspire constructions, pathways, stories and new questions.", "Free exploration can be accompanied by occasional observation questions, as long as they do not interrupt children’s initiative. When a construction or investigation remains unfinished, allowing it to continue another day shows that the process matters more than reaching a finished result quickly."], sources: [{ label: "Lee et al. (2021): systematic review of factors associated with children’s outdoor play and time", href: "https://link.springer.com/article/10.1186/s12966-021-01097-9" }] },
      ],
    },
    {
      ...sharedAuthor.en,
      reviewer: "Victoria Del Real",
      reviewerLabel: "Review of the Spanish source",
      reviewerRole: "Chemistry and Biology Teacher",
      slug: "how-to-teach-young-children-to-use-a-magnifying-glass",
      title: "How to teach young children to use a magnifying glass",
      excerpt: "A practical guide to introducing a magnifying glass, finding focus, asking observation questions and examining living things with care.",
      category: "Science for children",
      readTime: "8 min",
      date: "July 20, 2026", updatedDate: "July 20, 2026",
      icon: "⌕", tone: "yellow",
      image: "/images/blog/como-usar-lupa-ninos-pequenos.webp",
      imageAlt: "Children use a magnifying glass to observe earthworms and soil during a Boom! Lab learning experience.",
      imageCaption: "Authorised photograph from a Boom! Lab experience. The file contains descriptive, creator, rights and keyword metadata.",
      takeaways: [],
      takeawayNarrative: "Begin with a large, lightweight and durable magnifier. Learning is easier when children practise with a still object, keep the lens steady and adjust the distance slowly. The first purpose is not to guess what they are seeing, but to describe colours, shapes, textures and other details.",
      content: [
        { heading: "A first scientific instrument", paragraphs: ["A magnifying glass turns a familiar object into a field of lines, hairs, dots, edges and textures. It does more than make things look larger: children choose where to look and compare unaided vision with the view through a lens.", "Allow a short exploration before explaining names. The first goal is learning that a steady lens and patient distance adjustment produce a clearer image."], callout: "Learn to look first; discuss what each detail might mean afterwards." },
        { heading: "Choose the right magnifier", paragraphs: ["Use a large, lightweight hand lens with a comfortable handle, durable acrylic lens and rounded edges. A wide lens is easier to focus than a small one.", "Provide several magnifiers or use pairs with short turns. One tool for a large group creates waiting rather than exploration.", "Before handing it over, an adult should check that the lens is secure and free from cracks or sharp edges. The handle should fit comfortably in one hand, and the lens can be cleaned with a soft cloth so dust and marks do not interfere with observation.", "A light-coloured tray keeps the object still and improves contrast. This simple preparation lets children focus on finding a clear image and noticing details instead of chasing a sample across the table."] },
        { heading: "Teach focusing step by step", paragraphs: ["Model with a familiar object such as a leaf. Change only one thing at a time so children can discover the useful distance.", "The child holds the handle with one hand without touching the lens while the object stays still on a table, tray or adult palm. The magnifier is placed above the sample and moved slowly up or down until edges and details appear sharp.", "Once the image is focused, the child can explore different areas with small movements. Avoiding simultaneous movement of the head, lens and sample makes it easier to understand which adjustment produced the clear image."] },
        { heading: "Practise with simple objects", paragraphs: ["Begin with flat, still, high-contrast objects: a veined leaf, stone, bark, feather, fabric or fingerprint. These are easier than a moving insect.", "Once the group controls distance, introduce three-dimensional samples and outdoor observation. Comparing two surfaces carefully is often more useful than rushing through a large collection."] },
        { heading: "Questions that support observation", paragraphs: ["Asking only ‘what is it?’ turns the activity into guessing. Observation questions direct attention to evidence even when children do not know the object’s name.", "Eberbach and Crowley explain that scientific observation is not an automatic skill: it develops as learners notice relevant details, connect observations with prior ideas and record what they find. A magnifier therefore becomes more useful when it supports conversation, comparison and drawing rather than simply enlarging an image.", "Begin by asking which colours appear close up and whether children can see lines, dots, hairs, layers or edges. They can then compare smooth and rough areas, identify a detail that was invisible without the lens and look for similarities and differences between two samples.", "To close, invite children to draw one observed detail at a much larger scale. Drawing encourages them to look again, select features and leave a record that can be compared with the sample or with another person’s observations."], sources: [{ label: "Eberbach and Crowley (2009): how children move from everyday towards scientific observation", href: "https://journals.sagepub.com/doi/10.3102/0034654308325899" }] },
        { heading: "Observe small animals respectfully", paragraphs: ["If earthworms, snails or insects are involved, reduce handling. Observe them where they were found or in a wide, ventilated container prepared by an adult.", "Keep observation brief, avoid heat and direct sun, never squeeze or pass animals from hand to hand, and return them to the same place. Wash hands after contact with soil or living things."] },
        { heading: "A short activity: detail detectives", paragraphs: ["Place three or four safe samples in numbered trays. Pairs draw one detail without a magnifier, repeat with the lens and finish the sentence: ‘With the magnifier we discovered…’. ", "Adults can observe whether children use the handle, adjust distance slowly, protect the sample and communicate one detail—without turning the activity into a test."] },
        { heading: "Safety and care", paragraphs: ["Never look at the Sun or a bright light through a magnifying glass. Do not leave the lens in sunlight because it can focus light and cause burns or start a fire. Explain this rule before handing out the tool and supervise throughout.", "Clean with a soft cloth, check for damage and store each magnifier separately. Caring for a tool is part of scientific practice.", "During use, the lens should not be placed against the eyes, mouth or face. Children carry the magnifier by its handle and return it immediately after use so it is not left in sunlight or exposed to falls and damage."] },
      ],
    },
  ],
};

export function getBlogPost(locale: Locale, slug: string) {
  return blogPosts[locale].find((post) => post.slug === slug);
}
