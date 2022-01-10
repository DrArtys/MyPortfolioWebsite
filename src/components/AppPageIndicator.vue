<template>
	<div class="container">
		<div
			:class="[`bg-${currentColor}-100`]"
			class="p-2 px-3 z-50 rounded-full lg:right-24 right-48 top-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed"
		>
			<router-link
				v-for="link in links"
				:to="link.path"
				:key="link.path"
				class="w-4 h-4 block my-2 rounded-full"
				:class="navigatorColor"
				exact
				:active-class="`bg-${currentColor}-200`"
			>
			</router-link>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
	data() {
		return {
			sectionObserver: null,
			router: useRouter(),
			currentColor: 'pink',
			currentPath: '/#first',
			links: {
				'#first': { path: '/#first', color: 'pink' },
				'#second': { path: '/#second', color: 'green' },
				'#third': { path: '/#third', color: 'yellow' },
				'#fourth': { path: '/#fourth', color: 'blue' },
				'#five': { path: '/#fifth', color: 'red' },
			},
		}
	},
	mounted() {
		this.observeSections()
	},
	computed: {
		navigatorColor() {
			if (this.router.currentRoute.fullPath == this.currentPath) {
				console.log(this.router.currentRoute.fullPath == this.currentPath)
				return [`bg-${this.currentColor}-primary`]
			}
			return [`bg-${this.currentColor}-200`]
		},
	},
	methods: {
		setNewColor(section) {
			this.currentColor = this.links[section].color
		},
		getLinkColor(path) {
			console.log(path)
			if (this.router.currentRoute.fullPath == path) {
				return [`bg-${this.currentColor}-primary`]
			}
			return [`bg-${this.currentColor}-200`]
		},
		observeSections() {
			try {
				this.sectionObserver.disconnect()
			} catch (error) {}

			const options = {
				rootMargin: '20px',
				threshold: 0.5,
			}
			this.sectionObserver = new IntersectionObserver(
				this.sectionObserverHandler,
				options
			)

			// Observe each section
			const sections = document.querySelectorAll('section')
			sections.forEach((section) => {
				this.sectionObserver.observe(section)
			})
		},
		sectionObserverHandler(entries) {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id
					this.router.push({
						hash: `#${sectionId}`,
					})
					this.setNewColor(`#${sectionId}`)
					this.currentPath = `/#${sectionId}`
				}
			}
		},
	},
}
</script>

// script // import { ref } from '@vue/reactivity' // import { useRouter } from
'vue-router' // export default { // setup() { // const router = useRouter() //
const currentColor = ref(null) // function checkPage() { //
console.log(router.currentRoute.value.fullPath) // } //
window.addEventListener('scroll', () => { // checkPage() // }) // const
pathsColors = { // '/#first': 'pink', // '/#second': 'green', // } // const
pagesIndicators = [ // { // path: '/#first', // color: 'pink', // }, // { //
path: '/#second', // color: 'green', // }, // ] // return { // pagesIndicators,
// } // }, // } //ript>
