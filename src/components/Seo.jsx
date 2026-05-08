import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'SavoryOps'
const BASE_URL = 'https://grow.savoryops.com'
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`

function Seo({
  title,
  description,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  noIndex = false,
  jsonLd,
}) {
  const canonicalUrl = new URL(path, BASE_URL).toString()
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  )
}

export default Seo
