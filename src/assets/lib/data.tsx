// import adobexdicon from "../../assets/icons/adobexdicon.svg";
// import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import postgresicon from "../../assets/icons/postgresqlicon.svg";
import circleciicon from "../../assets/icons/circleciicon.svg";
import clarifaiicon from "../../assets/icons/clarifaiicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import jesticon from "../../assets/icons/jesticon.svg";
import redisicon from "../../assets/icons/redisicon.svg";
import zapiericon from "../../assets/icons/zapiericon.svg";
import reduxicon from "../../assets/icons/reduxicon.svg";
import vuejsicon from "../../assets/icons/vuejsicon.svg";
// import mongodbicon from "../../assets/icons/mongoicon.svg";
// import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import firebaseicon from "../../assets/icons/firebaseicon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
// import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
// import tastyMockup from "../../assets/img/tasty_mockup.webp";
import crownMockup from "../../assets/img/crown_clothing_mockup.webp";
import shopifyVueMockup  from "../../assets/img/shopify_vueJS_mockup.webp";
import shopifyMooMockup from "../../assets/img/shopify_moo_mockup.webp";
// import instorMockup from "../../assets/img/instor_mockup.webp";
// import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/profile-pic.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    es: "Hola, soy Jesús Aguiar",
    en: "Hi, I'm Jesús Aguiar",
  },
  subtitle: "Shopify - Frontend Developer ",
  description: {
    es: "Soy un biólogo que pasó de la investigación científica a la creación de sitios web para ganarse la vida. El Frontend de comercios electrónicos es mi principal campo de especialización y puedo trabajar cómodamente en tiendas Shopify usando Liquid o creando excelentes aplicaciones web a través de React. Fuera de mi horario de 9 a 5, me gusta leer libros, comer buena comida y hacer paradas de manos. Los cursos online son mi adicción y mi objetivo a largo plazo es aprender algo nuevo cada día.",
    en: "I'm a Biologist that went from scientific research to building websites for a living. The Frontend of ecommerces is my main field of expertise, and I can comfortably work in Shopify stores using Liquid or creating great web apps through React. Outside of my 9-5 I like to read books, eat great food and do handstands. Online courses are my addiction and my long-term goal is to learn something new every day.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        es: "Contáctame",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        es: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Crown Clothing",
    description:
      "Una aplicación web ecommerce de ropa creada en React usando el API de Firebase para autenticación y como base de datos, el API de Stripe para procesamiento de pagos, y Netlify para el hosting.",
    description_EN:
      "An clothing ecommerce web app built in React using the Firebase API for authentication and database, the Stripe API for payment processing, and Netlify for hostig.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
      { name: "Redux", icon: reduxicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Firebase", icon: firebaseicon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: crownMockup,
    deploymenturl: "https://crown-clothing-ja.netlify.app/",
    githuburl: "https://github.com/JesusAdolfoAguiar/clothing-ecommerce",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Classic Paitings",
    description:
      "Esta es una tienda personalizada en Shopify creada usando el Themekit de Shopify. La interactividad se creó usando VueJS. Contraseña de la tienda: agawya.",
    description_EN:
      "This is a custom Shopify storefront built using the Shopify's ThemeKit. Interactivity was built using VueJS. Store password: agawya",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "VueJS", icon: vuejsicon },
      { name: "Shopify", icon: shopifyicon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      // { name: "PostgreSQL", icon: postgresicon },
      // { name: "Express", icon: expressiconwhite },
      // { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
      // { name: "Firebase", icon: firebaseicon },
    ],
    image: shopifyVueMockup,
    deploymenturl: "https://vuejs-store-ja.myshopify.com/",
    githuburl:
      "https://github.com/JesusAdolfoAguiar/Shopify-Theme-VueJS",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Moo vintage & thrift",
    description:
      "Esta es una tienda en Shopify personalizada, lista para producción, creada utilizando el tema de referencia de Shopify (Dawn) y adaptado a diseños en Figma. Contraseña de la tienda: aobrar",
    description_EN:
      "This is a production ready custom Shopify storefront built using the Shopify's reference theme (Dawn) and customized to Figma mockups. Store password: aobrar",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      // { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      // { name: "PostgreSQL", icon: postgresicon },
      // { name: "Express", icon: expressiconwhite },
      // { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
      { name: "Shopify", icon: shopifyicon },
    ],
    image: shopifyMooMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    es: "Más proyectos en Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Redux",
        hash: "#Redux",
        icon: reduxicon,
        color: "#764ABC",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "PostgreSQL",
        hash: "#PostgreSQL",
        icon: postgresicon,
        color: "#336791",
      },
      // {
      //   title: "Vue.js",
      //   hash: "#Vue.js",
      //   icon: vuejsicon,
      //   color: "#4FC08D",
      // },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "CircleCI",
        hash: "#CircleCI",
        icon: circleciicon,
        color: "#fff",
      },
      {
        title: "Clarifai",
        hash: "#Clarifai",
        icon: clarifaiicon,
        color: "#0050f4",
      },
      {
        title: "Docker",
        hash: "#Docker",
        icon: dockericon,
        color: "#2396ED",
      },
      {
        title: "Jest",
        hash: "#Jest",
        icon: jesticon,
        color: "#c63d14",
      },
      {
        title: "Redis",
        hash: "#Redis",
        icon: redisicon,
        color: "#912626",
      },
      {
        title: "Netlify",
        hash: "#Netlify",
        icon: netlifyicon,
        color: "#05BDBA",
      },
      {
        title: "Render",
        hash: "#Render",
        icon: rendericon,
        color: "#5EEBC4",
      },
      {
        title: "Firebase",
        hash: "#Firebase",
        icon: firebaseicon,
        color: "#ffa000",
      },
      {
        title: "VueJS",
        hash: "#VueJS",
        icon: vuejsicon,
        color: "#4DBA87",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      // {
      //   title: "Adobe XD",
      //   hash: "#Adobe XD",
      //   icon: adobexdicon,
      //   color: "#FF61F6",
      // },
      // { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      // {
      //   title: "WordPress",
      //   hash: "#WordPress",
      //   icon: wordpressicon,
      //   color: "#21759B",
      // },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
      {
        title: "Zapier",
        hash: "#Zapier",
        icon: zapiericon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const navLinks = [
  { es: "Home", en: "Home", hash: "#home", icon: GoHome },
  { es: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { es: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { es: "Acerca de mí", en: "About me", hash: "#about-me", icon: GoPerson },
  { es: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { es: "Marca", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { es: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:j.adolfo.3@gmail.com",
  text: "j.adolfo.3@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/jes%C3%BAs-adolfo-aguiar-escobar-533176151/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/JesusAdolfoAguiar",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:j.adolfo.3@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    es: '"No es nada importante hacerlo bien la primera vez. Es de vital importancia hacerlo bien la última vez."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    es: `"La web es como un lienzo y el código es la pintura. Crea tu obra maestra."`,
    en: `"The web is like a canvas and the code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Acerca de mí",
  title_EN: "About me",
  description: "Algunos snippets de código sobre mí",
  description_EN: "A few code snippets about me",
  paragraphs_ES: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  description: {
    es: "Escríbeme un mensaje y me comunicaré contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        es: "Nombre",
        en: "Name",
      },
      type: "text",
      validation: {
        es: "Por favor, escribe tu nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        es: "E-Mail",
        en: "E-Mail",
      },
      type: "email",
      validation: {
        es: "Por favor, escribe tu correo electrónico",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        es: "Asunto",
        en: "Subject",
      },
      type: "text",
      validation: {
        es: "Por favor, escribe el asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      es: "Mensaje",
      en: "Message",
    },
    name: "message",
    rows: 10,
    validation: {
      es: "Por favor, escribe tu mensaje.",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      es: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      es: "Acepto que Jesús pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para contactar conmigo.",
      en: "I agree that Jesús may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      es: "Al enviar esta solicitud, usted reconoce que ha leído la Política de Privacidad.",
      en: "By submitting this request, you acknowledge that you have read the Private Policy.",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    es: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    es: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    es: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    es: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    es: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
