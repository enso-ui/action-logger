<template>
    <div class="action-logs-wrapper">
        <div class="columns is-centered is-multiline">
            <div class="column is-narrow">
                <EnsoSelectFilter class="box user"
                    compact
                    source="administration.users.options"
                    label="person.name"
                    :name="i18n('User')"
                    :placeholder="i18n('User')"
                    v-model="filters.action_logs.user_id"/>
            </div>
            <div class="column is-narrow">
                <EnsoSelectFilter class="box method"
                    compact
                    :options="enumStore.enums.actionLogMethods._select()"
                    :placeholder="i18n('Method')"
                    v-model="filters.action_logs.method"/>
            </div>
            <div class="column is-narrow">
                <EnsoSelectFilter class="box permission"
                    compact
                    source="system.permissions.options"
                    track-by="name"
                    label="name"
                    :name="i18n('Permission')"
                    :placeholder="i18n('Permission')"
                    v-model="filters.action_logs.route"
                    ref="permissionFilter"/>
            </div>
            <div class="column is-narrow">
                <EnsoDateFilter class="box"
                    compact
                    v-model:filter="dateFilter"
                    v-model:interval="intervals.action_logs.created_at"/>
            </div>
        </div>
        <EnsoTable class="box p-0"
            v-model:filters="filters"
            :intervals="intervals"
            :filter-version="1"
            id="actionLogs">
            <template #user="{ row }">
                <span class="is-inline-flex is-clickable"
                    @click="filters.action_logs.user_id = row.user.id"
                    v-if="row.user">
                    <Avatar class="is-24x24"
                        tooltip
                        :user="row.user"/>
                </span>
            </template>
            <template #method="{ column, row }">
                <span class="tag is-clickable"
                    :class="cssClass(row.method)"
                    @click="filters.action_logs.method = row.method">
                    {{ column.enum._get(row.method) }}
                </span>
            </template>
            <template #permission="{ row }">
                <span class="tag is-dark is-clickable"
                    @click="selectPermission(row.permission.name)"
                    v-if="row.permission">
                    {{ row.permission.name }}
                </span>
            </template>
        </EnsoTable>
    </div>
</template>

<script setup>
import { inject, nextTick, reactive, ref } from 'vue';
import { EnsoDateFilter, EnsoSelectFilter } from '@enso-ui/filters/bulma';
import { enums as useEnumStore } from '@enso-ui/enums/src/pinia/enums';
import { EnsoTable } from '@enso-ui/tables/bulma';
import Avatar from '@enso-ui/users/src/bulma/pages/users/components/Avatar.vue';

const i18n = inject('i18n');
const enumStore = useEnumStore();

const dateFilter = ref('all');
const permissionFilter = ref(null);

const filters = ref({
    action_logs: {
        user_id: null,
        method: null,
        route: null,
    },
});

const intervals = reactive({
    action_logs: {
        created_at: {
            max: null,
            min: null,
        },
    },
});

const cssClass = method => {
    switch (`${method}`) {
    case enumStore.enums.actionLogMethods.POST:
        return 'is-success';
    case enumStore.enums.actionLogMethods.PATCH:
    case enumStore.enums.actionLogMethods.PUT:
        return 'is-warning';
    case enumStore.enums.actionLogMethods.DELETE:
        return 'is-danger';
    case enumStore.enums.actionLogMethods.GET:
    case enumStore.enums.actionLogMethods.OPTIONS:
    case enumStore.enums.actionLogMethods.HEAD:
        return 'is-info';
    default:
        return null;
    }
};

const selectPermission = permission => {
    filters.value.action_logs.route = permission;
    nextTick(() => permissionFilter.value.fetch());
};
</script>

<style lang="scss">
.action-logs-wrapper {
    .select-filter.user {
        width: 18em;
    }

    .select-filter.method {
        width: 12em;
    }

    .select-filter.permission {
        width: 24em;
    }
}
</style>
