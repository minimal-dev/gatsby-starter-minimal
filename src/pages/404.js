import React from 'react'
import Layout from '../components/Layout'
import S from '../components/seo'

import { Container } from 'react-bootstrap'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <S title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
