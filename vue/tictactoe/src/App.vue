<template>
<Board :squares="squares"/>
<div id="app">
    <h1>{{ statusMessage }}</h1>
</div>
</template>

<script>
import Board from './components/Board.vue'
export default {
  name: 'App',
  data() {
    return {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  },
  methods: {
    handleClick(index) {
      if (this.calculateWinner(this.squares) || this.squares[index]) {
        return;
      }

      this.squares.splice(index, 1, this.xIsNext ? "X" : "O");
      this.xIsNext = !this.xIsNext;
    },
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }

      return null;
    },
  },
  components: {
    Board,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
