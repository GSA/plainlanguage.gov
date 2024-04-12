# plainlanguage.gov

This is the public repo for [plainlanguage.gov](http://www.plainlanguage.gov), which is an online resource to help federal employees understand and comply with the Plain Writing Act of 2010. It represents a joint effort by the Plain Language Action and Information Network (PLAIN) and the General Services Administration Technology Transformation Services.

## About the site

- This site uses [Jekyll](https://jekyllrb.com/docs/), a Ruby-based static site generator. For more information about using Jekyll and additional install instructions, refer to the [Jekyll documentation](http://jekyllrb.com/docs/home/).

- The site is built with the [U.S. Web Design Standards](https://standards.usa.gov), a set of reusable, high-quality components for modern websites. We're using the Web Design Standards [Jekyll theme](https://github.com/18F/uswds-jekyll) with some customized styles and [Font Awesome](http://fontawesome.io/license/) icons.

- The site is optimized for deployment on 18F's [Federalist](https://federalist.18f.gov) publishing service.

### Before you start

You will need to have the following installed on your machine before following the commands below:

- Ruby v2.7.1+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
- Fork this repo
- Clone the repo you just forked

### Basic setup

1. Install Jekyll and Bundler: `gem install bundler jekyll`
1. Install gem dependencies `bundle install`
1. Install node dependencies `npm install`

Notes for basic setup:

- For basic setup, root or sudo-level access (e.g., `sudo gem install bundler jekyll`) may be required. Enter sudo password when prompted.
- When running `npm install`, an `sha` key will be added to the kind-of dependency in the package-lock.json file. This can be committed to the forked repo but should not be merged with the parent repository. This key is unique to each user.

### Running the site locally

To run the site locally, from the project folder, run:

```
npm start
```

If all goes well, visit the site at `http://localhost:4000`.

Note that this method will rebuild the entire site every time you make a change to any file, however, the browser may need to be refreshed to see changes. If you want faster builds, you can use `bundle exec jekyll incrementalserve`, which comes with [some caveats](https://jekyllrb.com/docs/configuration/incremental-regeneration/), notably only changed files will be rebuilt. This means if you change a data file, HTML pages that use that data file won't be updated. Also, `bundle exec jekyll incrementalserve` may require an additional gem install.

## Accessibility tests

We follow the WCAG2AA standard, and one of the ways we check that we're following the right rules is through automated tools, like [**pa11y**](https://github.com/pa11y/pa11y/). For more info on the rules being tested checkout the [pa11y wiki](https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules).

### Running tests

To run a web accessibility test on digital.gov do the following:

1. Install and run the site locally following the `Running the site locally` instructions above. _Site must be running locally to perform the scan._

- If this is your first time running pa11y, then you'll need to run `npm install` to make sure pa11ly is installed.

2. In a separate terminal window, run `npm run test:pa11y` to initiate the accessibility checker.

_Note:_ Accessibility testing configuration is located in the .pa11yci file.

## Contributing

To provide feedback on plainlanguage.gov, follow this repository and [open an issue in the repo](https://github.com/GSA/plainlanguage.gov/issues/new).

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

