<script lang="ts">
	// import shoppingBagIcon from '/icons/shopping-bag-01.svg';
	// import UserIcon from '/icons/user.svg';
</script>

<!-- hero and nav section -->
<section class="flex max-h-screen h-screen">
	<div class="px-28 py-5">
		<nav class="flex justify-between py-5">
			<ul class="text-primary-text">
				<li>
					<a href="/" class="font-playfair font-bold text-lg">VitalVisage</a>
				</li>
			</ul>
			<ul class="flex gap-8 text-primary-text/50">
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

			<ul class="flex gap-6">
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
			<h1 class="text-7xl font-bold text-primary-text font-playfair">
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
			<ul class="flex gap-6 mt-3 py-6">
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
	<picture>
		<div class="relative w-full h-full">
			<img src="/hero-pic1.png" class="md:w-[35vw] block md:h-screen" alt="hero" />
			<div class="absolute bottom-0 w-64 -left-1/4">
				<img src="/hero-pic2.png" class="hidden md:block" alt="hero-2" srcset="" />
			</div>
		</div>
	</picture>
</section>
