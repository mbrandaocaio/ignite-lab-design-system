import { Meta, StoryObj } from "@storybook/react";
import { Input, TextInputInputProps, TextInputRootProps } from ".";
import {Envelope} from 'phosphor-react'
export default {
  title: "Components/Input",
  component: Input.Root,
  args: {
    children: (
      [
      <Input.Icon><Envelope /></Input.Icon>,
      <Input.Input placeholder="type your email here" />
      ]
    )
  },
  argTypes: {
    children:{
      table:{
        disable:true
      }
    }
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      [
      <Input.Input placeholder="type your email here" />
      ]
    )
  }
};

