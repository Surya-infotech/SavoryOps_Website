import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'SavoryOps'

function Seo({
  title,
  jsonLd,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  )
}

export default Seo
