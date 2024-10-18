import React from "react"
import PropTypes from "prop-types"


export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
        <meta name="description" content="mekacreative.io"/>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="icon" href="%PUBLIC_URL%/favicon/favicon.svg"/>
        <link rel="mask-icon" href="%PUBLIC_URL%/favicon/mask-icon.svg" color="#FF616E"/>
        <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/favicon/apple-touch-icon.png"/>
        <link rel="manifest" href="%PUBLIC_URL%/favicon/manifest.json"/>
        <link rel="icon" href="%PUBLIC_URL%/favicon/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript key="noscript" id="gatsby-noscript">
            This app works best with JavaScript enabled.
          </noscript>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-31626671-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-31626671-1');
                  `,
            }}
          />





        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

