import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
	static targets = ["title"]

  connect() {
		console.log("Hello Controller...")
  }

	greet() {
		this.titleTarget.textContent = "Hello"
		console.log(this.titleTarget)
	}
}
