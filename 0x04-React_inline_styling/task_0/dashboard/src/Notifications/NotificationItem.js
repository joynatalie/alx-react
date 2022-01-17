import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {type, html, value, markAsRead, id } = this.props;
    return (
      <>
        <li onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
      </>
    );
  }
}

NotificationItem.propTypes =  {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
  __html: PropTypes.shape({
    html: PropTypes.string
  })
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}
};

export default NotificationItem;