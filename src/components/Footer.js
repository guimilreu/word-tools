import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer w-100 mt-auto py-3 bg-light">
          <div className="container text-center">
            <span className="text-muted">
              Made by&nbsp;
              <a className="footer-brand" href="https://github.com/Susmita-Dey/TextUtils">
                Hack Sales Performance
              </a>.
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
