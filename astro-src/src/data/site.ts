// ─────────────────────────────────────────────────────────────
//  Datos centralizados del sitio. NO hardcodear estos valores en
//  los componentes: importar siempre desde aquí.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Asesoría Contable",
  legalName: "Asesoría Contable, Tributaria y Laboral",
  tagline: "Tributaria & Laboral",
  domain: "solucionescontablesperu.com",
  description:
    "Asesoría contable, tributaria y laboral. Contabilidad, declaraciones SUNAT (RENTA, IGV, PLAME), planillas, constitución de empresas y más. Atención cercana y confiable.",
  // Contacto
  phone: "930 916 115",
  phoneRaw: "930916115",
  whatsapp: "51930916115", // +51 (Perú)
  email: "contacto@solucionestacontable.com",
  hours: "Lun – Vie · 9:00 a.m. – 6:00 p.m.",
  hoursSat: "Sábados · 9:00 a.m. – 1:00 p.m.",
  // Titular del estudio (del afiche oficial)
  accountant: {
    name: "Yakel Marcatoma Pozo",
    cpc: "C.P.C. 8413",
  },
  // Oficinas
  offices: [
    { city: "Lima", address: "Calle Ciro Alegría Mz. E Lote 6, San Juan de Miraflores" },
    { city: "Huarochirí", address: "Jr. Augusto Bolognesi Mz. S2 Lt. 21, Pampa Pacta" },
  ],
  // Redes
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const waMessage =
  "Hola Soluciones TA, visité la web y me gustaría recibir información sobre sus servicios contables y agendar una reunión con su equipo.";

