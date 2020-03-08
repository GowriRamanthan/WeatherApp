This is a [Next.js] Project to display the Weather App
This App tries to follow the styling in www.squaredup.com to be in consistent with design

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

This code is deployed in AWS Lamba server instance

#Unit Testing in Jest
```
npm test
```

## Deploy on AWS
```bash
npx serverless
```

Please find below the URL for deployed instance

https://dmbtkkt4zo174.cloudfront.net

It requires 2 query parameters to be passed in `city` and `country_code`

e.g.

```bash
https://dmbtkkt4zo174.cloudfront.net/?city=pittsburgh&country_code=US
https://dmbtkkt4zo174.cloudfront.net/?city=Leeds&country_code=GB
https://dmbtkkt4zo174.cloudfront.net/?city=Chennai&country_code=IN
```

Future Improvements :

(1)  Integration testing with test cafe
(2)  Configuring environment variables with .env
(3)  CSS checking using the Visual Regression
(4)  Vulnerability scanning in Zap


