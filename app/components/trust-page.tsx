import type { Locale } from "../content";
import { SiteFooter, SiteHeader } from "./site-chrome";

type TrustPageKind = "editorial" | "privacy";

const pages = {
  es: {
    editorial: {
      alternateHref: "/en/editorial-policy",
      eyebrow: "Transparencia editorial",
      title: "Política editorial de Boom! Lab",
      intro: "Nuestro contenido existe para ayudar a docentes, familias y comunidades a tomar mejores decisiones sobre experiencias científicas.",
      sections: [
        ["Propósito y alcance", ["Publicamos recursos educativos, guías prácticas y reflexiones sobre ciencia, educación STEM y organización de actividades. Cada artículo debe responder una pregunta concreta y aportar una explicación o herramienta que pueda utilizarse fuera de esta página."]],
        ["Originalidad y experiencia", ["Los contenidos se desarrollan en lenguaje propio a partir de la experiencia de Boom! Lab, sus actividades y las necesidades observadas en comunidades educativas. No copiamos artículos, no reescribimos automáticamente publicaciones ajenas y no producimos páginas en volumen sólo para posicionar palabras clave.", "Cuando una afirmación requiere respaldo externo, procuramos utilizar fuentes primarias, institucionales o académicas y distinguirlas de nuestra experiencia práctica."]],
        ["Uso responsable de inteligencia artificial", ["Podemos utilizar herramientas de inteligencia artificial para investigar, ordenar ideas, crear borradores, traducir o detectar oportunidades de mejora. Estas herramientas no sustituyen la responsabilidad editorial: antes de considerar definitivo un artículo, una persona del equipo debe revisarlo, corregirlo, verificar su utilidad y aprobar su publicación.", "La autoría o revisión humana sólo se atribuye a una persona cuando esa participación ocurrió y fue autorizada. No presentamos como experiencia real una situación generada o supuesta."]],
        ["Imágenes y autorizaciones", ["Utilizamos fotografías propias o expresamente autorizadas e ilustraciones originales creadas para Boom! Lab. Las ilustraciones se identifican como tales; no se presentan como registro fotográfico de una actividad real."]],
        ["Seguridad y precisión", ["Las actividades con niñas y niños deben contar con supervisión adulta, materiales adecuados y evaluación del contexto. Revisamos las instrucciones de seguridad y corregimos información cuando aparece un error o cambian los antecedentes."]],
        ["Publicidad e independencia", ["La publicidad podrá financiar parte de este proyecto, pero no debe determinar nuestras conclusiones ni confundirse con el contenido editorial. Los espacios publicitarios serán identificables, no utilizarán ventanas emergentes invasivas y no se presentarán como botones o recomendaciones propias de Boom! Lab."]],
        ["Correcciones y contacto", ["Si detectas un error o una explicación que pueda mejorar, escríbenos a boomlabciencia@gmail.com indicando el artículo y el cambio sugerido. Registraremos las actualizaciones relevantes mediante la fecha de revisión del contenido."]],
      ],
    },
    privacy: {
      alternateHref: "/en/privacy",
      eyebrow: "Información y control",
      title: "Política de privacidad",
      intro: "Explicamos qué información puede recibir Boom! Lab y cómo se preparará el sitio para analítica y publicidad responsable.",
      sections: [
        ["Responsable y contacto", ["Boom! Lab es responsable del contenido de este sitio. Para consultas sobre privacidad puedes escribir a boomlabciencia@gmail.com."]],
        ["Formulario de contacto", ["El formulario prepara la solicitud y permite enviarla por WhatsApp o correo. Boom! Lab recibe los datos sólo cuando la persona confirma el envío en el canal elegido. También se puede copiar el texto sin enviarlo. Podemos recibir nombre, correo, teléfono, comuna, tipo de actividad, fecha tentativa, cantidad de participantes y el mensaje ingresado.", "Utilizamos esos antecedentes para responder la solicitud, preparar una orientación o cotización y mantener la comunicación necesaria. No solicitamos que niñas o niños envíen datos directamente; el formulario está dirigido a personas adultas responsables."]],
        ["Conservación y derechos", ["Conservamos la información mientras sea necesaria para atender la consulta y cumplir obligaciones aplicables. Puedes solicitar acceso, corrección o eliminación escribiendo al correo indicado, sujeto a las obligaciones legales que correspondan."]],
        ["Cookies, analítica y publicidad", ["En el futuro podremos utilizar servicios de analítica y Google AdSense. Terceros, incluido Google, pueden utilizar cookies, balizas web, direcciones IP u otros identificadores para medir el uso del sitio y mostrar anuncios.", "Google y sus socios pueden utilizar cookies publicitarias para mostrar anuncios basados en visitas a este u otros sitios. Las personas usuarias podrán administrar la personalización desde la configuración de anuncios de Google. Cuando la normativa o las políticas de Google lo requieran, implementaremos una plataforma de gestión de consentimiento certificada antes de activar publicidad personalizada."]],
        ["Transferencias y proveedores", ["Si incorporamos proveedores de alojamiento, analítica, publicidad o formularios, podrán tratar datos sólo para prestar esos servicios y bajo sus propias condiciones y obligaciones. Esta política se actualizará cuando se active una nueva integración relevante."]],
        ["Cambios a esta política", ["La fecha de actualización se modificará cuando cambie el tratamiento de datos. Última actualización: 20 de julio de 2026."]],
      ],
    },
  },
  en: {
    editorial: {
      alternateHref: "/es/politica-editorial",
      eyebrow: "Editorial transparency",
      title: "Boom! Lab editorial policy",
      intro: "Our content helps teachers, families and communities make better decisions about hands-on science experiences.",
      sections: [
        ["Purpose and scope", ["We publish educational resources, practical guides and reflections on science, STEM education and activity planning. Every article must answer a real question and provide an explanation or tool that readers can use away from this website."]],
        ["Originality and experience", ["Content is written in Boom! Lab’s own language and grounded in its activities and the needs observed in learning communities. We do not copy articles, automatically rewrite third-party publications or create pages at scale merely to target keywords.", "Where a claim needs external support, we aim to use primary, institutional or academic sources and distinguish them from our practical experience."]],
        ["Responsible use of artificial intelligence", ["We may use artificial-intelligence tools for research, structure, early drafts, translation or quality checks. They do not replace editorial responsibility: before an article is considered final, a team member must review, correct, assess and approve it.", "We attribute human authorship or review only when that work has occurred and the person has authorised the credit. We do not present generated or assumed situations as first-hand experience."]],
        ["Images and permissions", ["We use our own or expressly authorised photographs and original illustrations made for Boom! Lab. Illustrations are identified as such and are never presented as documentary photography."]],
        ["Safety and accuracy", ["Activities involving children require adult supervision, appropriate materials and context-specific judgement. We review safety instructions and correct information when an error is found or evidence changes."]],
        ["Advertising and independence", ["Advertising may support this project, but it must not determine our conclusions or be confused with editorial content. Ad placements will be identifiable, non-intrusive and never disguised as Boom! Lab buttons or recommendations."]],
        ["Corrections and contact", ["To report an error or suggest an improvement, email boomlabciencia@gmail.com with the article and proposed change. Relevant updates are reflected in the article’s review date."]],
      ],
    },
    privacy: {
      alternateHref: "/es/privacidad",
      eyebrow: "Information and control",
      title: "Privacy policy",
      intro: "This page explains what information Boom! Lab may receive and how the site will prepare for responsible analytics and advertising.",
      sections: [
        ["Controller and contact", ["Boom! Lab is responsible for this website’s content. Privacy questions may be sent to boomlabciencia@gmail.com."]],
        ["Contact form", ["The form prepares the enquiry and lets the visitor send it through WhatsApp or email. Boom! Lab receives the details only after the visitor confirms sending them through the chosen channel. The text can also be copied without sending it. Information may include name, email, phone, location, activity type, tentative date, participant count and message.", "We use those details to answer the enquiry, prepare guidance or a quote and maintain necessary communication. Children should not submit personal information directly; the form is intended for responsible adults."]],
        ["Retention and rights", ["We retain information only as long as needed to answer the enquiry and meet applicable obligations. You may request access, correction or deletion by emailing us, subject to relevant legal duties."]],
        ["Cookies, analytics and advertising", ["We may later use analytics services and Google AdSense. Third parties, including Google, may use cookies, web beacons, IP addresses or other identifiers to measure site use and serve advertising.", "Google and its partners may use advertising cookies based on visits to this or other sites. Visitors will be able to manage personalisation through Google Ads Settings. Where law or Google policy requires it, we will implement a Google-certified consent management platform before enabling personalised advertising."]],
        ["Providers and transfers", ["Hosting, analytics, advertising or form providers may process data only to deliver their services and under their own terms and obligations. This policy will be updated when a relevant integration is enabled."]],
        ["Policy changes", ["The update date will change whenever our data processing changes. Last updated: July 20, 2026."]],
      ],
    },
  },
} as const;

