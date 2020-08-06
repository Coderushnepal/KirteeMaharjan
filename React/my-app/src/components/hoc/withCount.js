import React from 'react';

const withCount = (WithWrapperContainer) => {
	return class CounterWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				count: 0
			};
		}

		handleAddCount = () => {
			this.setState({ count: this.state.count + 1 });
		};
		handleMinusCount = () => {
			this.setState({ count: this.state.count + 1 });
		};

		render() {
			return (
				<WithWrapperContainer
					count={this.state.count}
					add={this.handleAddCount}
					sub={this.handleMinusCount}
					{...this.props}
				/>
			);
		}
	};
};

export default withCount;
