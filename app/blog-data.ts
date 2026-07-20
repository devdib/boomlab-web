import type { Locale } from "./content";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  icon: string;
  tone: "orange" | "teal" | "yellow";
  content: readonly string[];
};

export const blogPosts: Record<Locale, readonly BlogPost[]> = {
  es: [
    {
      slug: "como-organizar-jornada-cientifica-colegio",
      title: "Cómo organizar una jornada científica en un colegio",
      excerpt: "Una ruta práctica para definir objetivos, tiempos, espacios y actividades sin transformar la jornada en una carga para el equipo educativo.",
      category: "Actividades para colegios",
      readTime: "7 min",
      date: "21 de julio de 2026",
      icon: "⌁",
      tone: "orange",
      content: [
        "Una jornada científica funciona mejor cuando comienza con una pregunta clara: ¿qué queremos que las y los estudiantes observen, prueben o comprendan? Ese objetivo permite elegir actividades acordes con la edad y evita reunir experimentos llamativos sin una conexión educativa.",
        "El siguiente paso es revisar las condiciones reales del colegio: cantidad de participantes, tiempo disponible, espacios, acceso a agua y electricidad, materiales y número de adultos que acompañarán. Con esa información se pueden formar estaciones, definir rotaciones y anticipar los puntos de seguridad.",
        "Conviene combinar una demostración breve con experiencias en las que cada grupo pueda manipular materiales, registrar observaciones y compartir una conclusión. La participación mantiene la atención y convierte el asombro inicial en aprendizaje.",
        "Finalmente, una buena jornada necesita instrucciones simples para docentes y estudiantes, una pauta de montaje y un cierre común. Boom! Lab puede adaptar este formato a una actividad puntual, una jornada STEM o un programa de varias sesiones.",
      ],
    },
    {
      slug: "experimentos-cientificos-seguros-con-ninos",
      title: "5 experimentos científicos seguros para hacer con niños",
      excerpt: "Ideas sencillas para explorar reacciones, densidad, tensión superficial y movimiento con supervisión adulta y materiales cotidianos.",
      category: "Experimentos seguros",
      readTime: "6 min",
      date: "20 de julio de 2026",
      icon: "⚗",
      tone: "teal",
      content: [
        "Experimentar con niñas y niños no requiere materiales complejos. Una buena actividad utiliza cantidades pequeñas, instrucciones visibles y la supervisión permanente de una persona adulta. También debe permitir detenerse, observar y explicar lo que está ocurriendo.",
        "Cinco opciones útiles son: comparar objetos que flotan o se hunden; crear capas de líquidos con distintas densidades; observar pimienta alejándose por efecto del jabón; impulsar un objeto liviano con aire; y producir una reacción controlada de bicarbonato y vinagre en un recipiente abierto.",
        "Antes de comenzar se debe proteger la superficie, revisar alergias o sensibilidades, evitar que los materiales se ingieran y usar antiparras cuando exista riesgo de salpicadura. Nunca se deben mezclar productos de limpieza ni utilizar recipientes cerrados para reacciones que produzcan gas.",
        "La parte más importante llega después del efecto visual: preguntar qué cambió, qué se mantuvo igual y cómo podrían comprobar una explicación. Esa conversación convierte una actividad entretenida en una experiencia científica.",
      ],
    },
    {
      slug: "que-es-educacion-stem",
      title: "Qué es la educación STEM y por qué es importante",
      excerpt: "Una explicación clara de cómo ciencia, tecnología, ingeniería y matemática pueden integrarse mediante desafíos concretos.",
      category: "Educación STEM",
      readTime: "6 min",
      date: "19 de julio de 2026",
      icon: "✦",
      tone: "yellow",
      content: [
        "STEM reúne ciencia, tecnología, ingeniería y matemática. Su valor no está en nombrar cuatro asignaturas, sino en conectarlas para resolver preguntas o desafíos cercanos a la vida de las y los estudiantes.",
        "Por ejemplo, construir un puente de papel implica observar materiales, medir, comparar diseños, registrar resultados y mejorar una solución. En una sola actividad aparecen conocimientos científicos, razonamiento matemático y decisiones de ingeniería.",
        "Este enfoque fortalece la curiosidad, la colaboración y la capacidad de aprender de los intentos que no resultan. También permite que estudiantes con intereses distintos participen desde el dibujo, la construcción, la explicación o la medición.",
        "Una experiencia STEM efectiva debe tener un objetivo comprensible, materiales adecuados a la edad y tiempo para probar más de una vez. No necesita tecnología costosa: necesita preguntas bien planteadas y espacio para investigar.",
      ],
    },
    {
      slug: "aprender-ciencia-jugando-curiosidad",
      title: "Por qué aprender ciencia jugando mejora la curiosidad infantil",
      excerpt: "El juego permite formular hipótesis, probar posibilidades y aprender del error sin convertir cada respuesta en una evaluación.",
      category: "Ciencia para niños",
      readTime: "5 min",
      date: "18 de julio de 2026",
      icon: "?",
      tone: "orange",
      content: [
        "Cuando una actividad científica incorpora juego, las niñas y los niños pueden explorar antes de recibir una explicación completa. Esa libertad inicial favorece preguntas espontáneas y permite que aparezcan distintas formas de resolver un desafío.",
        "Jugar no significa eliminar el objetivo educativo. Significa presentar reglas simples, materiales seguros y una misión concreta: lograr que algo se mueva, clasificar elementos, encontrar una evidencia o construir un modelo.",
        "La persona adulta acompaña haciendo preguntas, no entregando inmediatamente la respuesta. Frases como “¿qué observaste?” o “¿qué cambiarías?” ayudan a desarrollar pensamiento científico sin interrumpir la experiencia.",
        "El cierre debe recuperar lo ocurrido con palabras sencillas. Así, el juego conserva su energía y al mismo tiempo deja una idea que puede volver a utilizarse en otros contextos.",
      ],
    },
    {
      slug: "actividades-cientificas-cumpleanos-infantiles",
      title: "Ideas de actividades científicas para cumpleaños infantiles",
      excerpt: "Cómo elegir una experiencia participativa, segura y compatible con el espacio, la edad y la duración de una celebración.",
      category: "Consejos para familias",
      readTime: "5 min",
      date: "17 de julio de 2026",
      icon: "✺",
      tone: "teal",
      content: [
        "Una actividad científica puede convertirse en el momento central de un cumpleaños cuando todas y todos tienen algo que observar o hacer. Para lograrlo, el experimento debe adaptarse a la edad, funcionar con grupos y tener instrucciones breves.",
        "Volcanes, exploración con lupas, paleontología, polímeros y pequeños desafíos de movimiento son formatos que permiten combinar demostración y participación. La elección depende del espacio, la cantidad de asistentes y la tolerancia al agua o a materiales que requieren limpieza.",
        "Es recomendable reservar un área de trabajo, proteger mesas y pisos, mantener alimentos separados y contar con una persona adulta responsable además del equipo que guía la experiencia.",
        "Boom! Lab organiza la actividad considerando montaje, ejecución y desmontaje para que la experiencia científica se integre a la celebración sin extender innecesariamente la jornada.",
      ],
    },
    {
      slug: "acercar-ciencia-colegios-rurales",
      title: "Cómo acercar la ciencia a colegios rurales",
      excerpt: "Laboratorios móviles, materiales transportables y actividades conectadas con el territorio pueden ampliar el acceso a experiencias prácticas.",
      category: "Ciencia y territorio",
      readTime: "7 min",
      date: "16 de julio de 2026",
      icon: "◎",
      tone: "yellow",
      content: [
        "La falta de un laboratorio equipado no debería impedir que un establecimiento realice experiencias científicas. Muchas actividades pueden diseñarse con materiales transportables, estaciones móviles y protocolos que se adapten a una sala, patio o espacio comunitario.",
        "El territorio también es un recurso de aprendizaje. Agua, suelo, biodiversidad, clima y energía ofrecen preguntas cercanas que pueden vincularse con el currículum y con la experiencia cotidiana de las comunidades.",
        "Para implementar una jornada es necesario conocer previamente el número de estudiantes, edades, conectividad, espacio disponible y condiciones de traslado. Esa información permite elegir actividades realistas y evitar depender de infraestructura inexistente.",
        "Un laboratorio móvil puede comenzar con un piloto y luego transformarse en un ciclo o programa anual. El registro de participación, observaciones y aprendizajes ayuda a evaluar el alcance y preparar futuras experiencias.",
      ],
    },
  ],
  en: [
    {
      slug: "how-to-plan-a-school-science-day",
      title: "How to plan a science day at school",
      excerpt: "A practical route for defining goals, timing, spaces and activities without overloading the education team.",
      category: "School activities",
      readTime: "7 min",
      date: "July 21, 2026",
      icon: "⌁",
      tone: "orange",
      content: [
        "A successful science day begins with one clear question: what should students observe, test or understand? This goal makes it easier to choose age-appropriate activities and connect them to learning.",
        "The next step is to review the school’s real conditions: group size, available time, spaces, water and electricity, materials and supporting adults. This information shapes stations, rotations and safety measures.",
        "Combine a short demonstration with experiences in which each group handles materials, records observations and shares a conclusion. Participation turns the initial surprise into learning.",
        "Clear instructions, a setup plan and a shared closing moment complete the experience. Boom! Lab can adapt this structure to a workshop, STEM day or multi-session program.",
      ],
    },
    {
      slug: "safe-science-experiments-for-children",
      title: "5 safe science experiments to try with children",
      excerpt: "Simple ways to explore reactions, density, surface tension and movement with adult supervision and everyday materials.",
      category: "Safe experiments",
      readTime: "6 min",
      date: "July 20, 2026",
      icon: "⚗",
      tone: "teal",
      content: [
        "Science with children does not require complex materials. A strong activity uses small quantities, visible instructions and constant adult supervision, while leaving time to observe and discuss what happens.",
        "Useful options include comparing floating objects, layering liquids of different densities, observing the effect of soap on pepper in water, moving a light object with air and making a controlled baking-soda reaction in an open container.",
        "Protect the work surface, check allergies, prevent ingestion and use goggles where splashes are possible. Never mix cleaning products or seal a reaction that releases gas.",
        "The most valuable moment comes after the visual effect: ask what changed, what stayed the same and how an explanation could be tested.",
      ],
    },
    {
      slug: "what-is-stem-education",
      title: "What is STEM education and why does it matter?",
      excerpt: "A clear look at how science, technology, engineering and mathematics connect through real challenges.",
      category: "STEM education",
      readTime: "6 min",
      date: "July 19, 2026",
      icon: "✦",
      tone: "yellow",
      content: [
        "STEM brings together science, technology, engineering and mathematics. Its value lies in connecting those areas to investigate questions and solve meaningful challenges.",
        "Building a paper bridge, for example, involves observing materials, measuring, comparing designs, recording results and improving a solution.",
        "This approach strengthens curiosity, teamwork and the ability to learn from attempts that do not work. Students can contribute through drawing, building, explaining or measuring.",
        "An effective STEM experience needs a clear goal, age-appropriate materials and time to test more than once. It does not require expensive technology; it requires useful questions.",
      ],
    },
    {
      slug: "learning-science-through-play",
      title: "Why learning science through play supports curiosity",
      excerpt: "Play creates room for hypotheses, trials and learning from mistakes without turning every answer into a test.",
      category: "Science for children",
      readTime: "5 min",
      date: "July 18, 2026",
      icon: "?",
      tone: "orange",
      content: [
        "Play lets children explore before receiving a complete explanation. This freedom supports spontaneous questions and different ways of approaching a challenge.",
        "A playful activity still needs a learning goal. It can use simple rules, safe materials and a mission such as moving an object, sorting evidence or building a model.",
        "Adults support the process by asking questions instead of immediately providing answers. “What did you notice?” and “What would you change?” keep the investigation moving.",
        "A brief closing conversation connects the experience to a reusable idea without removing the energy of play.",
      ],
    },
    {
      slug: "science-activities-for-childrens-birthdays",
      title: "Science activity ideas for children’s birthdays",
      excerpt: "How to choose a participatory, safe experience that fits the venue, age group and celebration schedule.",
      category: "Family guidance",
      readTime: "5 min",
      date: "July 17, 2026",
      icon: "✺",
      tone: "teal",
      content: [
        "A science activity can become the centrepiece of a birthday when every child has something to observe or do. The experiment must fit the age group and work with several participants.",
        "Volcanoes, magnifying-glass exploration, fossils, polymers and movement challenges can combine demonstration and participation.",
        "Set aside a work area, protect surfaces, keep food separate and have a responsible adult available in addition to the facilitators.",
        "Boom! Lab plans setup, delivery and pack-down so the science experience fits naturally into the celebration.",
      ],
    },
    {
      slug: "bringing-science-to-rural-schools",
      title: "How to bring hands-on science to rural schools",
      excerpt: "Mobile laboratories, portable materials and place-based activities can widen access to practical learning.",
      category: "Science and place",
      readTime: "7 min",
      date: "July 16, 2026",
      icon: "◎",
      tone: "yellow",
      content: [
        "A school does not need a fully equipped laboratory to provide meaningful science experiences. Portable materials and mobile stations can work in a classroom, courtyard or community space.",
        "The local environment is also a learning resource. Water, soil, biodiversity, climate and energy provide questions that connect curriculum with everyday life.",
        "Planning requires information about ages, group size, connectivity, available space and travel conditions. This helps choose realistic activities.",
        "A mobile laboratory can begin with a pilot and grow into a recurring program. Participation and learning records support future planning.",
      ],
    },
  ],
};

export function getBlogPost(locale: Locale, slug: string) {
  return blogPosts[locale].find((post) => post.slug === slug);
}
