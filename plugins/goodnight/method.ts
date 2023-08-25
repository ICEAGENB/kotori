import { Locale, getRandomInt } from '@/tools';

export const getSex = (val: string): string => {
	switch (val) {
		case 'male':
			return Locale.locale('goodnight.cmd.morning.male');
		case 'female':
			return Locale.locale('goodnight.cmd.morning.female');
		default:
			return getSex(getRandomInt(1) === 1 ? 'male' : 'femal');
	}
};

export const formatTime = (timecal: number) => {
	let timeDiff = timecal;
	const hours = Math.floor(timeDiff / 3600000);
	timeDiff %= 3600000;
	const minutes = Math.floor(timeDiff / 60000);
	timeDiff %= 60000;
	const seconds = Math.floor(timeDiff / 1000);
	return (
		hours +
		Locale.locale('goodnight.cmd.night.hours') +
		minutes +
		Locale.locale('goodnight.cmd.night.minutes') +
		seconds +
		Locale.locale('goodnight.cmd.night.seconds')
	);
};
