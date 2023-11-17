const nav = document.querySelectorAll('.aside-li');
const searchCont = document.querySelector('.search-container');
const searchContMob = document.querySelector('.search-container-mob');

const cabinetReferral = document.querySelector('.CabinetReferral');
const referral_cont = document.querySelector('.referral_cont');

const cabinetDeposit = document.querySelector('.cabinetDeposit');
const cabinetDeposit_cont = document.querySelector('.cabinetDeposit_cont');

const dashboard_cont = document.querySelector('.dashboard_cont');
const dashboard = document.querySelector('.dashboard');

const withdraw_cont = document.querySelector('.withdraw_cont');
const withdraw = document.querySelector('.withdraw');

const setting_cont = document.querySelector('.settings_cont');
const seting = document.querySelector('.seting');

const howToMine_cont = document.querySelector('.howToMine_cont');
const howToMine = document.querySelector('.howToMine');

const liveVideo_cont = document.querySelector('.liveVideo_cont');
const liveVideo = document.querySelector('.liveVideo');

const cabinetRoad = document.querySelector('.CabinetRoad');
const cabinetRoad_cont = document.querySelector('.CabinetRoad_cont');

const burgerContent = document.querySelector('.burgerCabinet-content');
const cabinetRight = document.querySelector('.cabinet_right');

const activeSvg = document.querySelector('.a-svg');
const defaultSvg = document.querySelector('.d-svg');

