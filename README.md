# 🌎 www 

This repository tracks the sources for the [revela.io](https://www.revela.io) website.

# 🚧 Building and developing

* Install node (try using [`nvs`](https://github.com/jasongin/nvs)!)
* Clone this repository: `git clone git@github.com:reveladata/www`
* Navigate to the source directory: `cd www/source`
* Install build tools: `npm install`
* Launch the included dev server: `npm run dev`, (equivalently `npx gulp default`)
* Changes will live reload the page, changes to CSS are hot-reloaded.

# ⚗️ Contibuting

* Check out a new branch `git checkout -b dev/<my_changes>`
* Follow the above to launch a local server then make changes to your local copy
* When you're satisfied, build your changes for github pages: `npm run build`, (equivalently `npx gulp build`). Make sure you run this command from the "source" directory or lower. 
* Commit then push your work: `git push -u origin dev/<my_changes>`
* Create a PR against the **staging** branch, and your changes will be put up for review and displayed on [revela.surge.sh](https://revela.surge.sh)
