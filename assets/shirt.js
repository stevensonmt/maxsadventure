var shirt_color = brown();
var pants_color = blue();

function set_shirt_color(color) {
  switch (color) {
    case brown :
      shirt_color = brown();
      break;
    case red :
      shirt_color = red();
      break;
    case blue :
      shirt_color = blue();
      break;
    case green :
      shirt_color = green();
      break;
    case black :
      shirt_color = black();
      break;
  }
  console.log(shirt_color);
  return shirt_color;
}

function set_pants_color(color) {
  switch (color) {
    case brown :
      pants_color = brown();
      break;
    case red :
      pants_color = red();
      break;
    case blue :
      pants_color = blue();
      break;
    case green :
      pants_color = green();
      break;
  }
  return pants_color;
}

function brown() {
  return 0xA0522D;
}

function red() {
  return 0xE80000;
}

function blue() {
  return 0x6588C4;
}

function green() {
  return 0x0228B22;
}

function black() {
  return 0x000000;
}

function shirt_cover() {
  return (new THREE.MeshBasicMaterial({color: shirt_color}));
}

function pants_cover() {
  return (new THREE.MeshBasicMaterial({color: pants_color}));
}
