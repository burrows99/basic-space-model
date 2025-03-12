import * as THREE from 'three';

export const addMeteors = (n, scene) => {
    Array(n).fill().forEach(() => {
        const geometry = new THREE.DodecahedronGeometry(1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));
        star.position.set(x, y, z);
        scene.add(star);
    });
};