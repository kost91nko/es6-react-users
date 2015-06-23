import React from '../../node_modules/react/addons'

class Checkbox extends React.Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onMultiChange = this.onMultiChange.bind(this);
    }


    onMultiChange() {
        var checked =  this.refs.multiSelect.getDOMNode().checked;
        this.props.onChange(checked);
    }

    onChange() {
        this.props.onChange(this.props.reactKey);
    }

    render(){
        if(this.props.isMulti) {

            return <input
                type="checkbox"
                className="multi-select"
                checked={this.props.isChecked}
                value={this.props.value}
                onChange={this.onMultiChange}
                ref="multiSelect"
            />
        }else{
            return <input
                type="checkbox"
                checked={this.props.isChecked}
                value={this.props.value}
                onChange={this.onChange}
                ref="multiSelect"
            />
        }
    }
}

export default Checkbox