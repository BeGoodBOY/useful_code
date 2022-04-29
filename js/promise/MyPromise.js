class MyPromise {
	constructor(executor) {
		executor(this.resolve, this.reject)
	}
	resolve
}