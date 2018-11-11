import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/propertyCard';

it('renders a header on property card', () => {
  const wrapper = shallow((
    <PropertyCard
      title="mockTitle"
      type="mockType"
      bed="mockBed"
      bath="mockBath"
      city="mockCity"
      price="mockPrice"
    />
  ));
  expect(wrapper.find('.title').text()).toEqual('title');
  expect(wrapper.find('.type').text()).toContain('type');
});
