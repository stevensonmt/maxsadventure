// This is where stuff in our game will happen:
  var scene = new THREE.Scene();

  // This is what sees the stuff:
  var aspect_ratio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
  camera.position.z = 500;
  // scene.add(camera);

  // This will draw what the camera sees onto the screen:
  var renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // ******** START CODING ON THE NEXT LINE ********
var marker = new THREE.Object3D();
scene.add(marker);

var cover = new
  THREE.MeshNormalMaterial();

var shoe = new THREE.MeshBasicMaterial({color: black()});

var avatar = new THREE.Object3D();
scene.add(avatar);

var body
var right_arm
var left_arm
var right_leg
var left_leg

// HEAD AND BODY  
function createbody() {
  var body = new
  THREE.SphereGeometry(100);
  var cover = shirt_cover();
  var body2 = new THREE.Mesh(body, cover);
  right_arm = rightarm();
  left_arm = leftarm();
  body2.add(right_arm);
  body2.add(left_arm);
  return body2;
}

function updatebody() {
  avatar.remove(body);
  body = createbody();
  avatar.add(body);
}

body = createbody();

avatar.add(body);

function createhead() {
  var head = new
    THREE.SphereGeometry(60);
    var cover = new
    THREE.MeshNormalMaterial();
  var head2 = new
    THREE.Mesh(head, cover);
  head2.position.set(0, 146, 0);
  head2.add(face());
  return head2;
}

var head = createhead();
function face() {

var eye, pupil, eyebrow, nose, mouth, face;

face = new THREE.Object3D();
eye = new THREE.CircleGeometry(15, 25);
var eyecover = new
   THREE.MeshBasicMaterial({color: 0xf7f7f7});
var left_eye = new THREE.Mesh(eye, eyecover);
var pupilcover = new
  THREE.MeshBasicMaterial({color: 0x4295DF});
  pupil = new THREE.CircleGeometry(7, 25);
  var left_pupil = new THREE.Mesh(pupil, pupilcover);
  left_pupil.position.y = -5;
  left_eye.add(left_pupil);
left_eye.position.x = 25;
left_eye.position.y = -5;
face.add(left_eye);

var right_eye = new THREE.Mesh(eye, eyecover);
var pupilcover = new
  THREE.MeshBasicMaterial({color: 0x4295DF});
  pupil = new THREE.CircleGeometry(7, 20);
  var right_pupil = new THREE.Mesh(pupil, pupilcover);
  right_pupil.position.y = -5;
  right_eye.add(right_pupil);
right_eye.position.x = -25;
right_eye.position.y = -5;
face.add(right_eye);

eyebrow = new THREE.PlaneGeometry(25, 10);
var left_eyebrow = new THREE.Mesh(eyebrow, mycover());
left_eyebrow.position.x = 25;
left_eyebrow.position.y = 13;
left_eyebrow.rotation.z = -0.05;
face.add(left_eyebrow);

var right_eyebrow = new THREE.Mesh(eyebrow, mycover());
right_eyebrow.position.x = -25;
right_eyebrow.position.y = 13;
right_eyebrow.rotation.z = 0.05;
face.add(right_eyebrow);


nose = new THREE.CylinderGeometry(0, 20, 30, 3);
nose = new THREE.Mesh(nose, new THREE.MeshNormalMaterial());
nose.position.y = -15;
nose.rotation.x = -0.2;
face.add(nose);

mouth = new THREE.CircleGeometry(20, 5, 3.1, 3.3);
mouth = new THREE.Mesh(mouth, new THREE.MeshBasicMaterial({color: 0xEA2336}));
mouth.position.y = -37;
mouth.position.z = -10;
face.add(mouth);



face.position.z = 55;

return face;
}

avatar.add(head);

function add_hair() {
  avatar.remove(head);

  head = createhead();

  var hair
  switch (selected_style) {
    case afro :
      hair = afro();
      break;
    case spiky :
      hair = spiky();
      break;
    case cowlick :
      hair = cowlick();
      break;
    case horns :
      hair = horns();
      break;
    }
 
  head.add(hair);
  avatar.add(head);
  renderer.render(scene,camera);
}


function rightarm() {
// ARMS
var arm = new
  THREE.CylinderGeometry(20, 30, 120);

var arm_cover = shirt_cover();

var right_arm = new
  THREE.Mesh(arm, arm_cover);
right_arm.position.set(-100, 30, 0);
right_arm.rotation.set(0, 0, 2);
var hand = new
  THREE.SphereGeometry(40);  
  
var right_hand = new
  THREE.Mesh(hand, cover);
right_hand.position.set(0, 60, 0);


right_arm.add(right_hand);

return right_arm;

}
//var right_arm_extender = new
  //THREE.Object3D();
