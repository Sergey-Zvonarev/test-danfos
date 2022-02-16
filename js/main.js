$(function () {

  $('.form').validate({
    rules: {
      name: "required",
      surname: "required",
      email: {
        required: true,
        email: true,
      },
      messages: {
        name: "Введите имя",
        surname: "Введите фамилию",
        email: {
          required: "Введите почту",
          email: "Неверно указан адрес почты"
        }
      }
    }
  });


});