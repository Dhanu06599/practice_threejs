import * as THREE from 'three';
var scene,camera,renderer,sphere;

init();
animate();

function init (){
    scene = new THREE.Scene;
    let mycanvas=document.getElementById("HELLO");
    let width=mycanvas.clientWidth;
    let height=mycanvas.clientHeight;

camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
scene.add(camera);

renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( width, height );
mycanvas.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
const material = new THREE.MeshBasicMaterial({color:0xF3A2B0, wireframe:true});
sphere = new THREE.Mesh(geometry,material);
scene.add(sphere);
camera.position.z=10;

}

function animate(){
    sphere.rotation.x+=0.001;
    sphere.rotation.y+=0.001;
    sphere.rotation.z+=0.001;

    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}