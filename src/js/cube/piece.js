import * as THREE from 'three';
import { getColor } from '../utils/color.js';

/*
0 = left
1 = front
2 = right
3 = back
4 = top
5 = bottom
*/
let positions = [
    [-.5,   0,   0],
    [  0,   0,  .5],
    [ .5,   0,   0],
    [  0,   0, -.5],
    [  0,  .5,   0],
    [  0, -.5,   0]
]

// 90  deg in rad = 1.5707963267948966
// 180 deg in rad = 3.141592653589793
let rotations = [
    [0, -1.5707963267948966, 0],
    [0, 0, 0],
    [0, 1.5707963267948966, 0],
    [0, 3.141592653589793, 0],
    [-1.5707963267948966, 0, 0],
    [1.5707963267948966, 0, 0],
]

export class Piece{

    constructor(pos, colors){
        this.faces = new THREE.Group()

        for(let i = 0; i < 6; i++){
            let geometry = new THREE.PlaneGeometry();
            let mesh     = new THREE.Mesh(geometry, getColor(colors[i]))

            mesh.position.set(...positions[i])
            mesh.rotation.set(...rotations[i])

            this.faces.add(mesh)
        }

        this.faces.position.set(...pos)
    }

}