<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Homepage</a></li>
		<li><a href="/auth" on:click={drawerClose}>Login</a></li>
		<li><a href="/protected" on:click={drawerClose}>Protected Route</a></li>
	</ul>
</nav>
