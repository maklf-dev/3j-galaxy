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
//------mercuryOrbit
const mercuryOrbGeo = new THREE.TorusGeometry(
    celestials.mercury.visualDistance,
    celestials.mercury.visualDistance / 350,
    30,
    100
);
const mercuryOrbMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $MercuryOrb = new THREE.Mesh(mercuryOrbGeo, mercuryOrbMaterial);

//----venus
const venusGeo = new THREE.SphereGeometry(celestials.venus.visualRadius, 64, 64);
const venusMaterial = new THREE.MeshBasicMaterial({color: "#B57B35"});
const $Venus = new THREE.Mesh(venusGeo, venusMaterial);
$Venus.position.x = celestials.venus.visualDistance;
//------venusOrbit
const venusOrbGeo = new THREE.TorusGeometry(
    celestials.venus.visualDistance,
    celestials.venus.visualDistance / 350,
    30,
    100
);
const venusOrbMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $VenusOrb = new THREE.Mesh(venusOrbGeo, venusOrbMaterial);

//----lifeGroup
//------earth
const earthGeo = new THREE.SphereGeometry(celestials.earth.visualRadius, 64, 64);
const earthMaterial = new THREE.MeshBasicMaterial({color: "#3678B8"});
const $Earth = new THREE.Mesh(earthGeo, earthMaterial);
//------earthOrbit
const earthOrbGeo = new THREE.TorusGeometry(
    celestials.earth.visualDistance,
    celestials.earth.visualDistance / 350,
    30,
    100
);
const earthOrbMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $EarthOrb = new THREE.Mesh(earthOrbGeo, earthOrbMaterial);

//------moon
const moonGeo = new THREE.SphereGeometry(celestials.moon.visualRadius, 64, 64);
const moonMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $Moon = new THREE.Mesh(moonGeo, moonMaterial);
$Moon.position.y = celestials.moon.distance;
//------moonOrbit
const moonOrbGeo = new THREE.TorusGeometry(celestials.moon.distance, celestials.moon.distance / 350, 30, 100);
const moonOrbMaterial = new THREE.MeshBasicMaterial({color: "#ff0c0c"});
const $MoonOrb = new THREE.Mesh(moonOrbGeo, moonOrbMaterial);

const lifeGroup = new THREE.Group();
lifeGroup.add($Earth, $Moon);
lifeGroup.position.x = celestials.earth.visualDistance;

//----mars
const marsGeo = new THREE.SphereGeometry(celestials.mars.visualRadius, 64, 64);
const marsMaterial = new THREE.MeshBasicMaterial({color: "#C47542"});
const $Mars = new THREE.Mesh(marsGeo, marsMaterial);
$Mars.position.x = celestials.mars.visualDistance;
//------marsOrbit
const marsOrbGeo = new THREE.TorusGeometry(
    celestials.mars.visualDistance,
    celestials.mars.visualDistance / 350,
    30,
    100
);
const marsOrbMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $MarsOrb = new THREE.Mesh(marsOrbGeo, marsOrbMaterial);

//----jupiter
const jupiterGeo = new THREE.SphereGeometry(celestials.jupiter.visualRadius, 64, 64);
const jupiterMaterial = new THREE.MeshBasicMaterial({color: "#D1AF82"});
const $Jupiter = new THREE.Mesh(jupiterGeo, jupiterMaterial);
$Jupiter.position.x = celestials.jupiter.visualDistance;
//------jupiterOrbit
const jupiterOrbGeo = new THREE.TorusGeometry(
    celestials.jupiter.visualDistance,
    celestials.jupiter.visualDistance / 350,
    30,
    100
);
const jupiterOrbMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $JupiterOrb = new THREE.Mesh(jupiterOrbGeo, jupiterOrbMaterial);

//----saturn
const saturnGeo = new THREE.SphereGeometry(celestials.saturn.visualRadius, 64, 64);
const saturnMaterial = new THREE.MeshBasicMaterial({color: "#997a47"});
const $Saturn = new THREE.Mesh(saturnGeo, saturnMaterial);
$Saturn.position.x = celestials.saturn.visualDistance;
//------saturnOrbit
const saturnOrbGeo = new THREE.TorusGeometry(
    celestials.saturn.visualDistance,
    celestials.saturn.visualDistance / 350,
    30,
    100
);
const saturnOrbMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $SaturnOrb = new THREE.Mesh(saturnOrbGeo, saturnOrbMaterial);

//----uranus
const uranusGeo = new THREE.SphereGeometry(celestials.uranus.visualRadius, 64, 64);
const uranusMaterial = new THREE.MeshBasicMaterial({color: "#7DBEC6"});
const $Uranus = new THREE.Mesh(uranusGeo, uranusMaterial);
$Uranus.position.x = celestials.uranus.visualDistance;
//------uranusOrbit
const uranusOrbGeo = new THREE.TorusGeometry(
    celestials.uranus.visualDistance,
    celestials.uranus.visualDistance / 350,
    30,
    100
);
const uranusOrbMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $UranusOrb = new THREE.Mesh(uranusOrbGeo, uranusOrbMaterial);

//----neptune
const neptuneGeo = new THREE.SphereGeometry(celestials.neptune.visualRadius, 64, 64);
const neptuneMaterial = new THREE.MeshBasicMaterial({color: "#2959AB"});
const $Neptune = new THREE.Mesh(neptuneGeo, neptuneMaterial);
$Neptune.position.x = celestials.neptune.visualDistance;
//------neptuneOrbit
const neptuneOrbGeo = new THREE.TorusGeometry(
    celestials.neptune.visualDistance,
    celestials.neptune.visualDistance / 350,
    30,
    100
);
const neptuneOrbMaterial = new THREE.MeshBasicMaterial({color: "#ffffff"});
const $NeptuneOrb = new THREE.Mesh(neptuneOrbGeo, neptuneOrbMaterial);

//--add mains
//---- add celestial
scene.add($Sun, $Mercury, $Venus, lifeGroup, $Mars, $Jupiter, $Saturn, $Uranus, $Neptune);
//----add orbits
scene.add($MercuryOrb, $VenusOrb, $EarthOrb, $MoonOrb, $MarsOrb, $JupiterOrb, $SaturnOrb, $UranusOrb, $NeptuneOrb);

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
