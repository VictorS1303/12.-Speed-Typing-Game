const difficultySelect = document.getElementById('difficulty_select')
const timeCounterNumber = document.getElementById('time_counter_number')
const scoreCounterNumber = document.getElementById('score_counter_number')
const wordInput = document.getElementById('word_input')
const finalScoreNumber = document.getElementById('final_score_number')

let extraTime = 0


// EVENT LISTENERS //
difficultySelect.addEventListener('change', changeDifficulty)


// FUNCTIONS //

// Change Difficulty
function changeDifficulty()
{
    const selectedDifficulty = difficultySelect[difficultySelect.selectedIndex].text

    switch (selectedDifficulty)
    {
        case 'Easy':
            easyMode()
            break

        case 'Medium':
            mediumMode()
            break

        case 'Hard':
            hardMode()
            break
    }
}

// Easy Mode
function easyMode()
{
    const typeWord = document.getElementById('type_word')

    typeWord.textContent = generateRandomEasyWord()
}

// Medium Mode
function mediumMode()
{
    const typeWord = document.getElementById('type_word')

    typeWord.textContent = generateRandomMediumWord()
}

// Hard Mode
function hardMode()
{
    const typeWord = document.getElementById('type_word')

    typeWord.textContent = generateRandomHardWord()
}


// Generate Random Easy Word
function generateRandomEasyWord()
{
    const easyWords = ['yes', 'dog', 'ice', 'moon', 'car', 'bike', 'life', 'time']
    const randomEasyWord = easyWords[Math.floor(Math.random() * easyWords.length)]
    return randomEasyWord
}

// Generate Random Medium Word
function generateRandomMediumWord()
{
    const mediumWords = ['hello', 'super', 'train', 'pencil', 'screen', 'charge', 'poster', 'night']
    const randomMediumWord = mediumWords[Math.floor(Math.random() * mediumWords.length)]
    return randomMediumWord
}

// Generate Random Hard Word
function generateRandomHardWord()
{
    const hardWords = ['scissors', 'javascript', 'camping', 'clothes', 'speaker', 'curtains', 'difficulty', 'workouts']
    const randomHardWord = hardWords[Math.floor(Math.random() * hardWords.length)]
    return randomHardWord
}
