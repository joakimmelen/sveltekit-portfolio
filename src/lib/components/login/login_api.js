export async function register(username, password, email) {
	try {
		const response = await fetch('http://127.0.0.1:8000/accounts/register/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password, email })
		});

		if (!response.ok) {
			throw new Error(`HTTP error ${response.status}`);
		}

		const data = await response.json();
		console.log('REGISTER COMPLETE', data);
		return data;
	} catch (error) {
		console.error('Error registering user:', error);
	}
}
export async function login(username, password) {
	try {
		const response = await fetch('http://localhost:8000/accounts/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password }),
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`HTTP error ${response.status}`);
		}

		const data = await response.json();
		console.log('LOGIN SUCCESSFUL', data);
		return data;
	} catch (error) {
		console.error('Error logging in user:', error);
	}
}

export async function checkUserStatus() {
	try {
		const response = await fetch('http://127.0.0.1:8000/accounts/status/', {
			credentials: 'include'
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error checking user status:', error);
	}
}
