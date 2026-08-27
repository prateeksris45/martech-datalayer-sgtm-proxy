export const generatePurchaseTemplate = (id, revenue, tax, currencyCode, itemsArray) => {
  return {
    event: "purchase",
    ecommerce: {
      transaction_id: String(id),
      value: parseFloat(revenue),
      tax: parseFloat(tax || 0),
      currency: String(currencyCode).toUpperCase(),
      items: itemsArray.map(item => ({
        item_id: String(item.id),
        item_name: String(item.name),
        price: parseFloat(item.price),
        quantity: parseInt(item.quantity, 10)
      }))
    }
  };
};
