import {
	mdiAccountCircleOutline,
	mdiCashRefund,
	mdiCogOutline,
	mdiCreditCardChipOutline,
	mdiForumOutline,
	mdiHandCoinOutline,
	mdiHelpCircleOutline,
	mdiHomeOutline,
	mdiPiggyBank,
} from '@mdi/js';
import { ReactComponent as HomeIcon } from '../assets/img/icons/home.svg';
import { ReactComponent as MkoloIcon } from '../assets/img/icons/mkolo.svg';
import { ReactComponent as EarlyPayIcon } from '../assets/img/icons/earlypay.svg';
import { ReactComponent as PayBillsIcon } from '../assets/img/icons/paybills.svg';
import { ReactComponent as DebitCardIcon } from '../assets/img/icons/debitcard.svg';
import { ReactComponent as ProfileIcon } from '../assets/img/icons/profile.svg';
import { ReactComponent as SettingIcon } from '../assets/img/icons/setting.svg';
import { ReactComponent as FaqIcon } from '../assets/img/icons/faq.svg';
import { ReactComponent as TalkIcon } from '../assets/img/icons/talksomeone.svg';
import Icon from '@mdi/react';

export const SideNav = () => {
	const menuLinks = [
		{ text: 'Dashboard', icon: <HomeIcon /> },
		{ text: 'Mkolo', icon: <MkoloIcon /> },
		{ text: 'EarlyPay', icon: <EarlyPayIcon /> },
		{ text: 'Pay Bills', icon: <PayBillsIcon /> },
		{ text: 'Debit Card', icon: <DebitCardIcon /> },
		{ text: 'Profile', icon: <ProfileIcon /> },
		{ text: 'Settings', icon: <SettingIcon /> },
	];
	const helpLinks = [
		{ text: 'FAQs', icon: <FaqIcon /> },
		{ text: 'Talk to Someone', icon: <TalkIcon /> },
	];
	return (
		<aside className='pl-9 py-10 bg-primary-lighter w-[250px] h-full absolute top-[116px] left-0'>
			<ul className='space-y-5 w-full'>
				{menuLinks.map((item, index) => (
					<li
						key={index}
						className='flex items-center text-sm text-grey-text cursor-pointer w-full p-2 rounded-l-lg hover:bg-white hover:text-primary'
					>
						{item.icon}
						<span className='ml-3'>{item.text}</span>
					</li>
				))}
			</ul>

			<ul className='space-y-3 mt-14'>
				<span className='font-semibold'>Help & Support</span>
				{helpLinks.map((item, index) => (
					<li
						key={index}
						className='flex items-center text-sm cursor-pointer w-full text-primary'
					>
						{item.icon}
						<span className='ml-3'>{item.text}</span>
					</li>
				))}
			</ul>
		</aside>
	);
};
