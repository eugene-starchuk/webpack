function createAnalytics () {
    let counter = 0
    let destroyed = true

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            destroyed = true
        },

        getClicks() {
            if( destroyed ) {
                return `Analytics is destroyed! TotalClicks = ${counternp}`
            }

            return counter
        }
    }
}

window.analytics = createAnalytics()