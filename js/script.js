document.addEventListener('DOMContentLoaded', function() {
    // Приветственное окно при загрузке страницы
    alert('Добро пожаловать на мой сайт-визитку!');
  
    // Плавная прокрутка при достижении конца страницы
    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
  
      if (scrolled >= totalHeight) {
        // Пользователь достиг конца страницы, прокручиваем в начало
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });
  