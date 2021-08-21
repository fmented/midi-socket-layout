<script>
import { createEventDispatcher } from "svelte";

import {randInt} from '../scripts/util'
    let active = false
    export let n = 0
    export let channel = 0
    const d = createEventDispatcher()

function onHandler() {
    active=true
    d("note_on", {note:n, velocity:randInt(96, 127), channel})
}

function offHandler() {
    active=false
    d("note_off", {note:n, velocity:randInt(96, 127), channel})  
}

</script>

<style>
    .pad{
        aspect-ratio: 1/1;
        height: 29%;
        margin: auto;
        background-color: blue;
        border-radius: 10px;
        background-color: #999;
    }

    .active{
        background-color: #6666DD;
    }
</style>

<div class="pad" class:active={active} 
on:touchstart={onHandler} 
on:touchend={offHandler}
on:touchcancel={offHandler}
on:touchmove={e=>e.preventDefault()}
></div>