import React,{Component} from 'react';

import './amount.styles.css';

class Amount extends Component {

    constructor(props) {
        super(props);
        this.state = {val: ""};
    }

    handleChange = (event) => {
        if(isNaN(event.target.value)) {
            return;
        }
        this.setState({val: event.target.value});
    }
    
    render() {
        return (
            <div className="amount">
                <input 
                    type="text" 
                    className="amount__money" 
                    placeholder="amount"
                    onChange={this.handleChange}
                    value={this.state.val}
                 />
				<span className="amount__icon icon icon-checkmark"></span>
			</div>
        )
    }
}

export default Amount;