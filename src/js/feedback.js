document
  .getElementById('feedbackForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validation
    if (name.trim() === '' || phone.trim() === '' || message.trim() === '') {
      alert('Будь ласка, заповніть усі поля');
      return;
    }

    const validPhone = /^\+380\d{9}$/;

    if (!validPhone.test(phone)) {
      alert(
        'Будь ласка, введіть коректний номер телефону у форматі +380XXXXXXXXX'
      );
      return;
    }

    // Sending data to the server via the Fetch API
    fetch('https://feedback-server-cyan.vercel.app/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        message: message,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert(data.message || 'Дякуємо! Ваше повідомлення було надіслано.');
        document.getElementById('feedbackForm').reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Сталася помилка при надсиланні форми.');
      });
  });
