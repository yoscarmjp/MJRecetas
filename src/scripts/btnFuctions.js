const modalRecipes = document.getElementById('modalRecipes');
const openRecipeModal = document.getElementById('openRecipeModal');
const closeRecipeModal = document.getElementById('closeRecipeModal');

openRecipeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modalRecipes.classList.remove("hidden");
});

closeRecipeModal.addEventListener("click", (e) =>{
    e.preventDefault();
    modalRecipes.classList.add("hidden");
})