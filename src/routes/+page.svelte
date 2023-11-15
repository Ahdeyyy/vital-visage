<script lang="ts">
	import { onMount } from 'svelte';

	// import shoppingBagIcon from '/icons/shopping-bag-01.svg';
	// import UserIcon from '/icons/user.svg';
	let open_menu = false;

	function toggleMenu() {
		open_menu = !open_menu;
	}
	onMount(() => {
		let featUl = document.querySelector('#feat-ul') as HTMLUListElement;
		let featLi = document.querySelectorAll('#feat-ul li') as NodeListOf<HTMLLIElement>;

		let featUlWidth = featUl?.offsetWidth;

		setInterval(() => {
			featUl.scrollLeft += 1;
			// make the featUl wrap around when it reaches the end
			if (featUl.scrollLeft >= featUlWidth) {
				featUl.scrollLeft = 0;
			}
		}, 20);
	});
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
				<img
					loading="lazy"
					src="/hero-pic1.png"
					class="md:w-[35vw] w-full h-1/2 block md:h-screen"
					alt="hero"
				/>
				<div class="absolute bottom-0 w-64 md:-left-1/4">
					<img loading="lazy" src="/hero-pic2.png" class="block" alt="hero-2" srcset="" />
				</div>
			</div>
		</picture>
	{/if}
