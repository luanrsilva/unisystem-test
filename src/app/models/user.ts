import { Company } from "./company"

export interface User {
  fullName: string,
  email: string,
  password: string
  company: Company
}
