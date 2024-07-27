# 2048 Game

Welcome to the 2048 Game repository!

**2048** is a popular puzzle game where the objective is to combine numbered tiles on a `4x4` grid to create a tile with the number `2048`.

Each cell can either be empty or contain a number that is a power of `2`, starting from `2` and progressing through `4`, `8`, `16`, ..., up to the ultimate goal of `2048`. Using keyboard arrows, the player can move all numbers in four directions — `up`, `down`, `left`, and `right`. When two tiles with the same number touch, they merge into one, doubling the value. The score increases after each move, calculated as the sum of all merged cells. After each move, either `2` or `4` appears randomly in an empty cell, with a 10% chance of the appearance being `4`.

If no more moves are possible, a game over message is displayed. Victory is achieved when the player successfully reaches the `2048` tile, and a win message is shown.

Success in **2048** demands strategic planning and efficient tile management to achieve the highest score and reach the desired `2048` tile.

![Preview](./src/images/reference.png)

## Technologies Used

This game was developed using HTML, SCSS, and JavaScript:

1. **HTML** provides the structure of the game interface.
2. **SCSS** is utilized for styling the game elements, including cells, to create a visually appealing design and an intuitive user interface.
3. **JavaScript** is used for implementing game mechanics, logic, and user interaction. JavaScript controls tile movements, merges, score calculation, and manages game state, including victory condition and game over scenario.

This combination of technologies ensures an engaging and interactive gaming experience for the player.

## Play the Game

To play the game, please visit the [DEMO LINK](https://yuriiyepikhov.github.io/2048-game/) here.

## Running the Project Locally

To run this project locally, follow these steps:

1. **Fork the Repository**:
   Click the **Fork** button in the top right corner of [this page](https://github.com/yuriiyepikhov/2048-game) to create your copy of the repository on GitHub.

2. **Clone the Repository**:
   Open your terminal, navigate to the directory where you want to store the project, and clone your copy of the repository into that directory:

```
mkdir 2048-game
cd 2048-game
git clone https://github.com/your-username/2048-game.git
```

3. **Open in Code Editor**:
   Open the project in your code editor (for example, Visual Studio Code):

```
code 2048-game
```

4. **Install Dependencies**:
   Install the necessary dependencies using **npm**:

```
npm install
```

5. **Start the Project**:
   Start the project locally on your device:

```
npm start
```

6. **View in Browser**:
   Once the project has started, open your web browser and go to http://localhost:8080/ (or another port specified in the console output) to view the 2048 Game.

These steps will allow you to run the project locally and make modifications as needed.
