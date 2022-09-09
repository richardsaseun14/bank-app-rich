import { mdiBellOutline, mdiChevronDown } from '@mdi/js';
import React from 'react';
import Logo from '../assets/img/logo.svg';
import { AccountDropdown } from './AccountDropdown';

export const Header = () => {
	return (
		<div className='flex items-center justify-between px-9 pt-9 bg-primary-lighter'>
			<img src={Logo} alt='' className='' />
			<span className='uppercase text-sm font-semibold'>my dashboard</span>
			<AccountDropdown
				mdiBellOutline={mdiBellOutline}
				mdiChevronDown={mdiChevronDown}
			/>
		</div>
	);
};
