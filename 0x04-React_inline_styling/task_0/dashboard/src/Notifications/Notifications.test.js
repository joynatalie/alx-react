import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";
import NotificationItem from './NotificationItem.js';
import { getLatestNotification } from '../utils/utils.js';

describe('root notifications components', () => {
  it('renders root notifications without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders three list items", () => {
    const listNotifications = [
      {id: 1, type: 'default', value: 'New courses available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: getLatestNotification() }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders the text for notifications", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.html()).toContain('li data-notification-type="default">No new notification for now</li>');
  });

  it("logs to the console a message through markAsRead when a NoteItem is clicked", () => {
    const wrapper = shallow(<Notifications />);
    const consoleSpy = jest.spyOn(console, 'log');
    wrapper.instance().markAsRead(1);
    expect(consoleSpy).toBeCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  })
});