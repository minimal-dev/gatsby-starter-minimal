import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Menu from '../Menu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle }) => (
  <Container as="header" className={s.header}>
    <div className={s.header__logo}>{siteTitle}</div>
    <Menu />
  </Container>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
