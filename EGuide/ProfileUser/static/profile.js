    document.addEventListener('DOMContentLoaded', function() {
    const editButton = document.querySelector('.edit-button');
    const modal = document.getElementById('editModal');
    const closeButton = document.getElementById('closeModal');
    const cancelButton = document.getElementById('cancelModal');
    const photoUpload = document.getElementById('profilePhotoUpload');
    const modalProfilePhoto = document.querySelector('.modal-profile-photo');
    
    editButton.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    photoUpload.addEventListener('change', function(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                modalProfilePhoto.style.backgroundImage = `url('${e.target.result}')`;
                modalProfilePhoto.style.backgroundSize = 'cover';
                modalProfilePhoto.style.backgroundPosition = 'center';
                modalProfilePhoto.textContent = '';
            }
            
            reader.readAsDataURL(event.target.files[0]);
        }
    });
}); 