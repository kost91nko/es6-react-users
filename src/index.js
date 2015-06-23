import Debug from 'debug';
import App from './app';

var attachElement = document.body;

var state = {
    table: {
        title: 'React Test',
        users: [
            {
                id: 1,
                firstName: "Mark",
                lastName: "Otto",
                userName: "@mdo",
                isChecked: false
            },
            {
                id: 2,
                firstName: "Jacob",
                lastName: "Thornton",
                userName: "@fat",
                isChecked: false
            },
            {
                id: 3,
                firstName: "Larry",
                lastName: "the Bird",
                userName: "@twitter",
                isChecked: false
            }
        ]
    }
};

var app;

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
    state: state
});

app.renderToDOM(attachElement);