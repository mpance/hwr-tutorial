import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component {

	constructor(props) {
		super(props);
		this.state = { commits: [] };
	}

	componentWillMount() {
		ajax.get('https://api.github.com/repos/facebook/react/commits')
			.end((error, response) => {
				if (!error && response) {
					this.setState({ commits: response.body });
				} else {
					console.log('There was an error fetching from Github', error);
				}
			}
		);
	}

    render() {
	    return (<div> 
	    	{this.state.commits.map((commit, index) => (
	    		<p key={index}>Some commit data here!</p>
	    	))}
	    	</div>);
	}
}

export default Detail;

