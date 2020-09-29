# @schedules.each do |schedule|
#     json.set! schedule.id do
#         json.extract! schedule,
#         :business_id,
#         :monday,
#         :tuesday,
#         :wednesday,
#         :thursday,
#         :friday,
#         :saturday,
#         :sunday,
#         :open,
#         :close
#     end
# end

@schedules.each do |schedule|
    json.set! schedule.day do
        json.extract! schedule,
        :business_id,
        :day,
        :open,
        :close
    end
end