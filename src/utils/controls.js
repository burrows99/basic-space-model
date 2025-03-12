import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const getControls = (camera, renderer) => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    return controls;
};