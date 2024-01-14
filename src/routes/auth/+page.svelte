<script lang="ts">
	import { account, ID } from '$lib/appwrite';
	import { loggedInUser, login, logout } from '$lib/stores/user';

	async function register(email: string, password: string) {
		await account.create(ID.unique(), email, password);
		login(email, password);
	}

	function submit(e: any) {
		const formData: FormData = new FormData(e.target as HTMLFormElement);
		const type = e.submitter.dataset.type;

		if (type === 'login') {
			//@ts-ignore
			login(formData.get('email'), formData.get('password'));
		} else if (type === 'register') {
			//@ts-ignore
			register(formData.get('email'), formData.get('password'));
		}
	}
</script>

<div class="container self-center">
	<p>
		{$loggedInUser ? `Logged in as ${$loggedInUser.name}` : 'Not logged in'}
	</p>
	<div class="card p-4">
		<form
			on:submit|preventDefault={submit}
			class="flex w-full flex-col items-center justify-center">
			<input
				class="input mb-4 h-10 max-w-96 p-2"
				type="email"
				placeholder="Email"
				name="email"
				required />
			<input
				class="input mb-4 h-10 max-w-96 p-2"
				type="password"
				placeholder="Password"
				name="password"
				required />
			<div>
				<button
					type="submit"
					data-type="login"
					class="variant-filled-primary btn">
					Login
				</button>
				<button
					type="submit"
					data-type="register"
					class="variant-filled-primary btn">
					Register
				</button>
			</div>
		</form>
	</div>

	<button on:click={logout}>Logout</button>
</div>
