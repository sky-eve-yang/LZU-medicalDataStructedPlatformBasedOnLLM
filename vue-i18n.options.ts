export default defineI18nConfig(nuxt => ({
  numberFormats: {

    en: {
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      short: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      percent: {
        style: 'percent',
        minimumFractionDigits: 2,
        useGrouping: false
      },
      currency: {
        style: 'currency',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: 'USD'
      }
    },
    de: {
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      short: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      percent: {
        style: 'percent',
        minimumFractionDigits: 2,
        useGrouping: false
      },
      currency: {
        style: 'currency',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: 'EUR'
      }
    },
    zh: {
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      short: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      percent: {
        style: 'percent',
        minimumFractionDigits: 2,
        useGrouping: false
      },
      currency: {
        style: 'currency',
        currency: 'CNY', // 人民币
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  },
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      },
      rangeYear: {
        year: 'numeric'
      },
      rangeMonth: {
        month: '2-digit'
      },
      rangeDay: {
        day: '2-digit'
      },
      long: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    },
    de: {
      short: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      },
      long: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      },
      rangeYear: {
        year: 'numeric'
      },
      rangeMonth: {
        month: '2-digit'
      },
      rangeDay: {
        day: '2-digit'
      }
    },
    zh: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long', // 显示星期
        hour: 'numeric',
        minute: 'numeric'
      },
      rangeYear: {
        year: 'numeric'
      },
      rangeMonth: {
        year: 'numeric',
        month: 'short'
      },
      rangeDay: {
        month: 'short',
        day: 'numeric'
      }
    }
  }
}))
