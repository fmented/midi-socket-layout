<script>
    import {scale} from '../scripts/util'
    import { onMount , createEventDispatcher} from "svelte";

    const d = createEventDispatcher()

    export let channel = 0

    onMount(()=>
    {
        let thumb = panThumb.getBoundingClientRect()
        let track = pantrack.getBoundingClientRect()
        pan = scale(currentPan, [0, 127], [0, track.width-(thumb.width*.85)])
    })
    let panThumb
    let pantrack
    let voltrack
    let volPressed = false
    let vol = 0
    let pan
    let panPressed = false
    let muteButton = false
    let soloButton = false
    let currentVol = 127
    let currentPan = 64

    function changeVol(e){
    if(!volPressed) return 
    e.preventDefault()
    let target = e.target
    let rect = target.getBoundingClientRect()
    let tr = voltrack.getBoundingClientRect()
    let {clientY:y} = e.touches[0]
    if(y<tr.top-rect.height && y>tr.bottom+rect.height) return
    vol = scale(y, [tr.top-(rect.height/2), tr.bottom-(rect.height/2)], [0, tr.height-(rect.height*.80)])
    let value = ~~scale(vol, [0, tr.height-(rect.height*.80)], [127, 0])
    if(value==currentVol) return
    currentVol = value
    d('cc', {channel, control:7, value})
    }

    function changePan(e){
    if(!panPressed) return 
    e.preventDefault()
    let target = e.target
    let rect = target.getBoundingClientRect()
    let tr = pantrack.getBoundingClientRect()
    let {clientX:x} = e.touches[0]
    if(x<tr.left-rect.width && x>tr.right+rect.width) return
    pan = scale(x, [tr.left-(rect.width/2), tr.right+(rect.width/2)], [0, tr.width-(rect.width*.80)])
    let value = ~~scale(pan, [0, tr.width-(rect.width*.80)], [0, 127])
    if(value==currentPan) return
    currentPan = value
    d('cc', {channel, control:10, value})
    }

    function muteHandler(){
        muteButton = !muteButton
        let value = muteButton? 127:0
        d('cc', {channel, control:80, value})
    }

    function soloHandler(){
        soloButton = !soloButton
        let value = soloButton? 127:0
        d('cc', {channel, control:81, value})
    }

</script>

<style>
    .vol-thumb{
        transform: translateY(var(--vol));
    }
    .pan-thumb{
        transform: translateX(var(--pan));
    }

</style>
    <svg

    width="100%"
    height="100%"
    viewBox="0 0 118 424"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="117.75" height="424" rx="5" fill="#444444" on:touchend={()=>{volPressed=false; panPressed=false}}/>
    <rect x="52.5" y="85" width="11.25" height="255" rx="5" fill="black" bind:this={voltrack}/>
    <g filter="url(#filter0_d)"
    on:touchstart={()=>volPressed=true}
    on:touchend={()=>volPressed=false}
    on:touchmove={changeVol}
    class="vol-thumb"
    style="--vol:{vol}px;">
      <rect
        x="39"
        y="86"
        width="38"
        height="67"
        rx="4"
        fill="#999999"
        stroke="black"
        stroke-width="2"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="38"
        y="72"
        width="40"
        height="40"
      >
        <circle cx="58" cy="92" r="20" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="39"
          y="86"
          width="38"
          height="67"
          rx="4"
          fill="#777777"
          stroke="black"
          stroke-width="2"
        />
      </g>
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="38"
        y="131"
        width="40"
        height="40"
      >
        <circle cx="58" cy="151" r="20" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask1)">
        <rect
          x="39"
          y="86"
          width="38"
          height="67"
          rx="4"
          fill="#777777"
          stroke="black"
          stroke-width="2"
        />
      </g>
    </g>
    <rect
      bind:this={pantrack}
      x="18.75"
      y="48"
      width="9"
      height="80"
      rx="4.5"
      transform="rotate(-90 18.75 48)"
      fill="black"
    />
    <g filter="url(#filter1_d)">
      <rect
        x="19.75"
        y="353"
        width="78"
        height="19"
        rx="4"
        on:click="{muteHandler}"
        fill="{muteButton ? '#DD6666' : '#999999'}"
        stroke="black"
        stroke-width="2"

      />
      <path
        d="M56.834 358.469L58.7383 364.404L60.6367 358.469H63.3438V367H61.2812V365.008L61.4805 360.93L59.418 367H58.0586L55.9902 360.924L56.1895 365.008V367H54.1328V358.469H56.834Z"
        fill="black"
      />
      <rect
        x="19.75"
        y="382"
        width="78"
        height="19"
        rx="4"
        on:click="{soloHandler}"
        fill="{soloButton ? '#66DD66' : '#999999'}"
        stroke="black"
        stroke-width="2"
      />
      <path
        d="M60.0391 393.732C60.0391 393.432 59.9316 393.197 59.7168 393.029C59.5059 392.861 59.1328 392.688 58.5977 392.508C58.0625 392.328 57.625 392.154 57.2852 391.986C56.1797 391.443 55.627 390.697 55.627 389.748C55.627 389.275 55.7637 388.859 56.0371 388.5C56.3145 388.137 56.7051 387.855 57.209 387.656C57.7129 387.453 58.2793 387.352 58.9082 387.352C59.5215 387.352 60.0703 387.461 60.5547 387.68C61.043 387.898 61.4219 388.211 61.6914 388.617C61.9609 389.02 62.0957 389.48 62.0957 390H60.0449C60.0449 389.652 59.9375 389.383 59.7227 389.191C59.5117 389 59.2246 388.904 58.8613 388.904C58.4941 388.904 58.2031 388.986 57.9883 389.15C57.7773 389.311 57.6719 389.516 57.6719 389.766C57.6719 389.984 57.7891 390.184 58.0234 390.363C58.2578 390.539 58.6699 390.723 59.2598 390.914C59.8496 391.102 60.334 391.305 60.7129 391.523C61.6348 392.055 62.0957 392.787 62.0957 393.721C62.0957 394.467 61.8145 395.053 61.252 395.479C60.6895 395.904 59.918 396.117 58.9375 396.117C58.2461 396.117 57.6191 395.994 57.0566 395.748C56.498 395.498 56.0762 395.158 55.791 394.729C55.5098 394.295 55.3691 393.797 55.3691 393.234H57.4316C57.4316 393.691 57.5488 394.029 57.7832 394.248C58.0215 394.463 58.4062 394.57 58.9375 394.57C59.2773 394.57 59.5449 394.498 59.7402 394.354C59.9395 394.205 60.0391 393.998 60.0391 393.732Z"
        fill="black"
      />
    </g>
    <g filter="url(#filter2_d)"
    on:touchstart={()=>panPressed=true}
    on:touchend={()=>panPressed=false}
    on:touchmove={changePan}
    bind:this={panThumb}
    class="pan-thumb"
    style="--pan:{pan}px;"
    >
      <circle cx="28.375" cy="43.375" r="9.375" fill="#999999" />
      <circle cx="28.375" cy="43.375" r="8.875" stroke="black" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="34"
        y="85"
        width="48"
        height="77"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d"
        x="14.75"
        y="352"
        width="88"
        height="58"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d"
        x="15"
        y="34"
        width="26.75"
        height="26.75"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>

