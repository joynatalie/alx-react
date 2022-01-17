import React, {Component} from "react";
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import closeImg from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils.js";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape.js';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
        { displayDrawer && (
          <div className="Notifications">
            <p>
              Here is the list of notifications
            </p>
            <ul>
              { listNotifications.length > 0
                ? listNotifications.map(({ markAsRead, type, value, html, id }) => (
                  <NotificationItem markAsRead={this.markAsRead} id={id} type={type} value={value} html={html} key={id} />
                ))
                : <NotificationItem value='No new notification for now' />
              }
            </ul>
            <button style={{ position: "absolute", top: "4.25rem", right: "1rem" }}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}>
              <img alt="close-icon" src={closeImg} width="10px" height="10px"/>
            </button>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};


export default Notifications;