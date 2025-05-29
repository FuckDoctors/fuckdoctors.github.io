---
url: 'https://zhaobc.site/posts/theme/gitlab-contributors-plugin.md'
---
# Gitlab 贡献者插件

本插件用来显示 gitlab 作为版本管理的 vuepress-theme-hope 项目的贡献者。

## 初衷

公司领导想提高效率，征集经验集，工具集以方便大家使用，于是就用 vuepress-theme-hope 搭了个简单的知识库。
再配合 waline 加上了评论功能。

由于是内网环境，所以在公司的 gitlab 服务器上建了一个 git 仓库。
为了鼓励大家积极踊跃地分享，写了个 `GitlabContributors` 组件，在主页上显示贡献者头像。

后来，又在每个页面上写了一个当前页的贡献者组件 `PageGitlabContributors`。

再后来，又想加上多语言支持，然后就干脆做了个插件使用。

## 功能

* 根据 gitlab 项目 id，显示该项目所有的贡献者头像
* 根据每个页面的贡献者，显示 gitlab 头像

### 显示项目所有的贡献者

查阅了下 Gitlab API，发现可以通过项目 id 获取贡献者，但是默认是按页返回贡献者，而不是一次性返回全部贡献者，而且每页最多返回 100 条数据。

使用 Gitlab API 时，有时会需要 `PRIVATE_ACCESS_TOKEN`，需要自己生成一下。

拿到项目的所有贡献者后，再获取相应贡献者的头像，如果不是 Gitlab 系统里的用户的话，则显示贡献者名称。

### 显示当前页面的所有的贡献者

vuepress 内置了 git 插件，可以显示当前页的所有贡献者，然后再根据 email 去匹配 gitlab 用户，从而显示贡献者头像。

## 实现

目录结构：

```txt
└─gitlab-contributors
    ├─client
    │  │  config.ts
    │  │
    │  ├─components
    │  │      GitlabContributors.vue
    │  │      PageGitlabContributors.vue
    │  │
    │  ├─composables
    │  │      gitlab.ts
    │  │      index.ts
    │  │      utils.ts
    │  │
    │  └─styles
    │          contributors.scss
    │
    ├─node
    │      index.ts
    │      locales.ts
    │      options.ts
    │      plugins.ts
    │
    └─shared
            index.ts
            locales.ts
```

### 组件

::: code-tabs
@tab GitlabContributors.vue

```vue
<script setup>
import { onMounted, ref, watch } from 'vue'
import { useLocaleConfig } from 'vuepress-shared/client'

import { useContributors } from '../composables'

const props = defineProps({
  pid: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: false,
  },
  contributors: {
    type: Array,
    required: false,
    default: () => null,
  },
  isLoading: {
    type: Boolean,
    required: false,
  },
  isError: {
    type: Boolean,
    required: false,
  },
})

const contributorsRef = ref(props.contributors || [])
const isLoadingRef = ref(props.isLoading || true)
const isErrorRef = ref(props.isError || false)

const locale = useLocaleConfig(CONTRIBUTOR_LOCALES)

onMounted(() => {
  watch(
    props,
    () => {
      isLoadingRef.value = props.isLoading
      isErrorRef.value = props.isError

      if (props.contributors) {
        contributorsRef.value = props.contributors || []
      } else {
        useContributors(props.pid, props.path)
          .then(contris => (contributorsRef.value = contris))
          .catch(err => {
            console.error(err)
            isErrorRef.value = true
          })
          .finally(() => (isLoadingRef.value = false))
      }
    },
    { immediate: true }
  )
})
</script>

<template>
  <div class="contributors-container">
    <template v-if="isLoadingRef">
      <div class="loading">
        {{ locale.loadingText }}
      </div>
    </template>
    <template v-else>
      <template v-if="isErrorRef">
        <div class="error">
          {{ locale.errorText }}
        </div>
      </template>
      <template v-else>
        <template v-for="c in contributorsRef" :key="c.email">
          <a
            :href="c.web_url || `mailto:${c.email}`"
            class="contributor"
            :title="c.name"
          >
            <img v-if="c.avatar_url" :src="c.avatar_url" class="avatar" />
            <span v-else class="name">{{ c.name }}</span>
          </a>
        </template>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.contributors-container {
  text-align: center;

  .contributor {
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    margin: 5px;
    border-radius: 50%;
    text-decoration: none;

    .avatar {
      display: inline-block;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 50%;
    }

    .name {
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      justify-items: center;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border: 1px solid #f5f5f5;
      border-radius: 50%;
      background-color: rgb(221 221 221 / 90%);
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }
  }
}
</style>
```

@tab PageGitlabContributors.vue

