// post /api/user

import { useUserData } from '~/composables/user'

const { userData } = useUserData()
const users = userData()
console.log(users)

export default defineEventHandler(() => {
  return {
    status: 200,
    users
  }
})
