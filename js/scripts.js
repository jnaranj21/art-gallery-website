<script>
const el = document.getElementById('hiddenMenu');
el.addEventListener('mouseout', showMenu);
el.addEventListener('mouseover', hideMenu);

function showMenu() {
    el.classList.add('d-xl-none');
}
function hideMenu() {
    el.classList.remove('d-xl-none');
}

</script>