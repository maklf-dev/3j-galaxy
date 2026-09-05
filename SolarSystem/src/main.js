import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./style.css";

//add & create assets
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight,0.1,200);
camera.position.z = 5;
const $canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({canvas: $canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const controls = new OrbitControls(camera, $canvas);
controls.enableDamping = true;

//------------------------Scene

//------------------------Scene-End

// create update and renders
window.addEventListener("resize", ()=>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})
const renderloop = () =>{
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop)
}; renderloop()