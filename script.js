document.getElementById('order-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fulfillment = document.getElementById('fulfillment').value;
  const dish = document.getElementById('dish').value;
  const address = document.getElementById('address').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  const message =
    `New Order - Open Sky Restaurant\n` +
    `Type: ${fulfillment}\n` +
    `Dish: ${dish}\n` +
    `Address: ${address || 'N/A (Pickup)'}\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}`;

  const restaurantWhatsApp = '233547259294'; // her number in international format, no + or leading 0
  const whatsappURL = `https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
});