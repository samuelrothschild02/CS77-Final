import { addCube, addSphere, addTorus, addTetrahedron, addOctahedron, addIcosahedron } from '/geometry.js'
import { OrbitControls } from '/orbitControl.js'


//IGNORE - three.js shit
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//end ignore

const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

//add all the shapes
function addShapes(){
    scene.add(addCube(5,5,1));
    scene.add(addSphere(1.2, 32, 32));
    scene.add(addTorus(5, 0, 0));
    scene.add(addTetrahedron(0, 5, 0));
    scene.add(addOctahedron(10, 0, 0));
    scene.add(addIcosahedron(0,0,5));
}

//add the axes
function addAxes(){
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );
}

    
//Render the Scene
function sceneRender(){
    renderer.render( scene, camera );
}

//Set the camera position
function setCamera(x,y,z){
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
}
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update(); // Update the controls in the animation loop
//     renderer.render(scene, camera);
// }

// controls = new THREE.OrbitControls( camera, renderer.domElement );

//Main function -- do all the shit
function main(){
    setCamera(2, 2, 10);
    // controls = new THREE.OrbitControls( camera, renderer.domElement );
    addAxes();
    addShapes();
    // Create the scene
    // var scene = new THREE.Scene();

    // Create OrbitControls
    // var controls = new THREE.OrbitControls(camera, renderer.domElement);

    // controls.update();

    sceneRender();

}

main();



// function animate() {
//     requestAnimationFrame( animate );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render( scene, camera );
// }
// animate();
