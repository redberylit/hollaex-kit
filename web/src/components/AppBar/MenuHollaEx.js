import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import {
	AntCloudOutlined,
	BulbOutlined,
	CaretDownOutlined,
	CaretRightOutlined,
	CodeSandboxOutlined,
	DollarCircleOutlined,
	FilterOutlined,
	HeatMapOutlined,
	RadarChartOutlined,
	RocketOutlined,
	ScheduleOutlined,
	WindowsOutlined,
} from '@ant-design/icons';

const menus = [
	{
		name: 'HollaEx',
		bold: true,
		icon: null,
		child: false,
		url: '/',
	},
	{
		name: '',
		icon: <WindowsOutlined style={{ fontSize: '20px' }} />,
		child: true,
		url: '/',
		children: [
			{
				name: 'Exchange',
				icon: <CodeSandboxOutlined className={'otherLinkIcon'} />,
				description: 'Blockchain and crypto asset exchange',
				url: '/',
				id: 23,
			},
			{
				name: 'Academy',
				icon: <ScheduleOutlined className={'otherLinkIcon'} />,
				description: 'Blockchain and crypto education',
				url: '/',
				id: 24,
			},
			{
				name: 'Broker',
				icon: <DollarCircleOutlined className={'otherLinkIcon'} />,
				description: 'Trading terminal solutions',
				url: '/',
				id: 25,
			},
			{
				name: 'Charity',
				icon: <HeatMapOutlined className={'otherLinkIcon'} />,
				description: 'Blockchain charity foundation',
				url: '/',
				id: 26,
			},
			{
				name: 'Cloud',
				icon: <AntCloudOutlined className={'otherLinkIcon'} />,
				description: 'Enterprise exchange solutions',
				url: '/',
				id: 27,
			},
			{
				name: 'DEX',
				icon: <RadarChartOutlined className={'otherLinkIcon'} />,
				description: 'Fast and secure decentralized digital asset exchange',
				url: '/',
				id: 28,
			},
			{
				name: 'Labs',
				icon: <FilterOutlined className={'otherLinkIcon'} />,
				description: 'Incubator for top blockchain project',
				url: '/',
				id: 7,
			},
			{
				name: 'Launchpad',
				icon: <RocketOutlined className={'otherLinkIcon'} />,
				description: 'Token Launch Platform',
				url: '/',
				id: 8,
			},
			{
				name: 'Research',
				icon: <BulbOutlined className={'otherLinkIcon'} />,
				description: 'Institutional-grade analysis and report',
				url: '/',
				id: 9,
			},
		],
	},
	{
		name: 'Buy Crypto',
		icon: <CaretDownOutlined />,
		child: true,
		url: '/',
		children: [
			{
				name: ' Bank Deposit',
				icon: <CaretRightOutlined />,
				description: 'SWIFT Bank Transfer ',
				url: '/',
				id: 10,
			},
			{
				name: 'Credit/Debit Card',
				icon: <CaretRightOutlined />,
				description: 'Visa & Master card',
				url: '/',
				id: 11,
			},
			{
				name: 'P2P Trading',
				icon: <CaretRightOutlined />,
				description: 'bank Transfer and 100+ options',
				url: '/',
				id: 12,
			},
			{
				name: 'Third-party Payment',
				icon: <CaretRightOutlined />,
				description: 'Paxos',
				url: '/',
				id: 13,
			},
		],
	},
	{
		name: 'Market',
		bold: false,
		icon: '',
		child: false,
		url: '/',
	},
	{
		name: 'Trade',
		icon: <CaretDownOutlined />,
		child: true,
		url: '/',
		children: [
			{
				name: ' Convert',
				icon: <CaretRightOutlined />,
				description: 'The Easiest way to Trade ',
				url: '/',
				id: 14,
			},
			{
				name: ' Classic',
				icon: <CaretRightOutlined />,
				description: 'Simple and Easy to use interface',
				url: '/',
				id: 15,
			},
			{
				name: ' Advance',
				icon: <CaretRightOutlined />,
				description: 'Full access to all Trading',
				url: '/',
				id: 16,
			},
		],
	},
	{
		name: 'Derivatives',
		icon: <CaretDownOutlined />,
		child: true,
		url: '/',
		children: [
			{
				name: ' USD - M Futures',
				icon: <CaretRightOutlined />,
				description: 'The Easiest way to Trade',
				url: '/',
				id: 17,
			},
			{
				name: ' Classic',
				icon: <CaretRightOutlined />,
				description: 'Simple and Easy to use interface',
				url: '/',
				id: 18,
			},
			{
				name: ' Advance',
				icon: <CaretRightOutlined />,
				description: 'Full access to all Trading',
				url: '/',
				id: 19,
			},
		],
	},
	{
		name: 'Finance',
		icon: <CaretDownOutlined />,
		child: true,
		url: '/',
		children: [
			{
				name: ' USD - M Futures',
				icon: <CaretRightOutlined />,
				description: 'The Easiest way to Trade',
				url: '/',
				id: 20,
			},
			{
				name: ' Classic',
				icon: <CaretRightOutlined />,
				description: 'Simple and Easy to use interface',
				url: '/',
				id: 21,
			},
			{
				name: ' Advance',
				icon: <CaretRightOutlined />,
				description: 'Full access to all Trading',
				url: '/',
				id: 22,
			},
		],
	},
];

export const MenuHollaEx = ({ size }) => {
	const menuList = () => {
		return menus.map((menu, index) => {
			if (!menu.child) {
				if (menu.bold) {
					return (
						<a href={menu.url} className={'rb-menu gold'} key={index}>
							{' '}
							<strong>{menu.name}</strong>{' '}
						</a>
					);
				} else {
					return (
						<a href={menu.url} className={'rb-menu gold'} key={index}>
							{' '}
							{menu.name}
						</a>
					);
				}
			} else {
				const subMenus = menu.children.map((dropdown, i) => {
					return (
						<Menu.Item key={'sub' + i}>
							{dropdown.icon} {dropdown.name}
							<br />
							<span className={'menu-sub-text'}>{dropdown.description} </span>
						</Menu.Item>
					);
				});

				const singleMenu = (
					<Menu theme="dark" activeKey={index}>
						{subMenus}
					</Menu>
				);

				return (
					<Dropdown key={'_' + index} overlay={singleMenu}>
						<a
							className="ant-dropdown-link rb-menu"
							onClick={(e) => e.preventDefault()}
						>
							{menu.name} {menu.icon}
						</a>
					</Dropdown>
				);
			}
		});
	};

	return (
		<>
			<Space size={size}>{menuList()}</Space>
		</>
	);
};
