import React from 'react'

import '../../../Fontello/fontello-30e493fd/css/fontello.css'

const DashBoard = () => {
    return (
        <main className="dashboard">
            <div className="tile ship">
                <a href="https://michalsiwiec.github.io/Ship/" target="_blank">
                    <i class="icon-search"></i>
                </a>
            </div>

            <div className="tile quiz">
                <a href="https://michalsiwiec.github.io/Quiz/quiz.html" target="_blank">
                    <i class="icon-search"></i>
                </a>
            </div>

            <div className="tile hangman">
                <a href="https://michalsiwiec.github.io/hangman/" target="_blank">
                    <i class="icon-search"></i>
                </a>
            </div>

            <div className="tile breaking-bad">
                <a href="https://infinite-chamber-18351.herokuapp.com/" target="_blank">
                    <i class="icon-search"></i>
                </a>
            </div>

            <div className="tile kaufland">
                <a href="https://immense-ravine-66633.herokuapp.com/home/Offer/" target="_blank">
                    <i class="icon-search"></i>
                </a>
            </div>

            <div className="tile sokoban">
                    <i class="icon-search" onClick={() => {
                        const response = window.confirm(`Niestety nie udało się udostępnić tego projektu ze względu na jego strukturę, do zapoznania się z zawartością zapraszam do publicznego repozytorium które znajduję się pod adresem: \n https://github.com/michalSiwiec/Sokoban \n\n Czy chcesz przejść do repozytorium?`)
                        
                        if(response)
                            window.open('https://github.com/michalSiwiec/Sokoban','_blank');
                    }}></i>
            </div>
      </main>
    )
}

export default DashBoard