</section>
{#if !open_menu}
	<section class="py-4 mt-9 mb-8">
		<ul id="feat-ul" class="flex gap-6 md:gap-8 overflow-x-hidden overflow-y-hidden">
			<li class="flex gap-4">
				<img loading="lazy" src="/icons/star.svg" class="fill-primary-text" alt="star icon" />
				<p
					class="font-outline text-transparent text-xl md:text-3xl font-playfair font-bold uppercase whitespace-nowrap"
				>
					hydration & motion
				</p>
			</li>
			<li class="flex gap-4">
				<img loading="lazy" src="/icons/star.svg" class="fill-primary-text" alt="star icon" />
				<p
					class="font-outline text-transparent text-xl md:text-3xl font-playfair font-bold uppercase whitespace-nowrap"
				>
					natural ingredients
				</p>
			</li>
			<li class="flex gap-4">
				<img loading="lazy" src="/icons/star.svg" class="fill-primary-text" alt="star icon" />
				<p
					class="font-outline text-transparent text-xl md:text-3xl font-playfair font-bold uppercase whitespace-nowrap"
				>
					oil control
				</p>
			</li>
			<li class="flex gap-4">
				<img loading="lazy" src="/icons/star.svg" class="fill-primary-text" alt="star icon" />
				<p
					class="font-outline text-transparent text-xl md:text-3xl font-playfair font-bold uppercase whitespace-nowrap"
				>
					uv protection
				</p>
			</li>
		</ul>
	</section>

	<section class="px-6 md:px-28 py-2 mt-12 md:mt-20 mb-12 md:mb-16">
		<h2 class="font-playfair capitalize text-2xl md:text-5xl text-primary-text font-bold">
			Shop by collection
		</h2>
		<p class="font-lato md:text-lg mt-4 md:mt-6 mb-3 md:mb-7 text-sm text-primary-text/50">
			Explore our curated selection of skincare essentials
		</p>
		<ul class="mt-5 md:mt-12 flex-col md:flex-row flex gap-4">
			<li>
				<img loading="lazy" src="/pure-bliss.jpg" alt="bliss" />
			</li>
			<ul class="flex-col flex justify-between gap-4 md:gap-0">
				<li><img loading="lazy" src="/velvet-veil.png" alt="velvet" /></li>
				<li>
					<img loading="lazy" src="/silk-serenity.png" alt="serenity" />
				</li>
			</ul>
		</ul>
	</section>
	<section class="mt-4 mb-4 md:mb-6 md:mt-32 px-6 md:px-28">
		<h2
			class="mb-7 md:mb-12 font-playfair font-bold text-3xl md:text-5xl text-primary-text capitalize"
		>
			Latest product
		</h2>
		<ul class="grid md:grid-cols-3 grid-cols-1 gap-6">
			<li class="w-fit">
				<img loading="lazy" src="/citrus-facial.png" alt="citrus-facial" />
				<div class="flex justify-between font-lato font-medium text-primary-text mt-4">
					<div>
						<p class="capitalize text-sm md:text-base">citrus face cleaner</p>
						<p class="font-bold text-lg">$50</p>
					</div>
					<button class="px-4 py-1 border border-primary-text self-start">Add to cart</button>
				</div>
			</li>
			<li class="w-fit">
				<img loading="lazy" src="/brightening-vitamin.png" alt="brightening vitamin cream" />
				<div class="flex justify-between font-lato font-medium text-primary-text mt-4">
					<div>
						<p class="capitalize text-sm md:text-base">brightening vitamin cream</p>
						<p class="font-bold text-lg">$30</p>
					</div>
					<button class="px-4 py-1 border border-primary-text self-start">Add to cart</button>
				</div>
			</li>
			<li class="w-fit">
				<img loading="lazy" src="/nourishing-shea.png" alt="nourishing shea butter" />
				<div class="flex justify-between font-lato font-medium text-primary-text mt-4">
					<div>
						<p class="capitalize text-sm md:text-base">nourishing shea butter</p>
						<p class="font-bold text-lg">$100</p>
					</div>
					<button class="px-4 py-1 border border-primary-text self-start">Add to cart</button>
				</div>
			</li>
			<li class="w-fit">
				<img loading="lazy" src="/bamboo-scrub.png" alt="bamboo scrub" />
				<div class="flex justify-between font-lato font-medium text-primary-text mt-4">
					<div>
						<p class="capitalize text-sm md:text-base">bamboo scrub</p>
						<p class="font-bold text-lg">$80</p>
					</div>
					<button class="px-4 py-1 border border-primary-text self-start">Add to cart</button>
				</div>
			</li>
			<li class="w-fit">
				<img loading="lazy" src="/intensive-repair.png" alt="intensive repair night cream" />
				<div class="flex justify-between font-lato font-medium text-primary-text mt-4">
					<div>
						<p class="capitalize text-sm md:text-base">intensive repair nightcream</p>
						<p class="font-bold text-lg">$40</p>
					</div>
					<button class="px-4 py-1 border border-primary-text self-start">Add to cart</button>
				</div>
			</li>
			<li class="w-fit">
				<img loading="lazy" src="/citrus-facial-cleanser.png" alt="citrus facial cleanser" />
				<div class="flex justify-between font-lato font-medium text-primary-text mt-4">
					<div>
						<p class="capitalize text-sm md:text-base">citrus face cleanser</p>
						<p class="font-bold text-lg">$60</p>
					</div>
					<button class="px-4 py-1 border border-primary-text self-start">Add to cart</button>
				</div>
			</li>
		</ul>
	</section>

	<section class="px-6 md:px-28 mt-8 mb-6 md:mt-24">
		<h2
			class="mb-6 md:mb-20 capitalize font-playfair font-bold text-3xl md:text-5xl text-primary-text"
		>
			about VitalVisage
		</h2>
		<div class="grid grid-cols-1 gap-3 md:gap-9 md:grid-cols-3">
			<img src="/about-1.png" alt="about-1" />

			<p class="font-lato text-primary-text text-sm -pb-7 pt-7">
				We believe in the transformative power of cosmetics and skincare, empowering individuals to
				express their unique beauty confidently. With a passion for quality and creativity, we
				strive to create products that not only enhance outer beauty but also foster a sense of
				self-expression and inner confidence. <br /> <br /> Our journey began with a simple vision to
				redefine beauty industry through a combination of cutting-edge research, premium ingredients
				and a commitment to sustainability, Every product in our collection is carefully crafted to deliver
				exceptional results.
			</p>

			<img class="hidden md:block" src="/about-2.png" alt="about-1" />
			<img
				class="md:col-span-3 justify-self-center w-fit md:-translate-y-12"
				src="/about-3.png"
				alt="about-1"
			/>
		</div>
	</section>
{/if}
