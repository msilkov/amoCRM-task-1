const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
	let intervalId;

	// Функция, которая запускает анимацию
	return (seconds) => {
		clearInterval(intervalId); // Остановить предыдущую анимацию

		let remainingSeconds = seconds;
		// Если время не равно 0, то запускаем таймер
		if (remainingSeconds !== 0) {
			// Запустить новую анимацию, которая будет обновлять таймер каждую секунду
			intervalId = setInterval(() => {
				remainingSeconds--;

				// Рассчитать часы, минуты и секунды на основе оставшегося времени
				const hours = Math.floor(remainingSeconds / 3600);
				const minutes = Math.floor((remainingSeconds % 3600) / 60);
				const seconds = remainingSeconds % 60;

				// Сформировать строку в формате "hh:mm:ss"
				const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
					.toString()
					.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

				// Обновить элемент таймера с отформатированным временем
				timerEl.textContent = formattedTime;

				// Если таймер закончился, остановить анимацию
				if (remainingSeconds === 0) {
					clearInterval(intervalId);
				}
			}, 1000); // Запускать каждую секунду
		} else {
			// Если время равно 0, то показываем сообщение с просьбой ввести время
			alert('Введите значение таймера');
		}
	};
};

// Создать аниматор таймера
const animateTimer = createTimerAnimator();

// Получить значение поля ввода, очистить его от всех символов, кроме цифр
inputEl.addEventListener('input', () => {
	inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

// Запустить таймер при нажатии на кнопку "Start"
buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value); // Получить значение из поля ввода как число

	animateTimer(seconds); // Запустить анимацию таймера с указанным количеством секунд

	inputEl.value = ''; // Очистить поле ввода
});
