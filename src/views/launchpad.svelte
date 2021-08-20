<script>
import Pad from '../components/pad.svelte'

    const row = 3
    const col = 7
    const num = row*col
    const loNote = 60

</script>

<style>
    .base{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #333;
    }

    
</style>

<div class="base">
    {#each Array(num) as _, n}
    <Pad n={loNote+n-1} on:note_on on:note_off/>
    {/each}
</div>