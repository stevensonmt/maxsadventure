
// SET DESIRED COLOR WITH DEFAULT BROWN

var selected_color = brown();

function set_color(color) {
  switch (color) {
    case brown :
      selected_color = brown();
      break;
    case red :
      selected_color = red();
      break;
    case blue :
      selected_color = blue();
      break;
    case green :
      selected_color = green();
      break;
  }
  return selected_color;
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


// SET DESIRED STYLE WITH DEFAULT AFRO

var selected_style = afro;

function set_style(style) {
  selected_style = style;  
}

function mycover() {
  return (new THREE.MeshBasicMaterial({color: selected_color}));
}

function horns() {
  var cover = mycover();
  var horn = new THREE.CylinderGeometry(0, 20, 80);
  var horn1 = new THREE.Mesh(horn, cover);
  horn1.position.x = -40;
  horn1.rotation.z = 0.35;
  var horn2 = new THREE.Mesh(horn, cover);
  horn2.position.x = 40;
  horn2.rotation.z = -0.35;
  var hair = new THREE.Object3D();
  hair.add(horn1);
  hair.add(horn2);
  
  hair.position.set(0, 60, -10);
  
  return hair;
}

function spiky() {
  var cover = mycover();
  var spikyhair = new THREE.SphereGeometry(85,5,5, Math.PI/2, Math.PI*2, 0, 2*Math.PI);
  var hair = new THREE.Mesh(spikyhair, cover);
  hair.position.set(0, 30, -30);
  return hair;
}

function afro() {
  var cover = mycover();
  var afrohair = new THREE.SphereGeometry(85,15,15);
  var hair = new THREE.Mesh(afrohair, cover);
  hair.position.set(0, 30, -40);
  return hair;
}

function cowlick() {
  var cover = mycover();
  var hair = new THREE.CylinderGeometry(0, 20, 80, 3);
  
  var horn1 = new THREE.Mesh(hair, cover);
  horn1.rotation.set(1.5, 0, 0.35);

  var horn1_5 = new THREE.Mesh(new THREE.CylinderGeometry(0, 20, 80, 3), cover);
  horn1_5.rotation.set(1.25,0,0.3);
  
  var horn2 = new THREE.Mesh(new THREE.CylinderGeometry(0, 20, 80, 3), cover);
  horn2.rotation.set(1,0,0.25);

  var horn2_5 = new THREE.Mesh(new THREE.CylinderGeometry(0, 20, 80, 3), cover);
  horn2_5.rotation.set(0.75,0,0.2);

  var horn3 = new THREE.Mesh(new THREE.CylinderGeometry(0, 20, 80, 3), cover);
  horn3.rotation.set(0.5,0,0.15);
  
   var horn3_half = new THREE.Mesh(new THREE.CylinderGeometry(0, 20, 80, 3), cover);
  horn3_half.rotation.set(0.25,0,0.05);
  
  var horn4 = new THREE.Mesh(new THREE.CylinderGeometry(0, 20, 80, 3), cover);
  horn4.rotation.set(0.20,0,0);
  
  var hair = new THREE.Mesh(new THREE.CylinderGeometry(60, 40, 60), cover);
  hair.add(horn1);
  horn1.position.set(-60,25,50);
  hair.add(horn1_5);
  horn1_5.position.set(-50, 30, 50);
  hair.add(horn2);
  horn2.position.set(-40,40,50);
  hair.add(horn2_5);
  horn2_5.position.set(-30,45,50);
  hair.add(horn3);
  horn3.position.set(-20,50,50);
  hair.add(horn3_half);
  horn3_half.position.set(-10, 50, 50);
  hair.add(horn4);
  horn4.position.set(0,52,50);
  hair.position.set(0, 20, -30);
  return hair;
 
}
