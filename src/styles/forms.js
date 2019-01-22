import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const bodytext = css`
  margin-bottom: 50px;

  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote {
    max-width: var(--textMaxWidth);
    margin: var(--spaceXL) auto;

    ${mq({
      padding: ['0 var(--spaceXL)', '0 var(--spaceXXL)'],
    })};
  }

  a {
    font-weight: 700;
  }

  form,form .field {
    margin: 0 0 2em;
  }

  form .field.half {
    float: left;
    padding: 0 0 0 1em;
    width: 50%;
  }

  form .field.half.first {
    padding: 0 1em 0 0;
  }

  form>.actions {
    margin: 2.5em 0 0!important;
  }

  label {
    color: #333;
    display: block;
    font-size: .8em;
    font-weight: 600;
    letter-spacing: .25em;
    margin: 0 0 1em;
    text-transform: uppercase;
  }

  input[type=email],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=url],select,textarea {
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: rgba(212,212,255,.035);
    border: none;
    border-radius: 0;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;
  }

  figure {
    margin: calc(var(--spaceXL) * 2) auto;
    max-width: 1023px;
    position: relative;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 8px 14px;
    max-width: 100%;
    color: white;
  }

  & pre[class*='language-'] {
    margin: calc(var(--spaceXL) * 2) auto;
    max-width: 1023px;
    border-radius: 0;

    ${mq({
      padding: ['var(--spaceXL)', 'var(--spaceXL) var(--spaceXXL)'],
    })};
  }

  & *:not(pre) > code[class*='language-'] {
    background: #eee;
    color: #333;
    text-shadow: none;
    padding: 1px 5px 2px;
    border-radius: 2px;
  }

  p {
    line-height: 1.7;
    font-size: 1.1em;
  }

  ul,
  ol {
    margin: var(--spaceXXL) auto;
    list-style-position: outside;
  }

  li {
    margin: 0.8em 0 0.8em 1.1em;
    font-size: 1.1em;
    line-height: 1.3;
  }

  h2,
  h3,
  h4 {
    line-height: 1.2;
    margin: 1.6em auto 0.9em;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 1.6em;
    letter-spacing: -0.03em;
  }

  h3 {
    font-size: 1.3em;
  }

  h4 {
    font-size: 1.1em;
  }



  blockquote {
    font-family: var(--secondFontFamily);
    margin: calc(var(--spaceXL) * 2) auto;
    font-size: 1.1em;
    font-style: italic;
    position: relative;
    color: var(--quoteColor);
    p {
      line-height: 1.6;
      padding: 0 var(--spaceXL) var(--spaceXL);

      &:first-child {
        text-indent: 1em;

        &:before {
          content: open-quote;
          color: var(--quoteColor);
          position: absolute;
          font-size: 3em;
          transform: translate(-1em, -0.3em);
        }
      }

      &:last-child {
        padding-bottom: 0;

        &:after {
          content: close-quote;
          color: var(--blockquoteSignColor);
          position: absolute;
          font-size: 3em;
          transform: translate(-0.3em, -0.2em);
        }
      }
    }
  }
`;

export default bodytext;
