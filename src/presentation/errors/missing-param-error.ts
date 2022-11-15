export class MissingParamError extends Error {
  contructor (paramName: string) {
    super.message = `Missing param: ${paramName}`
    this.name = 'MissingParamError'
  }
}
