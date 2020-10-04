import React, { useState, useEffect, useRef } from 'react';
import {
	Box,
	Button,
	Collapsible,
	Heading,
	Grommet,
	Layer,
	ResponsiveContext,
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
// 方式 1: 导入整个 three.js核心库
import * as THREE from 'three';
import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-environment-component';
import 'aframe-orbit-controls';
import 'aframe-extras';
import 'aframe-observer-component';
import 'aframe-htmlembed-component';
// import '@pixiv/three-vrm';
// import 'three-vrm';
// import 'aframe-vrm-component';
// import './ammo.js';
// import 'a-mmd';
// import './js/three.module.js';


import { Entity, Scene } from 'aframe-react';
import sky360 from '../../assets/360.jpg';
import god from '../../assets/mod/glb/f15.glb';
import AliciaSolid from '../../assets/mod/vrm/AliciaSolid.vrm';
import JK01 from '../../assets/mod/vrm/jk.vrm';

import gundan from '../../assets/mod/glb/gundan.glb';
import gundanFBX from '../../assets/mod/fbx/Crouch_To_Stand.fbx';
import moedle01 from '../../assets/mod/fbx/Jumping_Down.fbx';


// import god from '../../assets/mod/glb/archive/model.gltf';
// src/assets/mod/glb/archive/model.gltf
const AFRAME = window.AFRAME;
AFRAME.registerComponent('mythreejsthing', {
	schema: {
		color: {
			default: '#000'
		},
	},
	update: function () {
		var material = new THREE.MeshBasicMaterial({
			color: COLORS,
			wireframe: true
		});

		var geometry = new THREE.BoxGeometry(2, 2, 2);
		this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));
	},
	remove: function () {
		this.el.removeObject3D('mesh');
	}
});
AFRAME.registerComponent('bar', {
	schema: {
		color: {
			default: '#000'
		},
	},
	init: function () {
		// Ran when the game state enters the `bar` state.
	},

	remove: function () {
		// Ran when the game state leaves the `bar` state.
	}
});

