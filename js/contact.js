/* ============================================================
   contact.js
   Collects form values and redirects to WhatsApp with a
   pre-filled message.
   ============================================================ */

const WHATSAPP_NUMBER = '5511956677257';

function sendWhatsApp() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const name     = form.querySelector('input[type="text"]')?.value.trim()  || 'sem nome';
  const phone    = form.querySelector('input[type="tel"]')?.value.trim()   || '';
  const interest = form.querySelector('select')?.value                      || '';
  const message  = form.querySelector('textarea')?.value.trim()            || '';

  const phonePart = phone ? ` (${phone})` : '';
  const text = encodeURIComponent(
    `Olá! Me chamo ${name}${phonePart}, tenho interesse em ${interest}. ${message}`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}
