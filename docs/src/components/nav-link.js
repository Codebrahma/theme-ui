import React from 'react'
import { Link } from 'gatsby'

export default props =>
  <Link
    {...props}
    css={{
      display: 'inline-block',
      px: 2,
      py: 3,
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
    }}
  />
