11/7/2018
# Jonathan Earl's Porfolio Site hosted @ https://jonathanearl.io

## Purpose
1. Make a home for current and past projects
2. Practice scaleable styling using BEM / SASS
3. Play with Webpack as a Dev tool
4. Setup static hosting using AWS S3 with CloudFront as a CDN

## Requirements
Links checked 11/2018
*[Git](https://git-scm.com/downloads) & [Yarn](https://yarnpkg.com/lang/en/docs/install/)
*[NPM](https://www.npmjs.com/get-npm) (Yarn)
*[AWS CLI](https://aws.amazon.com/cli/)
*OSX (not tested in windows)

## Installation
Clone (Git)
```bash
git clone https://github.com/whattheearl/jonathanearl.io.git
```

Install dependencies (Yarn)
```
cd jonathanearl.io
yarn
```

## Uses
### Development
I set up webpack dev server with hot reload for faster development. This allowed for hot reloading so that the browser did not need to be refreshed for changes. I also added Sass preprocessor plugin so that CSS could be written using nested syntax making it more readable as well as ability to use variables.

Run development server locally
```
    yarn serve
```

### Build
I set up webpack to minify the CSS / HTML / JS reducing file size allowing for quick download. I opted to seperate the HTML / JS / CSS as this allowed me to test my configurations seperately to ensure that they were minifying correctly.

Build project and output to /dist
```
    yarn build
```

### Publish
I decided to use AWS S3 for static hosting as it is a cost effective solution with easy to set up CDN to reduce distance to end user. This read me does not cover setting up CloudFront and AWS CLI is required to use the following package.json script. The deploy script really to automate the upload to s3 process

To publish to s3 you will need to: [Amazon Walkthrough: steps 1-4](https://docs.aws.amazon.com/AmazonS3/latest/dev/hosting-websites-on-s3-examples.html)
1. Sign up for Amazon AWS account 
2. Create an S3 bucket
3. Make the bucket publicly accessible
4. Set index.html as your end point
5. Alter the following deploy script replace bucket name with the name of the bucket you set up.

```javascript
{
  "dependencies": {},
  "scripts": {
    "build": "NODE_ENV=production webpack --optimize-minimize",
    "serve": "webpack-dev-server --hot --mode development --open",
    "deploy": "yarn build && aws s3 sync ./dist s3://[s3 bucket name]"
  },
}
```

