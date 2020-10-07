import React from 'react';
import { shallow } from "enzyme";
import Ticket from "./Ticket";

it('shoud increment total when clicking button', () => {
    const wrapper = shallow(<Ticket/>);
    const tota1l = wrapper.find('h2.total').text();

    expect(tota1l).toBe("0");

    const button = wrapper.find('button');
    button.simulate('click');
    const total2 = wrapper.find('h2.total').text();

    expect(total2).toBe("1");
});

it('should render ticket name in title',()=> {
    const wrapper = shallow(<Ticket name={'NHL ticket'}/>);
    const title = wrapper.find('h2.title').text();

    expect(title).toBe('NHL ticket');
})