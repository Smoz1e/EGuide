// Функциональность кнопки ФИЛЬТРЫ
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filters-button');
    const filterModal = document.getElementById('filterModal');
    const closeButton = document.querySelector('.close-button');
    
    filterButton.addEventListener('click', function() {
        filterModal.classList.toggle('visible');
    });
    
    closeButton.addEventListener('click', function() {
        filterModal.classList.remove('visible');
    });
    
    // Закрытие модального окна при клике вне его
    document.addEventListener('click', function(event) {
        if (!filterModal.contains(event.target) && 
            event.target !== filterButton && 
            event.target !== closeButton && 
            !closeButton.contains(event.target)) {
            filterModal.classList.remove('visible');
        }
    });
    
    // Функциональность выбора опций фильтра
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            // В рамках одной группы можно выбрать несколько опций
            this.classList.toggle('selected');
        });
    });
}); 