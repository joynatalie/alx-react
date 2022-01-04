export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
	let msg = 'Holberton School';

	if (!isIndex) msg = 'Holberton School main dashboard';

	return msg;
}

export function getLatestNotification() {
	return '<strong>Urgent requirement</strong> - complete by EOD';
}