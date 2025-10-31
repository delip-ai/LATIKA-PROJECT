// Script untuk interaksi dengan tombol "Ubah Nama"
document.getElementById('changeNameBtn').addEventListener('click', function() {
    let nameElement = document.getElementById('name');
    let newName = prompt("Masukkan nama baru:", nameElement.textContent);
    if (newName && newName.trim() !== "") {
        nameElement.textContent = newName;
    }
});
