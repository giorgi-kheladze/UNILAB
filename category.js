let http = new XMLHttpRequest();
http.open("get", "dogs.json", true);
http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let dogs = JSON.parse(this.responseText);

        let currentPage = 1;
        const dogsPerPage = 15;

        function renderDogs(page) {
            let dogGrid = document.querySelector('.dogs');
            dogGrid.innerHTML = '';

            const start = (page - 1) * dogsPerPage;
            const end = page * dogsPerPage;
            const dogsToShow = dogs.slice(start, end);

            dogsToShow.forEach((dog, index) => {
                let dogDiv = document.createElement('div');
                dogDiv.className = 'dog';
                dogDiv.innerHTML = `
                    <img src="${dog.image}">
                    <p class="title">${dog.title}</p>
                    <p class="description">${dog.description}</p>
                    <p class="vnd">${dog.vnd}</p>
                `;

                

                dogDiv.addEventListener('click', function() {
                    localStorage.setItem('selectedDog', JSON.stringify(dog));
                    window.location.href = 'dog-detail.html';
                })
                dogGrid.appendChild(dogDiv);
            });
        }

        function showPage(page) {
            currentPage = page;
            renderDogs(page);

            const paginationButtons = document.querySelectorAll('.pagination button');
            paginationButtons.forEach(button => button.classList.remove('active'));
            document.getElementById('page' + page)?.classList.add('active');
        }

        showPage(1);

        const paginationButtons = document.querySelectorAll('.pagination button');
        paginationButtons.forEach((button, index) => {
            button.addEventListener('click', () => showPage(index + 1));
        });
   
    }
}
