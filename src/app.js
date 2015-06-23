import React from 'react/addons';
import Debug from 'debug';

import AppRoot from './components/approot-component.js';

var debug = Debug('myApp');

class App {

    constructor(options) {
        debug('create app with options', options);

        this.state = options.state;
    }

    render (element) {

        debug('render app with state', this.state);

        var appRootElement = <AppRoot state={this.state} />;
        // render to DOM
        if(element) {
            debug('render to DOM');
            React.render(appRootElement, element);
            return;
        }

        // render to string
        debug('render to string');
        return React.renderToString(appRootElement);
    }


    renderToDOM (element) {
        if(!element) {
            return debug(new Error('App.renderToDOM: element is required'));
        }

        this.render(element);
    }

    renderToString () {
        return this.render();
    }
}

export default App;