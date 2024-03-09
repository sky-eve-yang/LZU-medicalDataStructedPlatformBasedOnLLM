<script setup lang="ts">
import { FormKitSchema } from '@formkit/vue'
import { ref, reactive } from 'vue'

// datatable 部分 开始
import { FilterMatchMode } from 'primevue/api'

const { tableData, filters, dataTableRef, exportCSV } = usePrimeDataTable()

// datatable 部分 结束

const modelOptions = ref([
  { label: 'ChatGPT4', value: 1 },
  { label: '文心一言4', value: 2 },
  { label: 'MindSpore', value: 3 },
  { label: '华驼', value: 4 }
])

const schemaHistoryOptions = ref([
  { label: '肝脏肿瘤的提取 schema', value: 'schema Id1' },
  { label: '胃部肿瘤的提取 schema', value: 'schema Id2' },
  { label: '眼部疾病提取 schema', value: 'schema Id3' },
])

const { d, t, n, locale, locales, setLocale } = useI18n()
const { data: userList } = await useFetch('/api/user')
console.log(userList.value.users)

const inputToTransfer = ref({})

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>

<template>
  <div class="surface-0 text-center">
    <FormKit
      id="form"
      v-model="inputToTransfer"
      type="form"
      :submit-attrs="{
        inputClass: 'p-button p-component',
        wrapperClass: '',
        outerClass: '',
      }"
      @submit="submitHandler"
    >
      <div
        class="flex flex-row justify-between w-full"
        style="height: calc(100vh - 9rem)"
      >
        <div class="w-68% h-100%">
          <div class="flex flex-col justify-between h-100%">
            <!-- 顶部介绍栏 -->
            <div class="h-10% text-left">
              <div class="">{{ t('welcome.hello') }}, <span class="text-blue">{{ userList.users[1].username }}</span></div>
              <div class="mt-4 text-gray text-sm"> {{ t('welcome.intro') }} </div>
            </div>
            <!-- 转换卡片 & 转换记录卡片 -->
            <div class="flex flex-row justify-between h-50%">
              <!-- 待转换文本区域 -->
              <div class="w-68%">
                <div class="transfer-title h-10% text-left font-bold">
                  {{ t("section.to_transfer.title") }}
                </div>
                <div
                  class="card flex flex-row justify-between"
                  style="height: calc(90% - 2rem)"
                >
                  <div class="w-80% transfer-input">
                    <FormKit
                      type="primeTextarea"
                      :name="t('section.to_transfer.formkit_name')"
                      :rows="14"
                      :placeholder="t('section.to_transfer.placeholder')"
                      validation="required"
                    />
                  </div>
                  <div class="w-20% transfer-button-area">
                    <Button :label="t('section.to_transfer.button.generate')" @click="transfer" />
                  </div>
                </div>
              </div>
              <!-- 转换记录区域 -->
              <div class="w-30%" style="margin-bottom: 2rem">
                <div class="transfer-title h-10% text-left font-bold">
                  {{ t("section.transfer_record.title") }}
                </div>
                <div class="card flex flex-col justify-between h-90%">
                  <div class="w-100% transfer-record">
                    <div class="w-100% transfer-record">
                      <pre>{{ inputToTransfer }}</pre>
                    </div>
                  </div>
                  <div class="w-100% transfer-button-area">
                    <Button class="w-100%" :label="t('section.transfer_record.button.save')" @click="saveTransferRecord" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 转换结果表格 -->
            <div class="h-40%">
              <div class="transfer-title h-10% text-left font-bold">
                {{ t("section.transfer_result.title") }}
              </div>
              <div class="card flex flex-col justify-between h-90%">
                <div class="w-100% h-100% transfer-result">
                  <DataTable :value="userList.users" striped-rows>
                    <Column field="id" header="Name" />
                    <Column field="username" header="Email" />
                    <Column field="password" header="Date" />
                    <!-- 根据你的数据结构添加更多列 -->
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-28% h-100%">
          <div class="font-bold text-left text-lg">
            {{ t("section.setting.title") }}
          </div>
          <div class="formkit-container setting-schema-current mt-4">
            <FormKit
              type="primeTextarea"
              :label="t('section.setting.schema_current.title')"
              :name="t('section.setting.schema_current.formkit_name')"
              :rows="10"
              :placeholder="t('section.setting.schema_current.placeholder[0]')"
              validation="required"
              :submit-attrs="{
                inputClass: 'p-button p-component',
                wrapperClass: '',
                outerClass: '',
              }"
            />
            <Button class="w-100%" :label="t('section.setting.schema_current.button.save')" @click="exportCSV" />
          </div>
          <div class="formkit-container setting-schema-history mt-12 h-25%">
            <FormKit
              type="primeDropdown"
              :options="schemaHistoryOptions"
              option-label="label"
              option-value="value"
              :label="t('section.setting.schema_history.title')"
              :name="t('section.setting.schema_history.formkit_name')"
              :rows="14"
              :placeholder="t('section.setting.schema_history.placeholder')"
              validation="required"
            />
          </div>
          <div class="formkit-container setting-model mt-4">
            <FormKit
              type="primeDropdown"
              :options="modelOptions"
              option-label="label"
              option-value="value"
              :label="t('section.setting.model.title')"
              :name="t('section.setting.model.formkit_name')"
              :rows="14"
              :placeholder="t('section.setting.model.placeholder')"
              validation="required"
            />
          </div>
        </div>
      </div>
    </FormKit>
  </div>
</template>

<style scoped>
.formkit-container {
  text-align: left;
}
</style>

function useFetch(arg0: string) { throw new Error('Function not implemented.') }
