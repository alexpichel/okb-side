import React from 'react';

const Request = (props) => (
    <section id="request">
        <div className="inner">
            <section>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
                    <div className="field half">
                        <label htmlFor="bot-field">Don't fill this out</label>
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
)

export default Request