function openModal() {
    let modal = document.querySelector('.modal-container')
    let exit = document.querySelector('.Exit');
    modal.classList.add("active")
    if (modal.classList.contains("active")) {
      exit.onclick = () => {
        modal.classList.remove("active")
      }
    }
    let btn = document.querySelector('#btnSalvar')
    btn.onclick = (e) => {
      let inp = document.querySelector('#m-nome').value
      e.preventDefault()
      let data = {
        name: inp
      }
      fetch('http://localhost:3000/data', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(res => {
        if (res.status === 400) {
          alert('successfull');
          inp.value = ""
        }
      })
    }
  }
  
  
  let tbody = document.querySelector("tbody")
  let div = document.createElement("div")
  fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then((data) => {
      data.forEach(elem => {
        div.innerHTML += `
           <li style="padding: 10px; ">${elem.name}</li>
        `
        tbody.appendChild(div)
      });
  
  
    })