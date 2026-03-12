export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

export const translations = {
	en: {
		// Navigation
		'nav.home': 'Home',
		'nav.vision': 'Vision',
		'nav.land': 'The Land',
		'nav.contact': 'Contact',
		'nav.tagline': 'Cartajima Ecotourism Estate',
		'nav.menu_open': 'Open menu',
		'nav.menu_close': 'Close menu',

		// Language toggle
		'lang.switch': 'Español',
		'lang.current': 'EN',

		// Password Gate
		'gate.title': 'Cartajima',
		'gate.subtitle': 'Ecotourism Estate',
		'gate.description': 'A private presentation for qualified real estate partners.',
		'gate.placeholder': 'Agency access code',
		'gate.submit': 'Enter',
		'gate.error': 'Invalid access code. Please contact us for credentials.',
		'gate.inquiries': 'For access, contact:',
		'gate.contact_email': 'info@cartajima-estate.com',

		// Footer
		'footer.tagline': 'A singular ecotourism estate in the mountains of Malaga.',
		'footer.nav_title': 'Explore',
		'footer.contact_title': 'Contact',
		'footer.legal': 'All rights reserved.',
		'footer.location': 'Cartajima, Málaga, Spain',
		'footer.copyright': '© 2025 Cartajima Ecotourism Estate.',

		// Home — Hero
		'home.hero.label': 'Valle del Genal · Málaga',
		'home.hero.title': 'Where the mountain meets the sky',
		'home.hero.subtitle': 'A 26-hectare ecotourism estate with full environmental and planning approval in the mountains of Málaga.',
		'home.hero.cta_primary': 'Explore the Vision',
		'home.hero.cta_secondary': 'View the Land',

		// Home — Vision Block
		'home.vision.label': 'The Opportunity',
		'home.vision.title': 'A rare investment in nature',
		'home.vision.body': 'Cartajima Estate offers 26 hectares of pristine Andalusian mountain land with a fully approved ecotourism development project. The property combines a restored central farmhouse with infrastructure for up to 12 eco-lodges — a turnkey investment opportunity in one of Spain\'s most protected natural corridors.',
		'home.vision.detail1.value': '26 ha',
		'home.vision.detail1.label': 'Total estate',
		'home.vision.detail2.value': '100%',
		'home.vision.detail2.label': 'Approvals secured',
		'home.vision.detail3.value': '12',
		'home.vision.detail3.label': 'Planned eco-lodges',
		'home.vision.detail4.value': '900m',
		'home.vision.detail4.label': 'Altitude',
		'home.vision.cta': 'Read the full vision',

		// Home — Location
		'home.location.label': 'Location',
		'home.location.title': 'At the heart of Valle del Genal',
		'home.location.intro': 'Cartajima sits at the summit of one of Andalusia\'s most celebrated mountain valleys — 900 metres above sea level, surrounded by ancient chestnut forests, clear rivers and white villages.',
		'home.location.card1.title': 'Valle del Genal',
		'home.location.card1.text': 'A protected valley celebrated for its chestnut forests, ancient mule tracks and unspoiled Andalusian character.',
		'home.location.card2.title': 'Marbella · 1 hr',
		'home.location.card2.text': 'The estate is one hour from Marbella, two hours from Málaga Airport — accessible yet genuinely remote.',
		'home.location.card3.title': 'Natural corridor',
		'home.location.card3.text': 'Located within the Sierra de las Nieves UNESCO Biosphere Reserve boundary, adjacent to protected natural park land.',

		// Home — Water
		'home.water.label': 'Natural Resources',
		'home.water.title': 'Living water, living land',
		'home.water.body': 'The estate is crossed by a natural watercourse with natural swimming pools (pozas) fed by mountain springs. The water system supports the entire property and forms a central attraction for future guests — a rare asset in southern Spain.',
		'home.water.cta': 'Discover the land',

		// Home — Story
		'home.story.label': 'The Project',
		'home.story.title': 'From ancient farmland to ecotourism destination',
		'home.story.step1.year': '2022',
		'home.story.step1.title': 'Site acquisition',
		'home.story.step1.text': 'Purchase of the historic Cartajima estate including a centuries-old stone farmhouse and 26 hectares of mixed agricultural and forest land.',
		'home.story.step2.year': '2023',
		'home.story.step2.title': 'Environmental authorisation',
		'home.story.step2.text': 'Full simplified environmental authorisation (AAS) granted by the Junta de Andalucía for the ecotourism development.',
		'home.story.step3.year': '2024',
		'home.story.step3.title': 'Planning approval',
		'home.story.step3.text': 'Proyecto de Actuación approved — permitting construction of the central house renovation, infrastructure, and 12 eco-lodge platforms.',
		'home.story.step4.year': '2025',
		'home.story.step4.title': 'Investment opportunity',
		'home.story.step4.text': 'The estate is now presented to qualified investors and developers ready to realise the approved ecotourism vision.',

		// Home — CTA
		'home.cta.title': 'Ready to explore?',
		'home.cta.body': 'Request full documentation including environmental licence, planning approvals, financial projections and site plans.',
		'home.cta.primary': 'Contact us',
		'home.cta.secondary': 'View the land',

		// Vision page
		'vision.hero.label': 'The Development',
		'vision.hero.title': 'An approved ecotourism vision',
		'vision.hero.subtitle': 'Twelve eco-lodges, a restored farmhouse, and complete infrastructure — fully permitted and ready for investment.',

		'vision.overview.label': 'Project Overview',
		'vision.overview.title': 'The approved plan',
		'vision.overview.body': 'The Proyecto de Actuación, approved by the Junta de Andalucía, permits the development of a sustainable ecotourism estate on 26 hectares of private land in Cartajima, Málaga. The project has undergone full environmental assessment and received simplified environmental authorisation.',

		'vision.specs.title': 'Development specifications',
		'vision.specs.total_area': 'Total estate area',
		'vision.specs.total_area_value': '26.5 hectares',
		'vision.specs.lodges': 'Eco-lodge units',
		'vision.specs.lodges_value': '12 units (approx. 50 m² each)',
		'vision.specs.central': 'Central farmhouse',
		'vision.specs.central_value': 'Renovation of existing stone building',
		'vision.specs.services': 'Services area',
		'vision.specs.services_value': 'Reception, restaurant, bodega',
		'vision.specs.pool': 'Swimming pool',
		'vision.specs.pool_value': 'Natural-style integrated pool',
		'vision.specs.parking': 'Parking',
		'vision.specs.parking_value': '15 spaces, discreetly integrated',
		'vision.specs.energy': 'Energy',
		'vision.specs.energy_value': 'Solar + grid connection',
		'vision.specs.water': 'Water supply',
		'vision.specs.water_value': 'Natural spring + municipal connection',

		'vision.house.label': 'Central House',
		'vision.house.title': 'The farmhouse at the heart of the estate',
		'vision.house.body': 'The existing stone farmhouse will be sensitively restored as the social heart of the development — housing reception, dining, and communal facilities. Its thick stone walls, original timber beams, and traditional courtyard will be preserved and enhanced.',

		'vision.infra.label': 'Infrastructure',
		'vision.infra.title': 'Complete infrastructure included',
		'vision.infra.card1.title': 'Road access',
		'vision.infra.card1.text': 'New access road connecting the estate to the municipal road, with discreet entry signage.',
		'vision.infra.card2.title': 'Utility connections',
		'vision.infra.card2.text': 'Electricity, water, and waste connections fully integrated. Solar installation planned for each lodge.',
		'vision.infra.card3.title': 'Trail network',
		'vision.infra.card3.text': 'Marked walking trails across the estate connecting lodges, water features, and viewpoints.',
		'vision.infra.card4.title': 'Water management',
		'vision.infra.card4.text': 'Natural spring water channelled throughout the estate with a retention pool for irrigation and fire prevention.',

		'vision.division.label': 'Land Division',
		'vision.division.title': 'Estate layout',
		'vision.division.body': 'The 26-hectare estate is thoughtfully divided across the hillside, allowing each lodge to occupy a private plot with views across the valley while sharing central facilities.',
		'vision.division.zone1': 'Central farmhouse zone',
		'vision.division.zone2': 'Lodge plots (12 units)',
		'vision.division.zone3': 'Forest reserve',
		'vision.division.zone4': 'Agricultural land',

		'vision.renders.label': 'Concept Renders',
		'vision.renders.title': 'The vision, visualised',
		'vision.renders.body': 'These simulations illustrate the intended character of the development — low-impact structures integrated into the landscape with traditional Andalusian materials.',

		// Land page
		'land.hero.label': 'The Property',
		'land.hero.title': 'Twenty-six hectares of living landscape',
		'land.hero.subtitle': 'Ancient chestnut forests, mountain streams, natural swimming pools, and panoramic views across Valle del Genal.',

		'land.valley.label': 'Valle del Genal',
		'land.valley.title': 'The most beautiful valley in Málaga',
		'land.valley.body': 'The Valle del Genal is one of Andalusia\'s best-kept secrets — a narrow valley of chestnut forests, ancient villages, and terraced hillsides that turn gold every autumn. Cartajima sits at its highest point, with views stretching from the valley floor to the Mediterranean coast on clear days.',

		'land.village.label': 'Cartajima',
		'land.village.title': 'A white village above the valley',
		'land.village.body': 'The village of Cartajima is one of the smallest and most atmospheric in the Serranía de Ronda. Fewer than 200 inhabitants, a Moorish-origin layout, and a belvedere that locals call "the balcony of the valley". The estate sits immediately below the village, connected by ancient mule tracks.',

		'land.water.label': 'Water Features',
		'land.water.title': 'Natural swimming pools and mountain streams',
		'land.water.body': 'A natural watercourse crosses the lower reaches of the estate, forming a series of natural pozas — small swimming pools carved into the rock by centuries of mountain water. These are a rare and highly prized asset in the dry landscapes of southern Spain.',

		'land.access.label': 'Accessibility',
		'land.access.title': 'Remote, but reachable',
		'land.access.body': 'Despite its mountain setting, the estate is practical to reach from major hubs:',
		'land.access.malaga': 'Málaga Airport',
		'land.access.malaga_time': '1 hr 45 min',
		'land.access.marbella': 'Marbella',
		'land.access.marbella_time': '55 min',
		'land.access.ronda': 'Ronda',
		'land.access.ronda_time': '40 min',
		'land.access.seville': 'Seville',
		'land.access.seville_time': '2 hr 30 min',

		'land.eco.label': 'Activities',
		'land.eco.title': 'Ecotourism activities',
		'land.eco.intro': 'The estate\'s natural setting supports a rich programme of ecotourism experiences:',
		'land.eco.act1': 'Hiking and trail walks through chestnut forest',
		'land.eco.act2': 'Swimming in natural mountain pools',
		'land.eco.act3': 'Birdwatching — golden eagles, griffon vultures, black storks',
		'land.eco.act4': 'Chestnut and mushroom foraging (seasonal)',
		'land.eco.act5': 'Mountain biking on historic mule tracks',
		'land.eco.act6': 'Stargazing — minimal light pollution at 900m altitude',
		'land.eco.act7': 'Horse riding through the valley',
		'land.eco.act8': 'Cultural visits to Cartajima and neighbouring villages',

		'land.views.label': 'The Views',
		'land.views.title': 'Looking south',
		'land.views.body': 'On clear days the view from the estate reaches the Mediterranean — a panorama of layered ridgelines descending from 900 metres to the coast. The village of Cartajima itself offers a celebrated belvedere; the estate has private viewpoints even more dramatic.',

		// Contact page
		'contact.hero.label': 'Private Enquiry',
		'contact.hero.title': 'Speak with us',
		'contact.hero.subtitle': 'This presentation is shared with a limited number of qualified real estate partners. We welcome serious enquiries.',

		'contact.summary.label': 'Project Summary',
		'contact.summary.title': 'Key investment details',
		'contact.summary.item1.label': 'Property',
		'contact.summary.item1.value': '26.5 ha ecotourism estate, Cartajima, Málaga',
		'contact.summary.item2.label': 'Status',
		'contact.summary.item2.value': 'Fully permitted — Proyecto de Actuación approved',
		'contact.summary.item3.label': 'Approvals held',
		'contact.summary.item3.value': 'AAS environmental licence, municipal planning consent',
		'contact.summary.item4.label': 'Development scope',
		'contact.summary.item4.value': '12 eco-lodge units + central farmhouse + infrastructure',
		'contact.summary.item5.label': 'Location',
		'contact.summary.item5.value': 'Valle del Genal, Serranía de Ronda, Málaga',
		'contact.summary.item6.label': 'Access',
		'contact.summary.item6.value': '55 min Marbella · 1 hr 45 min Málaga Airport',

		'contact.form.title': 'Send an enquiry',
		'contact.form.name': 'Full name',
		'contact.form.name_placeholder': 'Your name',
		'contact.form.agency': 'Agency / Organisation',
		'contact.form.agency_placeholder': 'Agency name',
		'contact.form.email': 'Email address',
		'contact.form.email_placeholder': 'your@email.com',
		'contact.form.phone': 'Phone (optional)',
		'contact.form.phone_placeholder': '+34 or international',
		'contact.form.message': 'Message',
		'contact.form.message_placeholder': 'Please describe your interest and any specific questions…',
		'contact.form.submit': 'Send enquiry',
		'contact.form.success_title': 'Thank you for your enquiry',
		'contact.form.success_body': 'We will be in touch shortly with full documentation.',
		'contact.form.send_another': 'Send another message',

		'contact.serious.title': 'For serious enquiries',
		'contact.serious.body': 'We can provide the full dossier including environmental licence, Proyecto de Actuación, financial viability study, cadastral information, and HD site photography.',
		'contact.serious.cta': 'Request full documentation',
	},

	es: {
		// Navegación
		'nav.home': 'Inicio',
		'nav.vision': 'Visión',
		'nav.land': 'La Finca',
		'nav.contact': 'Contacto',
		'nav.tagline': 'Finca Ecoturística Cartajima',
		'nav.menu_open': 'Abrir menú',
		'nav.menu_close': 'Cerrar menú',

		// Cambio de idioma
		'lang.switch': 'English',
		'lang.current': 'ES',

		// Portón de contraseña
		'gate.title': 'Cartajima',
		'gate.subtitle': 'Finca Ecoturística',
		'gate.description': 'Una presentación privada para socios inmobiliarios cualificados.',
		'gate.placeholder': 'Código de acceso de agencia',
		'gate.submit': 'Entrar',
		'gate.error': 'Código de acceso incorrecto. Contáctenos para obtener credenciales.',
		'gate.inquiries': 'Para acceso, contacte:',
		'gate.contact_email': 'info@cartajima-estate.com',

		// Pie de página
		'footer.tagline': 'Una singular finca ecoturística en las montañas de Málaga.',
		'footer.nav_title': 'Explorar',
		'footer.contact_title': 'Contacto',
		'footer.legal': 'Todos los derechos reservados.',
		'footer.location': 'Cartajima, Málaga, España',
		'footer.copyright': '© 2025 Finca Ecoturística Cartajima.',

		// Inicio — Hero
		'home.hero.label': 'Valle del Genal · Málaga',
		'home.hero.title': 'Donde la montaña toca el cielo',
		'home.hero.subtitle': 'Una finca ecoturística de 26 hectáreas con aprobación ambiental y urbanística completa en las montañas de Málaga.',
		'home.hero.cta_primary': 'Explorar la visión',
		'home.hero.cta_secondary': 'Ver la finca',

		// Inicio — Bloque visión
		'home.vision.label': 'La Oportunidad',
		'home.vision.title': 'Una inversión única en la naturaleza',
		'home.vision.body': 'La Finca Cartajima ofrece 26 hectáreas de tierra andaluza de montaña con un proyecto de desarrollo ecoturístico totalmente aprobado. La propiedad combina una casa de campo central restaurada con infraestructura para hasta 12 eco-alojamientos — una oportunidad de inversión llave en mano en uno de los corredores naturales más protegidos de España.',
		'home.vision.detail1.value': '26 ha',
		'home.vision.detail1.label': 'Superficie total',
		'home.vision.detail2.value': '100%',
		'home.vision.detail2.label': 'Permisos obtenidos',
		'home.vision.detail3.value': '12',
		'home.vision.detail3.label': 'Eco-alojamientos',
		'home.vision.detail4.value': '900m',
		'home.vision.detail4.label': 'Altitud',
		'home.vision.cta': 'Leer la visión completa',

		// Inicio — Ubicación
		'home.location.label': 'Ubicación',
		'home.location.title': 'En el corazón del Valle del Genal',
		'home.location.intro': 'Cartajima se sitúa en la cima de uno de los valles de montaña más celebrados de Andalucía — a 900 metros sobre el nivel del mar, rodeada de antiguos bosques de castaños, ríos cristalinos y pueblos blancos.',
		'home.location.card1.title': 'Valle del Genal',
		'home.location.card1.text': 'Un valle protegido conocido por sus bosques de castaños, antiguas veredas y su carácter andaluz intacto.',
		'home.location.card2.title': 'Marbella · 1 h',
		'home.location.card2.text': 'La finca está a una hora de Marbella y a dos horas del Aeropuerto de Málaga — accesible pero genuinamente remota.',
		'home.location.card3.title': 'Corredor natural',
		'home.location.card3.text': 'Situada dentro del límite de la Reserva de la Biosfera UNESCO de la Sierra de las Nieves, adyacente a terreno de parque natural protegido.',

		// Inicio — Agua
		'home.water.label': 'Recursos Naturales',
		'home.water.title': 'Agua viva, tierra viva',
		'home.water.body': 'La finca está atravesada por un curso de agua natural con pozas naturales alimentadas por manantiales de montaña. El sistema hídrico abastece toda la propiedad y constituye una atracción central para los futuros huéspedes — un activo excepcional en el sur de España.',
		'home.water.cta': 'Descubrir la finca',

		// Inicio — Historia
		'home.story.label': 'El Proyecto',
		'home.story.title': 'De tierra de labranza ancestral a destino ecoturístico',
		'home.story.step1.year': '2022',
		'home.story.step1.title': 'Adquisición del terreno',
		'home.story.step1.text': 'Compra de la histórica Finca Cartajima, que incluye una casa de piedra centenaria y 26 hectáreas de tierra mixta agrícola y forestal.',
		'home.story.step2.year': '2023',
		'home.story.step2.title': 'Autorización ambiental',
		'home.story.step2.text': 'Autorización Ambiental Simplificada (AAS) completa concedida por la Junta de Andalucía para el desarrollo ecoturístico.',
		'home.story.step3.year': '2024',
		'home.story.step3.title': 'Aprobación urbanística',
		'home.story.step3.text': 'Proyecto de Actuación aprobado — que permite la renovación de la casa central, infraestructura y 12 plataformas para eco-alojamientos.',
		'home.story.step4.year': '2025',
		'home.story.step4.title': 'Oportunidad de inversión',
		'home.story.step4.text': 'La finca se presenta ahora a inversores y promotores cualificados listos para materializar la visión ecoturística aprobada.',

		// Inicio — CTA
		'home.cta.title': '¿Listo para explorar?',
		'home.cta.body': 'Solicite documentación completa incluyendo licencia ambiental, aprobaciones urbanísticas, proyecciones financieras y planos del terreno.',
		'home.cta.primary': 'Contáctenos',
		'home.cta.secondary': 'Ver la finca',

		// Página Visión
		'vision.hero.label': 'El Desarrollo',
		'vision.hero.title': 'Una visión ecoturística aprobada',
		'vision.hero.subtitle': 'Doce eco-alojamientos, una casa de campo restaurada e infraestructura completa — totalmente permitido y listo para inversión.',

		'vision.overview.label': 'Resumen del Proyecto',
		'vision.overview.title': 'El plan aprobado',
		'vision.overview.body': 'El Proyecto de Actuación, aprobado por la Junta de Andalucía, permite el desarrollo de una finca ecoturística sostenible en 26 hectáreas de terreno privado en Cartajima, Málaga. El proyecto ha superado una evaluación ambiental completa y ha recibido la autorización ambiental simplificada.',

		'vision.specs.title': 'Especificaciones del desarrollo',
		'vision.specs.total_area': 'Superficie total de la finca',
		'vision.specs.total_area_value': '26,5 hectáreas',
		'vision.specs.lodges': 'Unidades de eco-alojamiento',
		'vision.specs.lodges_value': '12 unidades (aprox. 50 m² cada una)',
		'vision.specs.central': 'Casa central de campo',
		'vision.specs.central_value': 'Renovación del edificio de piedra existente',
		'vision.specs.services': 'Área de servicios',
		'vision.specs.services_value': 'Recepción, restaurante, bodega',
		'vision.specs.pool': 'Piscina',
		'vision.specs.pool_value': 'Piscina integrada de estilo natural',
		'vision.specs.parking': 'Aparcamiento',
		'vision.specs.parking_value': '15 plazas, discretamente integradas',
		'vision.specs.energy': 'Energía',
		'vision.specs.energy_value': 'Solar + conexión a red',
		'vision.specs.water': 'Suministro de agua',
		'vision.specs.water_value': 'Manantial natural + conexión municipal',

		'vision.house.label': 'Casa Central',
		'vision.house.title': 'La casa de campo en el corazón de la finca',
		'vision.house.body': 'La casa de piedra existente será restaurada con sensibilidad como núcleo social del desarrollo — albergando recepción, comedor e instalaciones comunitarias. Sus gruesos muros de piedra, vigas de madera originales y patio tradicional serán conservados y realzados.',

		'vision.infra.label': 'Infraestructura',
		'vision.infra.title': 'Infraestructura completa incluida',
		'vision.infra.card1.title': 'Acceso por carretera',
		'vision.infra.card1.text': 'Nueva carretera de acceso que conecta la finca con la vía municipal, con señalización de entrada discreta.',
		'vision.infra.card2.title': 'Conexiones de servicios',
		'vision.infra.card2.text': 'Electricidad, agua y conexiones de residuos totalmente integradas. Instalación solar planificada para cada alojamiento.',
		'vision.infra.card3.title': 'Red de senderos',
		'vision.infra.card3.text': 'Senderos señalizados por toda la finca que conectan alojamientos, elementos acuáticos y miradores.',
		'vision.infra.card4.title': 'Gestión hídrica',
		'vision.infra.card4.text': 'Agua de manantial natural canalizada por toda la finca con balsa de retención para riego y prevención de incendios.',

		'vision.division.label': 'División del Terreno',
		'vision.division.title': 'Distribución de la finca',
		'vision.division.body': 'Las 26 hectáreas de la finca están cuidadosamente distribuidas por la ladera, permitiendo que cada alojamiento ocupe una parcela privada con vistas al valle mientras comparte las instalaciones centrales.',
		'vision.division.zone1': 'Zona de la casa central',
		'vision.division.zone2': 'Parcelas de alojamientos (12 unidades)',
		'vision.division.zone3': 'Reserva forestal',
		'vision.division.zone4': 'Terreno agrícola',

		'vision.renders.label': 'Renders Conceptuales',
		'vision.renders.title': 'La visión, visualizada',
		'vision.renders.body': 'Estas simulaciones ilustran el carácter previsto del desarrollo — estructuras de bajo impacto integradas en el paisaje con materiales andaluces tradicionales.',

		// Página La Finca
		'land.hero.label': 'La Propiedad',
		'land.hero.title': 'Veintiséis hectáreas de paisaje vivo',
		'land.hero.subtitle': 'Antiguos bosques de castaños, arroyos de montaña, pozas naturales y vistas panorámicas sobre el Valle del Genal.',

		'land.valley.label': 'Valle del Genal',
		'land.valley.title': 'El valle más hermoso de Málaga',
		'land.valley.body': 'El Valle del Genal es uno de los secretos mejor guardados de Andalucía — un estrecho valle de bosques de castaños, pueblos ancestrales y laderas en terrazas que se vuelven doradas cada otoño. Cartajima se sienta en su punto más alto, con vistas que se extienden desde el fondo del valle hasta la costa mediterránea en días despejados.',

		'land.village.label': 'Cartajima',
		'land.village.title': 'Un pueblo blanco sobre el valle',
		'land.village.body': 'El pueblo de Cartajima es uno de los más pequeños y evocadores de la Serranía de Ronda. Menos de 200 habitantes, un trazado de origen morisco y un mirador que los lugareños llaman "el balcón del valle". La finca se sitúa inmediatamente bajo el pueblo, conectada por antiguas veredas.',

		'land.water.label': 'Elementos Acuáticos',
		'land.water.title': 'Pozas naturales y arroyos de montaña',
		'land.water.body': 'Un curso de agua natural atraviesa la parte inferior de la finca, formando una serie de pozas naturales — pequeñas piscinas talladas en la roca por siglos de agua de montaña. Son un activo escaso y muy apreciado en los paisajes secos del sur de España.',

		'land.access.label': 'Accesibilidad',
		'land.access.title': 'Remota, pero alcanzable',
		'land.access.body': 'A pesar de su entorno montañoso, la finca es práctica de alcanzar desde los principales núcleos:',
		'land.access.malaga': 'Aeropuerto de Málaga',
		'land.access.malaga_time': '1 h 45 min',
		'land.access.marbella': 'Marbella',
		'land.access.marbella_time': '55 min',
		'land.access.ronda': 'Ronda',
		'land.access.ronda_time': '40 min',
		'land.access.seville': 'Sevilla',
		'land.access.seville_time': '2 h 30 min',

		'land.eco.label': 'Actividades',
		'land.eco.title': 'Actividades de ecoturismo',
		'land.eco.intro': 'El entorno natural de la finca sustenta un rico programa de experiencias ecoturísticas:',
		'land.eco.act1': 'Senderismo por el bosque de castaños',
		'land.eco.act2': 'Baño en pozas naturales de montaña',
		'land.eco.act3': 'Observación de aves — águilas reales, buitres leonados, cigüeñas negras',
		'land.eco.act4': 'Recolección de castañas y setas (temporada)',
		'land.eco.act5': 'Cicloturismo de montaña por antiguas veredas',
		'land.eco.act6': 'Observación de estrellas — mínima contaminación lumínica a 900m',
		'land.eco.act7': 'Rutas a caballo por el valle',
		'land.eco.act8': 'Visitas culturales a Cartajima y pueblos vecinos',

		'land.views.label': 'Las Vistas',
		'land.views.title': 'Mirando al sur',
		'land.views.body': 'En días despejados la vista desde la finca alcanza el Mediterráneo — un panorama de crestas escalonadas que descienden desde los 900 metros hasta la costa. El propio pueblo de Cartajima ofrece un mirador célebre; la finca tiene miradores privados aún más dramáticos.',

		// Página Contacto
		'contact.hero.label': 'Consulta Privada',
		'contact.hero.title': 'Hable con nosotros',
		'contact.hero.subtitle': 'Esta presentación se comparte con un número limitado de socios inmobiliarios cualificados. Damos la bienvenida a consultas serias.',

		'contact.summary.label': 'Resumen del Proyecto',
		'contact.summary.title': 'Detalles clave de inversión',
		'contact.summary.item1.label': 'Propiedad',
		'contact.summary.item1.value': 'Finca ecoturística de 26,5 ha, Cartajima, Málaga',
		'contact.summary.item2.label': 'Estado',
		'contact.summary.item2.value': 'Totalmente permitido — Proyecto de Actuación aprobado',
		'contact.summary.item3.label': 'Permisos obtenidos',
		'contact.summary.item3.value': 'Licencia ambiental AAS, consentimiento urbanístico municipal',
		'contact.summary.item4.label': 'Alcance del desarrollo',
		'contact.summary.item4.value': '12 eco-alojamientos + casa central + infraestructura',
		'contact.summary.item5.label': 'Ubicación',
		'contact.summary.item5.value': 'Valle del Genal, Serranía de Ronda, Málaga',
		'contact.summary.item6.label': 'Acceso',
		'contact.summary.item6.value': '55 min Marbella · 1 h 45 min Aeropuerto de Málaga',

		'contact.form.title': 'Enviar una consulta',
		'contact.form.name': 'Nombre completo',
		'contact.form.name_placeholder': 'Su nombre',
		'contact.form.agency': 'Agencia / Organización',
		'contact.form.agency_placeholder': 'Nombre de la agencia',
		'contact.form.email': 'Dirección de correo',
		'contact.form.email_placeholder': 'su@correo.com',
		'contact.form.phone': 'Teléfono (opcional)',
		'contact.form.phone_placeholder': '+34 o internacional',
		'contact.form.message': 'Mensaje',
		'contact.form.message_placeholder': 'Describa su interés y cualquier pregunta específica…',
		'contact.form.submit': 'Enviar consulta',
		'contact.form.success_title': 'Gracias por su consulta',
		'contact.form.success_body': 'Nos pondremos en contacto en breve con la documentación completa.',
		'contact.form.send_another': 'Enviar otro mensaje',

		'contact.serious.title': 'Para consultas serias',
		'contact.serious.body': 'Podemos proporcionar el dossier completo incluyendo licencia ambiental, Proyecto de Actuación, estudio de viabilidad económica, información catastral y fotografía HD del terreno.',
		'contact.serious.cta': 'Solicitar documentación completa',
	}
} as const;

export type TranslationKey = keyof typeof translations.en;

// i18n store
import { writable, derived } from 'svelte/store';

function detectLocale(): Locale {
	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem('locale');
		if (stored === 'en' || stored === 'es') return stored;
	}
	if (typeof navigator !== 'undefined') {
		const lang = navigator.language.toLowerCase();
		if (lang.startsWith('es')) return 'es';
	}
	return 'en';
}

export const locale = writable<Locale>('en');

export function initLocale() {
	locale.set(detectLocale());
}

export function setLocale(l: Locale) {
	locale.set(l);
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('locale', l);
	}
}

export const t = derived(locale, ($locale) => {
	return (key: TranslationKey): string => {
		return (translations[$locale] as Record<string, string>)[key] ?? (translations.en as Record<string, string>)[key] ?? key;
	};
});
