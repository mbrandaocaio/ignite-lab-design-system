import { Meta, StoryObj } from "@storybook/react";
import { Login } from ".";
import {within, userEvent, waitFor} from '@storybook/testing-library'
import {expect} from '@storybook/jest'
import {rest} from 'msw'
export default {
  title: "Pages/Login",
  component: Login,
  parameters: {
    msw: {
      handlers:[
        rest.post('/sessions', (req, rest, ctx) => {
          return rest(ctx.json({
            message: 'Login realizado'
          }))
        })
      ]
    }
  }
} as Meta;

export const Default: StoryObj = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'mbrandao.caio@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('*********'), 'batata12')

    userEvent.click(canvas.getByRole('button'))

    

    await waitFor(() => {
      const result = canvas.getByText('Login realizado')
      return expect(result).toBeInTheDocument()
    })

    


  }
};