<template>
  <div class="grid__wrapper">
    <div class="grid__container" style="margin-top:0">
      <div class="grid__item" style="grid-area:22/14/span 17/span 26;">
        <div style="width:100%;height:100%;background:url(/assets/animatedGrid/web-20-21_grijs.gif);background-size:contain;background-repeat: no-repeat;"></div>

      </div>
      <div class="grid__item" style="grid-area:2/19/span 12/span 13;">
        <div style="width:100%;height:100%;background:url(/assets/animatedGrid/web-20-21_groen.gif);background-size:contain;background-repeat: no-repeat;"></div>

      </div>
      <div class="grid__item" style="grid-area:13/31/span 11/span 12;">
        <div style="width:100%;height:100%;background:url(/assets/animatedGrid/web-20-21_blauw.gif);background-size:contain;background-repeat: no-repeat;"></div>

      </div>
      <div class="grid__item" style="grid-area:9/19/span 13/span 14;">
        <div style="width:100%;height:100%;background:url(/assets/animatedGrid/rood.png);background-size:contain;background-repeat: no-repeat;"></div>

      </div>
      <div class="grid__item" style="grid-area:3/32/span 10/span 10;">
        <div style="width:100%;height:100%;background:url(/assets/animatedGrid/web-20-21_tekstje.png);background-size:contain;background-repeat: no-repeat;"></div>

      </div>
      <div class="grid__item" style="grid-area:14/1/span 11/span 11;">
        <div style="width:100%;height:100%;background:url(/assets/animatedGrid/web-20-21_geel-blok.gif);background-size:contain;background-repeat: no-repeat;"></div>

      </div>
      <div class="grid__item" style="grid-area:3/2/span 16/span 15;">
        <div style="width:100%;height:100%;background:url(/assets/animatedGrid/web-20-21_sint-lukas-1624451630.png);background-size:contain;background-repeat: no-repeat;"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid__wrapper {
  width: 100%;
  height: 100vh;
  max-height: calc(20 * 2.1vw + 6em)
}

.grid__container {
  /*position: fixed;*/
  z-index: 100;
  display: grid;
  grid-template-rows: repeat(20, 2.1vw);
  grid-template-columns: repeat(44, 2.1vw);
  width: calc(100% - 10vw);
  height: 90vh;
  max-height: 100vw;
  margin: 5vw;
  margin-top: 5em;
  background:
      white
      url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB7dexEQAgDAOxmP13hjCFG/2de7XO3aZUkjlTDgAAAAAAAAAAAAAAAACgDsiuds9/D/hwBT1Gv1WUAAAAAElFTkSuQmCC)
      repeat top left;
  background-size: 2.1vw;
}

</style>