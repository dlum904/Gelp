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

    Schedule.destroy_all

    Schedule.create(
            monday: true,
            open: "9:00 am",
            close: "6:00 pm",
            business_id: 1
        )

    Schedule.create(
        tuesday: true,
        open: "9:00 am",
        close: "6:00 pm",
        business_id: 1
        )

    Schedule.create(
        wednesday: true,
        open: "9:00 am",
        close: "6:00 pm",
        business_id: 1
    )
    Schedule.create(
        thursday: true,
        open: "9:00 am",
        close: "6:00 pm",
        business_id: 1
    )
    Schedule.create(
        friday: true,
        open: "9:00 am",
        close: "6:00 pm",
        business_id: 1
    )
    Schedule.create(
        saturday: true,
        open: "9:00 am",
        close: "3:00 pm",
        business_id: 1
    )
end
