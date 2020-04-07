import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
