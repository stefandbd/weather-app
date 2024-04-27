### Table of Contents

- [App Configuration](#appconfig)
  - [How to run](#howtorun)
  - [VS Settings](#vssettings)
  - [Structure](#structure)
  - [Naming Conventions](#naming)
- [Theming](#theming)
- [Navigation](#navigation)
- [Tasks](#tasks)
- [Todos](#todos)

<a name="appconfig"/>

# Credex Mobile App

This project was bootstrapped with

```sh
npx react-native@latest init Credex
```

<a name="howtorun"/>

### How to run

From your terminal run:

```sh
yarn
cd ios && pod install
```

After that from project root run:

```sh
yarn start
```

<a name="vssettings"/>

### Recommended VS Settings

<details>
  <summary>Expand...</summary>
  
```
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "eslint.alwaysShowStatus": true,
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true,
  
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },
    "[javascript]": {
        "editor.formatOnSave": false
    }
  }
```
</details>

<a name="structure"/>

### Structure

App's entry point is index.tsx which point to /src/App.tsx.
The folders structure inside src/ is the following:

- assets (for images etc)
- components (holding each component in its folder)
- hooks (for custom hooks)
- httpclient (for state management & queries)
- navigation (navigation related components)
- screens (each screen in its own folder)
- theming (theme related files & provider)
- translations (translations logic & jsons)
- types (global types here)
- utils (helper functions)

<a name="naming"/>

### Naming conventions

- **Components** will be named with capitalized letters. **(Letter case-separated)**
- **Styles** are kept in separate files (but same folder) and named as screen-name.style.ts or ComponentName.style.ts
- **Screens** follow the format of **kebab-case**: first-screen.tsx
- **Functions** follow the format of **lower camelCase**: onSendButtonClicked().
- **Variables** depending on the purpose can be named simply in **lower camelCase** or **snake_case**.
- **Arrays** should be in **SCREAMING_SNAKE_CASE**

```sh
const MY_ARRAY = [];
const credexApp = '';
const weekly_pay = hours_worked * hourly_pay_rate;
```

<a name="theming"/>

# Theming

Since we are using **styled-components**, there is a Theme provider created that encapsulated the whole app.
And based on the light or dark theme, we have the lightTheme.ts and darkTheme.ts with different colors.
Example of usage in a styled component:

```sh
export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 48px;
  font-family: ${Fonts.MavenProBold};
`;
```

Fonts, Sizes and Constants are also there used for general/global usage.

<a name="navigation"/>

# Navigation

Using react-navigation v6.
The main navigator, the root navigator has only the bottom tabs navigator in it.
Each bottom item is its own stack navigator that can include other screens.

```sh
RootNavigator
  BottomTabsNavigator
    FirstStackNavigator
      ScreenA
      ScreenB
    SecondStackNavigator
      ScreenC
      ScreenD
...
```

<a name="tasks"/>

# Tasks

- Fetching with react-query 10 alerts from weather API, since it doesn't have pagination, or limit query, or end/start time queries don't work properly also.
- For the 10 alerts, we are waiting the promises for all to fetch a random blurred image.
- UI for weather main page.
- Fetch alert by id.
- UI for the details of the alert.
- Promise all for each affected zone from each alert to be able to show the name.
- Description & Intruction are limited to two rows, and animated to expand/collapse on click.
- Top image from the alert details page, has the longpress + drag & drop handlers logic so it can be moved anywhere in that screen.
- Loaders for both pages to wait for the API results.
- Error handling for both pages.

<a name="todos"/>

# Todos

- Improve UI
- Use react-native-fast-image for better performance.
- API with pagination so we can implement proper infinite scroll list with an expected performant behaviour.
- Splashscreen & app icon
- More to come...
