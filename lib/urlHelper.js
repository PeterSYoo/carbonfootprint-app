const apiUrls = {
  production: 'http://localhost:3000',
  development: 'https://carbonfootprint-app.vercel.app',
};

let urlHelper = '';

if (window.location.hostname === 'localhost') {
  urlHelper = apiUrls.development;
} else {
  urlHelper = apiUrls.production;
}

export default urlHelper;
