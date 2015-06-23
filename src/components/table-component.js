import React from '../../node_modules/react/addons';
import Checkbox from './checkbox-component.js'

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var self = this;
        var isMulti = false;
        return <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
                {this.props.users.map(function (user,key) {
                    return <tr key={user.id}>
                        <th scope="row">
                            <Checkbox
                                class="multi-select"
                                isChecked={user.isChecked}
                                reactKey={key}
                                isMulti={isMulti}
                                value={user.id}
                                onChange={self.props.changeRow}/>
                        </th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.userName}</td>
                    </tr>;
                })}

            </tbody>
        </table>;
    }
}

export default TableComponent;