import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

type Language = 'en' | 'es';

// Get stored language preference
function getStoredLang(): Language {
	if (!browser) return 'en';
	const stored = localStorage.getItem('cartajima_lang');
	if (stored && (stored === 'en' || stored === 'es')) {
		return stored as Language;
	}
	// Default based on browser locale
	const browserLang = navigator.language.toLowerCase();
	return browserLang.startsWith('es') ? 'es' : 'en';
}

export const currentLang = writable<Language>(getStoredLang());

// Save language preference
if (browser) {
	currentLang.subscribe((lang) => {
		localStorage.setItem('cartajima_lang', lang);
		document.documentElement.lang = lang;
	});
}

export function setLang(lang: Language) {
	currentLang.set(lang);
}

// Translation helper store
export const t = derived(currentLang, ($lang) => {
	return (key: string) => {
		const keys = key.split('.');
		let value: any = translations[$lang];
		for (const k of keys) {
			value = value?.[k];
		}
		return value || key;
	};
});

const translations = {
	en: {
		nav: {
			home: 'Home',
			vision: 'Project',
			land: 'Environment',
			contact: 'Contact'
		},
		hero: {
			title: 'Cartajima. Valle del Genal. 78,000 m².',
			subtitle: 'THE FUTURE OF LUXURY. INTIMACY AND CONNECTION WITH NATURE',
			license: 'PROPERTY WITH LICENSE FOR ECORESORT DEVELOPMENT'
		},
		vision: {
			title: 'Project',
			description: 'A set of 10 small houses (35m²) for 2-3 people, positioned to provide total sense of intimacy. A large central space for events, courses, and as a meeting point for people sharing that purpose. All surrounded by impressive nature.'
		},
		location: {
			title: 'Location',
			marbella: '40 min to Marbella',
			ronda: '15 min to Ronda',
			sierra: '1h 45 min from Málaga',
			description: 'Cartajima marks the highest entry point to Valle del Genal, a valley of singular landscape beauty protected for its unique chestnut forests.',
			gps: '36°37\'39.2"N 5°09\'39.7"W'
		},
		water: {
			title: 'The Water',
			spring: 'A spring that never dries',
			stream: 'Arroyo Blanco with waterfalls and natural pools',
			river: 'Río Genal access',
			description: 'We have never seen the spring dry, even in the driest years. Arroyo Blanco runs along the southern boundary with waterfalls and natural pools. A short walk leads to Río Genal and its crystal-clear pools.'
		},
		story: {
			title: 'The Story',
			years: '20 years of patience',
			alignment: 'Political alignment achieved',
			circumstances: 'Personal circumstances changed',
			description: 'More than 20 years since acquiring the estate, waiting for the alignment of Ayuntamiento, Junta de Andalucía, and Diputación de Málaga. The license is now secured, but family and personal circumstances have changed.'
		},
		cta: {
			view: 'View Action Project',
			contact: 'Contact',
			invitation: 'An invitation to continue the legacy',
			tagline: 'The license is ready. The vision is clear. The timing is now.'
		},
		visionPage: {
			title: 'Project',
			layout: 'The Layout',
			layoutDesc: 'Ten small houses distributed across 40,000 m² to ensure each guest experiences total privacy and immersion in nature.',
			centralTitle: 'The Central House',
			centralDesc: 'A gathering space for events, courses, and community. The balance between private retreat and social connection.',
			centralFeatures: {
				events: 'Event space for gatherings',
				courses: 'Courses and workshops',
				kitchen: 'Reception, central of services'
			},
			landTitle: 'Land Division',
			landDesc: 'The project occupies 2 of 4 parcels, leaving 2 additional parcels available for expansion or alternative uses.',
			infrastructure: 'Infrastructure',
			infrastructureDesc: 'Water supply from village connection and natural spring. Electricity post on the estate. South-facing orientation with moderate slope.',
			infraFeatures: {
				water: 'Water',
				waterDesc: 'Village supply + natural spring',
				electricity: 'Electricity',
				electricityDesc: 'Connection post on the estate',
				orientation: 'Orientation',
				orientationDesc: 'South-facing with moderate slope'
			},
			rendersTitle: 'Concept Renderings',
			rendersDesc: 'Visualization of the small houses integrated into the landscape',
			specs: {
				casitas: '10 small houses + main house and warehouse',
				land: '40,000 m²',
				parcels: '2 parcels for project, 2 available',
				location: 'Cartajima, Valle del Genal'
			}
		},
		landPage: {
			title: 'The Land',
			valleTitle: 'Valle del Genal',
			valleDesc: 'A valley of singular beauty, protected for its exceptional chestnut forest landscape. The golden autumn colors of the chestnut trees draw visitors from across the world.',
			cartajimaTitle: 'Cartajima',
			cartajimaDesc: 'The highest entry point to the valley. A white village (pueblo blanco) perched on the mountainside, offering dramatic views and traditional Andalusian character.',
			waterTitle: 'Water Features',
			waterDesc: 'Arroyo Blanco runs along the southern boundary with natural waterfalls and pools. The estate enjoys direct access to swimming holes carved by centuries of flowing water.',
			accessTitle: 'Accessibility',
			accessDesc: 'Currently 40 minutes from Marbella, 15 minutes from Ronda — the two most visited destinations in Málaga. Road expansion planned for the coming years will reduce these times significantly.',
			captions: {
				pozas: 'Natural pools — crystal clear water',
				cascadas: 'Arroyo Blanco waterfalls',
				pool: 'Natural swimming pool concept'
			},
			activitiesTitle: 'Ecotourism in Valle del Genal',
			activitiesDesc: 'The valley attracts visitors for its natural beauty and outdoor activities',
			hiking: {
				title: 'Hiking',
				desc: 'Through chestnut forests and mountain trails'
			},
			biking: {
				title: 'Mountain Biking',
				desc: 'Autumn trails through colorful landscapes'
			},
			horseback: {
				title: 'Horseback Riding',
				desc: 'Crossing rivers and exploring the valley'
			},
			viewsTitle: 'The Views',
			viewsDesc: 'Looking south across the Valle del Genal'
		},
		contactPage: {
			title: 'Contact',
			subtitle: 'This is a legacy asset, not a quick flip.',
			license: 'License approved and ready',
			legacyTitle: 'A Legacy Opportunity',
			legacyDesc: 'This is not a quick flip. This is a 20-year vision that now awaits the right steward to bring it to life. The license is secured, the water is abundant, and the land is ready.',
			projectSummary: 'Project Summary',
			specs: {
				casitas: '10 small houses + central house',
				land: '40,000 m² in Valle del Genal',
				license: 'License approved and ready',
				water: 'Water sources secured (village + spring)',
				location: '40 min to Marbella, 15 min to Ronda'
			},
			seriousTitle: 'Serious inquiries only',
			seriousDesc: 'This project requires vision, patience, and capital. It is not suitable for quick development or speculative investment. The right partner will understand the value of creating something that honors the 20 years already invested and will stand for decades to come.',
			form: {
				name: 'Name',
				email: 'Email',
				agency: 'Agency',
				message: 'Message',
				send: 'Send Inquiry',
				placeholder: 'Tell us about your interest in the project...',
				formNotice: 'Contact form will be available soon'
			}
		},
		password: {
			title: 'Enter Access Code',
			hint: 'Contact your agency for access',
			placeholder: 'Enter password...',
			button: 'Access',
			error: 'Invalid password'
		}
	},
	es: {
		nav: {
			home: 'Inicio',
			vision: 'Proyecto',
			land: 'Entorno',
			contact: 'Contacto'
		},
		hero: {
			title: 'Cartajima. Valle del Genal. 78.000 m².',
			subtitle: 'EL FUTURO DEL LUJO. INTIMIDAD Y CONEXIÓN CON LA NATURALEZA',
			license: 'FINCA CON LICENCIA PARA DESARROLLO DE ECORESORT'
		},
		vision: {
			title: 'Proyecto',
			description: 'Conjunto de 10 casitas (35m²) para 2-3 personas, emplazadas de manera que se tenga total sensación de intimidad. Un gran espacio central donde celebrar eventos, cursos y que sirva de punto de conexión entre personas que comparten ese motivo. Todo ello rodeado de una naturaleza impresionante.'
		},
		location: {
			title: 'Ubicación',
			marbella: '40 min a Marbella',
			ronda: '15 min a Ronda',
			sierra: '1h 45 min de Málaga',
			description: 'Cartajima marca la entrada más alta al Valle del Genal, un valle de belleza paisajística singular protegido por sus únicos bosques de castaño.',
			gps: '36°37\'39.2"N 5°09\'39.7"W'
		},
		water: {
			title: 'El Agua',
			spring: 'Un manantial que nunca se seca',
			stream: 'Arroyo Blanco con cascadas y pozas',
			river: 'Acceso al Río Genal',
			description: 'Nunca hemos visto secarse el manantial, ni siquiera en los años más secos. El Arroyo Blanco discurre por el límite sur con cascadas y pozas naturales. Un corto paseo lleva al Río Genal y sus pozas de agua cristalina.'
		},
		story: {
			title: 'La Historia',
			years: '20 años de paciencia',
			alignment: 'Alineación política lograda',
			circumstances: 'Las circunstancias personales cambiaron',
			description: 'Más de 20 años desde la adquisición de la finca, esperando la alineación del Ayuntamiento, Junta de Andalucía y Diputación de Málaga. La licencia está asegurada, pero las circunstancias familiares y personales han cambiado.'
		},
		cta: {
			view: 'Ver Proyecto de Actuación',
			contact: 'Contacto',
			invitation: 'Una invitación para continuar el legado',
			tagline: 'La licencia está lista. La visión es clara. El momento es ahora.'
		},
		visionPage: {
			title: 'Proyecto',
			layout: 'La Distribución',
			layoutDesc: 'Diez casitas distribuidas en 40.000 m² para garantizar que cada huésped experimente total privacidad e inmersión en la naturaleza.',
			centralTitle: 'La Casa Central',
			centralDesc: 'Un espacio de encuentro para eventos, cursos y comunidad. El equilibrio entre retiro privado y conexión social.',
			centralFeatures: {
				events: 'Espacio para eventos y reuniones',
				courses: 'Cursos y talleres',
				kitchen: 'Recepción, central de servicios'
			},
			landTitle: 'División de la Finca',
			landDesc: 'El proyecto ocupa 2 de 4 parcelas, dejando 2 parcelas adicionales disponibles para expansión o usos alternativos.',
			infrastructure: 'Infraestructura',
			infrastructureDesc: 'Suministro de agua del pueblo y manantial natural. Poste de electricidad en la finca. Orientación sur con pendiente moderada.',
			infraFeatures: {
				water: 'Agua',
				waterDesc: 'Suministro del pueblo + manantial',
				electricity: 'Electricidad',
				electricityDesc: 'Poste de conexión en la finca',
				orientation: 'Orientación',
				orientationDesc: 'Sur con pendiente moderada'
			},
			rendersTitle: 'Renderizados Conceptuales',
			rendersDesc: 'Visualización de las casitas integradas en el paisaje',
			specs: {
				casitas: '10 casitas + casa principal y almacén',
				land: '40.000 m²',
				parcels: '2 parcelas para proyecto, 2 disponibles',
				location: 'Cartajima, Valle del Genal'
			}
		},
		landPage: {
			title: 'Entorno',
			valleTitle: 'Valle del Genal',
			valleDesc: 'Un valle de belleza singular, protegido por su excepcional paisaje de bosque de castaño. Los dorados colores otoñales de los castaños atraen visitantes de todo el mundo.',
			cartajimaTitle: 'Cartajima',
			cartajimaDesc: 'La entrada más alta al valle. Un pueblo blanco encaramado en la ladera de la montaña, ofreciendo vistas dramáticas y carácter andaluz tradicional.',
			waterTitle: 'Características del Agua',
			waterDesc: 'El Arroyo Blanco discurre por el límite sur con cascadas y pozas naturales. La finca disfruta de acceso directo a pozas de baño talladas por siglos de agua fluyente.',
			accessTitle: 'Accesibilidad',
			accessDesc: 'Actualmente a 40 minutos de Marbella, 15 minutos de Ronda — los dos destinos más visitados de Málaga. Se prevé la ampliación de la carretera en los próximos años que reducirá estos tiempos significativamente.',
			captions: {
				pozas: 'Las pozas — piscinas naturales de agua cristalina',
				cascadas: 'Cascadas del Arroyo Blanco',
				pool: 'Concepto de piscina natural'
			},
			activitiesTitle: 'Ecoturismo en Valle del Genal',
			activitiesDesc: 'El valle atrae visitantes por su belleza natural y actividades al aire libre',
			hiking: {
				title: 'Senderismo',
				desc: 'Por bosques de castaño y senderos de montaña'
			},
			biking: {
				title: 'Ciclismo de Montaña',
				desc: 'Rutas otoñales a través de paisajes coloridos'
			},
			horseback: {
				title: 'Paseos a Caballo',
				desc: 'Cruzando ríos y explorando el valle'
			},
			viewsTitle: 'Las Vistas',
			viewsDesc: 'Mirando al sur a través del Valle del Genal'
		},
		contactPage: {
			title: 'Contacto',
			subtitle: 'Este es un activo de legado, no una inversión rápida.',
			license: 'Licencia aprobada y lista',
			legacyTitle: 'Una Oportunidad de Legado',
			legacyDesc: 'Esto no es una inversión rápida. Esta es una visión de 20 años que ahora espera al custodio adecuado para darle vida. La licencia está asegurada, el agua es abundante y la tierra está lista.',
			projectSummary: 'Resumen del Proyecto',
			specs: {
				casitas: '10 casitas + casa central',
				land: '40.000 m² en Valle del Genal',
				license: 'Licencia aprobada y lista',
				water: 'Fuentes de agua aseguradas (pueblo + manantial)',
				location: '40 min a Marbella, 15 min a Ronda'
			},
			seriousTitle: 'Solo consultas serias',
			seriousDesc: 'Este proyecto requiere visión, paciencia y capital. No es adecuado para desarrollo rápido o inversión especulativa. El socio adecuado comprenderá el valor de crear algo que honre los 20 años ya invertidos y perdurará durante décadas.',
			form: {
				name: 'Nombre',
				email: 'Email',
				agency: 'Agencia',
				message: 'Mensaje',
				send: 'Enviar Consulta',
				placeholder: 'Cuéntanos sobre tu interés en el proyecto...',
				formNotice: 'El formulario de contacto estará disponible próximamente'
			}
		},
		password: {
			title: 'Introduce Código de Acceso',
			hint: 'Contacta a tu agencia para acceso',
			placeholder: 'Introduce contraseña...',
			button: 'Acceder',
			error: 'Contraseña inválida'
		}
	}
};