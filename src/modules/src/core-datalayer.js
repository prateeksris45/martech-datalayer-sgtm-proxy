import { generatePurchaseTemplate } from './modules/ecom-events.js';

window.dataLayer = window.dataLayer || [];

export const trackPurchase = (id, revenue, tax, currency, items) => {
  const payload = generatePurchaseTemplate(id, revenue, tax, currency, items);
  window.dataLayer.push(payload);
};
