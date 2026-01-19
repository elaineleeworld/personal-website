import DOMPurify from 'dompurify';

// simple wrapper for sanitizing HTML before inserting into the DOM
export function sanitizeHtml(dirty) {
  if (!dirty) return '';
  return DOMPurify.sanitize(dirty, { SAFE_FOR_TEMPLATES: true });
}