```vue
<script setup>
import { ref } from 'vue'
import { useLocaleConfig } from 'vuepress-shared/client'

import { GITLAB_PROJECT_ID, usePageContributors } from '../composables'
import GitlabContributors from './GitlabContributors.vue'

import '../styles/contributors.scss'

const contributors = ref([])
const isLoading = ref(true)
const isError = ref(false)

const locale = useLocaleConfig(CONTRIBUTOR_LOCALES)

usePageContributors()
  .then(contris => {
    contributors.value = contris
  })
  .catch(err => {
    console.error(err)
    isError.value = true
  })
  .finally(() => (isLoading.value = false))
</script>

<template>
  <div class="page-contributors-container">
    <h2 id="page-contributors" class="page-contributors-title" tabindex="-1">
      <a class="header-anchor" href="#page-contributors" aria-hidden="true"
        >#</a
      >
      {{ locale.title }}
    </h2>

    <GitlabContributors
      :pid="GITLAB_PROJECT_ID"
      :contributors="contributors"
      :is-loading="isLoading"
      :is-error="isError"
    />
  </div>
</template>
```

:::

### 组合函数

::: code-tabs

@tab gitlab.ts

```ts
import { ComputedRef } from 'vue'

import { type GitContributor } from '@vuepress/plugin-git'
import { useContributors as useGitContributors } from 'vuepress-theme-hope/modules/info/composables/index'

import { type RequiredLocaleConfig } from 'vuepress-shared/client'

import { ContributorLocaleData } from '../../shared'

import { groupBy } from './utils'

declare const CONTRIBUTOR_PROJECT_ID: string
declare const CONTRIBUTOR_HOST: string
declare const CONTRIBUTOR_API: string
declare const CONTRIBUTOR_ACCESS_TOKEN: string
declare const CONTRIBUTOR_PAGE_COUNT: number
declare const COPYRIGHT_LOCALES: RequiredLocaleConfig<ContributorLocaleData>

export const GITLAB_PROJECT_ID = CONTRIBUTOR_PROJECT_ID
export const GITLAB_HOST = CONTRIBUTOR_HOST
export const GITLAB_API = `${GITLAB_HOST}/${CONTRIBUTOR_API}`
// gitlab 单页最多返回 100 个用户，即使设了 99999
const MAX_USER_COUNT = CONTRIBUTOR_PAGE_COUNT || 100

const PERSONAL_ACCESS_TOKEN = CONTRIBUTOR_ACCESS_TOKEN

export interface Contributor {
  id?: number
  username?: string
  name: string
  email: string
  avatar_url?: string
  web_url?: string
  commits: number
}

/**
 * 获取 Gitlab 所有用户
 * @returns Gitlab users
 */
export const useUsers = (page: number, per_page: number) => {
  // https://docs.gitlab.com/ee/api/users.html#list-users
  const p = page || 1
  const maxCount = per_page || MAX_USER_COUNT
  return fetch(`${GITLAB_API}/users?page=${p}&per_page=${maxCount}`, {
    method: 'GET',
    headers: {
      'PRIVATE-TOKEN': PERSONAL_ACCESS_TOKEN,
    },
  })
}

/**
 * 获取全部的用户
 * @returns users
 */
export const useAllUsers = async () => {
  let users = [] as any[]
  let startPage = 1

  // 按页获取，然后拼接起来
  let result: any[]
  do {
    result = await (await useUsers(startPage, MAX_USER_COUNT)).json()

    users = users.concat(result)
    startPage++
  } while (result.length === MAX_USER_COUNT)

  return users
}

/**
 * 获取指定项目的贡献者
 * @param id project id
 * @returns 指定项目的贡献者
 */
export const useRepositoryContributors = (id: string) => {
  // https://docs.gitlab.com/ee/api/repositories.html#contributors
  return fetch(
    `${GITLAB_API}/projects/${id}/repository/contributors?order_by=commits&sort=desc`,
    {
      method: 'GET',
    }
  )
}

/**
 * 获取库的提交
 * @param projectId project id
 * @param path The file path
 */
export const useRepositoryCommits = (projectId: string, path: string) => {
  // https://docs.gitlab.com/ee/api/commits.html#list-repository-commits
  let url = `${GITLAB_API}/projects/${projectId}/repository/commits`
  if (path) {
    url = `${url}?path=${encodeURIComponent(path)}`
  }

  return fetch(url, {
    method: 'GET',
  })
}

/**
 * 获取贡献者
 * @param projectId project id
 * @param path The file path
 */
export const useContributors = (projectId: string, path: string) => {
  return new Promise((resolve, reject) => {
    useAllUsers()
      .then(users => {
        const contributors: Contributor[] = []
        if (path) {
          useRepositoryCommits(projectId, path)
            .then(res => res.json())
            .then(commits => {
              const groupedCommits = groupBy(commits, 'committer_email')
              Object.keys(groupedCommits).forEach(k => {
                const tmpContri: Contributor = {
                  name: groupedCommits[k][0].committer_name,
                  username: groupedCommits[k][0].committer_name,
                  email: k,
                  commits: groupedCommits[k].length,
                }
                const user = users.find(
                  u =>
                    u.username === groupedCommits[k][0].committer_name &&
                    u.email === k
                )
                if (user) {
                  tmpContri.name = user.name
                  tmpContri.avatar_url = user.avatar_url
                  tmpContri.web_url = user.web_url
                }
                contributors.push(tmpContri)
              })

              return resolve(contributors.sort((a, b) => b.commits - a.commits))
            })
            .catch(err => reject(err))
        } else {
          useRepositoryContributors(projectId)
            .then(res => res.json())
            .then(contris => {
              contris.forEach(c => {
                const tmpContri: Contributor = {
                  name: c.name,
                  username: c.name,
                  email: c.email,
                  commits: c.commits,
                }
                const user = users.find(
                  u => u.username === c.name && u.email === c.email
                )
                if (user) {
                  tmpContri.name = user.name
                  tmpContri.avatar_url = user.avatar_url
                  tmpContri.web_url = user.web_url
                }
                contributors.push(tmpContri)
              })

              return resolve(contributors)
            })
            .catch(err => reject(err))
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 获取当前页的贡献者
 */
export const usePageContributors = () => {
  return new Promise((resolve, reject) => {
    const gitContributors = useGitContributors() as ComputedRef<
      null | GitContributor[]
    >
    if (gitContributors.value) {
      useAllUsers()
        .then(users => {
          const contributors: Contributor[] = []
          gitContributors
            .value!.sort((a, b) => b.commits - a.commits)
            .forEach(c => {
              const tmpContri: Contributor = {
                name: c.name,
                username: c.name,
                email: c.email,
                commits: c.commits,
              }
              const user = users.find(u => u.email === c.email)
              if (user) {
                tmpContri.name = user.name
                tmpContri.avatar_url = user.avatar_url
                tmpContri.web_url = user.web_url
              }
              contributors.push(tmpContri)
            })

          return resolve(contributors)
        })
        .catch(err => reject(err))
    } else {
      return resolve(null)
    }
  })
}
```

