// slider

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

if (window.innerWidth >= 851) {
	nextBtn.addEventListener('click', function () {
		if (window.innerWidth >= 1800) {
			if (currentIndex < images.length - 6) {
				currentIndex += 1;
				const translateValue = currentIndex * -30;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		} else if (window.innerWidth <= 1800 && window.innerWidth >= 1600) {
			if (currentIndex < images.length - 5) {
				currentIndex += 1;
				const translateValue = currentIndex * -22;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		} else if (window.innerWidth <= 1600 && window.innerWidth >= 1450) {
			if (currentIndex < images.length - 4) {
				currentIndex += 1;
				const translateValue = currentIndex * -20;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		} else if (window.innerWidth <= 1450 && window.innerWidth >= 1350) {
			if (currentIndex < images.length - 4) {
				currentIndex += 1;
				const translateValue = currentIndex * -22;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		} else if (window.innerWidth <= 1350 && window.innerWidth >= 1240) {
			if (currentIndex < images.length - 4) {
				currentIndex += 1;
				const translateValue = currentIndex * -28;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		} else if (window.innerWidth <= 1240 && window.innerWidth >= 1125) {
			if (currentIndex < images.length - 3) {
				currentIndex += 1;
				const translateValue = currentIndex * -25;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		} else if (window.innerWidth <= 1125 && window.innerWidth >= 1050) {
			if (currentIndex < images.length - 3) {
				currentIndex += 1;
				const translateValue = currentIndex * -29;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		} else if (window.innerWidth <= 1050 && window.innerWidth >= 950) {
			if (currentIndex < images.length - 2) {
				currentIndex += 1;
				const translateValue = currentIndex * -28;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		} else if (window.innerWidth <= 950 && window.innerWidth >= 851) {
			if (currentIndex < images.length - 1) {
				currentIndex += 1;
				const translateValue = currentIndex * -28;
				slider.style.transform = `translateX(${translateValue}%)`;
			}
		}
	});

	prevBtn.addEventListener('click', function () {
		if (currentIndex > 0) {
			currentIndex -= 1;
			const translateValue = currentIndex * -25;
			slider.style.transform = `translateX(${translateValue}%)`;
		}
	});
} else if (window.innerWidth <= 850) {
	function setActiveImage(index) {
		images.forEach(function (img) {
			img.classList.remove('active_img');
		});
		images[index].classList.add('active_img');
	}

	prevBtn.addEventListener('click', function () {
		let currentIndex = [...images].findIndex(img =>
			img.classList.contains('active_img')
		);
		if (currentIndex === 0) {
			setActiveImage(images.length - 1);
		} else {
			setActiveImage(currentIndex - 1);
		}
	});

	nextBtn.addEventListener('click', function () {
		let currentIndex = [...images].findIndex(img =>
			img.classList.contains('active_img')
		);
		if (currentIndex === images.length - 1) {
			setActiveImage(0);
		} else {
			setActiveImage(currentIndex + 1);
		}
	});

	images.forEach(function (image, index) {
		image.addEventListener('click', function () {
			setActiveImage(index);
		});
	});
}
// dropdowns currency&days

function setupArrowClick(dropdown, arrowClass, dropdownClass) {
	const arrow = document.querySelector(`.${arrowClass}`);

	arrow.addEventListener('click', () => {
		const isActive = dropdown.classList.contains(
			`active-dropdown${dropdownClass}`
		);
		dropdown.style.top = isActive ? '-900px' : '75px';
		dropdown.style.opacity = isActive ? '0' : '1';
		dropdown.classList.toggle(`active-dropdown${dropdownClass}`);
	});
}

document.addEventListener('DOMContentLoaded', function () {
	const currencyDropdown = document.querySelector('.dropdown-currency');
	const daysDropdown = document.querySelector('.dropdown-days');

	setupArrowClick(currencyDropdown, 'custom-input--arrow_C', '--C');
	setupArrowClick(daysDropdown, 'custom-input--arrow_D', '--D');

	let selectedCurrencyId = null;
	let selectedDaysId = null;

	const customInput = document.querySelector('.currency');
	const customDaysInput = document.querySelector('.days');

	const currencyOptions = document.querySelectorAll('.currency-option');
	const daysOptions = document.querySelectorAll('.days-option');

	currencyOptions.forEach(option => {
		option.addEventListener('click', () => {
			const selectedText = option.querySelector('span').innerHTML;
			customInput.innerHTML = `
                <span class="currency-option">
                    ${selectedText}
                    <svg xmlns="http://www.w3.org/2000/svg" class="custom-input--arrow custom-input--arrow_C" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M8.50781 10L12.5078 14L16.5078 10" stroke="#1D70EC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            `;
			currencyDropdown.style.top = '-900px';
			currencyDropdown.style.opacity = '0';
			currencyDropdown.classList.remove('active-dropdown--C');
			selectedCurrencyId = option.id;
		});
	});

	daysOptions.forEach(option => {
		option.addEventListener('click', () => {
			const selectedText = option.innerHTML;
			customDaysInput.innerHTML = selectedText;
			daysDropdown.style.top = '-900px';
			daysDropdown.style.opacity = '0';
			daysDropdown.classList.remove('active-dropdown--D');
			selectedDaysId = option.id;
		});
	});
});

/// faq dropdown

const toggleElements = document.querySelectorAll('.faq-content--point span');

toggleElements.forEach(element => {
	element.addEventListener('click', () => {
		const answer = element.parentElement.nextElementSibling;
		answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
		element.textContent = element.textContent === '+' ? '-' : '+';
	});
});

///sign in & sign up

const signBtns = document.querySelectorAll('.sign');
const signTitle = document.querySelector('.sign-title');
const switchLink = document.querySelector('.switch-link');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.sign-close');
const emailCont = document.querySelector('.email-container');
const confirmCont = document.querySelector('.confirm-container');
const forgotCont = document.querySelector('.forgot-container');
const switchCont = document.querySelector('.switch-container');
const loginBtn = document.querySelector('.login_btn span');

signBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		overlay.style.display = 'flex';
	});
});

close.addEventListener('click', () => {
	overlay.style.display = 'none';
});

let isSignUp = true;

switchLink.addEventListener('click', () => {
	if (!isSignUp) {
		emailCont.style.display = 'none';
		confirmCont.style.display = 'none';
		forgotCont.style.display = 'block';
		signTitle.textContent = 'Login';
		switchLink.textContent = "Don't have an account? Sign up";
		loginBtn.textContent = 'LOGIN';
	} else {
		emailCont.style.display = 'block';
		confirmCont.style.display = 'block';
		forgotCont.style.display = 'none';
		signTitle.textContent = 'Sign up';
		switchLink.textContent = 'Already have an account? Login';
		switchCont.style.marginTop = '70px';
		loginBtn.textContent = 'SIGN UP';
	}
	isSignUp = !isSignUp;
});

//burger
const burgerLinks = document.querySelectorAll('.burger_link');
const burgerIcon = document.querySelector('.burger_icon');
const burgerContent = document.querySelector('.burger-content');
const activeSvg = document.querySelector('.active_burger-svg');
const defaultSvg = document.querySelector('.default-svg');

burgerIcon.addEventListener('click', function () {
	burgerContent.classList.toggle('show');
	activeSvg.classList.toggle('active_burger-svg');
	activeSvg.classList.toggle('default-svg');
	defaultSvg.classList.toggle('active_burger-svg');
	defaultSvg.classList.toggle('default-svg');
});

burgerLinks.forEach(link => {
	link.addEventListener('click', () => {
		burgerContent.classList.remove('show');

		activeSvg.classList.toggle('active_burger-svg');
		activeSvg.classList.toggle('default-svg');
		defaultSvg.classList.toggle('active_burger-svg');
		defaultSvg.classList.toggle('default-svg');
	});
});


const scrollLinks = document.querySelectorAll('.header_link');
scrollLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();

		let targetId = this.getAttribute('href').slice(1);
		let targetElement = document.getElementById(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth',
			});
		}
	});
});



const currentPassSvgs = document.querySelector('.pass-svgs');
const confirmPassSvgs = document.querySelector('.confirm_pass-svgs');

function togglePassword(currentPassInput, showSvg, unshowSvg) {
	const inputType = currentPassInput.type;
	currentPassInput.type = inputType === 'password' ? 'text' : 'password';
	showSvg.style.display = inputType === 'password' ? 'none' : 'block';
	unshowSvg.style.display = inputType === 'password' ? 'block' : 'none';
}

currentPassSvgs.addEventListener('click', () => {
	const currentPassInput = document.querySelector('input[name="password"]');
	const show = currentPassSvgs.querySelector('.show_pass-seting');
	const unshow = currentPassSvgs.querySelector('.unshow_pass-seting');
	togglePassword(currentPassInput, show, unshow);
});


confirmPassSvgs.addEventListener('click', () => {
	const confirmPassInput = document.querySelector('input[name="confirm"]');
	const show = confirmPassSvgs.querySelector('.show_pass-seting');
	const unshow = confirmPassSvgs.querySelector('.unshow_pass-seting');
	togglePassword(confirmPassInput, show, unshow);
});
