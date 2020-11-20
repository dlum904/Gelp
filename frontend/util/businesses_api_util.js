

export const fetchAllBusinesses = (data) => {
    return $.ajax({
        method: "GET",
        url: "api/businesses",
        data
    })
}

export const fetchBusiness = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/businesses/${id}`
    })
}