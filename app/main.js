// вариянт 1
const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 1


const dataFetch = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
            
            `
      })
}

dataFetch()

btnNext.onclick = () => {
    count++
    dataFetch()
}
btnPrev.onclick = () => {
    if (count > 1) {
        count--
        dataFetch()
    }
}

// вариянт 2
//
// const block = document.querySelector('.block')
// const btnPrev = document.querySelector('.btn-prev')
// const btnNext = document.querySelector('.btn-next')
// let count = 1
//
// btnNext.onclick = () => {
//     count++
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => response.json())
//         .then(data => {
//             const div = document.createElement('div')
//             div.setAttribute('class', 'card')
//             div.innerHTML = `
//             <h2>${data.title}</h2>
//             <span>${data.id}</span>
//             <h3>${data.completed}</h3>
//         `
//             block.append(div)
//             btnPrev.onclick = () => {
//                 if(count > 1) {
//                     count--
//                 }
//                 fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         const div = document.createElement('div')
//                         div.setAttribute('class', 'card')
//                         div.innerHTML = `
//             <h2>${data.title}</h2>
//             <span>${data.id}</span>
//             <h3>${data.completed}</h3>
//         `
//                         block.append(div)
//
//                     })
//             }
//         })
// }




























fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
}).then((response) => response.json()
).then((data) => {
    data.forEach(item => console.log(item))
})