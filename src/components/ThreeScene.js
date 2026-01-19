import React, { Component } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



class ThreeScene extends Component{

  


//   componentDidMount(){
//     const width = this.mount.clientWidth
//     const height = this.mount.clientHeight
//     //ADD SCENE
//     this.scene = new THREE.Scene()
//     //ADD CAMERA
//     this.camera = new THREE.PerspectiveCamera(
//       75,
//       width / height,
//       0.1,
//       1000
//     )
//     this.camera.position.z = 4
//     //ADD RENDERER
//     this.renderer = new THREE.WebGLRenderer({ antialias: true })
//     this.renderer.setClearColor('#000000')
//     this.renderer.setSize(width, height)
//     this.mount.appendChild(this.renderer.domElement)

//     // this.controls = new THREE.OrbitControls(this.camera);
//     // var controls = new THREE.TrackballControls(this.camera);

//     //ADD CUBE
//     const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
//     const material = new THREE.MeshBasicMaterial({ 
//     		color: 0x156289,
//             emissive: 0x072534,
//             side: THREE.DoubleSide,
//             flatShading: true   
//         })
//     this.cube = new THREE.Mesh(geometry, material)
//     this.scene.add(this.cube)

//     //ADD LIGHT SHADING
//       const lights = [];
//         lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
//         lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
//         lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

//         lights[ 0 ].position.set( 0, 200, 0 );
//         lights[ 1 ].position.set( 100, 200, 100 );
//         lights[ 2 ].position.set( - 100, - 200, - 100 );

//         this.scene.add( lights[ 0 ] );
//         this.scene.add( lights[ 1 ] );
//         this.scene.add( lights[ 2 ] );

//         // window.addEventListener( 'resize', this.onWindowResize, false );

//         // var tanFOV = Math.tan( ( ( Math.PI / 180 ) * this.camera.fov / 2 ) );
//         // var windowHeight = window.innerHeight;

//         // function onWindowResize (event) {

//         //     this.camera.aspect = window.innerWidth / window.innerHeight;

//         //     // adjust the FOV
//         //     this.camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / windowHeight ) );

//         //     this.camera.updateProjectionMatrix();
//         //     this.camera.lookAt( this.scene.position );

//         //     this.renderer.setSize( window.innerWidth, window.innerHeight );
//         //     this.renderer.render( this.scene, this.camera );

//         // }

//     //ADD EARTH IMAGE
// //     new THREE.Mesh(
// //   new THREE.SphereGeometry(0.5, 32, 32),
// //   new THREE.MeshPhongMaterial({
// //     map: THREE.ImageUtils.loadTexture('assets/earth.jpg'),
// //      })
// // );
// this.start()
//   }

// componentWillUnmount(){
//     this.stop()
//     this.mount.removeChild(this.renderer.domElement)
//       this.controls.dispose();
//     delete this.controls;
//   }

 
        


// start = () => {
//     if (!this.frameId) {
//       this.frameId = requestAnimationFrame(this.animate)
//     }
//   }

// stop = () => {
//     cancelAnimationFrame(this.frameId)
//   }

// animate = () => {
//    this.cube.rotation.x += 0.01
//    this.cube.rotation.y += 0.01
//    this.renderScene()
//    this.frameId = window.requestAnimationFrame(this.animate)
//  }

// renderScene = () => {
//   this.renderer.render(this.scene, this.camera)
// }

// render(){

//     return(
//       <div
//         style={{ width: window.innerWidth, height: window.innerHeight }}
//         ref={(mount) => { this.mount = mount }}
//       />
//     )
//   }
// }
// export default {ThreeScene, ...THREE, OrbitControls: window.THREE.OrbitControls};
componentDidMount() {


        // BASIC THREE.JS THINGS: SCENE, CAMERA, RENDERER
        // Three.js Creating a scene tutorial
        // https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        var renderer;
        try {
            renderer = new THREE.WebGLRenderer();
        } catch (err) {
            // WebGL not available (e.g. in JSDOM/test or headless environments).
            // Skip Three.js setup to avoid throwing during tests.
            // eslint-disable-next-line no-console
            console.warn('WebGL not available, skipping ThreeScene setup:', err && err.message);
            return;
        }

        renderer.setSize(window.innerWidth, window.innerHeight);

        // MOUNT INSIDE OF REACT
        this.mount.appendChild(renderer.domElement); // mount a scene inside of React using a ref



        // CAMERA CONTROLS
        // https://threejs.org/docs/index.html#examples/controls/OrbitControls
        // this.controls = new THREE.OrbitControls(camera);



        // ADD CUBE AND LIGHTS
        // https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry
        // https://threejs.org/docs/scenes/geometry-browser.html#BoxGeometry
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshPhongMaterial( {
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true,
            // map: texture1
        } );
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        var lights = [];
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        lights[ 0 ].position.set( 0, 200, 0 );
        lights[ 1 ].position.set( 100, 200, 100 );
        lights[ 2 ].position.set( - 100, - 200, - 100 );

        scene.add( lights[ 0 ] );
        scene.add( lights[ 1 ] );
        scene.add( lights[ 2 ] );

        //ADD text
           // var canvas1 = document.createElement('canvas');
           //              var context1 = canvas1.getContext('2d');
           //              context1.font = "Bold 20px Arial"
           //              context1.textAlign = 'center';
           //              context1.fillStyle = "rgba(0,0,0,1)";
           //              context1.fillText('REACTJS', 100, 100);

           //              // canvas contents will be used for a texture
           //              var texture1 = new THREE.Texture(canvas1)
           //              texture1.needsUpdate = true;

           //              var material1 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
           //              material1.transparent = true;

           //              var mesh1 = new THREE.Mesh(
           //                  new THREE.PlaneGeometry(2, 2),
           //                  material1
           //                );
           //              mesh1.position.set(1, 1, 1);
           //              // mesh1.rotation.x = -0.9;
           //              cube.add(mesh1);
           //              // Note that mesh1 gets added to the shape and not to the scene

           //             scene.add(cube)

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// ctx.font = 'italic 18px Arial';
// ctx.textAlign = 'center';
// ctx. textBaseline = 'middle';
// ctx.fillStyle = 'red'; 
// ctx.fillText('Your Text', 150, 50);

        // var canvas = document.createElement("canvas");
        
// var context = canvas.getContext("2d");

// var x = canvas.width / 2;
// var y = canvas.height / 2;
// context.font = "30pt Calibri";
// context.textAlign = "center";
// context.fillRect(0,0,200,200);
// context.fillStyle = "white";
// context.fillText("Hello World!", x, y);
// scene.add(canvas)
// let strDataURI = canvas.toDataURL("image/jpeg");
// let image = new Image();
// image.src = strDataURI;
// var mesh = new THREE.MeshBasicMaterial( { map: THREE.TextureLoader( image.src ) } );
// console.log(mesh);
// var texture = new THREE.Texture( canvas );
// texture.needsUpdate = true;

// var material = new THREE.MeshBasicMaterial( { map: texture } );
                      



        // SCALE ON RESIZE

        // Check "How can scene scale be preserved on resize?" section of Three.js FAQ
        // https://threejs.org/docs/index.html#manual/en/introduction/FAQ

        // code below is taken from Three.js fiddle
        // http://jsfiddle.net/Q4Jpu/

        // remember these initial values
        var tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
        var windowHeight = window.innerHeight;

        window.addEventListener( 'resize', onWindowResize, false );
        // window.addEventListener('click', onClickHide, false);

        // function onClickHide(){
        // 	console.log('clicked')
        // 	// cube.visible = false
        	
        // }
        function onWindowResize( event ) {

            camera.aspect = window.innerWidth / window.innerHeight;

            // adjust the FOV
            camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / windowHeight ) );

            camera.updateProjectionMatrix();
            camera.lookAt( scene.position );

            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.render( scene, camera );

        }



        // ANIMATE THE SCENE
        var animate = function() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }
    render(props) {
        return <div onClick={props} ref={ref => (this.mount = ref)} />;
    }
}
export default ThreeScene