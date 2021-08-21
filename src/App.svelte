<script>

import Mixer from './views/mixer.svelte'
import Launchpad from './views/launchpad.svelte'
import Piano from './views/piano.svelte'
import Drums from './views/drums.svelte'
import {io} from 'socket.io-client'

const socket = io()

let landscape = window.innerWidth>window.innerHeight

function checkLandscape() {
	landscape = window.innerWidth>window.innerHeight
}


const views = [Launchpad, Drums, Mixer, Piano]

let x = 0

let fullscreen = false

function change(e) {
	e.preventDefault()
	if(x+1>views.length-1){
		x=0
	}
	else x+=1
}

function fs(e) {
	e.preventDefault()
	if(fullscreen){
		document.exitFullscreen()
	}
	else document.documentElement.requestFullscreen()
	fullscreen=!fullscreen
}

function cc({detail}) {
	socket.emit('cc', detail)
}

function noteOn({detail}) {
	socket.emit('note_on', detail)
}


function noteOff({detail}) {
	socket.emit('note_off', detail)
}
</script>

<svelte:window on:orientationchange={checkLandscape}/>
<main>
	{#if landscape}
	<svelte:component this={views[x]}
	on:note_on={noteOn} 
	on:note_off={noteOff}
	on:cc={cc}
	/>
	{:else}
	<div class="all-center">
		<h2>PLEASE USE LANDSCAPE MODE</h2>
	</div>
	{/if}
	
	<div class="swap"  on:contextmenu="{change}">↩</div>
	<div class="fs"  on:contextmenu="{fs}">{!fullscreen?'↗':'↙'}</div>
</main>

<style>
	:global(*){
		padding: 0;
		box-sizing: border-box;
		user-select: none;
	}
	:global(body){
		overflow: hidden;
		padding: 0;
		margin: 0;
		position: relative;
		height: 100vh;
		width: 100vw;
	}
	main {
		height: 100vh;
		width: 100vw;
		background: repeating-linear-gradient(
  45deg,
  #333,
  #666 30px,
  #333 30px,
  #222 30px
);
	}

	.swap{
		position: fixed;
		top: 0;
		left: 8px;
		font-size: 2em;
	}

	.fs{
		position: fixed;
		top: 0;
		right:8px;
		font-size: 2em;
	}
	.swap, .fs{
		color: #ff6644;
	}
	.all-center{
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
}

.all-center>*{
	color: #ddd;
}
</style>