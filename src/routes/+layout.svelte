<script lang="ts">
	import {
		AppShell,
		AppBar,
		initializeStores,
		Drawer,
		getDrawerStore,
		LightSwitch,
		Avatar
	} from '@skeletonlabs/skeleton';
	import '../app.pcss';
	import Navigation from '$lib/Navigation.svelte';

	initializeStores();
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<svelte:head>
	<title>SvelteKit Template</title>
</svelte:head>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte.fragment slot="lead" class="flex justify-between">
				<button class="btn btn-sm mr-4 lg:hidden" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token h-4 w-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<strong class="text-xl">SvelteKit Template</strong>
				<strong class="text-lg" />
			</svelte.fragment>
			<svelte:fragment slot="trail">
				<LightSwitch class="ml-2" rounded="rounded-full" />

				<Avatar
					width="w-12"
					border="border-2 border-surface-300-600-token hover:!border-primary-500"
					cursor="cursor-pointer" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><Navigation /></svelte:fragment>
	<div class="flex flex-col justify-center p-4">
		<slot />
	</div>
</AppShell>
