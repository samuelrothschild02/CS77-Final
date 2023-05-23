//Geometry for basic 3d modeler

//ALL PARAMETERS DETERMINE POSITION

function addCube(x,y,z){
    var geometry = new THREE.BoxGeometry( 1,1,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh( geometry, material );
    cube.position.set(x, y, z);

    return cube;
}

//update parameters to control position
// build and add sphere
function addSphere(radius, segmentsWidth, segmentsHeight) {
    var geometry = new THREE.SphereGeometry(radius, segmentsWidth, segmentsHeight);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    var sphere = new THREE.Mesh(geometry, material);
    
    // Set the position of the sphere   
    sphere.position.set(0, 0, 0);
    
    return sphere;
}

// Build and add Torus
 function addTorus(x, y, z) {
    const geometry = new THREE.TorusGeometry( 2.5, 1.25, 4, 25 ); 
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
    const torus = new THREE.Mesh( geometry, material );
    torus.position.set(x, y, z);
    return torus;
}


//create tetrahedron
 function addTetrahedron(x, y, z){
    const geometry = new THREE.TetrahedronGeometry(1,0);
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 

    const tetrahedron = new THREE.Mesh( geometry, material ); 
    tetrahedron.position.set(x, y, z);
    return tetrahedron;

}

 function addOctahedron(x, y, z){
    const geometry = new THREE.OctahedronGeometry(1,0);
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 

    const Octahedron = new THREE.Mesh( geometry, material ); 
    Octahedron.position.set(x, y, z);

    return Octahedron;
}


 function addIcosahedron(x, y, z){
    const geometry = new THREE.IcosahedronGeometry(1,0);
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 

    const Icosahedron = new THREE.Mesh( geometry, material ); 
    Icosahedron.position.set(x, y, z);
    return Icosahedron;
}

export { addCube, addSphere, addTorus, addTetrahedron, addOctahedron, addIcosahedron }