nav.forEach(li => {
	li.addEventListener('click', () => {
		nav.forEach(item => item.classList.remove('active-li'));
		li.classList.add('active-li');
		burgerContent.classList.remove('showContent');
		cabinetRight.classList.remove('hideContent');
		activeSvg.classList.toggle('block');
		defaultSvg.classList.toggle('hideContent');
		document.querySelector('.user').classList.toggle('showContent');
		searchContMob.style.display = 'none';

		if (li.hasAttribute('data-dashboard')) {
			searchCont.style.display = 'block';
			cabinetReferral.style.display = 'none';
			referral_cont.style.display = 'none';
			cabinetDeposit.style.display = 'none';
			cabinetDeposit_cont.style.display = 'none';
			dashboard.style.display = 'block';
			dashboard_cont.style.display = 'flex';
			withdraw.style.display = 'none';
			withdraw_cont.style.display = 'none';
			seting.style.display = 'none';
			setting_cont.style.display = 'none';
			howToMine.style.display = 'none';
			howToMine_cont.style.display = 'none';
			liveVideo.style.display = 'none';
			liveVideo_cont.style.display = 'none';
			cabinetRoad.style.display = 'none';
			cabinetRoad_cont.style.display = 'none';
		}

		if (li.hasAttribute('data-deposit')) {
			searchCont.style.display = 'none';
			cabinetReferral.style.display = 'none';
			referral_cont.style.display = 'none';
			cabinetDeposit.style.display = 'block';
			cabinetDeposit_cont.style.display = 'flex';
			dashboard.style.display = 'none';
			dashboard_cont.style.display = 'none';
			withdraw.style.display = 'none';
			withdraw_cont.style.display = 'none';
			seting.style.display = 'none';
			setting_cont.style.display = 'none';
			howToMine.style.display = 'none';
			howToMine_cont.style.display = 'none';
			liveVideo.style.display = 'none';
			liveVideo_cont.style.display = 'none';
			cabinetRoad.style.display = 'none';
			cabinetRoad_cont.style.display = 'none';
		}

		if (li.hasAttribute('data-withdraw')) {
			searchCont.style.display = 'none';
			cabinetReferral.style.display = 'none';
			referral_cont.style.display = 'none';
			cabinetDeposit.style.display = 'none';
			cabinetDeposit_cont.style.display = 'none';
			dashboard.style.display = 'none';
			dashboard_cont.style.display = 'none';
			withdraw.style.display = 'block';
			withdraw_cont.style.display = 'flex';
			seting.style.display = 'none';
			setting_cont.style.display = 'none';
			howToMine.style.display = 'none';
			howToMine_cont.style.display = 'none';
			liveVideo.style.display = 'none';
			liveVideo_cont.style.display = 'none';
			cabinetRoad.style.display = 'none';
			cabinetRoad_cont.style.display = 'none';
		}

		if (li.hasAttribute('data-referral')) {
			searchCont.style.display = 'none';
			cabinetReferral.style.display = 'block';
			referral_cont.style.display = 'flex';
			cabinetDeposit.style.display = 'none';
			cabinetDeposit_cont.style.display = 'none';
			dashboard.style.display = 'none';
			dashboard_cont.style.display = 'none';
			withdraw.style.display = 'none';
			withdraw_cont.style.display = 'none';
			seting.style.display = 'none';
			setting_cont.style.display = 'none';
			howToMine.style.display = 'none';
			howToMine_cont.style.display = 'none';
			liveVideo.style.display = 'none';
			liveVideo_cont.style.display = 'none';
			cabinetRoad.style.display = 'none';
			cabinetRoad_cont.style.display = 'none';
		}

		if (li.hasAttribute('data-setting')) {
			searchCont.style.display = 'none';
			cabinetReferral.style.display = 'none';
			referral_cont.style.display = 'none';
			cabinetDeposit.style.display = 'none';
			cabinetDeposit_cont.style.display = 'none';
			dashboard.style.display = 'none';
			dashboard_cont.style.display = 'none';
			withdraw.style.display = 'none';
			withdraw_cont.style.display = 'none';
			if (window.innerWidth > 481) {
				seting.style.display = 'grid';
			} else {
				seting.style.display = 'flex';
			}
			setting_cont.style.display = 'flex';
			howToMine.style.display = 'none';
			howToMine_cont.style.display = 'none';
			liveVideo.style.display = 'none';
			liveVideo_cont.style.display = 'none';
			cabinetRoad.style.display = 'none';
			cabinetRoad_cont.style.display = 'none';
		}

		if (li.hasAttribute('data-howtomain')) {
			searchCont.style.display = 'none';
			cabinetReferral.style.display = 'none';
			referral_cont.style.display = 'none';
			cabinetDeposit.style.display = 'none';
			cabinetDeposit_cont.style.display = 'none';
			dashboard.style.display = 'none';
			dashboard_cont.style.display = 'none';
			withdraw.style.display = 'none';
			withdraw_cont.style.display = 'none';
			seting.style.display = 'none';
			setting_cont.style.display = 'none';
			howToMine.style.display = 'block';
			howToMine_cont.style.display = 'flex';
			liveVideo.style.display = 'none';
			liveVideo_cont.style.display = 'none';
			cabinetRoad.style.display = 'none';
			cabinetRoad_cont.style.display = 'none';
		}

		if (li.hasAttribute('data-livevideo')) {
			searchCont.style.display = 'none';
			cabinetReferral.style.display = 'none';
			referral_cont.style.display = 'none';
			cabinetDeposit.style.display = 'none';
			cabinetDeposit_cont.style.display = 'none';
			dashboard.style.display = 'none';
			dashboard_cont.style.display = 'none';
			withdraw.style.display = 'none';
			withdraw_cont.style.display = 'none';
			seting.style.display = 'none';
			setting_cont.style.display = 'none';
			howToMine.style.display = 'none';
			howToMine_cont.style.display = 'none';
			liveVideo.style.display = 'block';
			liveVideo_cont.style.display = 'flex';
			cabinetRoad.style.display = 'none';
			cabinetRoad_cont.style.display = 'none';
		}

		if (li.hasAttribute('data-road')) {
			searchCont.style.display = 'none';
			cabinetReferral.style.display = 'none';
			referral_cont.style.display = 'none';
			cabinetDeposit.style.display = 'none';
			cabinetDeposit_cont.style.display = 'none';
			dashboard.style.display = 'none';
			dashboard_cont.style.display = 'none';
			withdraw.style.display = 'none';
			withdraw_cont.style.display = 'none';
			seting.style.display = 'none';
			setting_cont.style.display = 'none';
			howToMine.style.display = 'none';
			howToMine_cont.style.display = 'none';
			liveVideo.style.display = 'none';
			liveVideo_cont.style.display = 'none';
			cabinetRoad.style.display = 'block';
			cabinetRoad_cont.style.display = 'flex';
		}
	});
});

