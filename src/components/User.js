import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import './User.css';

const title = {
    fontStyle: "normal",
    color: "#8C1515",
    fontWeight: "bold",
}

class User extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { elementNumber, admin } = this.props;
        return (
            <span
                className="img3" 
                style={title}>
                {`${elementNumber} ${admin}`}
            </span>
        )
    }
   
}

export default User;

// function User({ elementNumber, admin }) {
//     return (
//         <span
//             className="img3" 
//             style={title}>
//             {`${elementNumber} ${admin}`}
//         </span>
//     )
// }

// export default User;

User.propTypes = {
    elementNumber: PropTypes.number,
    admin: PropTypes.arrayOf(
        PropTypes.shape({
          mission: PropTypes.oneOf(["USERS", "MANAGERS"]),
          idTask: PropTypes.oneOf(["memberIds", "managerIds"])
        }),
    ),
}