import * as THREE from 'three';

export const getEarth = (moon, scene) => {
    const earthTexture = new THREE.TextureLoader().load('Images/Large_World_Physical_Map.png');
    const normalTexture = new THREE.TextureLoader().load('Images/normal.jpg');
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture, normalMap: normalTexture });
    const earth = new THREE.Mesh(new THREE.SphereGeometry(12, 50, 50), earthMaterial);
    scene.add(earth);
    earth.add(moon);
    earth.position.set(20, 0, 50);
    return earth;
};