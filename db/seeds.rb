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
        first_name: "Doge",
        last_name: "Doggo",
        email: "doge@test.com",
        password: "password1",
        zip_code: 90210
    )
        
    user2 = User.create(
        id: 2,
        first_name: "Ash",
        last_name: "Ketchum",
        email: "pokemon@test.com",
        password: "password1",
        zip_code: 11365
    )
    user3 = User.create(
        id: 3,
        first_name: "Bruce",
        last_name: "Wayne",
        email: "batman@test.com",
        password: "password1",
        zip_code: 10011
    )
    user4 = User.create(
        id: 4,
        first_name: "Clark",
        last_name: "Kent",
        email: "superman@test.com",
        password: "password1",
        zip_code: 10012
    )
    user5 = User.create(
        id: 5,
        first_name: "Peter",
        last_name: "Parker",
        email: "spiderman@test.com",
        password: "password1",
        zip_code: 11375
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
        cost: "$$$$",
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
        author_id: 1,
        business_id: 1 
    )

    review2 = Review.create(
        body: "I enjoyed the program very much. It was well paced and definitely very intensive. They teach more than just the basics and structure the curriculum very well to get you to the point of being an independent learner. I think it's daunting at first to pick up web development without much coding background, but I think the program does a good job at teaching you what to focus on.",
        rating: 4,
        business_name: "App Academy",
        author_id: 2,
        business_id: 1 
    )

    review3 = Review.create(
        body: "The pizza here is pretty good.  Cheaper than the other places.  The coffee is not too bad either.  Before coming here I went to Joe's pizza, but that place was just a tourist trap.  I wholey recommend this place over any other pizza places.",
        rating: 5,
        business_name: "App Academy",
        author_id: 3,
        business_id: 1 
    )

    review4 = Review.create(
        body: "You will likely accomplish more in 12 weeks at App Academy than you have at most levels of academia.  It has truly been a great experience for me. You meet great like-minded people who are always willing to help you. I highly recommend App Academy if you have three months to spare, and are interested in becoming a software developer.",
        rating: 5,
        business_name: "App Academy",
        author_id: 4,
        business_id: 1 
    )

    review5 = Review.create(
        body: "You will have access to tons of material, but expect to do a lot of self learning. This program is not for everybody. It will help if you can pick up material very quickly and want a structured curriculum.",
        rating: 5,
        business_name: "App Academy",
        author_id: 5,
        business_id: 1 
    )

    # file = open("https://gelp-seeds.s3.amazonaws.com/mug_pizza.jpg")
    # business1.photos.attach(io: file, filename: "mug_pizza.jpg")
            
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
        cost: "$$$",
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
    review6 = Review.create(
        body: "I love the sushi",
        rating: 4,
        business_name: "Umi Sushi",
        author_id: 1,
        business_id: 2 
    )

    review7 = Review.create(
        body: "This place uses FAKE CRAB MEAT.  SO CHEAP!!!!",
        rating: 2,
        business_name: "Umi Sushi",
        author_id: 2,
        business_id: 2
    )
    review8 = Review.create(
        body: "Pretty much what you'd expect from a sushi place.  The sushi they make isnt high quality but they still manage to taste good.  Best bang for your buck!!",
        rating: 4,
        business_name: "Umi Sushi",
        author_id: 3,
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
        cost: "$$",
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

    review9 = Review.create(
        body: "Pizza gud",
        rating: 3,
        business_name: "Joe's Pizza",
        author_id: 1,
        business_id: 3 
    )

    review10 = Review.create(
        body: "I LUV PIZZA MORE THAN LIFE ITSELF!",
        rating: 5,
        business_name: "Joe's Pizza",
        author_id: 2,
        business_id: 3
    )
    review11 = Review.create(
        body: "The pizza here is cheap, but good.  Taste better than the one dollar pizza places, but a bit more expensive.  Good bang for your buck.  Good balance of taste and cost.",
        rating: 5,
        business_name: "Joe's Pizza",
        author_id: 3,
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
        cost: "$$$",
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


    review12 = Review.create(
        body: "A man can never have too much fries!",
        rating: 5,
        business_name: "Five Guys",
        author_id: 1,
        business_id: 4 
    )

    review13 = Review.create(
        body: "Call your order in ahead of time, just makes it faster and easier. Place gets busy but the staff is def working hard. Food was great.",
        rating: 5,
        business_name: "Five Guys",
        author_id: 2,
        business_id: 4
    )

    review14 = Review.create(
        body: "Casual go to burger spot when it comes to fast food. In truth this spot has put other burgers to shame at restaurants. The fries are fresh and spicy (Cajun style) the burgers are made to order and the drinks are mixable and refillable if you don't grab and go. ",
        rating: 5,
        business_name: "Five Guys",
        author_id: 3,
        business_id: 4 
    )

    business5 =  Business.create(
        id: 5,
        business_name: "The Burgary",
        city: "New York",
        state: "NY",
        business_zip_code: 10002,
        category_1: "Burgers",
        phone: "(212) 529-6900",
        website: "theburgary.com",
        street_address: "67 Clinton St",
        business_email: "theburgary@test.com",
        cost: "$$",
        lat: 40.719535,
        lng: -73.9850174,
        owner_id: 3
    )
        
    Schedule.create(
        day: "monday",
        open: "12:00 am",
        close: "12:00 pm",
        business_id: 5
    )

    Schedule.create(
        day: "tuesday",
        open: "12:00 am",
        close: "12:00 pm",
        business_id: 5
    )
    Schedule.create(
        day: "wednesday",
        open: "12:00 am",
        close: "12:00 pm",
        business_id: 5
    )
    Schedule.create(
        day: "thursday",
        open: "12:00 am",
        close: "12:00 pm",
        business_id: 5
    )

    Schedule.create(
        day: "friday",
        open: "12:00 am",
        close: "12:00 pm",
        business_id: 5
    )
    Schedule.create(
        day: "saturday",
        open: "12:00 am",
        close: "12:00 pm",
        business_id: 5
    )

    Schedule.create(
        day: "sunday",
        open: "12:00 am",
        close: "12:00 pm",
        business_id: 5
    )

    review15 = Review.create(
        body: "These are some nice BUNS",
        rating: 5,
        business_name: "The Burgary",
        author_id: 1,
        business_id: 5 
    )
    review16 = Review.create(
        body: "The Burgary offers straight-forward classic burgers featuring a proprietary blend of dry aged beef from Pat La Frieda, salads, tater tots, fries and crafty milkshakes. Craft beer and tap are available, as well as an extensive beverage menu that reflects avant-garde food pairings using unique ingredients not regularly seen in cocktails to accompany the incredible high-end burgers being served.",
        rating: 5,
        business_name: "The Burgary",
        author_id: 2,
        business_id: 5 
    )


    business6 =  Business.create(
        id: 6,
        business_name: "Blue Bay Diner",
        city: "Queens",
        state: "NY",
        business_zip_code: 11365,
        category_1: "Diner",
        category_2: "Breakfast",
        phone: "(718) 225-6333",
        website: "bluebaydiner.com",
        street_address: "5850 Francis Lewis Blvd",
        business_email: "bluebaydiner@test.com",
        cost: "$$",
        lat: 40.7439769,
        lng: -73.7784945,
        owner_id: 3
    )
        
    Schedule.create(
        day: "monday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 6
    )

    Schedule.create(
        day: "tuesday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 6
    )
    Schedule.create(
        day: "wednesday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 6
    )
    Schedule.create(
        day: "thursday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 6
    )

    Schedule.create(
        day: "friday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 6
    )
    Schedule.create(
        day: "saturday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 6
    )

    Schedule.create(
        day: "sunday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 6
    )

    review17 = Review.create(
        body: "We had breakfast/lunch after voting. Omelettes and BLT sandwiches were tasty and amply sized.",
        rating: 4,
        business_name: "Blue Bay Diner",
        author_id: 1,
        business_id: 6 
    )
    review18 = Review.create(
        body: "Blue Bay Diner has been around for a while and no doubt this place is more expensive than most of the other places.
However the portions are large,enough to take home for another meal.

Today my friend and I ordered omelettes friend ordered sausage and cheese and I ordered the avocado and cheese
Delicious,plus I ordered well done home fries and I received well done home fries.",
        rating: 5,
        business_name: "Blue Bay Diner",
        author_id: 2,
        business_id: 6 
    )
    review19 = Review.create(
        body: "First time eating at this place with friends. I got the egg blue bay, which it's smoked salmon egg Benedict. When it came to the table, it looked ok. The sauce was really blend. When I cut open the egg, it was just a mess. Extremely watery. Then when I took the first bite, I knew we went to the wrong place. The smoked salmon was so fishy to the point where I think it tasted really horrible. We waited for awhile to get a table and the food took a little longer than we expected. Maybe because they were busy, but if I had to wait so long for the food already, then shouldn't the food be at least in good stander? The food are below average. Will not recommend this place to friends.",
        rating: 2,
        business_name: "Blue Bay Diner",
        author_id: 3,
        business_id: 6 
    )
    review20 = Review.create(
        body: "Average at best.",
        rating: 1,
        business_name: "Blue Bay Diner",
        author_id: 4,
        business_id: 6 
    )

    business7 =  Business.create(
        id: 7,
        business_name: "Golden Diner",
        city: "New York",
        state: "NY",
        business_zip_code: 10002,
        category_1: "Diner",
        category_2: "Breakfast",
        phone: "(917) 472-7800",
        website: "goldendinerny.com",
        street_address: "123 Madison St",
        business_email: "goldendinerny@test.com",
        cost: "$$",
        lat: 40.7124333,
        lng: -73.9962969,
        owner_id: 3
    )
        
    Schedule.create(
        day: "monday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 7
    )

    Schedule.create(
        day: "tuesday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 7
    )
    Schedule.create(
        day: "wednesday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 7
    )
    Schedule.create(
        day: "thursday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 7
    )

    Schedule.create(
        day: "friday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 7
    )
    Schedule.create(
        day: "saturday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 7
    )

    Schedule.create(
        day: "sunday",
        open: "6:00 am",
        close: "12:00 am",
        business_id: 7
    )

    review21 = Review.create(
        body: "I finally got a chance to eat at Golden Diner... it's been bookmarked forever. I'm always looking for a great egg sandwich and I can highly recommend the Chinatown Egg Sando after eating it here.",
        rating: 5,
        business_name: "Golden Diner",
        author_id: 1,
        business_id: 7 
    )
    review22 = Review.create(
        body: "Golden Diner is an Asian fusion diner spot in Two Bridges that has been around for a little while. I don't eat diner food very often, but my friend and I picked this place for a casual dinner one weeknight.",
        rating: 5,
        business_name: "Golden Diner",
        author_id: 2,
        business_id: 7 
    )

    business8 =  Business.create(
        id: 8,
        business_name: "Takumi Japanese Cuisine",
        city: "New York",
        state: "NY",
        business_zip_code: 10002,
        category_1: "Japanese",
        category_2: "Sushi",
        phone: "(347) 309-7741",
        website: "takumi90.com",
        street_address: "114 Eldridge St",
        business_email: "takumi90@test.com",
        cost: "$$$$",
        lat: 40.7181287,
        lng: -73.9939336,
        owner_id: 3
    )
        
    Schedule.create(
        day: "monday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 8
    )

    Schedule.create(
        day: "tuesday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 8
    )
    Schedule.create(
        day: "wednesday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 8
    )
    Schedule.create(
        day: "thursday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 8
    )

    Schedule.create(
        day: "friday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 8
    )
    Schedule.create(
        day: "saturday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 8
    )

    Schedule.create(
        day: "sunday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 8
    )

    review23 = Review.create(
        body: "Placed an order for pickup chicken teriyaki. It was ready on time, delicious and well prepared.",
        rating: 5,
        business_name: "Takumi Japanese Cuisine",
        author_id: 1,
        business_id: 8 
    )
    review24 = Review.create(
        body: "Celebrating my Husbands Birthday just us two safely at home I took a chance and ordered we are so happy I did. Delivery was prompt and food is fresh and delicious. Delivery guys was very friendly. Can't wait until this covid is over would like to visit the restaurant. One of my favorite is Japanese cuisine. ",
        rating: 5,
        business_name: "Takumi Japanese Cuisine",
        author_id: 2,
        business_id: 8 
    )

    business9 =  Business.create(
        id: 9,
        business_name: "Domino's Pizza",
        city: "New York",
        state: "NY",
        business_zip_code: 10011,
        category_1: "Pizza",
        phone: "(212) 243-5700",
        website: "dominos.com",
        street_address: "170 W 23rd St",
        business_email: "dominos@test.com",
        cost: "$$",
        lat: 40.7562968,
        lng: -73.985514,
        owner_id: 3
    )
        
    Schedule.create(
        day: "monday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 9
    )

    Schedule.create(
        day: "tuesday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 9
    )
    Schedule.create(
        day: "wednesday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 9
    )
    Schedule.create(
        day: "thursday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 9
    )

    Schedule.create(
        day: "friday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 9
    )
    Schedule.create(
        day: "saturday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 9
    )

    Schedule.create(
        day: "sunday",
        open: "11:00 am",
        close: "12:00 am",
        business_id: 9
    )

    review25 = Review.create(
        body: "Little taste, not recommend",
        rating: 1,
        business_name: "Domino's Pizza",
        author_id: 1,
        business_id: 9 
    )
    review26 = Review.create(
        body: "Worst pizza ever.  Cant even be considered real pizza.  Eat this if you want to punish your tastebuds",
        rating: 1,
        business_name: "Domino's Pizza",
        author_id: 2,
        business_id: 9 
    )

    business10 =  Business.create(
        id: 10,
        business_name: "La Colombe Coffee Roasters",
        city: "New York",
        state: "NY",
        business_zip_code: 10018,
        category_1: "Coffee",
        phone: "(917) 386-0157",
        website: "lacolombe.com",
        street_address: "1045 6th Ave",
        business_email: "lacolombe@test.com",
        cost: "$$$",
        lat: 40.7537132,
        lng: -73.988546,
        owner_id: 3
    )
        
    Schedule.create(
        day: "monday",
        open: "8:00 am",
        close: "3:00 pm",
        business_id: 10
    )

    Schedule.create(
        day: "monday",
        open: "8:00 am",
        close: "3:00 pm",
        business_id: 10
    )

    Schedule.create(
        day: "tuesday",
        open: "8:00 am",
        close: "3:00 pm",
        business_id: 10
    )

    Schedule.create(
        day: "wednesday",
        open: "8:00 am",
        close: "3:00 pm",
        business_id: 10
    )

    Schedule.create(
        day: "thursday",
        open: "8:00 am",
        close: "3:00 pm",
        business_id: 10
    )

    Schedule.create(
        day: "friday",
        open: "8:00 am",
        close: "3:00 pm",
        business_id: 10
    )

    Schedule.create(
        day: "saturday",
        open: "8:00 am",
        close: "3:00 pm",
        business_id: 10
    )

    Schedule.create(
        day: "sunday",
        open: "8:00 am",
        close: "3:00 pm",
        business_id: 10
    )

    review27 = Review.create(
        body: "good coffee, much recommend",
        rating: 5,
        business_name: "La Colombe Coffee Roasters",
        author_id: 1,
        business_id: 10 
    )
    review28 = Review.create(
        body: "This spot is awesome, well worth the price, very welcoming staff and perfect location. With that said, La Colombe Coffee has to have some of the best coffee I've ever had! Everything I've eaten here is delicious.  Every single employee here is awesome. Go there, if you can.",
        rating: 5,
        business_name: "La Colombe Coffee Roasters",
        author_id: 2,
        business_id: 10
    )
    review29 = Review.create(
        body: "TDepending on your preference of coffee beans, you could give this place a 4 or 5 star rating. I come here often as they are very quick and near my work. Their iced soy latte  is great and I CHALLENGE you to try to not drink it under 10 seconds! ",
        rating: 5,
        business_name: "La Colombe Coffee Roasters",
        author_id: 3,
        business_id: 10
    )
end
