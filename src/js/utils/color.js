import * as THREE from 'three';

const COLORS = new Map();

COLORS.set(1, new THREE.MeshBasicMaterial({ color: "#e8e8e8" }))
COLORS.set(2, new THREE.MeshBasicMaterial({ color: "#ffef42" }))
COLORS.set(3, new THREE.MeshBasicMaterial({ color: "#52de6c" }))
COLORS.set(4, new THREE.MeshBasicMaterial({ color: "#1653f0" }))
COLORS.set(5, new THREE.MeshBasicMaterial({ color: "#f52c33" }))
COLORS.set(6, new THREE.MeshBasicMaterial({ color: "#e3861b" }))

COLORS.set(7, new THREE.MeshBasicMaterial({ color: "#212121" }))
COLORS.set(0, new THREE.MeshBasicMaterial({ color: "#000000" }))

export function getColor(color){
    return COLORS.get(color)
}