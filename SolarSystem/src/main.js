import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import "./style.css";

//------------------------Assets
// loaders
// textures
// models
//------------------------Assets-End

//------------------------Scene
const scene = new THREE.Scene()
//------------------------Scene-End

//------------------------Camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight,0.1,200);
camera.position.z = 5;
//------------------------Camera-End

//------------------------Renderer
const $canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({canvas: $canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//------------------------Renderer-End

//------------------------Controls
const controls = new OrbitControls(camera, $canvas);
controls.enableDamping = true;
//------------------------Controls-End

//------------------------SceneObjects
// Meshes
// Lights
// Environment
// Models
//------------------------SceneObjects-End

//------------------------Resize
window.addEventListener("resize", ()=>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})
//------------------------Resize-End

//------------------------AnimationLoop
const renderloop = () =>{
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop)
}; renderloop()
//------------------------AnimationLoop-End




