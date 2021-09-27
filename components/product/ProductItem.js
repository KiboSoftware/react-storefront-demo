import React, { memo, useState } from 'react'
import Link from 'react-storefront/link/Link'
import { Vbox } from 'react-storefront/Box'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from 'react-storefront/Rating'
import ForwardThumbnail from 'react-storefront/ForwardThumbnail'
import Image from 'react-storefront/Image'
import clsx from 'clsx'
import ProductOptionSelector from 'react-storefront/option/ProductOptionSelector'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px`,
    // border: '1px solid black',
    margin: `${theme.spacing(1)}px`,
    "&:hover": {
      boxShadow: "0px 4px 11px rgba(29,31,34,0.1) !important"
    }

  },
  thumbnail: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  price: {
    marginTop: '5px',
  },
  reviews: {
    marginTop: '5px',
  },
  reviewCount: {
    marginLeft: '2px',
  },
  info: {
    margin: '0',
  },
}))

function ProductItem({ product, index, classes, className, colorSelector }) {
  classes = useStyles({ classes })
  const [store, updateStore] = useState(product)

  return (
    <div id={`item-${index}`} className={clsx(className, classes.root)}>
      <Vbox alignItems="stretch">
        <ForwardThumbnail>
          <Link
            as={product.url}
            href="/p/[productId]"
            className={classes.link}
            prefetch="visible"
            pageData={{ product, color: store.color }}
          >
            <a>
              {
                ((store.color && store.color.media.thumbnail.src) ||
                  (store.thumbnail && store.thumbnail.src)) ?
                  <Image
                    className={classes.thumbnail}
                    src={
                      (store.color && store.color.media.thumbnail.src) ||
                      (store.thumbnail && store.thumbnail.src)
                    }
                    alt={
                      (store.color && store.color.media.thumbnail.alt) ||
                      (store.thumbnail && store.thumbnail.alt)
                    }
                    optimize={{ maxWidth: 200 }}
                    lazy={index >= 4 && index < 20 ? 'ssr' : false}
                    aspectRatio={1}
                  /> :
                  <Skeleton variant="rectangular" animation={false} className={classes.thumbnail} width={'100%'} height={170}>
                    No Preview Available
                  </Skeleton>
              }
            </a>
          </Link>
        </ForwardThumbnail>
        <div className={classes.info}>
          <Typography variant="subtitle1" className={classes.name}>
            {product.name}
          </Typography>
          {colorSelector && (
            <ProductOptionSelector
              options={store.colors}
              value={store.color}
              onChange={value => updateStore({ ...store, color: value })}
              optionProps={{
                size: 'small',
                showLabel: false,
              }}
            />
          )}
          <Rating product={product} className={classes.rating} />
          <Typography className={classes.price}>{`${product.priceText}`}</Typography>
        </div>
      </Vbox>
    </div>
  )
}

ProductItem.defaultProps = {
  colorSelector: true,
}

export default memo(ProductItem)
