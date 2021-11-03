import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";

class NotFound extends Component {
  render() {
    return (
      <div
        className="container mt-2"
        // style={{
        //   boxShadow:
        //     '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        // }}
      >
        <h1 className="text text-danger display-4"><AiFillWarning />Warning: 404 - No page was found!</h1>
        <hr />
        <p>Sorry!!! The Page You Request Is Not Available.</p>
        <p className="small text-secondary pb-3">
          It might have been removed; had its name changed; or is temporarily
          unavailable. Please ensure the Web site address is spelled correctly,
          OR go to the <Link to="/">home page</Link>, OR use the Menu to
          navigate to a specific Page.
        </p>
      </div>
    );
  }
}

export default NotFound;
