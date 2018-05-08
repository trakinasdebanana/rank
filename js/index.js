var data = {
	title: 'RAINBOW SIX ORG. RANKING',
	people: [{
		name: 'PENTA SPORTS',
		score: 245
	}, {
		name: 'YUNKTIS',
		score: 72
	}, {
		name: 'BLACK DRAGONS',
		score: 115
	}, {
		name: 'GIFU ESPORTS',
		score: 101
	}, {
		name: 'TEAM ORBIT',
		score: 78
	}, {
		name: 'CONTINUUM',
		score: 73
	}, {
		name: 'ENCE ESPORTS',
		score: 69
	}, {
		name: 'GBOTS PRO',
		score: 61
	}, {
		name: 'FLIPSID3 TACTICS',
		score: 57
	}, {
		name: 'ELEVATE',
		score: 50
	}]
};

var Leaderboard = React.createClass({
	displayName: 'Leaderboard',

	getInitialState: function getInitialState() {
		return data;
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Leaderboard' },
			React.createElement(Title, { title: this.state.title }),
			React.createElement(List, { people: this.state.people })
		);
	}
});

var Title = React.createClass({
	displayName: 'Title',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Title' },
			this.props.title
		);
	}
});

var List = React.createClass({
	displayName: 'List',

	compareArray: function compareArray(a, b) {
		if (a.score < b.score) return 1;
		if (a.score > b.score) return -1;
		return 0;
	},
	sortArray: function sortArray() {
		return this.props.people.sort(this.compareArray);
	},
	render: function render() {

		var peopleList = this.sortArray();

		var people = peopleList.map(function (person, i) {
			return React.createElement(Person, { name: person.name, score: person.score, image: person.image });
		});

		return React.createElement(
			'ul',
			null,
			people
		);
	}
});

var Person = React.createClass({
	displayName: 'Person',

	render: function render() {
		return React.createElement(
			'li',
			{ className: 'Person' },
			React.createElement(
				'div',
				{ className: 'Name' },
				this.props.name
			),
			React.createElement(
				'div',
				{ className: 'Score' },
				this.props.score
			)
		);
	}
});

// Render
ReactDOM.render(React.createElement(Leaderboard, null), document.getElementById('leaderboard'));