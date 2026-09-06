//------------------------Notes
//- distance and radiuses need optimize; sun scale and other items are not correct
//------------------------Notes-End

//------------------------Importation
//Main Libs
import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

//personal Modules
import "./style.css";
import {celestials} from "./data/cosmicDistanceScaler.js";

console.log(celestials);
//------------------------Importation-End

//------------------------Assets
// loaders
// textures
// models
// fonts
// audio
// HDR / Environment Maps
//------------------------Assets-End

//------------------------Scene
const scene = new THREE.Scene();
scene.rotation.z = 90;
// background
// fog
//------------------------Scene-End

//------------------------Camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 6000);
camera.position.set(-3.7, -204, 31);
//------------------------Camera-End

//------------------------Renderer
const $canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({canvas: $canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//------------------------Renderer-End

//------------------------Controls
const controls = new OrbitControls(camera, $canvas);
controls.enableDamping = true;
controls.target.set(0, 0, 0);
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

//--create celestials
//----sun
const sunGeo = new THREE.SphereGeometry(celestials.sun.radius, 64, 64);
const sunMaterial = new THREE.MeshBasicMaterial({color: "#FDEE8B"});
const $Sun = new THREE.Mesh(sunGeo, sunMaterial);
$Sun.position.x = celestials.sun.visualDistance;
//----mercury
const mercuryGeo = new THREE.SphereGeometry(celestials.mercury.visualRadius, 64, 64);
const mercuryMaterial = new THREE.MeshBasicMaterial({color: "#CDCDCD"});
const $Mercury = new THREE.Mesh(mercuryGeo, mercuryMaterial);
$Mercury.position.x = celestials.mercury.visualDistance;
//----venus
const venusGeo = new THREE.SphereGeometry(celestials.venus.visualRadius, 64, 64);
const venusMaterial = new THREE.MeshBasicMaterial({color: "#B57B35"});
const $Venus = new THREE.Mesh(venusGeo, venusMaterial);
$Venus.position.x = celestials.venus.visualDistance;

//----lifeGroup
//------earth
const earthGeo = new THREE.SphereGeometry(celestials.earth.visualRadius, 64, 64);
const earthMaterial = new THREE.MeshBasicMaterial({color: "#3678B8"});
const $Earth = new THREE.Mesh(earthGeo, earthMaterial);
//------moon
const moonGeo = new THREE.SphereGeometry(celestials.moon.visualRadius, 64, 64);
const moonMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $Moon = new THREE.Mesh(moonGeo, moonMaterial);
$Moon.position.y = celestials.moon.distance;

const lifeGroup = new THREE.Group();
lifeGroup.add($Earth, $Moon);
lifeGroup.position.x = celestials.earth.visualDistance;

//----mars
const marsGeo = new THREE.SphereGeometry(celestials.mars.visualRadius, 64, 64);
const marsMaterial = new THREE.MeshBasicMaterial({color: "#C47542"});
const $Mars = new THREE.Mesh(marsGeo, marsMaterial);
$Mars.position.x = celestials.mars.visualDistance;
//----jupiter
const jupiterGeo = new THREE.SphereGeometry(celestials.jupiter.visualRadius, 64, 64);
const jupiterMaterial = new THREE.MeshBasicMaterial({color: "#D1AF82"});
const $Jupiter = new THREE.Mesh(jupiterGeo, jupiterMaterial);
$Jupiter.position.x = celestials.jupiter.visualDistance;
//----saturn
const saturnGeo = new THREE.SphereGeometry(celestials.saturn.visualRadius, 64, 64);
const saturnMaterial = new THREE.MeshBasicMaterial({color: "#997a47"});
const $Saturn = new THREE.Mesh(saturnGeo, saturnMaterial);
$Saturn.position.x = celestials.saturn.visualDistance;
//----uranus
const uranusGeo = new THREE.SphereGeometry(celestials.uranus.visualRadius, 64, 64);
const uranusMaterial = new THREE.MeshBasicMaterial({color: "#7DBEC6"});
const $Uranus = new THREE.Mesh(uranusGeo, uranusMaterial);
$Uranus.position.x = celestials.uranus.visualDistance;
//----neptune
const neptuneGeo = new THREE.SphereGeometry(celestials.neptune.visualRadius, 64, 64);
const neptuneMaterial = new THREE.MeshBasicMaterial({color: "#2959AB"});
const $Neptune = new THREE.Mesh(neptuneGeo, neptuneMaterial);
$Neptune.position.x = celestials.neptune.visualDistance;

//--add celestial
scene.add($Sun, $Mercury, $Venus, lifeGroup, $Mars, $Jupiter, $Saturn, $Uranus, $Neptune);

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
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
//------------------------Resize-End

//------------------------AnimationLoop
const renderloop = () => {
    const elapsedTime = clock.getElapsedTime();
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(renderloop);
};
renderloop();
//------------------------AnimationLoop-End
