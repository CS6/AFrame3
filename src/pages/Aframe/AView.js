import React, { useState } from 'react';
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
import 'aframe';
import 'aframe-particle-system-component';
import  'aframe-environment-component';

import { Entity, Scene } from 'aframe-react';
import sky360 from '../../assets/360.jpg';
import god from '../../assets/mod/glb/f15.glb';
// import god from '../../assets/mod/glb/archive/model.gltf';
// src/assets/mod/glb/archive/model.gltf

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
	const assets = [
		{ id: "city", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" },
		{ id: "city-thumb", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg" },
		{ id: "cubes", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg" },
		{ id: "cubes-thumb", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg" },
		{ id: "sechelt", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" },
		{ id: "sechelt-thumb", src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg" },
		{ id: "GobUseVPN", src: "../../assets/360.jpg" }

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
	return (
		// <div className="App">
		<Box background="dark-3" fill>
			<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
				<Box flex align='center' justify='center'>
					app body
					<Scene>

						<Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }} />
						<Entity particle-system={{ preset: 'snow' }} />
						<Entity light={{ type: 'point' }} />
						<Entity gltf-model={{ src: 'virtualcity.gltf' }} />
						<Entity text={{ value: 'Hello, WebVR!' }} />
						<Entity primitive='a-box' color="red" position="0 0 -5" />
						<Entity primitive='a-sphere' color="green" position="-2 0 -3" />
						<Entity primitive='a-cylinder' color="blue" position="2 0 -3" />
						{/* <Entity primitive='a-sky' src="sechelt.jpg" /> */}
						{/* <a-sky color="#222"></a-sky> */}
						<a-plane rotation="-90 0 0" position="0 0 0" color="#66FFFF" width="3" height="3"></a-plane>

						{/* <a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane> */}
						{

							bord.map(index => {
								return <a-plane rotation="-90 0 0" position={index.positon} color={index.color} width="1" height="1">
									<a-cylinder rotation="90 0 0" radius="0.3" height="1.5" color={index.color} shadow></a-cylinder>
								</a-plane>
							})
						}
						{/* <a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane>
						<a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane>
						<a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane>
						<a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane>
						<a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane>
						<a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane>
						<a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane>
						<a-plane rotation="-90 0 0" position={this.bord.positon} color={this.bord.color} width="1" height="1"></a-plane> */}

						<a-entity id="GODlightJUMP" geometry="primitive: sphere; radius: 0.4" material="opacity: 0"
							light="type: point; color: #FFF" position="0 1.31793 -3"
							animation="property: position;dur:500; to: 0 1.5 -3; dir: alternate; loop: NaN"></a-entity>

						<a-entity id="GODJUMP" gltf-model={god} rotation="0 180 0" geometry="primitive: sphere; radius: 0.2"
							material="shader: flat" color="#FFF" position="0 0.75735 -2"
							animation="property: position;dur:500; to: 0 1 -2; dir: alternate; loop: true"></a-entity>

						{/* <a-entity id="GODlight" light="type: directional; color: #FFF; intensity: 1000" rotation="0 180 0"
							position="0 0.2 -3" animation="property: position;dur:500; to: 0 0.8 -3; dir: alternate; loop: true"></a-entity>

						<a-entity id="GODlight2" light="type: point; color: #FFF; intensity: 1" rotation="0 180 0" position="0 0.2 -1">
						</a-entity> */}
						<a-cylinder position="-0.05 0.5 -2.5" radius="0.5" height="0.5" color="#FFC65D"></a-cylinder>




						<a-plane rotation="-90 0 0" position="0 -0.1 0" color="#445451" width="30" height="30"></a-plane>
						<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box>
						<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>
						<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow></a-cylinder>
						<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>
						<a-light type="ambient" color="#445451"></a-light>
						{/* <a-light type="point" intensity="2" position="2 4 4"></a-light> */}
						{/* <Entity primitive='a-sky' src="sechelt.jpg" radius="10" src={assets[4].src} /> */}
						<Entity primitive='a-sky' src="sechelt.jpg" rotation="0 270 -7.840000000000001" radius="10" position="0 0.63 0"src={sky360} />
					
												{/* <Entity environment="preset: 	japan; groundColor: #445;"></Entity> */}

						{/* <Entity environment="preset: forest; groundColor: #445;"></Entity> */}
						{/* <a-sky id="image-360" radius="100" src={assets[4].src}></a-sky> */}

					</Scene>
				</Box>
			</Box>
		</Box>
		//  </div> 
	);
}
const AppBar = (props) => (
	<Box
		tag='header'
		direction='row'
		align='center'
		justify='between'
		background='brand'
		pad={{ left: 'medium', right: 'small', vertical: 'small' }}
		elevation='medium'
		style={{ zIndex: '1' }}
		{...props}
	/>
);

export default AView;