export function TrustPage({ locale, kind }: { locale: Locale; kind: TrustPageKind }) {
  const page = pages[locale][kind];
  return (
    <main>
      <SiteHeader locale={locale} alternateHref={page.alternateHref} />
      <section className="subpage-hero trust-hero"><div className="shell subpage-hero-inner"><a className="back-link" href={`/${locale}`}>← Boom! Lab</a><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <article className="trust-page"><div className="shell trust-layout">
        <nav className="trust-toc" aria-label={locale === "es" ? "En esta página" : "On this page"}><strong>{locale === "es" ? "En esta página" : "On this page"}</strong>{page.sections.map(([heading]) => <a href={`#${slugify(heading)}`} key={heading}>{heading}</a>)}</nav>
        <div className="trust-content">
          {page.sections.map(([heading, paragraphs]) => <section id={slugify(heading)} key={heading}><h2>{heading}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          {kind === "privacy" && <aside className="privacy-resources"><strong>{locale === "es" ? "Controles y más información" : "Controls and further information"}</strong><a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">{locale === "es" ? "Configuración de anuncios de Google" : "Google Ads Settings"} ↗</a><a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">{locale === "es" ? "Cómo utiliza Google los datos de sitios asociados" : "How Google uses data from partner sites"} ↗</a></aside>}
        </div>
      </div></article>
      <SiteFooter locale={locale} />
    </main>
  );
}

function slugify(value: string) {
  return value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
