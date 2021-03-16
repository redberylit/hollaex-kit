import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { setPairsData } from '../../actions/orderbookAction';
import { charts } from 'highcharts';

export const MarketListHome = () => {
	const [charts, setCharts] = useState([]);
	useEffect(() => {
		const from = moment().subtract('1', 'days').format('X');
		const to = moment().format('X');

		axios
			.get(
				`https://api.hollaex.com/v2/oracle/prices?amount=1&quote=xht&assets=usdt,xht,xmr,btc,eth,ngn,xrp`
			)
			.then((response) => setCharts(response.data));
		//https://api.hollaex.com/v1/ticker?symbol=xht-usdt&resolution=1D&
	}, []);

	return (
		<>
			<div className="bg-light-gray">
				<div className="container">
					<div> Market List</div>
					{/*{"time":"2019-08-15T00:00:00.000Z","close":0.1,"high":0.1,"low":0.1,"open":0.1,"symbol":"xht-usdt","volume":2262863}*/}
					{/*<table className="table table-border table-hover table-striped">
                        <thead>
                        <tr>
                            <th> Symbol </th>
                            <th> Volume</th>
                            <th> close</th>
                            <th> open</th>
                            <th> high</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            charts.map(chart => (
                                <tr key={chart.time}>
                                    <td>{chart.symbol}</td>
                                    <td>{chart.volume}</td>
                                    <td>{chart.close}</td>
                                    <td>{chart.open}</td>
                                    <td>{chart.high}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>*/}

					<code>{JSON.stringify(charts)}</code>
				</div>
			</div>
		</>
	);
};
