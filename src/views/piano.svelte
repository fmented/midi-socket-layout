<script>
  import { createEventDispatcher } from "svelte";
  import { randInt } from "../scripts/util";
  const d = createEventDispatcher();

  let loNote=60
  let channel = 0;
  let svg
  function down(e) {
    let { target } = e;
    let note = Number(target.getAttribute("note"))+loNote;
    target.setAttribute("fill", "#66D")
    console.log(note);
    d("note_on", { note, channel, velocity: randInt(80, 127) });
  }

  function up(e) {
    let { target } = e;
    let note = Number(target.getAttribute("note"))+loNote;
    target.setAttribute("fill", target.localName=="rect"?"white":'black')
    d("note_on", { note, channel, velocity: randInt(80, 127) });
  }

  function cancel(e) {
    e.preventDefault()
    d("all_note_off", {channel,});
    [...svg.children].forEach(el=>{
      el.setAttribute("fill", el.localName=="rect"?"white":'black')
    })

  }
</script>

<style>

</style>

<svg
  width="100%"
  height="100%"
  viewBox="0 0 942 424"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  bind:this="{svg}"
>
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}


    x="0.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="0"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="63.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="2"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="126.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="4"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="189.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="5"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="252.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="7"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="315.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="9"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="378.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="11"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="441.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="12"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="504.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="14"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="567.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="16"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="630.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="17"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="693.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="19"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="756.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="21"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="819.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="23"
  />
  <rect
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    x="882.5"
    y="0.5"
    width="61.8"
    height="423"
    fill="white"
    stroke="#CCCCCC"
    note="24"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M47.5 0.5H77.9V262C77.9 264.485 75.8853 266.5 73.4 266.5H52C49.5147 266.5 47.5 264.485 47.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="1"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M110.5 0.5H140.9V262C140.9 264.485 138.885 266.5 136.4 266.5H115C112.515 266.5 110.5 264.485 110.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="3"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M236.5 0.5H266.9V262C266.9 264.485 264.885 266.5 262.4 266.5H241C238.515 266.5 236.5 264.485 236.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="6"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M299.5 0.5H329.9V262C329.9 264.485 327.885 266.5 325.4 266.5H304C301.515 266.5 299.5 264.485 299.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="8"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M362.5 0.5H392.9V262C392.9 264.485 390.885 266.5 388.4 266.5H367C364.515 266.5 362.5 264.485 362.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="10"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M488.5 0.5H518.9V262C518.9 264.485 516.885 266.5 514.4 266.5H493C490.515 266.5 488.5 264.485 488.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="13"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M551.5 0.5H581.9V262C581.9 264.485 579.885 266.5 577.4 266.5H556C553.515 266.5 551.5 264.485 551.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="15"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M677.5 0.5H707.9V262C707.9 264.485 705.885 266.5 703.4 266.5H682C679.515 266.5 677.5 264.485 677.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="18"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M803.5 0.5H833.9V262C833.9 264.485 831.885 266.5 829.4 266.5H808C805.515 266.5 803.5 264.485 803.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="22"
  />
  <path
    on:touchstart={down}
    on:touchend={up} on:touchmove={e=>e.preventDefault()}
on:touchcancel={cancel}

    d="M740.5 0.5H770.9V262C770.9 264.485 768.885 266.5 766.4 266.5H745C742.515 266.5 740.5 264.485 740.5 262V0.5Z"
    fill="black"
    stroke="#CCCCCC"
    note="20"
  />
</svg>
