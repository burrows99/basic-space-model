import * as THREE from 'three';

export const getTorus = (scene) => {
    const torusGeometry = new THREE.TorusGeometry(30, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(torusGeometry, material);
    scene.add(torus);
    return torus;
};