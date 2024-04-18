const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements (arr) {
  const lista = document.querySelector('ul');

  lista.innerHTML = '';

  for(let i = 0; i < arr.length; i++){
    const li = createTaskItem(arr[i])

    lista.appendChild(li);
  }
}

function createTaskItem (task) {
      const listItem = document.createElement('li');
      const span = document.createElement('span');
      const p = document.createElement('p');
      const button = document.createElement('button');
      const div = document.createElement('div');

      listItem.classList.toggle('task__item');
      span.classList.toggle('task-type');
      button.classList.toggle('task__button--remove-task');
      div.classList.toggle('task-info__container');
  
      if(task.type.toUpperCase() == "URGENTE"){
        span.classList.toggle('span-urgent');
      } else if (task.type.toUpperCase() == "IMPORTANTE"){
        span.classList.toggle('span-important');
      } else {
        span.classList.toggle('span-normal');
      }

      p.innerText = task.title;

      listItem.appendChild(div);
      div.appendChild(span);
      div.appendChild(p);
      listItem.appendChild(button);

      return listItem;
    }

    renderElements(tasks);

const btnAddTask = document.querySelector('.form__button--add-task');

btnAddTask.addEventListener('click', function (event) {
  event.preventDefault();
  
  const nivelImportancia = document.querySelector('select');
  const taskName = document.querySelector('.form__input--text');

  const newTask = {
    title: taskName.value,
    type: nivelImportancia.value
  }
    tasks.push(newTask);
    renderElements(tasks);
})