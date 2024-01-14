const PROTECTED_GROUPS = ['/protected'];

export function handleRouting(path: string): RouteType | null {
	if (path === '') return null;

	const isProtected = PROTECTED_GROUPS.find((group) => path.includes(group));

	if (!isProtected) {
		return RouteType.PAGE_UNPROTECTED;
	} else {
		return RouteType.PAGE_PROTECTED;
	}
}

export enum RouteType {
	PAGE_PROTECTED,
	PAGE_UNPROTECTED,
	API_USER_PROTECTED,
	API_BEARER_PROTECTED
}
