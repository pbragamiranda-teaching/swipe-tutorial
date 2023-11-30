import { Controller } from "@hotwired/stimulus"
import Hammer from "hammerjs"

// Connects to data-controller="swipe"
export default class extends Controller {
  static targets = ["swipeCard"]
  connect() {

    this.swipeCardTargets.forEach((card) => {
      const hammertime = new Hammer(card);

      hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
      hammertime.get('pinch').set({ enable: true });

      hammertime.on('pan', (event) => {
        card.classList.add('moving')
        card.style.transform = "translate(" + event.deltaX + "px, " + event.deltaY + "px)";
        console.log(event);

      })

      hammertime.on('panend', (event) => {
        card.classList.remove('moving')
        card.style.transform = '';
        console.log(event);
        // if (event.deltaX > 80) {
        // } elsif (event.deltaX < 80 )
      })

    });
  }
}
