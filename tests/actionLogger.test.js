import { describe, expect, test } from 'vitest';
import route from '../src/bulma/routes/system/actionLogs/index';

describe('@enso-ui/action-logger', () => {
    test('registers the action logs index route', () => {
        expect(route.name).toBe('system.actionLogs.index');
        expect(route.path).toBe('');
        expect(route.meta.title).toBe('Action Logs');
    });
});