//right_arm_extender.position.set(8, 87, 0);
//right_arm_extender.rotation.set(0, 0, 5.25);
/*right_arm.add(right_arm_extender);*/
function leftarm() {
  
  // ARMS
var arm = new
  THREE.CylinderGeometry(20, 30, 120);

var arm_cover = shirt_cover();


  var left_arm = new
  THREE.Mesh(arm, arm_cover);
left_arm.position.set(100, 30, 0);
left_arm.rotation.set(0, 0, -2);
var hand = new
  THREE.SphereGeometry(40);  
  
var left_hand = new
  THREE.Mesh(hand, cover);
left_hand.position.set(0, 60, 0);

left_arm.add(left_hand);

return left_arm;

}

// HANDS
/*var right_hand = new*/
  //THREE.Mesh(hand, cover);
//right_hand.position.set(0, 60, 0);

// ADD HANDS TO ARMS
//right_arm.add(right_hand);
//left_arm.add(left_hand);

// // ADD SHOULDER PIVOT POINT TO RIGHT ARM -- doesn't work
// var shoulderPivot = new THREE.Object3D();
// shoulderPivot.position.set(-30, 30, 0);
// scene.add( shoulderPivot );
// shoulderPivot.add(right_arm);
// 
// function pivot_around_shoulder() {
//   requestAnimationFrame(pivot_around_shoulder);
//   shoulderPivot.rotation.z += 0.1;
//   renderer.render(scene, camera);
// }
// 
// pivot_around_shoulder();

// ADD ARMS/HANDS TO AVATAR
/*body.add(left_arm);*/
//body.add(right_arm);

// LEGS
var leg = new
  THREE.CylinderGeometry(40, 30, 150);

var pants = pants_cover();


var left_leg = new
  THREE.Mesh(leg, pants);

left_leg.position.set(40, -120, 0);
left_leg.rotation.set(0, 0, 0.1);

var right_leg = new
  THREE.Mesh(leg, pants);

right_leg.position.set(-40, -120, 0);
right_leg.rotation.set(0, 0, -0.1);

// FEET
var foot = new
  THREE.SphereGeometry(46);
  
var left_foot = new
  THREE.Mesh(foot, shoe);
left_foot.position.set(0, -100, 0);

var right_foot = new
  THREE.Mesh(foot, shoe);
right_foot.position.set(0, -100, 0);



// ADD FEET TO LEGS
left_leg.add(left_foot);
right_leg.add(right_foot);

// ADD LEGS/FEET TO AVATAR
avatar.add(left_leg);
avatar.add(right_leg);

marker.add(avatar);
marker.add(camera);

makeTreeAt( 500, 0);
makeTreeAt(-500, 0);
makeTreeAt( 750, -1000);
makeTreeAt(-750, -1000); 

function makeTreeAt(x, z) {
  var trunk = new THREE.Mesh(
    new
     THREE.CylinderGeometry(50, 50, 200),
    new
     THREE.MeshBasicMaterial({color: 0xA0522D})
  );
  
  var top = new THREE.Mesh(
    new
     THREE.SphereGeometry(150),
    new
     THREE.MeshBasicMaterial({color: 0x228B22})
  );
  top.position.y = 175;
  trunk.add(top);
  trunk.position.set(x, -75, z);
  scene.add(trunk);
}

// ANIMATE
var is_cartwheeling = false;
var is_flipping = false;
var is_spinning = false;
var is_waving = false;
var is_headshaking = false;
var is_headnodding = false;


function animate() {
  requestAnimationFrame(animate);
  if (is_cartwheeling) {
    avatar.rotation.z = avatar.rotation.z + 0.05;
  }
  if (is_flipping) {
    avatar.rotation.x = avatar.rotation.x + 0.05;
  }
  if (is_spinning) {
    avatar.rotation.y = avatar.rotation.y + 0.05;
  }



  renderer.render(scene, camera);
} 
animate();

function reset() {
    is_cartwheeling = false;
    is_flipping = false;
    is_spinning = false;
    is_waving = false;
    is_headshaking = false;
    is_headnodding = false;
    avatar.rotation.set(0,0,0);
    right_arm.position.set(-100, 30, 0);
    right_arm.rotation.set(0,0,2);
    head.rotation.set(0, 0, 0);
    avatar.position.y = 0;
    
  renderer.render(scene, camera);
}

var home = { x: 0, y: 0, z: 0 };

function goHome() {
  marker.position.set(home.x, home.y, home.z);
  reset();
  
}

