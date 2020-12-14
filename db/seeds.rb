# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
ActiveRecord::Base.transaction do
    
    User.destroy_all
    Business.destroy_all
    Schedule.destroy_all
    Review.destroy_all
    
    user1 = User.create(
        id: 1,
        first_name: "doge",
        last_name: "doggo",
        email: "doge@test.com",
        password: "password1",
        zip_code: 1234
    )
        
    user2 = User.create(
        id: 2,
        first_name: "Ash",
        last_name: "Ketchum",
        email: "pokemon@test.com",
        password: "password1",
        zip_code: 1234
    )
    user3 = User.create(
        id: 3,
        first_name: "Bruce",
        last_name: "Wayne",
        email: "batman@test.com",
        password: "password1",
        zip_code: 1234
    )
            

    business1 =  Business.create(
        id: 1,
        business_name: "App Academy",
        city: "New York",
        state: "NY",
        business_zip_code: 10011,
        category_1: "Pizza",
        category_2: "Coffee",
        phone: "(415) 935-3408",
        website: "www.appacademy.io",
        street_address: "90 5th Ave",
        business_email: "psecunda@appacademy.io",
        lat: 40.740879,
        lng: -73.99082,
        owner_id: 1
    )
        
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
        day: "sunday",
        open: "9:00 am",
        close: "3:00 pm",
        business_id: 1
    )

    review1 = Review.create(
        body: "This place is AWESOME",
        rating: 5,
        business_name: "App Academy",
        author_id: 2,
        business_id: 1 
    )

    review2 = Review.create(
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
",
        rating: 4,
        business_name: "App Academy",
        author_id: 1,
        business_id: 1 
    )

    file = open("https://gelp-seeds.s3.amazonaws.com/mug_pizza.jpg")
    business1.photos.attach(io: file, filename: "mug_pizza.jpg")
            
    business2 =  Business.create(
        id: 2,
        business_name: "Umi Sushi",
        city: "Fresh Meadows",
        state: "NY",
        business_zip_code: 11366,
        street_address: "177-13 Union Tpke",
        category_1: "Japanese",
        category_2: "Sushi",
        phone: "(718) 969-5668",
        website: "http://umisushifreshmeadows.cafecityguide.website",
        business_email: "umisushi@notanemail.com",
        lat: 40.724780,
        lng: -73.879570,
        owner_id: 2
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
    review3 = Review.create(
        body: "I love the sushi",
        rating: 1,
        business_name: "Umi Sushi",
        author_id: 2,
        business_id: 2 
    )

    review4 = Review.create(
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
",
        rating: 2,
        business_name: "Umi Sushi",
        author_id: 1,
        business_id: 2
    )

    business3 =  Business.create(
    id: 3,
    business_name: "Joe's Pizza",
    city: "New York",
    state: "NY",
    business_zip_code: 10003,
    street_address: "150 E 14th St",
    category_1: "Pizza",
    phone: "(212) 388-9474",
    website: "joespizzanyc.com",
    business_email: "joespizzanyc.com",
    lat: 40.7331781,
    lng: -73.9898288,
    owner_id: 3
    )


    Schedule.create(
        day: "monday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 3
    )

    Schedule.create(
        day: "tuesday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 3
    )
    Schedule.create(
        day: "wednesday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 3
    )
    Schedule.create(
        day: "thursday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 3
    )

    Schedule.create(
        day: "friday",
        open: "11:45 am",
        close: "8:30 pm",
        business_id: 3
    )
    Schedule.create(
        day: "saturday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 3
    )
    Schedule.create(
        day: "sunday",
        open: "1:45 pm",
        close: "8:00 pm",
        business_id: 3
    )

        review5 = Review.create(
        body: "Pizza gud",
        rating: 3,
        business_name: "Joe's Pizza",
        author_id: 2,
        business_id: 3 
    )

    review6 = Review.create(
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
",
        rating: 5,
        business_name: "Joe's Pizza",
        author_id: 1,
        business_id: 3
    )

    business4 =  Business.create(
    id: 4,
    business_name: "Five Guys",
    city: "New York",
    state: "NY",
    business_zip_code: 10019,
    street_address: "45 W 55th St",
    category_1: "Burgers",
    phone: "(212) 459-9600",
    website: "www.fiveguys.com",
    business_email: "five@fiveguys.com",
    lat: 40.7621103,
    lng: -73.9717755,
    owner_id: 3
    )


    Schedule.create(
        day: "monday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 4
    )

    Schedule.create(
        day: "tuesday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 4
    )
    Schedule.create(
        day: "wednesday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 4
    )
    Schedule.create(
        day: "thursday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 4
    )

    Schedule.create(
        day: "friday",
        open: "11:45 am",
        close: "8:30 pm",
        business_id: 4
    )
    Schedule.create(
        day: "saturday",
        open: "11:45 am",
        close: "8:00 pm",
        business_id: 4
    )
    Schedule.create(
        day: "sunday",
        open: "1:45 pm",
        close: "8:00 pm",
        business_id: 4
    )


        review7 = Review.create(
        body: "These are some nice BUNS",
        rating: 5,
        business_name: "Five Guys",
        author_id: 2,
        business_id: 4 
    )

    review8 = Review.create(
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
",
        rating: 5,
        business_name: "Five Guys",
        author_id: 1,
        business_id: 4
    )

end
