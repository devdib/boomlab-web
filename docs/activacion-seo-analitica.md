# Activación de SEO, analítica e indexación

Este documento separa lo que ya quedó preparado en el sitio de las acciones que requieren acceso de Diego a un dominio o una cuenta de Google.

## Preparado en el sitio

- Títulos y descripciones diferenciados por página.
- URL canónica y versiones alternativas `es-CL`, `en` y `x-default`.
- Metadatos Open Graph y Twitter para compartir páginas y artículos.
- Datos estructurados de organización, sitio web, preguntas frecuentes y artículos.
- `robots.txt` y sitemap bilingüe con relaciones entre traducciones.
- Dominio base configurable sin reescribir todas las páginas.
- Verificación de Search Console preparada mediante variable de entorno.
- Google Analytics 4 preparado mediante variable de entorno.
- Analítica desactivada por defecto hasta recibir autorización de la persona usuaria.
- Eventos sin datos personales para medir solicitudes enviadas por WhatsApp o correo.

## Datos que debe entregar Diego

1. **Dominio definitivo:** por ejemplo, `boomlab.cl`, una vez comprado y conectado.
2. **ID de Google Analytics 4:** comienza con `G-` y se obtiene al crear un flujo de datos web.
3. **Código de verificación de Search Console:** contenido del metatag de verificación, salvo que se prefiera verificar todo el dominio mediante DNS.

No se deben enviar contraseñas, códigos de acceso ni permisos de cuenta. Sólo se necesitan los identificadores públicos anteriores.

## Secuencia de activación

1. Comprar y conectar el dominio definitivo.
2. Configurar `NEXT_PUBLIC_SITE_URL` con la dirección canónica, sin barra final.
3. Publicar y comprobar que las páginas, `robots.txt` y `sitemap.xml` usen el dominio definitivo.
4. Crear la propiedad de Google Analytics 4 y configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
5. Verificar en el informe de tiempo real que sólo exista medición después de aceptar la analítica.
6. Crear una propiedad de dominio en Google Search Console y verificarla mediante el registro DNS indicado por Google.
7. Enviar `https://DOMINIO/sitemap.xml` en Search Console.
8. Solicitar inspección de `/es`, `/es/blog` y los seis artículos iniciales; no repetir solicitudes de indexación innecesariamente.
9. Revisar semanalmente páginas indexadas, consultas, clics, errores de rastreo y Core Web Vitals.

## Indicadores iniciales

Durante los primeros 30 días se registrarán: páginas indexadas, impresiones y clics orgánicos, consultas principales, sesiones orgánicas, artículos con mayor lectura y solicitudes iniciadas por WhatsApp o correo. Estos datos servirán para ajustar el calendario; no se definirán metas de tráfico sin una línea base real.