AFRAME.registerComponent('mythreejsOBJ', {
	schema: {
		bottom: {
			default: 5
		},
		top: {
			default: 5
		},
		height: {
			default: 20
		},
		color: {
			default: '#FFC65D'
		},
	},

	update: function () {
		var geometry = new THREE.CylinderGeometry(this.data.top, this.data.bottom, this.data.height, 4);
		var centerTop = geometry.vertices.find(vert => vert.x === 0 && vert.y === this.data.height / 2 && vert.z === 0);
		centerTop.y = this.data.height / 2 + this.data.height / 4;
		var centerBottom = geometry.vertices.find(vert => vert.x === 0 && vert.y === 0 && vert.z === 0);

		var material = new THREE.MeshPhongMaterial({
			color: this.data.color,
			specular: 0xbbbbbb,
			shininess: 100,

			transparent: true,
			opacity: 0.8
		})

		var mesh = new THREE.Mesh(geometry, material);
		mesh.receiveShadow = true
		mesh.translateY(this.data.height / 2);
		let pivotPoint = new THREE.Object3D();
		pivotPoint.add(mesh);
		pivotPoint.rotateX(-0.3 + 0.6 * Math.random());
		pivotPoint.rotateY(-0.3 + 0.6 * Math.random());
		pivotPoint.rotateZ(-0.3 + 0.6 * Math.random());

		this.el.setObject3D('mesh', pivotPoint);


	},

	remove: function () {
		this.el.removeObject3D('mesh');
	}
});
AFRAME.registerComponent('lowpoly', {
	schema: {
		// Here we define our properties, their types and default values
		color: { type: 'string', default: '#FFF' },
		nodes: { type: 'boolean', default: false },
		opacity: { type: 'number', default: 1.0 },
		wireframe: { type: 'boolean', default: false }
	},

	init: function () {
		// Get the ref of the object to which the component is attached
		const obj = this.el.getObject3D('mesh')

		// Grab the reference to the main WebGL scene
		const scene = document.querySelector('a-scene').object3D

		// Modify the color of the material
		obj.material = new THREE.MeshPhongMaterial({
			color: this.data.color,
			shading: THREE.FlatShading
		})

		// Define the geometry for the outer wireframe
		const frameGeom = new THREE.OctahedronGeometry(2.5, 2)

		// Define the material for it
		const frameMat = new THREE.MeshPhongMaterial({
			color: '#FFFFFF',
			opacity: this.data.opacity,
			transparent: true,
			wireframe: true
		})

		// The final mesh is a composition of the geometry and the material
		const icosFrame = new THREE.Mesh(frameGeom, frameMat)

		// Set the position of the mesh to the position of the sphere
		const { x, y, z } = obj.parent.position
		icosFrame.position.set(x, y, z)

		// If the wireframe prop is set to true, then we attach the new object
		if (this.data.wireframe) {
			scene.add(icosFrame)
		}

		// If the nodes attribute is set to true
		if (this.data.nodes) {
			let spheres = new THREE.Group()
			let vertices = icosFrame.geometry.vertices

			// Traverse the vertices of the wireframe and attach small spheres
			for (var i in vertices) {
				// Create a basic sphere
				let geometry = new THREE.SphereGeometry(0.045, 16, 16)
				let material = new THREE.MeshBasicMaterial({
					color: '#FFFFFF',
					opacity: this.data.opacity,
					shading: THREE.FlatShading,
					transparent: true
				})

				let sphere = new THREE.Mesh(geometry, material)
				// Reposition them correctly
				sphere.position.set(
					vertices[i].x,
					vertices[i].y + 4,
					vertices[i].z + -10.0
				)

				spheres.add(sphere)
			}
			scene.add(spheres)
		}
	},
	update: function () {
		// Get the ref of the object to which the component is attached
		const obj = this.el.getObject3D('mesh')

		// Modify the color of the material during runtime
		obj.material.color = new THREE.Color(this.data.color)
	}
});
const COLORS = [
	// {id:'A3',color:"#FDFcDF",positon:[]},
	"#FF1100",
	"#FF5555", "#7BC8A4", "#56a2FF",
	"#FFC65D", "#FF22FF", "#0011FF",
	"#5555FF",
	"#FFaaFF",
]
const AFrame = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<Scene>
			<Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }} />
			<Entity particle-system={{ preset: 'snow' }} />
			<Entity light={{ type: 'point' }} />
			<Entity gltf-model={{ src: 'virtualcity.gltf' }} />
			<Entity text={{ value: 'Hello, WebVR!' }} />
		</Scene>
	);
}
const AView = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const assets_sky = [
		{ id: "city", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" },
		{ id: "city-thumb", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg" },
		{ id: "cubes", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg" },
		{ id: "cubes-thumb", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg" },
		{ id: "sechelt", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" },
		{ id: "sechelt-thumb", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg" },
		{ id: "GobUseVPN", src: "../../assets/360.jpg" }
	]
	const assets_poly = [
		{ id: "fish", src: "https://poly.googleapis.com/downloads/fp/1600941173254652/5RqQmne01WF/ddDgMluUzWs/model.gltf", position: " 0 0 0.5", scale: "1 1 1", rotation: "-71.491 -38.73194695084365 18" },
		{ id: "car", src: "https://poly.googleapis.com/downloads/fp/1575545288491751/2u4e9d0aePt/fSG2yghO86V/model.gltf", position: " 0 0 0", scale: "1 1 1", rotation: "0 -38.73194695084365 0" },
		{ id: "gundam", src: "https://poly.googleapis.com/downloads/fp/1598786852441356/26x_0PKFg-l/crBUhvk7wuC/model.gltf", position: " 1 0 0", scale: "1 1 1", rotation: "0 0 0" },
		{ id: "fireside", src: "https://poly.googleapis.com/downloads/fp/1601030391303913/ero8IJnrXzk/dXu3gCUrsUp/model.gltf", position: " 1 0 0", scale: "1 1 1", rotation: "0 0 0" },

	]


	const bord = [
		// {id:'A3',color:"#FDFcDF",positon:[]},
		{ id: 'C1', color: "#FF1100", obj: [], positon: ["1 0.2 -1"] },
		{ id: 'C2', color: "#FF5555", obj: [], positon: ["1 0.2 0"] },
		{ id: 'C3', color: "#7BC8A4", obj: [], positon: ["1 0.2 1"] },
		{ id: 'B1', color: "#56a2FF", obj: [], positon: ["0 0.2 -1"] },
		{ id: 'B2', color: "#FFC65D", obj: [], positon: ["0 0.2 0"] },
		{ id: 'B3', color: "#FF22FF", obj: [], positon: ["0 0.2 1"] },
		{ id: 'A1', color: "#0011FF", obj: [], positon: ["-1 0.2 -1"] },
		{ id: 'A2', color: "#5555FF", obj: [], positon: ["-1 0.2 0"] },
		{ id: 'A3', color: "#FFaaFF", obj: [], positon: ["-1 0.2 1"] },
	]

	const el = document.querySelector('#mario');


	const mythreejsthing = () => {
		let height = Math.floor(10 + 10 * Math.random());
		let bottom = Math.floor(1 + height / 15);
		let top = Math.floor(1 + height / 8);
		let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		return 'color: ' + color + ';bottom: ' + bottom + ';top: ' + top + ';height: ' + height + ';'
	}
	const position = () => {
		let x = Math.floor(-60 + Math.random() * 120);
		let z = Math.floor(-40 + Math.random() * 20);
		return x + ' -1 ' + z;
	}
	const _handleClick = () => {
		setcolorIndex({
			colorIndex: (colorIndex + 1) % COLORS.length
		})
	}
	useEffect(() => {

	})
	const [spherePosition, setSpherePosition] = useState(null);
	const [colorIndex, setcolorIndex] = useState(0);


	return (
		<Box background="dark-3" >
			<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
				<Box flex align='center' justify='center'>
					<Scene stats fog="type: linear; color: #AAB; far: 50; near: 0"
						environment={{
							preset: 'starry',
							seed: 2,
							lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
							fog: 0.8,
							ground: 'canyon',
							groundYScale: 6.31,
							groundTexture: 'walkernoise',
							groundColor: '#8a7f8a',
							grid: 'none'
						}}
					>

						<Entity primitive="a-camera" look-controls>
							<Entity
								primitive="a-cursor"
								cursor={{ fuse: false }}
								material={{ color: 'white', shader: 'flat', opacity: 0.75 }}
								geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
								event-set__1={{
									_event: 'mouseenter',
									scale: { x: 1.4, y: 1.4, z: 1.4 }
								}}
								event-set__1={{
									_event: 'mouseleave',
									scale: { x: 1, y: 1, z: 1 }
								}}
								raycaster="objects: .clickable"
							/>
						</Entity>
						<Entity
							primitive="a-octahedron"
							detail={2}
							radius={2}
							position={spherePosition}
							color="#FAFAF1"
						/>
						<Entity
							primitive="a-light"
							type="directional"
							color="#FFF"
							intensity={1}
							position={{ x: 2.5, y: 0.0, z: 0.0 }}
						/>

						<Entity
							class="clickable"
							// ... all the other props we've already added before
							events={{
								click: _handleClick.bind(this)
							}}
							id='3dred'
							lowpoly={{
								// color: '#D92B6A',
								color: COLORS[colorIndex],
								nodes: true,
								opacity: 0.15,
								wireframe: true
							}}
							primitive="a-octahedron"
							detail={2}
							radius={2}
							position={{ x: 0.0, y: 4, z: -10.0 }}
							color="#FAFAF1"
						/>
						{/* <a-sky color="#ECECEC"></a-sky> */}
						<a-box
							position="-2 1 0"
							rotation="0 0 0"
							width="1" height="1" depth="1"
							color="#4CC3D9"></a-box>
						{/* <a-entity mythreejsthing="color: red;" position="0 -1 -5"> </a-entity>
						<a-entity mythreejsthing="color: green;" position="0 1 -5"> </a-entity>
						<a-entity id="mythreejsthing" mythreejsthing="color: green;" position="0 1 -5"> </a-entity>
						<a-entity mythreejsOBJ={mythreejsthing} position={position} shadow="receive: true"> </a-entity>
						<a-plane color="#CCC" height="200" width="200" rotation="-90 0 0" shadow="receive: true"></a-plane>
						<a-entity light="type: ambient; color: #CCC"></a-entity>
						<a-entity light="type: directional; color: #EEE; intensity: 0.7;castShadow:true" position="30 20 0"></a-entity>
						<a-entity light="type: point; intensity: 1; distance: 50; decay: 2;castShadow:true;" position="20 10 -20"></a-entity>
						<a-assets>
							<mixin id="green" material="color: green"></mixin>
							<mixin id="blue" material="color: blue"></mixin>
							<mixin id="red" material="color: red"></mixin>
							<a-mixin id="cube" geometry="primitive: box"></a-mixin>
							<a-mixin id="torus" geometry="primitive: torus"></a-mixin>
							<a-mixin id="seed" geometry="primitive: cone"></a-mixin>
							<a-mixin id="r90" rotation="-90 0 0"></a-mixin>
						</a-assets>
						<a-entity mixin="green cube" position="2 3.4 -1"></a-entity>
						<a-entity mixin="torus red" position="3 3.4 -3"></a-entity>
						<a-entity mixin="r90 blue seed" position="3 3.4 -5"></a-entity>
						<a-entity geometry="primitive: box" material="color: red" position="1 3.4 -3"></a-entity>
						<a-entity geometry="primitive:tetrahedron" material="color: orange" position="1 3.4 -3"></a-entity>
						<a-box mixin="red"></a-box> */}
						<a-entity htmlembed position="0 2 -1">
							<h1>An安安 Exabvhyggymple</h1>
							<Button icon={<Notification />} onClick={() => alert(5)} />

						</a-entity>
					</Scene>
				</Box>
			</Box>
		</Box >
	);

}


export default AView;
