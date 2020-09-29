export const fetchSchedules = (businessId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}/schedules`,
    })
}