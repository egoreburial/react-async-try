var App = React.createClass({
	getInitialState: function() {
		return {
			imageSrc: '',
			loading: true
		};
	},
	componentWillMount: function() {
		this.setState({loading: true});
	},
	componentDidMount: function() {
		var self = this;

		axios('http://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_Césars_2014.jpg')
			.then(function(response) {
				self.setState({
					imageSrc: 'data:image/jpg;base64,' + response.data,
					loading: false
				});
			});
	},
	render: function() {
		var	imageTpl;

		if (!this.state.loading) {
			imageTpl = <img src={this.state.imageSrc}></img>
		} else {
			imageTpl = <p>Loading</p>
		}

		return (
			<div className="app">
				{imageTpl}
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
