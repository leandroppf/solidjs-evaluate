import { css } from '@stitches/core'

export const navigator = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  padding: '24px',
})

export const navigatorButton = css({
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: '14px',

  textDecoration: 'none',
  color: '#FFFFFF',

  background: '#5379b5',

  padding: '8px 32px',
  borderRadius: '4px',

  '&:hover': {
    opacity: '85%',
  },

  '& + &': {
    marginLeft: '16px',
  },

  variants: {
    selected: {
      true: {
        background: '#2d3c54',
      },
    },
  },
})
