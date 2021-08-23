import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useLazyState from 'react-storefront/hooks/useLazyState'
import CmsSlot from 'react-storefront/CmsSlot'
import LoadMask from 'react-storefront/LoadMask'
import Head from 'next/head'
import createLazyProps from 'react-storefront/props/createLazyProps'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'
import { useEffect, useState } from 'react';
import useContentService from '../services/useContentService';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(10, 0, 0, 0),
  },
}))

export default function Index(lazyProps) {
  const classes = useStyles()
  const [state] = useLazyState(lazyProps)
  const [content, setContent] = useState();

  const transformContent = (content) => {
    const transformedContent = content.data.documentListDocuments.items.map(item => item.properties.content)
    return transformedContent;
  }

  useEffect(() => {

    const getContent = async () => {
      const content = await useContentService("content_blocks@mozuadmin", "home");
      const transformedContent = transformContent(content);
      setContent(transformedContent)
    }

    getContent();

  }, []);

  return (
    <>
      {state.loading ? null : (
        <Head>
          <title>{state.pageData.title}</title>
        </Head>
      )}
      <Container maxWidth="lg">
        {state.loading ? (
          <LoadMask fullscreen />
        ) : (
          <div className={classes.main}>
            {content && content.map((item, index) => <CmsSlot key={index}>{item}</CmsSlot>)}
          </div>
        )}
      </Container>
    </>
  )
}

Index.getInitialProps = createLazyProps(options => {
  const { res } = options
  if (res) {
    res.setHeader('Cache-Control', 'max-age=99999');
  }
  return fetchFromAPI(options)
})
