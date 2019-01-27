/*
 * #1
 * Перепешите эту функцию используя "стрелки"
 */
{
  function sum(a, b) {
    return a + b
  }
}

/*
 * #2
 * Перепешите эту функцию используя "стрелки"
 */
{
  function num(a) {
    return a
  }
}

/*
 * #3
 * Чем отличаются эти функции? Почему первая функция написана не верно?
 */
{
  let count = {
    id: 42,
    counter: function counter() {
      setTimeout(function() {
        console.log(this.id)
      }, 1000)
    },
  }

  let count = {
    id: 42,
    counter: function counter() {
      setTimeout(() => {
        console.log(this.id)
      }, 1000)
    },
  }
}

/*
 * #4
 * Почему такая запись работает?
 */
{
  let cat = {
    lives: 9,
    jumps: () => {
      this.lives--
    },
  }
  cat.jumps()
}
