import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withstyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { render } from 'react-testing-library';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class OutlinedTextFields extends React.Component {
    state = {
        name: '',
        age: '',
        multiline: 'Controlled',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
};

render() {
    const { classes } = this.props;

    return (
        <nav className={(themeStyle, customStyle)}>
          <section id="submit">
            <div className="inner">
              <section>
                  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
                      <div className="field bot">
                          <label htmlFor="bot-field"></label>
                          <input type="hidden" name="bot-field" id="bot-field" />
                      </div>
                      <div className="field half first">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name" id="name" />
                      </div>
                      <div className="field half">
                          <label htmlFor="email">Email</label>
                          <input type="text" name="email" id="email" />
                      </div>
                      <div className="field">
                          <label htmlFor="message">Requested Topic Summary</label>
                          <textarea name="message" id="message" rows="6"></textarea>
                      </div>
                      <ul className="actions">
                          <li><input type="submit" value="Send Message" className="special" /></li>
                          <li><input type="reset" value="Clear" /></li>
                      </ul>
                  </form>
              </section>
          </div>
        </section>
      </nav>
      );
};

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Submit(styles)(OutlinedTextFields);