/**
* @jest-environment jsdom
*/
import React from 'react';
import { shallow, mount } from 'enzyme';
import NotificationItem from './NotificationItem.js';
import Notifications from './Notifications.js';
import { getLatestNotification } from "../utils/utils.js";

describe('NotificationItem component', () => {
  it('renders the notification item without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the component to have type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toContain("<li data-notification-type=\"default\">test</li>");
  });

  it('renders the component to have htmlprops', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain("<u>test</u>");
  });

  it('onclick the markAsRead fn is called and logged to console', () => {
    const listNotifications = [
      {id: 1, type: 'default', value: 'New courses available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', value: 'New new new'}
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const instance = wrapper.instance();
    const markSpy = jest.spyOn(instance, 'markAsRead');
    instance.markAsRead(2);
    expect(markSpy).toBeCalledWith(2);
    markSpy.mockRestore();

  });
});