@tab utils.ts

```ts
export const groupBy = (arr: any[], key: string) => {
  if (arr) {
    const grouped = arr.reduce((group: any, obj: any) => {
      const data = obj[key]
      group[data] = group[data] ?? []
      group[data].push(obj)
      return group
    }, {})

    return grouped
  }

  return null
}
```

:::

### 样式

只是将默认的 contributors 隐藏掉。

```css
.vp-page-meta .contributors {
  display: none;
}
```

### 插件

::: code-tabs

@tab options.ts

```ts
import { type LocaleConfig, type Page } from '@vuepress/core'

import { ContributorLocaleData } from '../shared/locales'

export interface ContributorOptions {
  projectId: string
  host: string
  apiBase: string
  accessToken: string
  pageCount?: number
  locales?: LocaleConfig<ContributorLocaleData>
}
```

@tab plugins.ts

```ts
import { type Page, type PluginFunction } from '@vuepress/core'
import { type PageHeader, usePageData } from '@vuepress/client'
import { getDirname, path } from '@vuepress/utils'
import { getLocales, inferLocalePath } from 'vuepress-shared/node'

import { PLUGIN_NAME } from '../shared'
import { contributorLocales } from './locales'
import { type ContributorOptions } from './options'

const __dirname = getDirname(import.meta.url)

export const contributorPlugin =
  (options: ContributorOptions): PluginFunction =>
  app => {
    const locales = getLocales({
      app,
      name: PLUGIN_NAME,
      default: contributorLocales,
      config: options.locales,
    })

    return {
      name: PLUGIN_NAME,

      define: (): Record<string, unknown> => ({
        CONTRIBUTOR_PROJECT_ID: options.projectId,
        CONTRIBUTOR_HOST: options.host,
        CONTRIBUTOR_API: options.apiBase,
        CONTRIBUTOR_ACCESS_TOKEN: options.accessToken,
        CONTRIBUTOR_PAGE_COUNT: options.pageCount || 100,
        CONTRIBUTOR_LOCALES: locales,
      }),

      extendsPage: (page: Page): void => {
        const langPath = inferLocalePath(page.lang)
        const headerTitle = locales[langPath]
          ? locales[langPath].title
          : locales['/'].title

        if (page.headers) {
          page.headers.push({
            level: 2,
            title: headerTitle,
            slug: 'page-contributors',
            link: '#page-contributors',
            children: [],
          })
        }
      },

      clientConfigFile: path.resolve(__dirname, '../client/config.ts'),
    }
  }
```

@tab locales.ts

```ts
import { ContributorLocaleConfig } from '../shared/locales'

export const contributorLocales: ContributorLocaleConfig = {
  '/zh/': {
    title: '贡献者',
    loadingText: '努力加载中...',
    errorText: '加载失败，请稍后重试。',
  },

  '/en/': {
    title: 'Contributors',
    loadingText: 'Loading...',
    errorText: 'Error occurred, please retry it later.',
  },

  '/ja/': {
    title: '貢献者',
    loadingText: '処理中...',
    errorText: 'エラーが発生しました。リトライしてください。',
  },
}
```

:::
