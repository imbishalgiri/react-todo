import React,{Component} from 'react';

import './description.styles.css';

class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    handleChange = (event) => {
        this.setState({text: event.target.value});
    }

    render() {
        return(
            <div className="description">
                <input 
                    className="description__text" 
                    value={this.state.text}
                    type="text" 
                    placeholder="description" 
                    onChange={this.handleChange}
                />
			</div>
        )
    }
}

export default Description;