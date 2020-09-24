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
import { Entity, Scene } from 'aframe-react';




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
