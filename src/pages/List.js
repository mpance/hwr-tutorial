import React from 'react';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';

class List extends React.Component {
	render() {
		return (
			<div>
				<p><IndexLink to="/" activeClassName="active">Home</IndexLink></p>
				<p>Please choose a repository from the list below.</p>
				<ul>
					<li><Link to="/detail/react">React</Link></li>
				</ul>
			</div>
		);
	}
}

export default List;

