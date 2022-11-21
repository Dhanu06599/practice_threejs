import * as THREE from 'three'

var scene, camera, renderer, cone;

init();
animate();

function init(){

    scene = new THREE.Scene();

    let mycanvas = document.getElementById("abc");
    const width = mycanvas.clientWidth;
    const height = mycanvas.clientHeight;

    camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
    scene.add(camera);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height );
    mycanvas.appendChild( renderer.domElement );

    var geometry = new THREE.ConeGeometry(1,4,15)
    var material = new THREE.MeshBasicMaterial({color:0xF3A2B0, wireframe:true});
    cone = new THREE.Mesh(geometry, material);
    scene.add(cone);

    camera.position.z=10;
}

function animate(){
   // cone.rotation.x+=0.001;
    cone.rotation.y+=1;
    //cone.rotation.z+=0.001;

    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}