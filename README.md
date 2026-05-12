# Action Logger

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/action-logger/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.1.0-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/action-logger)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/action-logger.svg)](https://www.npmjs.com/package/@enso-ui/action-logger)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/action-logger)
[![Issues](https://img.shields.io/github/issues/enso-ui/action-logger.svg)](https://github.com/enso-ui/action-logger/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/action-logger.svg)](https://github.com/enso-ui/action-logger/pulls)

## Description

Action log table page for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/action-logger
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the action logs index page used by the system route group
- filters action logs by user, HTTP method, permission and creation date
- renders user avatars through the users package
- supports click-to-filter behavior on user avatars, method tags and permission tags
- colors method tags by REST intent: informational reads, successful creates, warnings for updates, and danger for deletes
- refreshes the permission filter after click-to-filter so server-side permission options resolve the selected value correctly
- integrates with the backend `actionLogMethods` enum and `actionLogs` table definition

## Usage

```js
import ActionLogsIndex from '@enso-ui/action-logger';
```

## API

### `Index`

Default export for the action logs table page.

Import: `@enso-ui/action-logger`

## Routes

### `system/actionLogs`

Route group:

- `system.actionLogs.index`

Page:

- `src/bulma/pages/actionLogs/Index.vue`

The page expects these backend sources:

- `system.actionLogs.initTable`
- `system.actionLogs.tableData`
- `system.actionLogs.exportExcel`
- `system.permissions.options`
- `administration.users.options`

The method filter uses the shared `actionLogMethods` enum store. The permission filter tracks permissions by `name`, matching the backend route-name storage used by the action logger.

## Companion Backend Package

- [`laravel-enso/action-logger`](https://github.com/laravel-enso/action-logger)

## Depends On

- [`@enso-ui/enums`](https://docs.laravel-enso.com/frontend/enums.html)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html)
- [`@enso-ui/users`](https://docs.laravel-enso.com/frontend/users.html)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/action-logger/blob/main/LICENSE)
