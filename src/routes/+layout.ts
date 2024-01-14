import { loggedInUser } from '$lib/stores/user';
import { handleRouting, RouteType } from '$lib/utils/route';
import type { LayoutLoad } from './$types';
import { goto } from '$app/navigation';
import { account } from '$lib/appwrite';
import { get } from 'svelte/store';

export const ssr = false;

export const load = (async ({ route }) => {
	try {
		const user = await account.get();
		if (user) {
			loggedInUser.set(user);
		}

		return {};
	} catch {
		return null;
	} finally {
		const user = get(loggedInUser);
		const routeType = handleRouting(route.id || '');
		const isUserLoggedIn = !!user;
		if (routeType === RouteType.PAGE_PROTECTED) {
			if (!isUserLoggedIn) {
				console.log('forwarding to /login');
				goto('/auth');
			}
		}
	}
}) satisfies LayoutLoad;
