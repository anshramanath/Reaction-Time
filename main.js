class ReactionTime {
    constructor() {
        this.squares = document.querySelectorAll(".cell")
        this.play = document.querySelector(".play")
        this.time = document.querySelector(".time")
        this.interval = null
        
        this.seconds = 0

        this.play.addEventListener('click', () => {
            this.startGame()
        })
    }

    startGame() {
        this.lightUp()

        this.squares.forEach(square => {
            square.addEventListener("click", () => {
                this.isCorrect(square)
            })
        })

        this.startTimer()
    }

    lightUp() {
        const xCord = Math.floor(Math.random() * (4))
        const yCord = Math.floor(Math.random() * (4))
        
        const cords = String(xCord) + String(yCord)
    
        document.getElementById(cords).setAttribute("class", "cell light")
    }

    startTimer() {
        this.interval = setInterval(() => {
            this.seconds++
            this.updateTime()
        }, 1000)
    }

    updateTime() {
        this.time.textContent = this.seconds.toString().padStart(2, '0')
    }

    isCorrect(square) {
        console.log("hi")
        if(square.getAttribute("class") == "cell light") {
            clearInterval(this.interval)
            square.setAttribute("class", "cell")
            alert("Took you " + this.seconds + " seconds!")
            this.seconds = 0
            this.updateTime()
        }
    }
}

new ReactionTime()