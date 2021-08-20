# Simple Layout for MIDI Socket Server 


to use it with [midi-socket-server](https://github.com/fmented/midi-socket-server)
install all dependencies and run build then copy the path to public folder and paste it in ***.settings*** as **CLIENT_BASE_DIR** variable 

```bash
#.settings

CLIENT_BASE_DIR="../path/to/public"
```

<hr>

## Install and build

to install all dependencies
>required nodejs
```bash
npm install
```

to build, run
```bash
npm run build
```

<hr>

## Optional but recomended

if you want to create your own layout or customize it
```bash
npm run dev
```

if you want to use ~~Hypescript~~ Typescript
```bash
node scripts/setupTypeScipt.js
```
