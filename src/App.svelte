<script>

import Mixer from './views/mixer.svelte'
import Launchpad from './views/launchpad.svelte'
import Piano from './views/piano.svelte'
import {io} from 'socket.io-client'

const socket = io()

let x = 0

let fullscreen = false

function change(e) {
	e.preventDefault()
	if(x+1>2){
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

<main>
	<div class="swap"  on:contextmenu="{change}">↩</div>
	<div class="fs"  on:contextmenu="{fs}">{!fullscreen?'↗':'↙'}</div>
	{#if x == 0}
		<Launchpad 
		on:note_on={noteOn} 
		on:note_off={noteOff}/>
	{:else if x == 1} 
		<Mixer on:cc={cc}/>
	{:else if x == 2} 
		<Piano 
		on:note_on={noteOn} 
		on:note_off={noteOff}/>
	{/if}
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
		color: #fffc;
	}
</style>