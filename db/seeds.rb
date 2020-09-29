# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    
    User.destroy_all

    user1 = User.create(
        id: 1,
        first_name: "doge",
        last_name: "doggo",
        email: "doge@test.com",
        password: "password1",
        zip_code: 1234
    )

    user2 = User.create(
        id: 3,
        first_name: "Ash",
        last_name: "Ketchum",
        email: "pokemon@test.com",
        password: "password1",
        zip_code: 1234
    )

    Business.destroy_all

    business1 =  Business.create(
        id: 1,
        business_name: "App Academy",
        city: "New York",
        state: "NY",
        business_zip_code: 10011,
        category_1: "pizza",
        phone: "(415) 935-3408",
        website: "www.appacademy.io",
        street_address: "90 5th Ave",
        business_email: "psecunda@appacademy.io",
        owner_id: 1
    )

    business2 =  Business.create(
        id: 2,
        business_name: "Umi Sushi",
        city: "Fresh Meadows",
        state: "NY",
        business_zip_code: 11366,
        street_address: "177-13 Union Tpke",
        category_1: "Japanese",
        category_2: "Sushi Bars",
        phone: "(718) 969-5668",
        website: "http://umisushifreshmeadows.cafecityguide.website",
        business_email: "umisushi@notanemail.com",
        owner_id: 3
    )

    Schedule.destroy_all

        Schedule.create(
            day: "monday",
            open: "9:00 am",
            close: "6:00 pm",
            business_id: 1
        )

        Schedule.create(
            day: "tuesday",
            open: "9:00 am",
            close: "6:00 pm",
            business_id: 1
        )
        Schedule.create(
            day: "wednesday",
            open: "9:00 am",
            close: "6:00 pm",
            business_id: 1
        )
        Schedule.create(
            day: "thursday",
            open: "9:00 am",
            close: "6:00 pm",
            business_id: 1
        )

        Schedule.create(
            day: "friday",
            open: "9:00 am",
            close: "6:00 pm",
            business_id: 1
        )
        Schedule.create(
            day: "saturday",
            open: "9:00 am",
            close: "3:00 pm",
            business_id: 1
        )

        Schedule.create(
            day: "monday",
            open: "11:45 am",
            close: "8:00 pm",
            business_id: 2
        )

        Schedule.create(
            day: "tuesday",
            open: "11:45 am",
            close: "8:00 pm",
            business_id: 2
        )
        Schedule.create(
            day: "wednesday",
            open: "11:45 am",
            close: "8:00 pm",
            business_id: 2
        )
        Schedule.create(
            day: "thursday",
            open: "11:45 am",
            close: "8:00 pm",
            business_id: 2
        )

        Schedule.create(
            day: "friday",
            open: "11:45 am",
            close: "8:30 pm",
            business_id: 2
        )
        Schedule.create(
            day: "saturday",
            open: "11:45 am",
            close: "8:00 pm",
            business_id: 2
        )
        Schedule.create(
            day: "sunday",
            open: "1:45 pm",
            close: "8:00 pm",
            business_id: 2
        )
end
