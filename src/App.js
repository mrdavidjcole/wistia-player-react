import React, { Component } from 'react';
import logo from './logo.svg';
import wistiaLogo from './wistia-logo.svg';
import './App.css';
import WistiaEmbed from './components/wistia_embed.js'

class App extends Component {
  constructor() {
    super()

    // You can define plugins here, like the ones documented at https://wistia.com/doc/embed-options#embed_plugins
    // If you're feeling fancy, try making a plugin of your very own! https://wistia.com/doc/plugin-api
    this.plugins = {
      "postRoll-v1": {
        text: "Remix this project on Glitch to try the WistiaEmbed React component for yourself",
        link: "https://wistia.com"
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={wistiaLogo} className="Wistia-logo" alt="Wistia logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Wistia Player React Component</h2>
        </div>
        <p className="App-intro">
          Remix this project on Glitch to try the <code>{`<WistiaEmbed>`}</code> React component.
        </p>
        <div className="wistia-embed-wrapper">
          {/* You can include any Wistia embed options as props. See the full list at https://wistia.com/doc/embed-options#options_list */}
          <WistiaEmbed hashedId="ba104jh5i9" playerColor="#54bbff" plugin={this.plugins} />
        </div>
      </div>
    );
  }
}

export default App;
