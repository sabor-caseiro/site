window.onload = () => {
	let mainMenu = document.querySelector('#main-menu');
	let mainMenuUl = document.querySelector('#main-menu ul');
	let menuOpen = false;
	const menuBtn = document.querySelector('.menu-btn');
	
	menuBtn.addEventListener('click', () => {
		if (!menuOpen) {
			menuBtn.classList.add('open');

			menuOpen = true;
			
			mainMenu.classList.add('open-menu');
			mainMenu.classList.remove('close-menu');
		
			mainMenu.style.height = '210px';
			mainMenuUl.style.bottom = '0px';
		}

		else {
			menuBtn.classList.remove('open');
			
			menuOpen = false;
			
			mainMenu.classList.remove('open-menu');
			mainMenu.classList.add('close-menu');

			mainMenu.style.height = '80px';
			mainMenuUl.style.bottom = '-125px';
		}
	});

	window.onresize = () => {
		let windowX = window.innerWidth;
		
		menuBtn.classList.remove('open');
		
		menuOpen = false;
		
		mainMenu.classList.remove('open-menu');
		mainMenu.classList.add('close-menu');
		
		mainMenuUl.style.bottom = '-125px';

		if (windowX >= 722) {
			mainMenu.style.height = '42px';
		}

		else {
			mainMenu.style.height = '80px';
		}
	};
};
