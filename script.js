document.getElementById('order-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fulfillment = document.getElementById('fulfillment').value;
  const dish = document.getElementById('dish').value;
  const address = document.getElementById('address').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  const message =
    `New Order - Open Sky Restaurant%0A` +
    `Type: ${fulfillment}%0A` +
    `Dish: ${dish}%0A` +
    `Address: ${address || 'N/A (Pickup)'}%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}`;

  const restaurantWhatsApp = '233547259294'; // her number in international format, no + or leading 0
  const whatsappURL = `https://wa.me/${restaurantWhatsApp}?text=${message}`;

  window.open(whatsappURL, '_blank');
});