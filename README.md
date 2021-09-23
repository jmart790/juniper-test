# juniper-test

This project simulates a few small features of an e-commerce web app. Mainly viewing a list of products, vieing more details, navigating to product page etc.  

Check out this project in real life [here 🤓](https://sleepy-agnesi-cd1ab1.netlify.app/#/)  

Styling is done manually with SASS, with defined variables with partials and imported vie the main.scss file.  

The component structure is heavely influenced by Brad Frost's [Atomic Design System](https://atomicdesign.bradfrost.com/chapter-2/#:~:text=Atomic%20design%20is%20atoms%2C%20molecules,parts%20at%20the%20same%20time.). The idea being we organize our components by scope and size building upon one another.  

The icons are managed by [IcoMoon](https://icomoon.io/) which converts flat svgs into font. You can easily update this icon set by importing the selection.json file in the assets folder into Icomoon's webapp.

This project also uses Vuex and VueRouter very lightly and was used to promote scalability. Although if the store had any more data I would recemend using namespaced modules.

Lastly there is an eslintrc file that dictates the linting for this application to emprove consistency.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

The project will most likely run on <http://localhost:8080/>  unless specified other wise or that port is busy.  

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### View Dependecies, peroformance, and more

```
vue ui
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
