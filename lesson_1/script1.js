'use strict';

class Command {
	constructor(command, director, teacher, course, lesson, sumTech, data) {
		this.command = command;
		this.director = director;
		this.teacher = teacher;
		this.course = course;
		this.lesson = lesson;
		this.sumTech = sumTech;
		this.data = data;
	}

	makeBusiness() {
		console.log(`Стартуем новый курс: " ${this.course}". Владелец:  ${this.director}, 
		преподаватель: ${this.teacher}. Всего уроков:  ${this.lesson} .
		Команда Академии: ${this.command}`);
		console.log(`Первое, что изучим будет ${this.data}. Он очень похож на HTML!`);
		console.log(`Технологии которые мы изучим: ${this.sumTech}`);
	}
}

const employers = ['АртеМ',
	'максим',
	'Владимир',
	'сергей', 'НикиТа',
	'евГений', ' Дарья',
	' ',
	'виктория ',
	'ЕкаТерина',
	'',
	' Андрей ',
	'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];
for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].trim() !== '') {
		command.push(employers[i]);
	}
}
for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

function calcCash(arg) {
	const everyCash = Array.prototype.slice.call(arg);
	let total = 0;
	for (let i = 0; i < everyCash.length; i++) {
		total += +everyCash[i];
	}
	return total;
}
const sumTech = data.react.concat(data.add, 'и другие');
const dataReact = data.react[0];
const lesson = calcCash(data.cash);
const react = new Command(command, command[0], command[1], nameCourse, lesson, sumTech, dataReact);

react.makeBusiness();
