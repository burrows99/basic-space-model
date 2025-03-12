import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { getCamera } from '../utils/camera';
import { getControls } from '../utils/controls';
import { getTorus } from '../objects/Torus';
import { getEarth } from '../objects/Earth';
import { getMoon } from '../objects/Moon';
import { getSun } from '../objects/Sun';
import { addMeteors } from '../objects/Meteors';

const SpaceEngine = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = getCamera();
        const torus = getTorus(scene);
        const moon = getMoon();
        const earth = getEarth(moon, scene);
        const sun = getSun(earth, scene);
        addMeteors(5000, scene);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        const spaceTexture = new THREE.TextureLoader().load('Images/space.jpg');
        scene.background = spaceTexture;

        const gridHelper = new THREE.GridHelper(1000, 50);
        scene.add(gridHelper);

        const controls = getControls(camera, renderer);

        function animate() {
            earth.rotation.y += 0.01;
            sun.rotation.y += 0.01;
            torus.rotation.x += 0.01;
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} id="bg" />;
};

export default SpaceEngine;