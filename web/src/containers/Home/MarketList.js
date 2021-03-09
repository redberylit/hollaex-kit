import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { setPairsData } from '../../actions/orderbookAction';
import { charts } from 'highcharts';

export const MarketListHome = () => {
	// useEffect(() => {
	// 	console.log('xxxxxxxxxxxxxxxxxx ---- srinath -----');
	// 	const getData = async () => {
	// 		const from = moment().subtract('1', 'days').format('X');
	// 		const to = moment().format('X');

	// 		const { data = {} } = await axios({
	// 			url: `/charts?resolution=D&from=${from}&to=${to}`,
	// 			method: 'GET',
	// 		});

	// 		const chartData = {};
	// 		Object.entries(data).forEach(([pairKey, pairData = []]) => {
	// 			chartData[pairKey] = {};
	// 			chartData[pairKey]['close'] = pairData.map(({ close }) => close);
	// 			chartData[pairKey]['open'] = (pairData[0] && pairData[0]['open']) || 0;
	// 		});

	// 		setData(chartData);
	// 		console.log('output dataXXXXXXXXXXX', data);
	// 	};
	// });
	const [charts, setCharts] = useState([]);
	useEffect(() => {
		const from = moment().subtract('1', 'days').format('X');
		const to = moment().format('X');

		axios
			.get(
				`https://api.hollaex.com/v1/chart?symbol=xht-usdt&resolution=1D&from=1551663947&to=1582768007`
			)
			.then((response) => setCharts(response.data));
		//https://api.hollaex.com/v1/chart?symbol=xht-usdt&resolution=1D&
	}, []);

	return (
		<>
			<div className="bg-light-gray">
				<div className="container">
					<div> Market List</div>
					<code>{JSON.stringify(charts)}</code>
				</div>
			</div>
		</>
	);
};
