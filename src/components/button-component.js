import React from '../../node_modules/react/addons'

class Button extends React.Component{
    render(){
        return <button className="btn btn-default action-button" type="submit" onClick={this.props.onClick}>Show selected id's</button>
    }
}

export default Button