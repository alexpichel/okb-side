import React from 'react';
import { graphql } from 'gatsby';

import Article from '../components/Article';
import Bodytext from '../components/Bodytext';
import Request from '../components/Request';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import ContextConsumer from '../store/Context';

import config from 'content/meta/config';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: requestHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
    location,
  } = props;

  const {
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
    siteImage,
  } = config;

  return (
    <React.Fragment>
      <ContextConsumer>
        {({ data, set }) => (
          <Article
            location={location}
            articleRendered={data.articleRendered}
            updateArticleRendered={val =>
              set({
                articleRendered: val,
              })
            }
          >
            {/* <Heading special={true}>
              <img src={logo} alt={`${title} ${subTitle}`} />
              <h1>
                <small>{preTitle}</small>
                {title}
                <span>{subTitle}</span>
              </h1>
            </Heading>
            <Bodytext html={requestHTML} /> */}
            <Request />
          </Article>
        )}
      </ContextConsumer>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
        image={siteImage}
      />
    </React.Fragment>
  );
};

export default NotFoundPage;

export const query = graphql`
  query {
    notFound: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/request/" }
    ) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
