import React from '../../node_modules/react/addons';
import Checkbox from './checkbox-component'

class UserRow extends React.Component{
    constructor(props) {
        super(props);
/*        this.state = {
            isChecked: props.isChecked
        };*/

        this.changeRow = this.changeRow.bind(this);
    }

    changeRow(isChecked){
        this.props.changeUserStatus(this.props.reactKey, isChecked);
    }

    render(){
        var isMulti = false;
        return <tr>
            <th scope="row"><Checkbox value={this.props.user.id} isMulti={isMulti} isChecked={this.props.user.isChecked} onChange={this.changeRow} /></th>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.userName}</td>
            </tr>;
    }
}

export default UserRow