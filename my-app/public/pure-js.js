/**********************/
/*     Vanilla JS     */
/**********************/
const init = () => {
  drawBlueFade();
}

const drawBlueFade = () => {
  // Canvas to fade from light blue/cyan to a navy blue
  let blueFadeCvs = document.querySelector("#blueFade");
  let blueFadeCtx = blueFadeCvs.getContext("2d");

  let grd = blueFadeCtx.createLinearGradient(0,0,0,150);
  grd.addColorStop(0,"#00b8d4");
  grd.addColorStop(1, "#000080");

  blueFadeCtx.fillStyle = grd;
  blueFadeCtx.fillRect(0,0,300,150);
}
