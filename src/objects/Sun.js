import * as THREE from 'three';

export const getSun = (earth, scene) => {
    const light = new THREE.PointLight(0xffffff);
    const sunTexture = new THREE.TextureLoader().load('Images/sun.jpg');
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sun = new THREE.Mesh(new THREE.SphereGeometry(20, 50, 50), sunMaterial);
    let x = 0;
    let y = 0;
    let z = 0;
    sun.position.set(x, y, z);
    light.position.set(x, y, z);
    scene.add(light);
    scene.add(sun);
    sun.add(earth);
    return sun;
};