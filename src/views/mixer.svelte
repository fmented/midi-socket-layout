<script>
    import Fader from '../components/fader.svelte'
</script>

<div>
    {#each Array(8) as _, i}
        <Fader channel={i-1} on:cc></Fader>
    {/each}
</div>

<style>
    div{
        height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		background-color: #333;
		align-items: center;
    }
</style>