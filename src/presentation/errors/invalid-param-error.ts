export class InvalidParamError extends Error {
  contructor (paramName: string) {
    super.message = `Invalid param: ${paramName}`
    this.name = 'InvalidParamError'
  }
}
