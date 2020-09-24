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

const AView = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		// <div className="App">
		<Box background="dark-3"  fill>
			<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
				<Box flex align='center' justify='center'>
					app body
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