export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  waMessage
)}`;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Formatos", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contáctanos", href: "#" },
];

export const serviceDropdown = [
  { name: "Asesoría Contable", desc: "Gestión contable integral bajo NIIF", href: "#servicios" },
  { name: "Asesoría Tributaria", desc: "Cumplimiento tributario integral", href: "#servicios" },
  { name: "Outsourcing de Planillas", desc: "Gestión laboral y cumplimiento ante SUNAFIL", href: "#servicios" },
  { name: "Constitución y Softlanding", desc: "Ingreso y operación de tu empresa en Perú", href: "#servicios" },
  { name: "Formatos y Herramientas", desc: "Utilitarios propios para tu día a día contable", href: "#servicios" },
  { name: "Regularización Contable", desc: "Saneamiento de contabilidad atrasada", href: "#servicios" },
];

export const metrics = [
  { value: "+200", label: "Clientes satisfechos" },
  { value: "+10", label: "Años de experiencia" },
  { value: "+50K", label: "Declaraciones presentadas" },
  { value: "98%", label: "Cumplimiento a tiempo" },
];

// Barra de confianza bajo el hero (CPC · SUNAT · zona · experiencia)
export const trustbar = [
  {
    icon: "badge",
    title: "Yakel Marcatoma Pozo",
    label: "Contador Público Colegiado · C.P.C. 8413",
  },
  { icon: "shield", title: "SUNAT", label: "Atención a fiscalizaciones" },
  {
    icon: "gear",
    title: "Procesos automatizados",
    label: "reportes e indicadores eficientes",
  },
  { icon: "person", title: "Más de 10 años", label: "de experiencia" },
];

// Proceso de trabajo (mockup: "Nuestro proceso es simple y eficaz")
export const process = [
  { step: "1", title: "Diagnóstico", text: "Conocemos tu negocio y necesidades." },
  { step: "2", title: "Propuesta", text: "Diseñamos la mejor solución a tu medida." },
  { step: "3", title: "Ejecución", text: "Implementamos y gestionamos con precisión." },
  { step: "4", title: "Acompañamiento", text: "Te apoyamos continuamente para que sigas creciendo." },
];

export const services = [
  {
    icon: "gear",
    title: "Contabilidad automatizada",
    text: "Centralizamos y procesamos tu información contable con flujos digitales que reducen tareas manuales y errores.",
    benefit: "Menos tiempo y reprocesos",
  },
  {
    icon: "tax",
    title: "Preliminar de impuestos",
    text: "Calculamos anticipadamente IGV, Renta y otras obligaciones para que conozcas cuánto pagar antes del vencimiento.",
    benefit: "Decisiones anticipadas",
  },
  {
    icon: "refund",
    title: "Conciliación bancaria automática",
    text: "Cruzamos movimientos bancarios, ventas y compras para detectar diferencias y mantener tus saldos actualizados.",
    benefit: "Control sin cruces manuales",
  },
  {
    icon: "chart",
    title: "Reportes e indicadores",
    text: "Transformamos tus datos en reportes claros de ingresos, gastos, impuestos y resultados para gestionar mejor.",
    benefit: "Información para decidir",
  },
  {
    icon: "payroll",
    title: "Planillas automatizadas",
    text: "Procesamos remuneraciones, beneficios, boletas y PLAME con controles que reducen tiempos y observaciones.",
    benefit: "Cálculos rápidos y consistentes",
  },
  {
    icon: "calendar",
    title: "Alertas de cumplimiento",
    text: "Organizamos vencimientos tributarios, laborales y documentarios para anticiparnos a multas y contingencias.",
    benefit: "Obligaciones siempre a tiempo",
  },
  {
    icon: "docs",
    title: "Gestión documental digital",
    text: "Ordenamos comprobantes y documentos contables en un flujo digital trazable, accesible y fácil de consultar.",
    benefit: "Documentos bajo control",
  },
  {
    icon: "handshake",
    title: "Outsourcing contable digital",
    text: "Integramos el proceso contable de tu empresa en un servicio remoto, medible y orientado a reducir costos operativos.",
    benefit: "Eficiencia con menor costo",
  },
];

export const reasons = [
  {
    icon: "person",
    title: "Asesoría personalizada y cercana",
    text: "Soluciones hechas a la medida de tu negocio, con un asesor asignado que conoce tu caso.",
  },
  {
    icon: "shield",
    title: "Experiencia y actualización constante",
    text: "Más de 10 años asesorando a empresas y emprendedores, siempre al día con la normativa.",
  },
  {
    icon: "gear",
    title: "Tecnología y procesos eficientes",
    text: "Herramientas digitales y procesos ordenados para entregarte reportes puntuales y sin errores.",
  },
  {
    icon: "handshake",
    title: "Confidencialidad y ética profesional",
    text: "Tu información se maneja con absoluta reserva y dentro del marco legal, sin excepciones.",
  },
];

export const values = [
  "Ética y transparencia",
  "Compromiso con resultados",
  "Comunicación clara y constante",
];

export const faqs = [
  {
    q: "¿Atienden a MYPEs y pequeños negocios, o solo empresas grandes?",
    a: "Sí, la mayoría de mis clientes son MYPEs peruanas. El servicio se adapta al tamaño y al rubro del negocio.",
  },
  {
    q: "¿Cómo se entregan los reportes contables?",
    a: "En Excel formulado, mostrando de dónde sale cada cifra — nunca valores pegados sin sustento.",
  },
  {
    q: "¿Qué pasa si SUNAT me notifica una fiscalización?",
    a: "Te acompaño en la respuesta y los descargos, con la documentación sustentatoria ordenada.",
  },
  {
    q: "¿Incluyen planillas y PLAME en el servicio?",
    a: "Sí, el outsourcing de planillas cubre boletas, PLAME, T-Registro y beneficios sociales.",
  },
  {
    q: "¿Cómo protegen la confidencialidad de mi información?",
    a: "Tu información financiera se maneja con reserva profesional, solo accesible para quien lleva tu cuenta.",
  },
  {
    q: "¿Puedo acceder a los formatos sin ser cliente de asesoría?",
    a: "Sí, los formatos y herramientas se venden de forma independiente a la asesoría contable.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización para un servicio específico?",
    a: "Puedes solicitarla de tres formas: (1) a través del formulario de contacto de la web, (2) escribiéndome directo por WhatsApp, o (3) agendando una consulta inicial gratuita para evaluar lo que necesita tu empresa. Respondo en máximo 48 horas.",
  },
  {
    q: "¿Qué documentación inicial se requiere para comenzar un diagnóstico de mi empresa?",
    a: "Para un diagnóstico inicial se requiere: (1) estados financieros de los últimos 2-3 años, (2) libros y registros contables vigentes (PLE/SIRE), (3) planilla y boletas de pago recientes, (4) último RUC/ficha SUNAT, (5) acceso o copia de tus comprobantes electrónicos. Entrego un checklist detallado al confirmar el proyecto.",
  },
];

export const testimonials = [
  {
    initials: "MC",
    name: "María Campos",
    company: "Empresa de ejemplo — Retail",
    quote: "Desde que llevan mi contabilidad no me preocupo por los vencimientos de SUNAT; todo llega a tiempo y con explicación clara.",
  },
  {
    initials: "JR",
    name: "Jorge Rivas",
    company: "Empresa de ejemplo — Servicios",
    quote: "Me gusta que respondo directo con el contador, no con un call center. Eso me da confianza para crecer mi negocio.",
  },
  {
    initials: "LP",
    name: "Lucía Paredes",
    company: "Empresa de ejemplo — Importación",
    quote: "Las plantillas y formatos que comparten me ahorran horas cada mes en el cierre contable.",
  },
];

export const resources = [
  {
    tag: "Tributario",
    date: "Jun 2026",
    title: "Nuevas tasas de percepción 2026 y su impacto en tu negocio",
    text: "Qué cambió, a quién afecta y cómo evitar pagar de más este año.",
    img: "assets/blog-tributario.svg",
  },
  {
    tag: "Contable",
    date: "May 2026",
    title: "Errores comunes en libros electrónicos y cómo evitarlos",
    text: "Los 5 fallos más frecuentes en el PLE/SIRE que generan observaciones.",
    img: "assets/blog-contable.svg",
  },
  {
    tag: "Laboral",
    date: "Abr 2026",
    title: "Beneficios de una buena gestión laboral en tu empresa",
    text: "Planillas al día, menos multas y colaboradores más tranquilos.",
    img: "assets/blog-laboral.svg",
  },
];
