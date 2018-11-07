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
I decided to use AWS S3 for static hosting as it is a cost effective solution with easy to set up CDN to reduce distance to end user. Files are built using webpack uploaded to S3 where they are automatically replicated by CloudFront CDN and made available publicly.

This read me does not cover setting up CloudFront and AWS CLI is required to use the following package.json script. The deploy script automates the upload to s3 process.

To publish to s3 you will need to: [Amazon Walkthrough: steps 1-4](https://docs.aws.amazon.com/AmazonS3/latest/dev/hosting-websites-on-s3-examples.html)(11/2018)
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

## Webpack Configuration
Webpack is a bit of a bear to configure, in setting it up for both development and build I learned a bit about the use of plugins and the configuration of the webpack.config.js. I feel that it is very good for as a build tool, but would warn against using it for development as if you dont have it set up perfectly you will consistantly run into road blocks and will need to experiment with plugins and configs to get it to do what you want (mostly).

### Plugins
HtmlWebpackPlugin: Required if you want your entry point to be HTML instead of JS with a generated HTML file. This is the common use case for most developers. It also allows faster time to interaction as you dont need to load the entire JS before rendering something on the screen

CleanWebpackPlugin: Simple plugin just deletes your build folder, I can see this simplfying cross os development if you dont want to use a node package like rmraf

CopyWebpackPlugin: will copy files directly into your distribution folder. I found this useful as my images were added to the HtmlWebpackPlugin. These will not be automatically added to your distribution folder if you use standard img references unless you:

* import the image into your scss as backround images. 
* Or use lodash template (I did not test this) `<img src="<%=require('./src/assets/logo.png')%>">` inside your html.

I decided to use this method as I wanted to stay with standard HTML, and background images are treated differently as they are not printed.

MiniCssExtractPlugin: I used this to remove the CSS file from being added to the JS file. For a more standard HTML / JS / CSS file seperation

OptimizeCSSAssetsPlugin & UglifyJsPlugin: As MiniCssExtractPlugin did not minify the css code I had to find a plugin to minify the CSS during the build process. UglifyJsPlugin is needed to minify the JS files, webpack by default will minify your JS code but once an optimizer is set webpack no longer uses the default JS minifier.

