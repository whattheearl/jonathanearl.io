11/7/2018
# Jonathan Earl's Porfolio Site hosted @ https://jonathanearl.io

## Purpose
1. Make a home for current and past projects
2. Practice scaleable styling using BEM / SASS
3. Play with Webpack as a Dev tool
4. Setup static hosting using AWS S3 with CloudFront as a CDN

## Requirements
Links checked 11/2018
* [Git](https://git-scm.com/downloads) & [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [NPM](https://www.npmjs.com/get-npm) (Yarn)
* [AWS CLI](https://aws.amazon.com/cli/)
* OSX (not tested in windows)

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

### Deployment
I decided to use AWS S3 for static hosting as it is a cost effective solution that easily connects to CloudFront CDN. Files are built using webpack uploaded to S3 where they are automatically replicated by CloudFront CDN and made available publicly. The CDN reduces distance to end user reducing latency, and S3 is highly available cloud storage with easy to use apis.

This documentation does not cover setting up CloudFront and AWS CLI is required to use the following package.json script. The deploy script automates the upload to s3 process.

To publish to s3 you will need to: [Amazon Walkthrough: steps 1-4](https://docs.aws.amazon.com/AmazonS3/latest/dev/hosting-websites-on-s3-examples.html)(11/2018)
1. Sign up for Amazon AWS account 
2. Create a S3 bucket
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

## Webpack Configuration
Webpack is a bit of a bear to configure, in setting it up for both development and build I learned a bit about the use of plugins and the configuration of the webpack.config.js. I feel that it is very good for as a build tool, but would warn against using it for development! If you dont have it set up perfectly you will consistantly run into road blocks and will need to experiment with plugins and configs to get it to do what you want (mostly). 

Webpack also does not default to what I believe most people would believe to be normal file seperation in web development. HTML and CSS files require a loader, is injected into a generated HTML file via JS.

### Plugins
#### HtmlWebpackPlugin: 
Required if you want your entry point to be HTML instead of JS with a generated HTML file. This is the common use case for most developers. It also allows faster time to interaction as you dont need to load the entire JS before rendering something on the screen

#### CleanWebpackPlugin:
Simple plugin just deletes your build folder, I can see this simplfying cross os development if you dont want to use a node package like rmraf

#### CopyWebpackPlugin:
will copy files directly into your distribution folder. I found this useful as my images were linked in the HTML file. These will not be automatically added to your distribution folder if you use standard img references (`<img src='/assets/img/cutekitty42' alt='cutest kitten' />`) unless you:

* use import in SCSS and set the image using background-image. 
* Or use lodash template (I did not test this) `<img src="<%=require('./src/assets/logo.png')%>">` inside your html. Assets are not seen unless imported via JS somewhere.

I decided to use CopyWebpackPlugin as I wanted to stay with standard HTML, and background images are treated differently than standard images.

#### MiniCssExtractPlugin:
I used this to keep seperation of JS and CSS files. For a more standard HTML / JS / CSS file seperation

#### OptimizeCSSAssetsPlugin & UglifyJsPlugin:
As MiniCssExtractPlugin did not minify the CSS code I included OptimizeCSSAssetsPlugin to minify the CSS Styles during the build process. UglifyJsPlugin was required to minify the JS files due to webpack not using defaults once an optimizer is set.

