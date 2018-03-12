import React from 'react'
import { Row, Col } from 'reactstrap'
import 'devicon/devicon.css'
import 'devicon/devicon-colors.css'
import './index.css'

const LanguagesRow = () => (
  <div className="languages-container">
    <Row className="languages-header">Supported languages</Row>
    <Row className="languages-row">
      <i className="devicon-python-plain" />
      <i className="devicon-javascript-plain" />
      <i className="devicon-typescript-plain" />
      <i className="devicon-java-plain" />
      <i className="devicon-android-plain" />
    </Row>
  </div>
)

export default LanguagesRow
