import React from 'react';
import { mdiBellOutline, mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';

export const AccountDropdown = () => {
	return (
		<div className='p-3 bg-primary text-white flex items-center rounded-md cursor-pointer'>
			<Icon className='mr-6' path={mdiBellOutline} size={1} color='white' />
			<img
				class='w-6 h-6 rounded-full mr-3'
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsupI89wVbXLRzxaiHG_rezqk3FrqDeMmog&usqp=CAU'
				alt='Rounded avatar'
			></img>
			<span className='text-xs'>Benedict Ulinfo</span>
			<Icon path={mdiChevronDown} size={1} color='white' />
		</div>
	);
};
