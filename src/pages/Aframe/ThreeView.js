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
// import * as THREE from 'three';
import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-environment-component';
import 'aframe-orbit-controls';
import 'aframe-extras';
import 'aframe-observer-component';
import 'aframe-htmlembed-component';
import 'aframe-google-poly-component'

// import '@pixiv/three-vrm';
// import 'three-vrm';
// import 'aframe-vrm-component';
// import './ammo.js';
// import 'a-mmd';
// import './js/three.module.js';
import { VRM } from '@pixiv/three-vrm'

import { Entity, Scene } from 'aframe-react';
import sky360 from '../../assets/360.jpg';
import god from '../../assets/mod/glb/f15.glb';
import AliciaSolid from '../../assets/mod/vrm/AliciaSolid.vrm';
import JK01 from '../../assets/mod/vrm/jk.vrm';

import gundan from '../../assets/mod/glb/gundan.glb';
import gundanFBX from '../../assets/mod/fbx/Crouch_To_Stand.fbx';
import moedle01 from '../../assets/mod/fbx/Jumping_Down.fbx';

import mythreejsthingObj from './components/mythreejsthingObj';
import VRMcomponent from './components/vrm-model';


// import god from '../../assets/mod/glb/archive/model.gltf';
// src/assets/mod/glb/archive/model.gltf
const AFRAME = window.AFRAME;
const THREE = window.THREE;


// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


AFRAME.registerComponent('vrm-model', {
	schema: {
		src: { type: 'string' }
	},
	init() {
		const loader = new THREE.GLTFLoader()
		loader.load(
			this.data.src,
			gltf => {
				VRM.from(gltf).then(vrm => {
					this.el.object3D.add(vrm.scene)
				})
			},
			progress => {
				console.log(
					'Loading model...',
					100.0 * (progress.loaded / progress.total),
					'%'
				)
			},
			error => console.error(error)
		)
	}
})

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


const ThreeView = () => {

	useEffect(() => {

	})
	const [spherePosition, setSpherePosition] = useState(null);
	const [colorIndex, setcolorIndex] = useState(0);


	return (
		<Box background="dark-3" >
			<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
				<Box flex align='center' justify='center'>
					<Scene stats fog="type: linear; color: #AAB; far: 50; near: 0">

						<Entity id="mythreejsthingObj" mythreejsthing2="color: #34a4b4;" position="0 1.1 -5"> </Entity>
						<Entity mythreejsthing="color: red;" position="0 -1 -5"> </Entity>
						<Entity mythreejsthing="color: rgba(0, 0, 0, 0.5);" position="0 1 -5"> </Entity>
						{/* <Entity
						id="vrm-model"
        vrm-model={{ src: AliciaSolid }}
        position="0 0 -5"
        rotation="0 180 0"
        animation="property: rotation; to: 0 -180 0; dur: 1000; loop: true; easing: easeOutCubic"
      ></Entity> */}



		

						<Entity google-poly={{
							apiKey: "AIzaSyAJy9LE4G4YKMceL5SCAQwSnTlOWV0NMsA",
							src: "eY4KSqePVFq"
						}}
							position="0 2 -5"
						></Entity>
						<Entity
							id="VRMcomponent"
							vrm-model={{ src: AliciaSolid }}
							position="0 1 -5"
							rotation="0 180 0"
							animation="property: rotation; to: 0 -180 0; dur: 1000; loop: true; easing: easeOutCubic"
						></Entity>



						<a-box
							position="0 0.9 -5"
							rotation="0 0 0"
							width="1" height="1" depth="1"
							color="#4CC3D9"></a-box>
					</Scene>
				</Box>
			</Box>
		</Box >
	);

}


export default ThreeView;
