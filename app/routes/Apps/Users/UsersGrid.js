import React from 'react';

import { CardColumns } from './../../../components';
import { UsersCardGrid } from "../../components/Users/UsersCardGrid";
import { Paginations } from "../../components/Paginations";

const UsersGrid = () => (
	<React.Fragment>
		<CardColumns>
			<UsersCardGrid />
			<UsersCardGrid 
				id="2"
			/>
			<UsersCardGrid 
				id="3"
			/>
			<UsersCardGrid 
				id="4"
			/>
			<UsersCardGrid 
				id="5"
			/>
			<UsersCardGrid 
				id="6"
			/>
			<UsersCardGrid 
				id="7"
			/>
			<UsersCardGrid 
				id="8"
			/>
			<UsersCardGrid 
				id="9"
			/>
			<UsersCardGrid 
				id="10"
			/>
			<UsersCardGrid 
				id="11"
			/>
			<UsersCardGrid 
				id="12"
			/>
		</CardColumns>
		<div className="d-flex justify-content-center">
			<Paginations />
		</div>
    </React.Fragment>
);

export default UsersGrid;