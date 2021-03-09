import React from 'react';
import { Banner } from './Banner';

const images = [
	'https://image.freepik.com/free-vector/crypto-currency-bitcoin-blue-background-digital-web-money-modern-technology-banner-with-copy-spac_48369-13790.jpg',
	'https://image.freepik.com/free-vector/crypto-currency-bitcoin-blue-background-digital-web-money-modern-technology-banner-with-copy-spac_48369-13790.jpg',
	'https://image.freepik.com/free-vector/crypto-currency-bitcoin-blue-background-digital-web-money-modern-technology-banner-with-copy-spac_48369-13790.jpg',
	'https://image.freepik.com/free-vector/crypto-currency-bitcoin-blue-background-digital-web-money-modern-technology-banner-with-copy-spac_48369-13790.jpg',
];
export const Banners = () => {
	const rand = 9 + Math.random() * 8;
	const rand2 = 99 + Math.random() * 8;
	return (
		<div key={rand + 12 + rand2}>
			<div className={'bg-white'}>
				<div className="container">
					<div className={'row addBanner'}>
						{images.map((image, index) => {
							return (
								<div className="col-md-3" key={index}>
									<Banner img={image} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
