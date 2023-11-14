<script lang="ts">
	// import shoppingBagIcon from '/icons/shopping-bag-01.svg';
	// import UserIcon from '/icons/user.svg';
	let open_menu = false;

	function toggleMenu() {
		open_menu = !open_menu;
	}
</script>

<!-- hero and nav section -->
<section class="md:flex grid md:h-screen">
	<div class="md:px-28 px-6 py-5 md:h-full h-screen">
		<nav class=" flex justify-between items-center py-5 max-h-screen">
			<ul class="text-primary-text flex justify-between z-50 w-full md:w-fit md:block">
				<li>
					<a href="/" class="font-playfair font-bold text-lg">VitalVisage</a>
				</li>
				<button class="md:hidden" class:hidden={open_menu} on:click={toggleMenu}>
					<img src="/icons/hamburger.svg" class="w-8 h-8" alt="hamburger-icon" />
				</button>
				<button class="md:hidden" class:hidden={!open_menu} on:click={toggleMenu}>
					<img src="/icons/x.svg" class="w-8 h-8" alt="close-icon" />
				</button>
			</ul>

			<ul
				class="flex flex-col z-10 gap-3 md:h-fit h-screen md:gap-8 text-primary-text/50 md:flex md:flex-row md:static absolute top-0 left-0 bottom-0 right-0 py-28 px-6 md:p-0 bg-background"
				class:hidden={!open_menu}
			>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Collection</a>
				</li>
				<li>
					<a href="/">Products</a>
				</li>
				<li>
					<a href="/">About Us</a>
				</li>
			</ul>

			<ul class="md:flex hidden gap-6">
				<li>
					<a href="/">
						<img src="/icons/shopping-bag-01.svg" alt="shopping bag icon" />
					</a>
				</li>
				<li>
					<a href="/">
						<img src="/icons/user.svg" alt="user icon" />
					</a>
				</li>
			</ul>
		</nav>

		<!-- hero section -->
		<div class="py-3 mt-6">
			<h1 class="text-4xl md:text-7xl font-bold text-primary-text font-playfair">
				Embrace Timeless <br /> Beauty
			</h1>
			<p class="text-primary-text/50 font-lato mt-4 py-5 mb-6">
				Indulge in the delicate balance of science and nature, elevating your daily ritual to an
				enriching experience of nourishment and renewal.
			</p>
			<button
				class="bg-transparent outline outline-1 px-8 py-3 outline-primary-text text-primary-text"
			>
				Shop Now
			</button>
			<ul class="flex gap-6 mt-3 py-8">
				<li>
					<div>
						<h2 class="font-bold font-lato text-primary-text text-2xl">700+</h2>
						<p class="text-primary-text/50 font-lato">Sellers</p>
					</div>
				</li>
				<li>
					<div>
						<h2 class="font-bold font-lato text-primary-text text-2xl">40+</h2>
						<p class="text-primary-text/50 font-lato">Product</p>
					</div>
				</li>
				<li>
					<div>
						<h2 class="font-bold font-lato text-primary-text text-2xl">2000+</h2>
						<p class="text-primary-text/50 font-lato">Customers</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
	{#if !open_menu}
		<picture>
			<div class="relative">
				<img src="/hero-pic1.png" class="md:w-[35vw] w-full h-1/2 block md:h-screen" alt="hero" />
				<div class="absolute bottom-0 w-64 md:-left-1/4">
					<img src="/hero-pic2.png" class="block" alt="hero-2" srcset="" />
				</div>
			</div>
		</picture>
	{/if}
</section>
{#if !open_menu}
	<section class="p-4 mt-8 overflow-x-auto mb-8">
		<ul class="flex gap-6">
			<li class="flex gap-4">
				<img src="/icons/star.svg" class="fill-primary-text" alt="star icon" />
				<p
					class="font-outline text-transparent text-xl md:text-2xl font-playfair font-bold uppercase whitespace-nowrap"
				>
					hydration & motion
				</p>
			</li>
			<li class="flex gap-4">
				<img src="/icons/star.svg" class="fill-primary-text" alt="star icon" />
				<p
					class="font-outline text-transparent text-xl md:text-2xl font-playfair font-bold uppercase whitespace-nowrap"
				>
					natural ingredients
				</p>
			</li>
			<li class="flex gap-4">
				<img src="/icons/star.svg" class="fill-primary-text" alt="star icon" />
				<p
					class="font-outline text-transparent text-xl md:text-2xl font-playfair font-bold uppercase whitespace-nowrap"
				>
					oil control
				</p>
			</li>
			<li class="flex gap-4">
				<img src="/icons/star.svg" class="fill-primary-text" alt="star icon" />
				<p
					class="font-outline text-transparent text-xl md:text-2xl font-playfair font-bold uppercase whitespace-nowrap"
				>
					uv protection
				</p>
			</li>
		</ul>
	</section>
{/if}
