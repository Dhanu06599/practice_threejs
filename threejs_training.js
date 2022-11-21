import * as THREE from 'three'


var scene,camera,renderer,cube;

init();
animate();

function init(){
    scene = new THREE.Scene();

    let mycanvas = document.getElementById("MyCanvas");
    const width = mycanvas.clientWidth;
    const height = mycanvas.clientHeight;

    camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
    scene.add(camera);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height );
    mycanvas.appendChild( renderer.domElement );
    
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial ({color : 0x00ff00,wireframe:true});
    cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
    
    camera.position.z=10;
    
}

function animate() {
    cube.rotation.x+=0.005;
    cube.rotation.y+=0.005;
    cube.rotation.z+=0.005;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
