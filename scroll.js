// Create a scene and a camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer and add it to the page
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a green cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set the initial position of the cube
cube.position.z = -5;

// Create variables to track the previous and current scroll positions
var prevScrollPos = window.pageYOffset;
var currScrollPos = prevScrollPos;

// Create a function to animate the cube
function animate() {
  requestAnimationFrame(animate);

  // Update the current scroll position
  currScrollPos = window.pageYOffset;

  // Calculate the change in scroll position since the last frame
  var scrollDelta = currScrollPos - prevScrollPos;

  // Rotate the cube based on the scroll delta
  cube.rotation.x += scrollDelta * 0.001;
  cube.rotation.y += scrollDelta * 0.001;

  // Render the scene
  renderer.render(scene, camera);

  // Update the previous scroll position
  prevScrollPos = currScrollPos;
}

// Call the animate function to start the animation loop
animate();