import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import "./style.css";

//------------------------Assets
// loaders
// textures
// models
// fonts
// audio
// HDR / Environment Maps
//------------------------Assets-End

//------------------------Scene
const scene = new THREE.Scene()
// background
// fog
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
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//------------------------Renderer-End

//------------------------Controls
const controls = new OrbitControls(camera, $canvas);
controls.enableDamping = true;
// enable / disable controls
// limits
// zoom
// rotation
// pan
//------------------------Controls-End

//------------------------SceneObjects
// groups
// Meshes
// Lights
// Environment
// Models
// particles
// helpers
//------------------------SceneObjects-End

//------------------------PostProcessing
// EffectComposer
// RenderPass
// Bloom
// Vignette
// Anti-Aliasing
// Custom Effects
//------------------------PostProcessing-End

//------------------------Interactions
// Raycaster
// Mouse
// Touch
// Click
// Hover
// Scroll
//------------------------Interactions-End

//------------------------Animation
// Object Animations
// Model Animation
// Particle Animation
// Camera Animation
//------------------------Animation-End

//------------------------Clock
const clock = new THREE.Clock();
//------------------------Clock-End

//------------------------Resize
window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})
//------------------------Resize-End

//------------------------AnimationLoop
const renderloop = () =>{
    const elapsedTime = clock.getElapsedTime();
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(renderloop)
}; renderloop()
//------------------------AnimationLoop-End




