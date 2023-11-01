VANTA.HALO({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x000011,
})

const links = document.querySelectorAll('.card__link')

for (const link of links) {
    link.addEventListener('mouseover', e => {
        link.classList.add('fa-beat-fade')
    })
    link.addEventListener('mouseout', e => {
        link.classList.remove('fa-beat-fade')
    })
}