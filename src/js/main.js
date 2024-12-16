import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cube } from './cube/cube.js';

let rendererElement =  document.getElementById("renderer")

const renderer = new THREE.WebGLRenderer({ canvas: rendererElement, antialias: true })
renderer.setClearColor(0xffffff);
renderer.setSize(rendererElement.getBoundingClientRect().width, rendererElement.getBoundingClientRect().height)

const scene    = new THREE.Scene();
const camera   = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.set(2.5, 2.5, 2.5)
camera.lookAt(cube.position)

const controls = new OrbitControls(camera, rendererElement);

scene.add(cube)

function animate() {
    requestAnimationFrame(animate)
    controls.update();
    renderer.render(scene, camera);
}
animate()