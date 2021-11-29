# Vue CLI

[https://cli.vuejs.org](https://cli.vuejs.org)

## Installation

> npm install -g @vue/cli

## Installation with Vue Server & Build

> npm install -g @vue/cli @vue/cli-service-global

# Vue Serve

> vue serve

> vue serve <name>.vue

```
Usage: serve [options] [entry]

serve a .js or .vue file in development mode with zero config


Options:

  -o, --open         Open browser
  -c, --copy         Copy local url to clipboard
  -p, --port <port>  Port used by the server (default: 8080 or next available port)
  -h, --help         Output usage information
```

# Vue Build

> vue build

> vue build <name>.vue

```
Usage: build [options] [entry]

build a .js or .vue file in production mode with zero config


Options:

  -t, --target <target>  Build target (app | lib | wc | wc-async, default: app)
  -n, --name <name>      name for lib or web-component (default: entry filename)
  -d, --dest <dir>       output directory (default: dist)
  -h, --help             output usage information
```

## Create Project

> vue create <project-name>

```
Usage: create [options] <app-name>

create a new project powered by vue-cli-service


Options:

  -p, --preset <presetName>       Skip prompts and use saved or remote preset
  -d, --default                   Skip prompts and use default preset
  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset
  -m, --packageManager <command>  Use specified npm client when installing dependencies
  -r, --registry <url>            Use specified npm registry when installing dependencies
  -g, --git [message|false]       Force / skip git initialization, optionally specify initial commit message
  -n, --no-git                    Skip git initialization
  -f, --force                     Overwrite target directory if it exists
  --merge                         Merge target directory if it exists
  -c, --clone                     Use git clone when fetching remote preset
  -x, --proxy                     Use specified proxy when creating project
  -b, --bare                      Scaffold project without beginner instructions
  --skipGetStarted                Skip displaying "Get started" instructions
  -h, --help                      Output usage information
```

## Using GUI

> vue ui

## Plugins

> vue add <name>

## Local Plugin

> `package.json` | `vuePlugins.service`

> Service Plugin

```json
{
  "vuePlugins": {
    "service": ["my-commands.js"]
  }
}
```

> UI Plugin

```json
{
  "vuePlugins": {
    "ui": ["my-ui.js"]
  }
}
```

## Presets

> `~/.vuerc`

```json
{
  "useConfigFiles": true,
  "cssPreprocessor": "sass",
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-eslint": {
      "config": "airbnb",
      "lintOn": ["save", "commit"]
    },
    "@vue/cli-plugin-router": {},
    "@vue/cli-plugin-vuex": {}
  }
}
```

## Preset Plugin Configuration

> Versioning

```json
{
  "plugins": {
    "@vue/cli-plugin-eslint": {
      "version": "^3.0.0",
      // ... other options for this plugin
    }
  }
}
```

> Prompt

```json
{
  "plugins": {
    "@vue/cli-plugin-eslint": {
      // let the users pick their own ESLint config
      "prompts": true
    }
  }
}
```

> From Git

	vue create --preset username/repo my-project

> From Local

	vue create --preset ./my-preset my-project

## Vue Cli Service

> npx vue-cli-service serve

```
Usage: vue-cli-service serve [options] [entry]

Options:

  --open         open browser on server start
  --copy         copy url to clipboard on server start
  --mode         specify env mode (default: development)
  --host         specify host (default: 0.0.0.0)
  --port         specify port (default: 8080)
  --https        use https (default: false)
  --public       specify the public network URL for the HMR client
  --skip-plugins comma-separated list of plugin names to skip for this run
```

> npx vue-cli-service build

```
Usage: vue-cli-service build [options] [entry|pattern]

Options:

  --mode         specify env mode (default: production)
  --dest         specify output directory (default: dist)
  --modern       build app targeting modern browsers with auto fallback
  --no-unsafe-inline build app without introducing inline scripts
  --target       app | lib | wc | wc-async (default: app)
  --formats      list of output formats for library builds (default: commonjs,umd,umd-min)
  --inline-vue   include the Vue module in the final bundle of library or web component target
  --name         name for lib or web-component mode (default: "name" in package.json or entry filename)
  --filename     file name for output, only usable for 'lib' target (default: value of --name),
  --no-clean     do not remove the dist directory before building the project
  --report       generate report.html to help analyze bundle content
  --report-json  generate report.json to help analyze bundle content
  --skip-plugins comma-separated list of plugin names to skip for this run
  --watch        watch for changes
```

> `package.json`

```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  }
}
```

## Webpack

> `vue.config.js`

```js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
```

> Conditional config

```js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
}
```

## Vue Inspection

> vue inspect

> vue inspect --mode production

> vue inspect --rules

> vue inspect --rule vue

> vue inspect --plugins

> vue inspect --plugin html

## Modes

type | mode
--- | ---
`development` | `vue-cli-service serve`
`test` | `vue-cli-service test:unit`
`production` | `vue-cli-service build` & `vue-cli-service test:e2e`

## Environment Variables

	.env                # loaded in all cases
	.env.local          # loaded in all cases, ignored by git
	.env.[mode]         # only loaded in specified mode
	.env.[mode].local   # only loaded in specified mode, ignored by git

## VUE_APP_* Rule

> `.env`

```
VUE_APP_<NAME>=<value>
```

> Using into app

```js
console.log(process.env.VUE_APP_<NAME>) 
// ~ console.log("<value>")
```

> `vue.config.js`

```js
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // config
}
```

---

[![Alan Badillo Salas](https://avatars.githubusercontent.com/u/79223578?s=40&v=4 "Alan Badillo Salas")](https://github.com/dragonnomada) Por [Alan Badillo Salas](https://github.com/dragonnomada)
