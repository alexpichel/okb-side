import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const forms = css`
  margin-bottom: 50px;
  min-height: 10vh;

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
    margin: 0 0 2em
  }

  form .field.half {
      float: left;
      padding: 0 0 0 1em;
      width: 50%
  }

  form .field.half.first {
      padding: 0 1em 0 0
  }

  form>.actions {
      margin: 2.5em 0 0!important
  }

  @media screen and (max-width: 736px) {
      form .field {
          margin:0 0 1.5em
      }

      form .field.half {
          padding: 0 0 0 .75em
      }

      form .field.half.first {
          padding: 0 .75em 0 0
      }

      form>.actions {
          margin: 2em 0 0!important
      }
  }

  @media screen and (max-width: 480px) {
      form .field.half {
          float:none;
          padding: 0;
          width: 100%
      }

      form .field.half.first {
          padding: 0
      }
  }

  label {
      color: #333;
      display: block;
      font-size: .8em;
      font-weight: 600;
      letter-spacing: .25em;
      margin: 0 0 1em;
      text-transform: uppercase
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
      width: 100%
  }

  input[type=email]:invalid,input[type=password]:invalid,input[type=search]:invalid,input[type=tel]:invalid,input[type=text]:invalid,input[type=url]:invalid,select:invalid,textarea:invalid {
      box-shadow: none
  }

  input[type=email]:focus,input[type=password]:focus,input[type=search]:focus,input[type=tel]:focus,input[type=text]:focus,input[type=url]:focus,select:focus,textarea:focus {
      border-color: #FFA500;
      box-shadow: 0 0 0 2px #FFA500
  }

  .select-wrapper {
      display: block;
      position: relative;
      text-decoration: none
  }

  .select-wrapper:before {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      color: rgba(212,212,255,.1);
      content: "\F078";
      display: block;
      font-family: FontAwesome;
      font-style: normal;
      font-weight: 400;
      height: 2.75em;
      line-height: 2.75em;
      pointer-events: none;
      position: absolute;
      right: 0;
      text-align: center;
      text-transform: none!important;
      top: 0;
      width: 2.75em
  }

  .select-wrapper select::-ms-expand {
      display: none
  }

  input[type=email],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=url],select {
      height: 2.75em
  }

  textarea {
      padding: .75em 1em
  }

  input[type=checkbox],input[type=radio] {
      -moz-appearance: none;
      -ms-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      display: block;
      float: left;
      margin-right: -2em;
      opacity: 0;
      width: 1em;
      z-index: -1
  }

  input[type=checkbox]+label,input[type=radio]+label {
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-weight: 300;
      padding-left: 2.65em;
      padding-right: .75em;
      position: relative;
      text-decoration: none
  }

  input[type=checkbox]+label:before,input[type=radio]+label:before {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      background: rgba(212,212,255,.035);
      content: "";
      display: inline-block;
      font-family: FontAwesome;
      font-style: normal;
      font-weight: 400;
      height: 1.65em;
      left: 0;
      letter-spacing: 0;
      line-height: 1.58125em;
      position: absolute;
      text-align: center;
      text-transform: none!important;
      top: 0;
      width: 1.65em
  }

  input[type=checkbox]:checked+label:before,input[type=radio]:checked+label:before {
      background: #fff;
      border-color: #9bf1ff;
      color: #242943;
      content: "\F00C"
  }

  input[type=checkbox]:focus+label:before,input[type=radio]:focus+label:before {
      box-shadow: 0 0 0 2px #9bf1ff
  }

  input[type=radio]+label:before {
      border-radius: 100%
  }

  ::-webkit-input-placeholder {
      color: rgba(244,244,255,.2)!important;
      opacity: 1
  }

  :-moz-placeholder,::-moz-placeholder {
      color: rgba(244,244,255,.2)!important;
      opacity: 1
  }

  :-ms-input-placeholder {
      color: rgba(244,244,255,.2)!important;
      opacity: 1
  }

  .formerize-placeholder {
      color: rgba(244,244,255,.2)!important;
      opacity: 1
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

export default forms;
