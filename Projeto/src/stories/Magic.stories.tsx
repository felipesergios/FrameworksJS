import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Magic from '../components/Magic';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mycomponents/Magic',
  component: Magic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    borderRadius: { control: { type: 'range', min: 1, max: 30, step: 2 } }
  },
} as ComponentMeta<typeof Magic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Magic> = (args) => <Magic {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tabs_contents:[{id:0,content:"Teste"},{id:1,content:"Teste 2"}]
};

export const Secondary = Template.bind({});
Secondary.args = {
    tabs_contents:[{id:0,content:"Teste 5 "},{id:1,content:"Teste  6 "}]
    
  };

