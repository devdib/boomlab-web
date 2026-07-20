import type { Locale } from "./content";

export type BlogSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  callout?: string;
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
      slug: "actividades-cientificas-cumpleanos-infantiles",
      title: "Ideas de actividades científicas para cumpleaños infantiles",
      excerpt: "Cómo elegir una experiencia participativa, segura y compatible con la edad, el espacio y el ritmo completo de una celebración.",
      category: "Consejos para familias",
      readTime: "8 min",
      date: "20 de julio de 2026",
      updatedDate: "20 de julio de 2026",
      icon: "✺",
      tone: "teal",
      image: "/images/blog/actividades-cientificas-cumpleanos.webp",
      imageAlt: "Niñas y niños participan en una actividad científica de cumpleaños con materiales seguros y coloridos.",
      imageCaption: "Ilustración editorial original de una celebración científica participativa y organizada.",
      takeaways: [
        "La actividad debe ajustarse a la edad, cantidad de participantes y tolerancia del espacio al agua o residuos.",
        "Un formato equilibrado combina demostración, participación y un cierre común.",
        "Montaje, ejecución y desmontaje deben acordarse antes de la celebración.",
      ],
      content: [
        {
          heading: "Una experiencia central, no una pausa improvisada",
          paragraphs: [
            "Una actividad científica puede convertirse en el momento principal de un cumpleaños cuando todas y todos tienen algo que observar, decidir o hacer. Para lograrlo, el experimento debe funcionar con grupos, tener instrucciones breves y producir un resultado visible sin exigir una espera demasiado larga.",
            "También necesita encajar en el ritmo de la celebración. Conviene definir con anticipación cuándo se realizará, qué ocurrirá con la comida y dónde esperarán quienes terminen antes.",
          ],
        },
        {
          heading: "Cinco formatos que se pueden adaptar",
          paragraphs: ["La elección depende más del grupo y del espacio que del efecto más espectacular."],
          bullets: [
            "Volcanes y reacciones: demostración central con participación por turnos y protección de superficies.",
            "Exploración con lupas: estaciones con elementos naturales, observación y desafíos de clasificación.",
            "Paleontología: búsqueda, excavación simulada y conversación sobre evidencias del pasado.",
            "Polímeros y materiales: comparación de texturas y propiedades con recetas previamente probadas.",
            "Desafíos de movimiento: construir, lanzar o impulsar objetos livianos con criterios simples.",
          ],
        },
        {
          heading: "Edad, cantidad y nivel de participación",
          paragraphs: [
            "Para edades pequeñas es preferible una secuencia corta, visual y con ayuda adulta cercana. En grupos mayores se pueden asignar roles y agregar predicciones o mediciones. Si existe una diferencia amplia de edades, conviene preparar una responsabilidad adicional para quienes terminan más rápido.",
            "El número de participantes define cuántos materiales duplicar y cuántas personas deben acompañar. Una experiencia de Boom! Lab suele organizarse para que cada niña o niño tenga un turno claro, evitando que el grupo dependa de una única demostración.",
          ],
        },
        {
          heading: "Espacio y tiempos realistas",
          paragraphs: [
            "Reserva una zona con mesas estables, circulación segura y distancia respecto de alimentos, regalos y equipos electrónicos. Si habrá agua, espuma o tierra, informa previamente cómo se protegerán pisos y muebles.",
            "Como referencia de planificación, un formato puede considerar 20 a 30 minutos de montaje, 45 a 60 minutos de experiencia y 15 a 25 minutos de desmontaje. El tiempo exacto se confirma según actividad y lugar, manteniendo el ciclo completo dentro de dos horas cuando las condiciones lo permiten.",
          ],
          callout: "El efecto sorpresa funciona mejor cuando la logística permanece invisible para las familias.",
        },
        {
          heading: "Seguridad y convivencia con la celebración",
          paragraphs: [
            "Los materiales se mantienen identificados y fuera del alcance hasta comenzar. Se separan alimentos, se revisan alergias y se dispone de agua para lavado. Cuando existe riesgo de salpicadura se utilizan antiparras y la persona facilitadora controla cantidades y turnos.",
            "Además del equipo que guía la actividad, debe permanecer una persona adulta responsable de la celebración. Su función es acompañar necesidades individuales y mantener despejada el área de trabajo.",
          ],
        },
        {
          heading: "Preguntas antes de cotizar",
          paragraphs: ["Entregar esta información permite recomendar un formato posible y transparente."],
          bullets: [
            "Edad de quien celebra y rango de edades de invitados.",
            "Cantidad aproximada de participantes y adultos presentes.",
            "Comuna, fecha, horario y si el lugar es interior o exterior.",
            "Disponibilidad de mesas, agua y protección de pisos.",
            "Intereses del grupo, necesidades de apoyo y restricciones del recinto.",
          ],
        },
      ],
    },
    {
      ...sharedAuthor.es,
      slug: "acercar-ciencia-colegios-rurales",
      title: "Cómo acercar la ciencia a colegios rurales",
      excerpt: "Laboratorios móviles, materiales transportables y preguntas conectadas con el territorio pueden ampliar el acceso a experiencias prácticas.",
      category: "Ciencia y territorio",
      readTime: "9 min",
      date: "20 de julio de 2026",
      updatedDate: "20 de julio de 2026",
      icon: "◎",
      tone: "yellow",
      image: "/images/blog/acercar-ciencia-colegios-rurales.webp",
      imageAlt: "Laboratorio móvil llega a una escuela rural y utiliza el entorno como espacio de investigación.",
      imageCaption: "Ilustración editorial original sobre ciencia móvil, territorio y comunidades escolares rurales.",
      takeaways: [
        "El territorio es una fuente de preguntas, materiales y conocimiento local.",
        "La planificación debe asumir conectividad e infraestructura variables.",
        "Un piloto bien documentado puede crecer hacia un programa recurrente.",
      ],
      content: [
        {
          heading: "La ausencia de laboratorio no debe ser una barrera",
          paragraphs: [
            "Muchas experiencias científicas pueden realizarse con estaciones móviles, materiales transportables y protocolos que se adapten a una sala, patio o sede comunitaria. El diseño comienza por reconocer las condiciones disponibles, no por intentar reproducir un laboratorio urbano completo.",
            "Esto implica preparar alternativas que funcionen sin internet, con consumo acotado de agua y electricidad, y con elementos que puedan limpiarse, reponerse o reutilizarse fácilmente.",
          ],
        },
        {
          heading: "Investigar preguntas que nacen del territorio",
          paragraphs: [
            "Agua, suelo, biodiversidad, clima, energía y producción local ofrecen preguntas cercanas a la experiencia de cada comunidad. Observar la retención de agua en distintos suelos o comparar adaptaciones de plantas puede conectar contenidos escolares con un entorno conocido.",
            "La comunidad posee conocimientos que enriquecen la actividad. Familias, agricultores, recolectores, guardaparques y personas mayores pueden aportar observaciones históricas y problemas reales para investigar.",
          ],
          callout: "Acercar la ciencia no es llevar respuestas terminadas: es crear herramientas para investigar preguntas relevantes en cada lugar.",
        },
        {
          heading: "Información necesaria antes de viajar",
          paragraphs: ["Una conversación previa evita depender de infraestructura inexistente y permite transportar sólo lo necesario."],
          bullets: [
            "Matrícula, edades, cursos combinados y asistencia habitual.",
            "Condiciones de camino, distancia, horarios de transporte y espacio de descarga.",
            "Disponibilidad real de agua, electricidad, mesas, sombra y conectividad.",
            "Fechas climáticamente adecuadas y alternativas para lluvia o viento.",
            "Adultos disponibles, necesidades de accesibilidad y protocolos del establecimiento.",
          ],
        },
        {
          heading: "Diseñar un laboratorio móvil robusto",
          paragraphs: [
            "Los materiales se agrupan en cajas por estación, con inventario, repuestos y fichas impresas. Se priorizan herramientas resistentes, cantidades pequeñas y elementos disponibles localmente cuando eso no afecta la seguridad ni el objetivo.",
            "Cada estación debe poder montarse y guardarse con rapidez. Si participa más de un curso, las actividades se ordenan para que la reposición entre rotaciones sea simple y no genere largos tiempos de espera.",
          ],
        },
        {
          heading: "De una visita aislada a un proceso",
          paragraphs: [
            "Una visita puede despertar interés, pero un ciclo permite formular preguntas, probar, revisar y comunicar. Un programa breve puede comenzar con exploración del entorno, continuar con experimentos o prototipos y finalizar con una muestra para la comunidad.",
            "Cuando el traslado es complejo, se pueden dejar actividades de continuidad con materiales accesibles y una guía docente. El siguiente encuentro recupera esas observaciones en lugar de comenzar desde cero.",
          ],
        },
        {
          heading: "Registrar para mejorar y demostrar alcance",
          paragraphs: [
            "El registro no necesita ser burocrático: asistencia, fotografías autorizadas, preguntas formuladas, productos de los grupos y una pauta docente breve. Estos antecedentes ayudan a evaluar participación y ajustar las actividades.",
            "También permiten a escuelas, SLEP, municipios y organizaciones justificar continuidad, comparar territorios y planificar recursos. Un laboratorio móvil puede comenzar con un piloto, pero debe diseñarse desde el inicio para aprender de cada implementación.",
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
      slug: "science-activities-for-childrens-birthdays",
      title: "Science activity ideas for children’s birthdays",
      excerpt: "How to choose a safe, participatory experience that fits the age group, venue and complete rhythm of a celebration.",
      category: "Family guidance",
      readTime: "8 min",
      date: "July 20, 2026", updatedDate: "July 20, 2026",
      icon: "✺", tone: "teal",
      image: "/images/blog/actividades-cientificas-cumpleanos.webp",
      imageAlt: "Children take part in a colourful, organised science birthday activity.",
      imageCaption: "Original editorial illustration of a participatory science celebration.",
      takeaways: ["Match the activity to age, group size and the venue’s tolerance for water or residue.", "Balance demonstration, participation and a shared closing.", "Agree setup, delivery and pack-down before the event."],
      content: [
        { heading: "Make it the centrepiece", paragraphs: ["A science activity can become the main birthday moment when every child has something to observe, decide or do. It must work for a group, use brief instructions and produce a visible outcome without long waits.", "Plan when it will happen, how food is separated and what early finishers can do."] },
        { heading: "Five adaptable formats", paragraphs: ["Choose according to the group and venue, not only the most dramatic effect."], bullets: ["Volcanoes and open reactions with protected surfaces.", "Magnifying-glass exploration and classification challenges.", "Simulated fossil excavation and evidence-based discussion.", "Polymers and material properties using pre-tested recipes.", "Movement challenges with lightweight objects and simple criteria."] },
        { heading: "Age, numbers and participation", paragraphs: ["Younger groups need a short, visual sequence and close adult support. Older children can take roles, predict and measure. Mixed ages benefit from an extra responsibility for early finishers.", "Participant numbers determine duplicated materials and staffing. Everyone should have a clear turn instead of depending on one demonstration."] },
        { heading: "Realistic space and timing", paragraphs: ["Use stable tables, safe circulation and distance from food, presents and electronics. Explain in advance how floors and furniture will be protected.", "A planning reference is 20–30 minutes for setup, 45–60 minutes for the activity and 15–25 minutes for pack-down. Exact timing depends on the experience and venue, with the full cycle kept within two hours where conditions allow."], callout: "The surprise works best when families do not need to see the logistics behind it." },
        { heading: "Safety within the celebration", paragraphs: ["Keep materials labelled and out of reach until the activity begins. Separate food, check allergies, provide handwashing and use goggles where splashing is possible.", "A responsible adult from the celebration should remain present alongside the facilitator to support individual needs and keep the work area clear."] },
        { heading: "Questions before requesting a quote", paragraphs: ["These details allow a provider to recommend a realistic format."], bullets: ["Age range and approximate participant count.", "City, date, time and indoor or outdoor venue.", "Tables, water and floor protection.", "Group interests and support needs.", "Venue restrictions and adult availability."] },
      ],
    },
    {
      ...sharedAuthor.en,
      slug: "bringing-science-to-rural-schools",
      title: "How to bring hands-on science to rural schools",
      excerpt: "Mobile laboratories, portable materials and place-based questions can widen access to practical science learning.",
      category: "Science and place",
      readTime: "9 min",
      date: "July 20, 2026", updatedDate: "July 20, 2026",
      icon: "◎", tone: "yellow",
      image: "/images/blog/acercar-ciencia-colegios-rurales.webp",
      imageAlt: "A mobile laboratory arrives at a rural school and uses the local environment for inquiry.",
      imageCaption: "Original editorial illustration about mobile science, place and rural school communities.",
      takeaways: ["The local environment provides questions, materials and community knowledge.", "Planning should assume variable connectivity and infrastructure.", "A documented pilot can grow into a recurring programme."],
      content: [
        { heading: "A laboratory building is not the only option", paragraphs: ["Portable stations and mobile protocols can work in a classroom, courtyard or community building. The design should recognise available conditions rather than attempting to reproduce a fully equipped urban laboratory.", "Prepare offline alternatives, limit dependence on water and electricity, and choose items that are easy to clean, replace or reuse."] },
        { heading: "Build questions from the local environment", paragraphs: ["Water, soil, biodiversity, climate, energy and local production offer questions connected to everyday experience. Comparing water retention in soils or plant adaptations can link curriculum with place.", "Families, farmers, gatherers, park rangers and older residents may contribute historical observations and relevant problems."], callout: "Bringing science closer is not delivering finished answers; it is creating tools to investigate locally meaningful questions." },
        { heading: "Information to gather before travel", paragraphs: ["A prior conversation prevents dependence on infrastructure that is not there."], bullets: ["Enrolment, ages, combined classes and usual attendance.", "Road conditions, distance, transport times and unloading space.", "Water, power, tables, shade and connectivity.", "Weather-appropriate dates and indoor alternatives.", "Available adults, accessibility needs and school protocols."] },
        { heading: "Build a robust mobile laboratory", paragraphs: ["Group materials into station boxes with inventories, spares and printed instructions. Prioritise durable tools, small quantities and locally available elements when safety and learning goals allow.", "Every station should set up and pack down quickly, especially when several classes rotate through the experience."] },
        { heading: "Move from one visit to a process", paragraphs: ["A visit can spark interest; a short cycle allows students to ask, test, revise and communicate. It might begin with local exploration, continue with experiments or prototypes and end with a community showcase.", "Where travel is difficult, leave continuity activities using accessible materials and recover those observations at the next session."] },
        { heading: "Document learning and reach", paragraphs: ["Attendance, authorised photographs, student questions, products and a brief teacher reflection are enough to support improvement.", "These records help schools, local education services, municipalities and partners justify continuity and plan resources. A mobile laboratory can begin as a pilot, but should learn from every implementation."] },
      ],
    },
  ],
};

export function getBlogPost(locale: Locale, slug: string) {
  return blogPosts[locale].find((post) => post.slug === slug);
}
