import type { Models } from 'appwrite';
import { account } from '$lib/appwrite';
import { writable } from 'svelte/store';

export const loggedInUser = writable<Models.Preferences | null>(null);

export async function login(email: string, password: string) {
	await account.createEmailSession(email, password);
	loggedInUser.set(await account.get());
}

export async function logout() {
	await account.deleteSession('current');
	loggedInUser.set(null);
}
