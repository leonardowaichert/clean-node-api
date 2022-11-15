export class ServerError extends Error {
  contructor () {
    super.message = 'Internal server error'
    this.name = 'ServerError'
  }
}
