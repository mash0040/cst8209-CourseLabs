function getUniqueBeanTypes() {
    return Array.from(new Set(counters.map((counter)=> counter.bean)))
}

function sortBeanArray(arr) {
    arr.sort((a,b) => a.name.localeCompare(b.name))
    return arr
}

function filterBeanByType(type) {
    let beans = counters.filter((item) => item.bean === type)
    return beans
}

function beanTotalCount(arr) {
    let total = arr.reduce((acc, value) => {
        acc += value.count
        return acc}, 0)
    return total
}

let beanTypes = getUniqueBeanTypes()

for(bt of beanTypes) {
    beans = filterBeanByType(bt)
    beans = sortBeanArray(beans)

    let totalCount = beanTotalCount(beans)
    // console.log(bt + " " + totalCount)

    // console.log(beans)
}

for( let i = 0; i < beanTypes.length; i++) {
    beans[i] = filterBeanByType(beanTypes[i])
    beans[i] = sortBeanArray(beans[i])

    let beanTitle = document.createElement('h5')
    main.append(beanTitle)
    beanTitle.textContent = beanTypes[i] + " (" + beanTotalCount(beans[i]) + ") "

    let orderedlist = document.createElement('ol')
    orderedlist.classList.add('myOL')
    main.append(orderedlist)

    for(b of beans[i]) {
        let beanInfo = document.createElement('li')
        beanInfo.textContent = b.name + " (" + b.count + ") "
        orderedlist.append(beanInfo)
    }
}



