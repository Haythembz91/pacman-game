
document.addEventListener('DOMContentLoaded',()=>{
    let scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    let grid = document.querySelector('.grid')
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    let squares = []

    //Create board

    function createBoard (){
        for (let i = 0;i<layout.length;i++){
          let square = document.createElement('div')
            square.id=i
          grid.appendChild(square)
          squares.push(square)
            //layout the grid
            switch (layout[i]){
                case 0:
                    squares[i].classList.add('pac-dot')
                    break
                case 1:
                    squares[i].classList.add('wall')
                    break
                case 2:
                    squares[i].classList.add('ghost-lair')
                    break
                case 3:
                    squares[i].classList.add('power-pellet')
                    break
            }
        }
    }
    createBoard()

    // create characters
    // draw pac-man onto the board

    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')


    //move pac-man

    function movePacman (e){
        squares[pacmanCurrentIndex].classList.remove('pac-man')
        switch (e.key){
            case 'ArrowLeft':
                if(!squares[pacmanCurrentIndex-1].classList.contains('wall')) {
                    pacmanCurrentIndex--
                }
                else if(pacmanCurrentIndex===364){
                    pacmanCurrentIndex=391
                }
                break
            case 'ArrowRight':
                if(!squares[pacmanCurrentIndex+1].classList.contains('wall')) {
                    pacmanCurrentIndex++
                }
                else if(pacmanCurrentIndex===391){
                    pacmanCurrentIndex=364
                }
                break
            case 'ArrowUp':
                if(!squares[pacmanCurrentIndex-28].classList.contains('wall')) {
                    pacmanCurrentIndex-=28
                }
                break
            case 'ArrowDown':
                if(!squares[pacmanCurrentIndex+28].classList.contains('wall')&&
                    !squares[pacmanCurrentIndex+28].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex+=28
                }
                break
        }

        squares[pacmanCurrentIndex].classList.add('pac-man')
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')){
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
            score++
            scoreDisplay.innerHTML=score
        }
        else if (squares[pacmanCurrentIndex].classList.contains('power-pellet')){
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
            ghosts.forEach(ghost=>ghost.isScared=true)
            setTimeout(unscareGhost,10000)
            score+=10
            scoreDisplay.innerHTML=score
        }

        winCheck()
    }


    document.addEventListener('keyup',movePacman)

    function winCheck (){
        if (squares.every(item => !item.classList.contains('pac-dot'))){
            console.log('game over you win')
            ghosts.forEach(ghost=>clearInterval(ghost.timerId))
            document.removeEventListener('keyup',movePacman)
        }
    }

    class ghost {
        constructor(className,startIndex,speed) {
            this.className=className
            this.startIndex=startIndex
            this.speed=speed
            this.currentIndex=startIndex
            this.isScared = false
            this.timerId=NaN
        }
    }
    let ghosts = [new ghost('blinky',348,250),new ghost('pinky',376,400),
        new ghost('inky',351,300),new ghost ('clyde',379,400)]

    ghosts.forEach(item =>{squares[item.currentIndex].classList.add(item.className)
                            squares[item.currentIndex].classList.add('ghost')})

    //move ghosts
    const directions = [+1,-1,+28,-28]


    ghosts.forEach(ghost =>moveGhost(ghost))

    function moveGhost (ghost){
        ghost.timerId= setInterval(()=>{
            const direction = directions[Math.floor(Math.random()*directions.length)]
            console.log(direction)
            if(!squares[ghost.currentIndex+direction].classList.contains('wall')
            &&!squares[ghost.currentIndex+direction].classList.contains('ghost'))
            {
                squares[ghost.currentIndex].classList.remove('ghost')
                squares[ghost.currentIndex].classList.remove('scared-ghost')
                squares[ghost.currentIndex].classList.remove(ghost.className)
                ghost.currentIndex+=direction
                squares[ghost.currentIndex].classList.add('ghost')
                squares[ghost.currentIndex].classList.add(ghost.className)
            }
            if(ghost.isScared===true){
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }
            if(ghost.isScared===true && pacmanCurrentIndex===ghost.currentIndex){
                squares[ghost.currentIndex].classList.remove('ghost','scared-ghost',ghost.className)
                ghost.currentIndex=ghost.startIndex
                squares[ghost.currentIndex].classList.add(ghost.className,'ghost')
                score+=100
                score.innerHTML=score
            }
            gameOverCheck()
            },ghost.speed)
    }

    function unscareGhost(){
        ghosts.forEach(ghost=>ghost.isScared=false)
    }

    function gameOverCheck(){
        if (squares[pacmanCurrentIndex].classList.contains('ghost')&&
            !squares[pacmanCurrentIndex].classList.contains('scared-ghost')){
            console.log('game over')
            ghosts.forEach(ghost=>clearInterval(ghost.timerId))
            document.removeEventListener('keyup',movePacman)
        }

    }





})