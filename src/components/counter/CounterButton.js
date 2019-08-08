import PropTypes from "prop-types";
import React, {Component} from "react";

class CounterButton extends Component {
    render() {
        return (
            <div className="counter">
                <button onClick={this.increment} className="green">+{this.props.by}</button>
                <button onClick={this.decrement} className="red">-{this.props.by}</button>
            </div>
        );
    }

    increment = () => {
        this.props.incrementMethod(this.props.by);
    };

    decrement = () => {
        this.props.decrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by: 1
};

CounterButton.propTypes = {
    by: PropTypes.number
};

export default CounterButton;