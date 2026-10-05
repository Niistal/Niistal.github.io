# Iker / Niistal — Portfolio

Portfolio profesional de **Iker Nistal Fernandez**, desarrollador de software centrado en aplicaciones empresariales, .NET, integraciones, ciberseguridad, automatización, datos e inteligencia artificial.

**[Visitar el portfolio →](https://niistal.github.io/)**

## Qué encontrarás

- Experiencia profesional en desarrollo de software empresarial con C#, VB.NET, .NET y SQL Server.
- Proyectos con contexto, arquitectura, decisiones técnicas y estado de desarrollo.
- Capacidades técnicas y formación en DAM, Ciberseguridad y Big Data e Inteligencia Artificial.
- Servicios de desarrollo a medida y contacto diferenciado para oportunidades profesionales y proyectos.
- Enlaces a GitHub, LinkedIn y descarga del CV.

## Experiencia y proyectos

Mi trabajo en **Gestión Integral de Procesos 2019 S.L. / GIP** está relacionado con aplicaciones ERP y de gestión en el entorno de SITAB, bases de datos e integración de procesos.

El portfolio también presenta proyectos personales y de aprendizaje:

| Proyecto | Enfoque |
| --- | --- |
| TerminalAI | Plataforma de agentes local-first con ejecución controlada. En desarrollo. |
| Niistal Optimizer | Automatización, herramientas de sistema y hardening. |
| CNC Guard IA | Exploración de datos industriales y mantenimiento preventivo. Prototipo / investigación. |
| Android Business App | Aplicación empresarial con persistencia local y sincronización. |
| TPV / Business Management | Gestión comercial con Java, JavaFX, PostgreSQL y generación de PDF. |

Las funcionalidades en desarrollo se identifican como tales. La descripción de un proyecto no implica que su código esté disponible públicamente.

## El sitio

La versión publicada utiliza **HTML, CSS y JavaScript**, con recursos estáticos y despliegue mediante **GitHub Actions → GitHub Pages**.

Incluye:

- Español e inglés, con selector de idioma y preferencia guardada.
- Tema oscuro y claro.
- Diseño adaptable a escritorio y móvil.
- Proyectos con información técnica ampliable.
- Formularios que preparan una consulta y abren la aplicación de correo, con opción de copiar el mensaje. El envío se completa desde el cliente de correo del visitante.

## Estructura actual

```text
portfolio/
  index.html       Página y contenido principal
  style.css        Diseño, temas y estilos responsive
  app.js           Proyectos e interacciones del formulario
  i18n.js          Traducción y selector de idioma

public/
  images/          Fotografía
  cv/              Currículum PDF
  og.png           Imagen para compartir el enlace
  favicon.svg      Icono del sitio

.github/workflows/
  deploy.yml       Validación y publicación en GitHub Pages
```

El despliegue reúne los archivos de `portfolio/` y `public/` en `out/` y publica ese resultado. Los cambios en `main` activan el proceso automáticamente.

El repositorio conserva la implementación anterior de Next.js en `src/` y sus archivos de configuración. Esa implementación no participa en el despliegue actual.

## Contacto

- [Portfolio](https://niistal.github.io/)
- [LinkedIn](https://www.linkedin.com/in/ikernistal/)
- [GitHub](https://github.com/Niistal)
