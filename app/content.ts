export type Locale = "es" | "en";

export const contactDetails = {
  email: "boomlabciencia@gmail.com",
  whatsappHref: "https://wa.me/56935195275",
  instagramHandle: "@Boomlab.cl",
  instagramHref: "https://www.instagram.com/boomlab.cl/",
} as const;

export const content = {
  es: {
    localeName: "ES",
    alternateLocale: "EN",
    alternateHref: "/en",
    location: "Santiago · Concepción · Ciencia móvil",
    nav: [
      ["Experiencias", "#experiencias"],
      ["Cómo funciona", "#como-funciona"],
      ["Blog", "#blog"],
      ["Nosotros", "#nosotros"],
    ],
    contact: "Conversemos",
    eyebrow: "Ciencia práctica para niñas, niños y comunidades",
    title: "La ciencia se entiende mejor cuando pasa por tus manos.",
    intro:
      "Boom! Lab lleva experiencias científicas vivas a colegios, celebraciones y territorios. Diseñamos actividades que despiertan preguntas, mueven ideas y convierten cada encuentro en un descubrimiento.",
    primaryCta: "Quiero una experiencia",
    secondaryCta: "Conocer Boom! Lab",
    proof: [
      ["4–14", "años"],
      ["45–90", "minutos"],
      ["100%", "participativo"],
    ],
    labCard: {
      label: "Laboratorio móvil",
      title: "Una experiencia que llega hasta donde están aprendiendo.",
      tags: ["Observar", "Probar", "Preguntar", "Descubrir"],
    },
    heroImageAlt:
      "Niña con antiparras de seguridad junto a un volcán de espuma en un taller científico de Boom! Lab.",
    heroImageAltSecondary:
      "Niñas y niños observan la reacción de un volcán guiados por Boom! Lab.",
    experiencesEyebrow: "Experiencias a la medida",
    experiencesTitle: "Distintos formatos, la misma curiosidad encendida.",
    experiencesIntro:
      "Partimos con tres líneas claras y las adaptamos a la edad, el espacio y los objetivos de cada grupo.",
    experiences: [
      {
        number: "01",
        title: "Talleres científicos",
        body: "Experiencias prácticas para escuelas, colegios, afterschools, municipios y comunidades educativas.",
        detail: "Sesiones puntuales · Ciclos · Jornadas STEM",
        tone: "orange",
      },
      {
        number: "02",
        title: "Ferias científicas",
        body: "Diseño, acompañamiento y ejecución de ferias que hacen posible investigar con recursos reales.",
        detail: "Planificación · Mentoría · Producción",
        tone: "teal",
      },
      {
        number: "03",
        title: "Cumpleaños con ciencia",
        body: "Una celebración diferente, participativa y llena de experimentos para recordar haciendo.",
        detail: "5–12 años · 60 minutos · En tu espacio",
        tone: "yellow",
      },
    ],
    processEyebrow: "Simple para organizar. Difícil de olvidar.",
    processTitle: "Así convertimos una idea en una experiencia Boom!",
    process: [
      ["01", "Cuéntanos el contexto", "Edad, cantidad de participantes, espacio y objetivo."],
      ["02", "Diseñamos la experiencia", "Seleccionamos el formato y ajustamos cada detalle."],
      ["03", "Llevamos el laboratorio", "Montamos, guiamos y dejamos la curiosidad trabajando."],
    ],
    blogEyebrow: "Ideas para seguir descubriendo",
    blogTitle: "Ciencia que continúa después del taller.",
    blogIntro:
      "Recursos claros para docentes y familias, escritos desde la experiencia y pensados para usar de verdad.",
    blogCta: "Ver todos los artículos",
    posts: [
      ["Ferias científicas", "Cómo elegir un experimento que tus estudiantes sí puedan terminar", "7 min"],
      ["Ciencia en casa", "Tres preguntas que transforman una actividad en una investigación", "5 min"],
      ["Educación STEM", "Qué necesita una experiencia científica para mantener la atención", "6 min"],
    ],
    aboutEyebrow: "Somos Boom! Lab",
    aboutTitle: "Un laboratorio sin paredes, creado para aprender haciendo.",
    aboutBody:
      "Nacimos en Concepción para acercar la ciencia a niñas, niños y comunidades mediante experiencias prácticas, seguras y memorables. Nuestro trabajo une educación, juego, observación y territorio.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      ["¿A qué edades están dirigidas las experiencias?", "Trabajamos principalmente con niñas y niños de 4 a 14 años, adaptando lenguaje, materiales y desafío."],
      ["¿Boom! Lab lleva los materiales?", "Sí. El formato móvil considera materiales y equipamiento de la actividad. Los requisitos del espacio se informan antes de confirmar."],
      ["¿En qué comunas trabajan?", "Nuestra cobertura inicial considera Santiago y Concepción. Evaluamos otras comunas según el formato, la fecha y los requerimientos de traslado."],
    ],
    contactEyebrow: "Hagamos ciencia juntos",
    contactTitle: "Cuéntanos qué quieres activar.",
    contactBody:
      "Indícanos si buscas una experiencia para un colegio, una comunidad o una celebración. Te ayudaremos a encontrar el formato adecuado.",
    contactCta: "Cotizar una actividad",
    contactWhatsappMessage:
      "Hola, quisiera cotizar una actividad de Boom! Lab.",
    footerLocation: "Santiago y Concepción, Chile",
    footer: "Ciencia que se vive, se toca y se descubre.",
  },
  en: {
    localeName: "EN",
    alternateLocale: "ES",
    alternateHref: "/es",
    location: "Santiago · Concepción · Mobile science",
    nav: [
      ["Experiences", "#experiences"],
      ["How it works", "#how-it-works"],
      ["Blog", "#blog"],
      ["About", "#about"],
    ],
    contact: "Let’s talk",
    eyebrow: "Hands-on science for children and communities",
    title: "Science makes more sense when it passes through your hands.",
    intro:
      "Boom! Lab brings live science experiences to schools, celebrations and communities. We create activities that spark questions, move ideas and turn every encounter into a discovery.",
    primaryCta: "Plan an experience",
    secondaryCta: "Discover Boom! Lab",
    proof: [
      ["4–14", "years old"],
      ["45–90", "minutes"],
      ["100%", "hands-on"],
    ],
    labCard: {
      label: "Mobile laboratory",
      title: "A science experience that arrives wherever learning happens.",
      tags: ["Observe", "Test", "Question", "Discover"],
    },
    heroImageAlt:
      "A child wearing safety goggles beside a foaming volcano during a Boom! Lab science workshop.",
    heroImageAltSecondary:
      "Children observe a volcano reaction guided by Boom! Lab.",
    experiencesEyebrow: "Experiences made to fit",
    experiencesTitle: "Different formats. The same curiosity switched on.",
    experiencesIntro:
      "We begin with three clear formats and adapt them to each group’s age, space and goals.",
    experiences: [
      {
        number: "01",
        title: "Science workshops",
        body: "Hands-on experiences for schools, after-school programs, municipalities and learning communities.",
        detail: "Single sessions · Programs · STEM days",
        tone: "orange",
      },
      {
        number: "02",
        title: "Science fairs",
        body: "Design, mentoring and delivery of fairs that make inquiry possible with real-world resources.",
        detail: "Planning · Mentoring · Production",
        tone: "teal",
      },
      {
        number: "03",
        title: "Science birthdays",
        body: "A different kind of celebration: participatory, memorable and packed with experiments.",
        detail: "Ages 5–12 · 60 minutes · At your venue",
        tone: "yellow",
      },
    ],
    processEyebrow: "Easy to plan. Hard to forget.",
    processTitle: "How an idea becomes a Boom! experience",
    process: [
      ["01", "Tell us the context", "Age, number of participants, space and goal."],
      ["02", "We shape the experience", "We choose the format and adjust every detail."],
      ["03", "We bring the laboratory", "We set up, facilitate and leave curiosity at work."],
    ],
    blogEyebrow: "Ideas for further discovery",
    blogTitle: "Science that continues after the workshop.",
    blogIntro:
      "Clear resources for teachers and families, grounded in experience and designed to be genuinely useful.",
    blogCta: "Browse all articles",
    posts: [
      ["Science fairs", "How to choose an experiment your students can actually finish", "7 min"],
      ["Science at home", "Three questions that turn an activity into an investigation", "5 min"],
      ["STEM education", "What a science experience needs to hold children’s attention", "6 min"],
    ],
    aboutEyebrow: "We are Boom! Lab",
    aboutTitle: "A laboratory without walls, created for learning by doing.",
    aboutBody:
      "We started in Concepción to bring science closer to children and communities through practical, safe and memorable experiences. Our work connects education, play, observation and place.",
    faqTitle: "Frequently asked questions",
    faqs: [
      ["What ages are the experiences designed for?", "We mainly work with children aged 4 to 14, adapting language, materials and challenge."],
      ["Does Boom! Lab bring the materials?", "Yes. Our mobile format includes the materials and equipment for each activity. Venue requirements are shared before confirmation."],
      ["Where do you operate?", "Our initial service area includes Santiago and Concepción. Other locations are assessed according to format, date and travel requirements."],
    ],
    contactEyebrow: "Let’s make science happen",
    contactTitle: "Tell us what you want to activate.",
    contactBody:
      "Let us know whether you are planning an experience for a school, community or celebration. We will help you find the right format.",
    contactCta: "Request a quote",
    contactWhatsappMessage:
      "Hello, I would like to request a quote for a Boom! Lab activity.",
    footerLocation: "Santiago and Concepción, Chile",
    footer: "Science you can live, touch and discover.",
  },
} as const;
