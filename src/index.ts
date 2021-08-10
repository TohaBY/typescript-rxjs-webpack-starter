import { of, map } from 'rxjs'

const welcome = of('Welcome to TypScript world').pipe(
  map((x) => `${x} powered with RxJS!`)
)

let welcomeContainer: HTMLElement | null =
  document.getElementById('welcomee-container')

welcome.subscribe((val) => {
  if (welcomeContainer) {
    welcomeContainer.innerHTML = val
  }
})