function saveNewHome() {
  home = { x: marker.position.x, y: marker.position.y, z: marker.position.z };
  console.log("new home saved");
}

function resetHome() {
  home = {x: 0, y: 0, z: 0};
  console.log("home reset");
  
}

var look_right = true;
var look_left = false;

function lookRight() {
  head.rotation.y += 0.05;
  console.log(head.rotation.y);
  if (head.rotation.y > 0.3) {
  look_right = false;
  look_left = true;
  }
  console.log(look_right);
    
}

function lookLeft() {
  
  head.rotation.y -= 0.05;
  console.log(head.rotation.y);
  if (head.rotation.y < -0.3) {
    look_left = false;
    look_right = true;
    
  }
  console.log(look_left)
  
}

function headshake() {
  requestAnimationFrame(headshake);
  if (is_headshaking) {
    if (look_right) {
      lookRight();
    }
    if (look_left) {
      lookLeft();
    }
  }
}

headshake();

var look_up = true;
var look_down = false;

function lookUp() {
  head.rotation.x += 0.05;
  console.log(head.rotation.x);
  if (head.rotation.x > 0.5) {
  look_up = false;
  look_down = true;
  }
  console.log(look_up);
    
}

function lookDown() {
  
  head.rotation.x -= 0.05;
  console.log(head.rotation.x);
  if (head.rotation.x < -0.1) {
    look_down = false;
    look_up = true;
    
  }
  console.log("down" + look_down)
  
}

function headnod() {
  requestAnimationFrame(headnod);
  if (is_headnodding) {
      if (look_up) {
        lookUp();
      }
      if (look_down) {
        lookDown();
      }
  }
}

headnod();

function wave() {
  requestAnimationFrame(wave);
    if (is_waving) {
      // right_arm.position.y = 48;
      if (right_arm.rotation.z > 0.7) {
        right_arm.rotation.z -= 0.03;
      }
      else {
        right_arm.rotation.z = 1.3;
      }
    }
  renderer.render(scene, camera);
  
}
wave();

var goingUp = false;
var goingDown = false;

function jumpUp() {
  marker.position.y += 4;
  console.log(marker.position.y);
  if (marker.position.y > 79) {
  goingUp = false;
  goingDown = true;
  }
  console.log(goingUp);
    
}

function fallDown() {
  
  marker.position.y -= 4;
  console.log(marker.position.y);
  if (marker.position.y <1) {
    goingDown = false;
    
  }
  console.log(goingDown)
  
}

function jump() {
  requestAnimationFrame(jump);
  if (goingUp) {
    jumpUp();
  }
  if (goingDown) {
    fallDown();
  }
}

jump();

function turnLeft() {
  if (avatar.rotation.y !== -Math.PI/2 )
    avatar.rotation.y = -Math.PI/2;
}

function turnRight() {
  if (avatar.rotation.y !== Math.PI/2)
    avatar.rotation.y = Math.PI/2;
}

function turnAway() {
  if (avatar.rotation.y !== Math.PI) {
    avatar.rotation.y = Math.PI;
  }
}

function turnToward() {
  if (avatar.rotation.y !== 0) {
    avatar.rotation.y = 0;
  }
}
// listen for keypress events
document.addEventListener('keydown',
   function(event) {
  var code = event.keyCode;
  if (code == 37) (turnLeft(), marker.position.x =
     marker.position.x-5); // left
  if (code == 38) (turnAway(), marker.position.z =
     marker.position.z-5); // up
  if (code == 39) (turnRight(), marker.position.x =
     marker.position.x+5); // right
  if (code == 40) (turnToward(), marker.position.z =
     marker.position.z+5); // down   
  if (code== 67)
     is_cartwheeling =
     !is_cartwheeling; // c
  if (code == 70) is_flipping =
     !is_flipping; // f
  if (code == 83) is_spinning = 
     !is_spinning; // s
     if (code == 87) is_waving = !is_waving;sleep(2000).then(() => { is_waving = false; }).then(() => {right_arm.rotation.z = 2;}) // w
  if (code == 27) reset(); // esc
     if (code == 78) is_headshaking = !is_headshaking;sleep(2000).then(() => { is_headshaking = false; }).then(() => { head.rotation.y = 0;}) //n
  if (code == 89) is_headnodding = !is_headnodding;sleep(2000).then(() => { is_headnodding = false; }).then(() => { head.rotation.x = 0; }) //y
  if (code == 74) goingUp = true; // j
  if (code == 36) goHome(); // HOME
  if (code == 45) saveNewHome(); // insert
  if (code == 46) resetHome(); // delete
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
// Now, show what the camera sees on the screen:

