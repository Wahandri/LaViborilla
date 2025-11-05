import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const legacyDir = path.join(projectRoot, 'legacy');
const rawDir = projectRoot;

const navNoise = new Set([
  'top of page',
  'bottom of page',
  'Use tab to navigate through the menu items.',
  'info@lbrestaurants.es',
  'Lb Restaurants',
  'LB',
  'La Viborilla',
  'Carta La Viborilla',
  'Malibú Beach Bar',
  'Niña Bonita',
  'Malibu Pool Bar',
  'LB Eventos',
  'Bodas',
  'Bautizos',
  'Comuniones',
  'Eventos Corporativos',
  'Otros Eventos',
  'Otros',
  'Galeria',
  'Contacto',
  'Eventos',
  'Más',
  'Ver más',
  'Reservas:',
  'Reservas',
  'Eventos:',
  'Enviar',
  '¡Gracias por tu mensaje!',
  'Nombre',
  'Apellido',
  'Email',
  'Asunto',
  'Déjanos un mensaje ...',
  'Teléfono',
  'Acepto los términos y condiciones',
  'Política de Privacidad',
  'Política de Cookies',
  'Aviso Legal',
  'Declaración de Accesibilidad'
]);

const entityMap = {
  '&aacute;': 'á',
  '&eacute;': 'é',
  '&iacute;': 'í',
  '&oacute;': 'ó',
  '&uacute;': 'ú',
  '&Aacute;': 'Á',
  '&Eacute;': 'É',
  '&Iacute;': 'Í',
  '&Oacute;': 'Ó',
  '&Uacute;': 'Ú',
  '&ntilde;': 'ñ',
  '&Ntilde;': 'Ñ',
  '&uuml;': 'ü',
  '&Uuml;': 'Ü',
  '&nbsp;': ' ',
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': "'",
  '&hellip;': '…',
  '&mdash;': '—'
};

function decodeEntities(text) {
  return text.replace(/&[a-zA-Z#0-9]+;/g, (match) => entityMap[match] ?? match);
}

function normalizeLine(line) {
  let value = line.replace(/\s+/g, ' ').trim();
  value = decodeEntities(value);
  value = value.replace(/\s+(Reservas|Eventos|Menús)[:]?$/i, '');
  return value.trim();
}

function unique(array) {
  const seen = new Set();
  const result = [];
  for (const item of array) {
    const key = item.toLowerCase();
    if (key && !seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

function readSanitized(file) {
  const filePath = path.join(legacyDir, `${file}.html`);
  return fs.readFileSync(filePath, 'utf-8');
}

function isMeaningfulImage(src) {
  const lower = src.toLowerCase();
  if (lower.includes('logo')) {
    return false;
  }
  const match = src.match(/w_(\d+)/);
  if (match && Number(match[1]) < 80) {
    return false;
  }
  return true;
}

export function extractImages(html) {
  const matches = Array.from(html.matchAll(/<img[^>]*src="([^"]+)"[^>]*>/gi));
  const images = matches
    .map((match) => match[1])
    .filter((src) => src && !src.includes('data:image') && isMeaningfulImage(src));
  return unique(images).map((src) => ({
    src,
    alt: ''
  }));
}

export function extractParagraphs(html) {
  let text = html;
  text = text.replace(/<img[^>]*>/gi, '');
  text = text.replace(/<a[^>]*>/gi, '');
  text = text.replace(/<\/a>/gi, '');
  text = text.replace(/<br\s*\/?>(?:\s)*/gi, '\n');
  text = text.replace(/<[^>]+>/g, '\n');
  const lines = text
    .split(/\n+/)
    .map(normalizeLine)
    .filter((line) => line && !navNoise.has(line));
  return unique(lines);
}

export function loadLegacyContent(slug, file = slug) {
  const sanitized = readSanitized(file);
  const paragraphs = extractParagraphs(sanitized);
  const images = extractImages(sanitized);
  return { paragraphs, images };
}

export function getOriginalTitle(file = 'index') {
  const filePath = path.join(rawDir, `${file}.html`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/<title>([^<]+)<\/title>/i);
  return match ? match[1].trim() : '';
}
