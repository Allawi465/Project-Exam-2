import { Helmet } from 'react-helmet-async';

/**
 * Hook that sets the metadata for the page using the `react-helmet` library
 * @typedef {Object} useHelmet
 */

/**
 * Hook that sets the metadata for the page using the `react-helmet` library
 * @param {string} title The title of the page.
 * @param {string} description The description of the page
 * @param {string} keywords The keywords of the page
 * @example
 * useHelmet({
 *  title: 'Holidaze: plan your next adventure with ease',
 *  description:
 *  'Holidaze makes vacation planning stress-free.',
 * keywords: 'travel, vacation',
 *  });
 */

function useHelmet({ title, description, keywords }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </>
  );
}

export default useHelmet;
