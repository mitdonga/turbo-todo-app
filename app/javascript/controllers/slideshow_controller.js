import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slideshow"
export default class extends Controller {
	static targets = [ "slide", "slidesContainer", "previousBtn", "nextBtn" ];
	static values = {index: {type: Number, default: 1}};

	async initialize() {
		await this.loadQuotes();
	}

	connect() {
		console.log("Connected to Slideshow Controller..")
	}

	next(){
		this.indexValue++;
	}

	previous() {
		this.indexValue--;
	}

	indexValueChanged(){
		this.showCurrentSlide()
	}

	loadQuotes() {
		return new Promise(async(resolve, reject) => {
			try {
				const response = await fetch("https://type.fit/api/quotes")
				const data = await response.json();

				const htmlString = data.map(quote => `<h3 data-slideshow-target="slide">${quote.text} - <small>${quote.author}</small></h3>`).join('');
				this.slidesContainerTarget.innerHTML = htmlString;

				this.maxIndex = data.length - 1;
				this.showCurrentSlide();
				resolve()
			} catch (err){
				reject(err)
			}
		})
	}

  showCurrentSlide() {
		this.slideTargets.forEach((element, index) => {
			element.hidden = index !== this.indexValue;			
		})

		if (this.indexValue >= this.maxIndex)
			this.nextBtnTarget.disabled = true;
		else
			this.nextBtnTarget.disabled = false;
		

		if (this.indexValue <= 0)
			this.previousBtnTarget.disabled = true;
		else
			this.previousBtnTarget.disabled = false;
  }

	disconnect(){
		console.log("Disconnect from Slideshow Controller..")
	}
}
