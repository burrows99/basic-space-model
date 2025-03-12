import * as THREE from 'three';

export const getMoon = () => {
    const moonTexture = new THREE.TextureLoader().load('Images/moon.jpg');
    const normalTexture = new THREE.TextureLoader().load('Images/normal.jpg');
    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32),
        new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: normalTexture })
    );
    moon.position.set(0, 0, 20);
    return moon;
};