// change dashboard semicircle animation
function handleInputChange(range, percentageSVG, svg1, svg2, circle) {
	let a = range.value - 393;
	let b = a / 3.93;
	circle.style.strokeDasharray = range.value;
	percentageSVG.innerHTML = b.toFixed() + '%';
	if (range.value > 396 && range.value < 590) {
		svg1.style.opacity = '1';
		svg2.style.opacity = '0';
	} else if (range.value > 590) {
		svg1.style.opacity = '0';
		svg2.style.opacity = '1';
	} else {
		svg1.style.opacity = '0';
		svg2.style.opacity = '0';
	}
}

//referral copy link

const tooltip = document.querySelector('.copy_tooltip');

document.querySelectorAll('.dashboard_item').forEach(item => {
	let range = item.querySelector('input[type="range"]');
	const bottomSVG1 = item.querySelector('.dashboard_item-bottom--svg1');
	const bottomSVG2 = item.querySelector('.dashboard_item-bottom--svg2');
	const percentageSVG = item.querySelector('.percentage-svg');
	const circle = item.querySelector('#circle');

	range.addEventListener('input', () => {
		handleInputChange(range, percentageSVG, bottomSVG1, bottomSVG2, circle);
	});
});

let clipboard = new ClipboardJS('#copyLink', {
	text: function (trigger) {
		const input = document.getElementById('referral_input');
		console.log(input);
		return input.value;
	},
});

clipboard.on('success', function (e) {
	tooltip.style.opacity = '1';
	setTimeout(() => {
		tooltip.style.opacity = '0';
	}, 1500);
	e.clearSelection();
});

clipboard.on('error', function (e) {
	alert('Копирование не удалось. Воспользуйтесь сочетанием клавиш Ctrl+C.');
});

// setting password icons switch
const currentPassSvgs = document.querySelector('.current_pass-svgs');
const newPassSvgs = document.querySelector('.new_pass-svgs');
const confirmPassSvgs = document.querySelector('.confirm_pass-svgs');

function togglePassword(currentPassInput, showSvg, unshowSvg) {
	const inputType = currentPassInput.type;
	currentPassInput.type = inputType === 'password' ? 'text' : 'password';
	showSvg.style.display = inputType === 'password' ? 'none' : 'block';
	unshowSvg.style.display = inputType === 'password' ? 'block' : 'none';
}

currentPassSvgs.addEventListener('click', () => {
	const currentPassInput = document.querySelector('input[name="current_pass"]');
	const show = currentPassSvgs.querySelector('.show_pass-seting');
	const unshow = currentPassSvgs.querySelector('.unshow_pass-seting');
	togglePassword(currentPassInput, show, unshow);
});

newPassSvgs.addEventListener('click', () => {
	const newPassInput = document.querySelector('input[name="new_pass"]');
	const show = newPassSvgs.querySelector('.show_pass-seting');
	const unshow = newPassSvgs.querySelector('.unshow_pass-seting');
	togglePassword(newPassInput, show, unshow);
});

confirmPassSvgs.addEventListener('click', () => {
	const confirmPassInput = document.querySelector(
		'input[name="confirming_pass"]'
	);
	const show = confirmPassSvgs.querySelector('.show_pass-seting');
	const unshow = confirmPassSvgs.querySelector('.unshow_pass-seting');
	togglePassword(confirmPassInput, show, unshow);
});

//change username & email

const usernameInput = document.querySelector('.username_input');

const usernameChanger = document.querySelector('.change_username');

usernameChanger.addEventListener('click', () => {
	if (usernameInput.hasAttribute('readonly')) {
		usernameInput.removeAttribute('readonly');
		usernameInput.style.border = '1px solid';
	} else {
		usernameInput.setAttribute('readonly', 'true');
		usernameInput.style.border = '1px solid transparent';
	}
});

const emailInput = document.querySelector('.email_input');

const emailChanger = document.querySelector('.change_email');

emailChanger.addEventListener('click', () => {
	if (emailInput.hasAttribute('readonly')) {
		emailInput.removeAttribute('readonly');
		emailInput.style.border = '1px solid';
	} else {
		emailInput.setAttribute('readonly', 'true');
		emailInput.style.border = '1px solid transparent';
	}
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

const burgerIcon = document.querySelector('.burgerCabinet_icon');

burgerIcon.addEventListener('click', function () {
	burgerContent.classList.toggle('showContent');
	cabinetRight.classList.toggle('hideContent');
	activeSvg.classList.toggle('block');
	defaultSvg.classList.toggle('hideContent');
	document.querySelector('.user').classList.toggle('showContent');
});
