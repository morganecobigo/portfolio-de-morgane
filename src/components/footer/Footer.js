import React from 'react'
import {GithubOutlined, LinkedinOutlined, MailOutlined} from '@ant-design/icons'
import "./footer.css"

function Footer() {
  return (
    <div className="footer">
      <ul className="social-links">
        <li>
        <a href="mailto:cobigo.morgane2@outlook.fr" target="_blank" rel="noopener noreferrer">
          <MailOutlined />
          </a>
          </li>
        <li>
        <a href="https://github.com/morganecobigo/portfolio-de-morgane" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
          </a>
          </li>
        <li>
        <a href="https://www.linkedin.com/in/morgane-cobigo" target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined />
          </a>
          </li>
      </ul>
      <p className="copyright">© 2024 Morgane COBIGO tous droits réservés.</p>
    </div>
  )
}

export default Footer